import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

import { FieldValue } from "firebase-admin/firestore";

import { getFirebaseAdminDb } from "@/firebase/admin";
import { isFirebaseAdminConfigured } from "@/firebase/config";
import type { FormKind } from "@/lib/site-schemas";

const storePath = path.join(process.cwd(), ".nia-submissions.json");
export const submissionCollectionName = "nia_submissions";
const resendApiUrl = "https://api.resend.com/emails";

export interface SiteSubmissionRecord {
  id: string;
  kind: FormKind;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  payload: Record<string, unknown>;
  source: "website";
}

function canUseLocalSubmissionFallback() {
  return process.env.NODE_ENV === "development";
}

function createId(kind: FormKind) {
  return `${kind}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function ensureStoreFile() {
  try {
    await readFile(storePath, "utf8");
  } catch {
    await mkdir(path.dirname(storePath), { recursive: true });
    await writeFile(storePath, "[]", "utf8");
  }
}

async function readLocalSubmissions() {
  await ensureStoreFile();

  try {
    const raw = await readFile(storePath, "utf8");
    return JSON.parse(raw) as SiteSubmissionRecord[];
  } catch {
    await writeFile(storePath, "[]", "utf8");
    return [];
  }
}

async function writeLocalSubmissions(items: SiteSubmissionRecord[]) {
  await writeFile(storePath, JSON.stringify(items, null, 2), "utf8");
}

async function sendWebhookNotification(record: SiteSubmissionRecord) {
  const webhookUrl = process.env.FORM_NOTIFICATION_WEBHOOK_URL;

  if (!webhookUrl) {
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(record),
      cache: "no-store"
    });

    if (!response.ok) {
      console.error("Form notification webhook returned a non-success response.", response.status);
    }
  } catch (error) {
    console.error("Form notification webhook failed.", error);
  }
}

function buildEmailNotificationMarkup(record: SiteSubmissionRecord) {
  const payloadRows = Object.entries(record.payload)
    .map(([key, value]) => {
      const formattedValue = Array.isArray(value) ? value.join(", ") : String(value ?? "");

      return `
        <tr>
          <td style="padding:10px;border:1px solid #e5e5e5;font-weight:600;background:#f9f9f9;">
            ${escapeHtml(key)}
          </td>
          <td style="padding:10px;border:1px solid #e5e5e5;">
            ${escapeHtml(formattedValue)}
          </td>
        </tr>
      `;
    })
    .join("");

  return `
    <div style="font-family:Arial, Helvetica, sans-serif;background:#f5f5f5;padding:24px;">
      <div style="max-width:720px;margin:auto;background:#ffffff;border-radius:10px;padding:32px;border:1px solid #e5e5e5;">
        <h2 style="margin:0 0 10px 0;font-size:22px;color:#111;">New Website Enquiry</h2>

        <p style="margin:0 0 20px 0;color:#555;">
          A new enquiry has been submitted via the Nia Events website.
        </p>

        <hr style="margin:20px 0;border:none;border-top:1px solid #e5e5e5;" />

        <h3 style="margin-bottom:10px;color:#111;">Client Information</h3>
        <p style="margin:4px 0;"><strong>Name:</strong> ${escapeHtml(record.name)}</p>
        <p style="margin:4px 0;"><strong>Email:</strong> ${escapeHtml(record.email)}</p>
        <p style="margin:4px 0;"><strong>Phone:</strong> ${escapeHtml(record.phone)}</p>
        <p style="margin:4px 0;"><strong>Company:</strong> ${escapeHtml(record.company ?? "-")}</p>

        <hr style="margin:20px 0;border:none;border-top:1px solid #e5e5e5;" />

        <h3 style="margin-bottom:10px;color:#111;">Enquiry Details</h3>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${payloadRows}
        </table>

        <hr style="margin:20px 0;border:none;border-top:1px solid #e5e5e5;" />

        <p style="margin:0;color:#333;">
          Please review and follow up with the client at your earliest convenience.
        </p>

        <p style="margin-top:20px;font-size:12px;color:#999;">
          Nia Events & Entertainment — Website Submission System
        </p>
      </div>
    </div>
  `;
}

function buildAutoReplyMarkup(record: SiteSubmissionRecord) {
  return `
    <div style="font-family:Arial, Helvetica, sans-serif;background:#f5f5f5;padding:24px;">
      <div style="max-width:680px;margin:auto;background:#ffffff;border-radius:10px;padding:32px;border:1px solid #e5e5e5;">
        <h2 style="margin:0 0 16px 0;font-size:22px;color:#111;">We’ve received your enquiry</h2>

        <p style="margin:0 0 14px 0;color:#333;">Dear ${escapeHtml(record.name || "Client")},</p>

        <p style="margin:0 0 14px 0;color:#333;">
          Thank you for contacting Nia Events & Entertainment.
        </p>

        <p style="margin:0 0 14px 0;color:#333;">
          We have received your enquiry and our team is currently reviewing your request.
        </p>

        <p style="margin:0 0 14px 0;color:#333;">
          We will be in touch with you as soon as possible.
        </p>

        <p style="margin:0 0 14px 0;color:#333;">
          If your enquiry is urgent, you may contact us directly on WhatsApp or by phone at 061 466 7011.
        </p>

        <p style="margin:24px 0 0 0;color:#333;">
          Kind regards,<br />
          <strong>Nia Events & Entertainment</strong><br />
          Building Opportunities for Local Talent
        </p>
      </div>
    </div>
  `;
}

async function sendEmailNotification(record: SiteSubmissionRecord) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmailTo = process.env.FORM_NOTIFICATION_EMAIL_TO;
  const notificationEmailFrom = process.env.FORM_NOTIFICATION_FROM;

  if (!resendApiKey || !notificationEmailTo || !notificationEmailFrom) {
    return;
  }

  try {
    const response = await fetch(resendApiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: notificationEmailFrom,
        to: [notificationEmailTo],
        subject: `New Website Enquiry - ${record.name}`,
        html: buildEmailNotificationMarkup(record)
      }),
      cache: "no-store"
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("Form notification email returned a non-success response.", response.status, body);
    }
  } catch (error) {
    console.error("Form notification email failed.", error);
  }
}

async function sendAutoReply(record: SiteSubmissionRecord) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmailFrom = process.env.FORM_NOTIFICATION_FROM;

  if (!resendApiKey || !notificationEmailFrom || !record.email) {
    return;
  }

  try {
    const response = await fetch(resendApiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: notificationEmailFrom,
        to: [record.email],
        subject: "We’ve received your enquiry — Nia Events",
        html: buildAutoReplyMarkup(record)
      }),
      cache: "no-store"
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("Auto reply email returned a non-success response.", response.status, body);
    }
  } catch (error) {
    console.error("Auto reply failed.", error);
  }
}

async function triggerNotification(record: SiteSubmissionRecord) {
  await Promise.all([
    sendWebhookNotification(record),
    sendEmailNotification(record),
    sendAutoReply(record)
  ]);
}

async function saveLocalSubmission(record: SiteSubmissionRecord) {
  const existing = await readLocalSubmissions();
  existing.unshift(record);
  await writeLocalSubmissions(existing);
}

export async function saveSiteSubmission(
  kind: FormKind,
  payload: Record<string, unknown>
): Promise<SiteSubmissionRecord> {
  const timestamp = new Date().toISOString();
  const record: SiteSubmissionRecord = {
    id: createId(kind),
    kind,
    createdAt: timestamp,
    updatedAt: timestamp,
    name: String(payload.name ?? ""),
    email: String(payload.email ?? ""),
    phone: String(payload.phone ?? ""),
    company: typeof payload.company === "string" ? payload.company : undefined,
    payload,
    source: "website"
  };

  if (isFirebaseAdminConfigured) {
    await getFirebaseAdminDb()
      .collection(submissionCollectionName)
      .doc(record.id)
      .set({
        ...record,
        firestoreCreatedAt: FieldValue.serverTimestamp(),
        firestoreUpdatedAt: FieldValue.serverTimestamp()
      });
  } else if (canUseLocalSubmissionFallback()) {
    await saveLocalSubmission(record);
  } else {
    throw new Error(
      "Production submissions require Firebase Admin credentials. Local fallback is only enabled during development."
    );
  }

  await triggerNotification(record);
  return record;
}

export async function listSiteSubmissions() {
  if (isFirebaseAdminConfigured) {
    const snapshot = await getFirebaseAdminDb()
      .collection(submissionCollectionName)
      .orderBy("firestoreCreatedAt", "desc")
      .get();

    return snapshot.docs
      .map((doc) => doc.data() as SiteSubmissionRecord)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  if (canUseLocalSubmissionFallback()) {
    return readLocalSubmissions();
  }

  throw new Error(
    "Production submission export requires Firebase Admin credentials. Local fallback is only enabled during development."
  );
}