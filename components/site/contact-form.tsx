"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactDetails } from "@/src/data/site";

function encodeBody(payload: Record<string, string>) {
  return encodeURIComponent(
    [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone or WhatsApp: ${payload.phone}`,
      `Enquiry Type: ${payload.enquiryType}`,
      `Preferred Channel: ${payload.channel}`,
      "",
      "Message:",
      payload.message
    ].join("\n")
  );
}

export function ContactForm() {
  const [feedback, setFeedback] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

    const subject = encodeURIComponent(`Dumbe Music Awards Enquiry: ${payload.enquiryType}`);
    const body = encodeBody(payload);

    if (payload.channel === "WhatsApp") {
      window.open(`${contactDetails.whatsappLink}?text=${body}`, "_blank", "noopener,noreferrer");
      setFeedback("Your WhatsApp message draft is ready to send.");
    } else {
      window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
      setFeedback("Your email draft is ready to send.");
    }

    form.reset();
  }

  return (
    <form className="luxury-card space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
          Contact Form
        </p>
        <p className="text-sm leading-7 text-brand-muted">
          This frontend-first form prepares a message through email or WhatsApp, making the site usable now and easy to connect to a future form backend later.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-brand-ink">
          Full Name
          <Input name="name" placeholder="Your name" required />
        </label>
        <label className="space-y-2 text-sm text-brand-ink">
          Email Address
          <Input name="email" placeholder="you@example.com" required type="email" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-brand-ink">
          Phone or WhatsApp
          <Input name="phone" placeholder="07..." required />
        </label>
        <label className="space-y-2 text-sm text-brand-ink">
          Enquiry Type
          <Select defaultValue="" name="enquiryType" required>
            <option disabled value="">
              Select an option
            </option>
            <option>General Enquiry</option>
            <option>Partnership or Sponsorship</option>
            <option>Artist Participation</option>
            <option>Media Request</option>
            <option>Upcoming Ceremony</option>
          </Select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-brand-ink">
          Send Via
          <Select defaultValue="Email" name="channel" required>
            <option>Email</option>
            <option>WhatsApp</option>
          </Select>
        </label>
        <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-brand-muted">
          {contactDetails.responseTime}
        </div>
      </div>

      <label className="space-y-2 text-sm text-brand-ink">
        Message
        <Textarea name="message" placeholder="Tell us about your enquiry, partnership interest, or ceremony question." required />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit">Prepare Message</Button>
        {feedback ? <p className="text-sm text-brand-muted">{feedback}</p> : null}
      </div>
    </form>
  );
}
