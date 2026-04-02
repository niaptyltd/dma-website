import { mkdir, writeFile } from "fs/promises";
import path from "path";

import { listSiteSubmissions } from "@/lib/server/site-submissions";

function escapeCsvValue(value: unknown) {
  const formatted = Array.isArray(value) ? value.join(", ") : String(value ?? "");
  return `"${formatted.replace(/"/g, '""')}"`;
}

async function run() {
  const submissions = await listSiteSubmissions();
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const exportDir = path.join(process.cwd(), "exports");

  await mkdir(exportDir, { recursive: true });

  const jsonPath = path.join(exportDir, `nia-submissions-${timestamp}.json`);
  const csvPath = path.join(exportDir, `nia-submissions-${timestamp}.csv`);

  const csvHeader = [
    "id",
    "kind",
    "createdAt",
    "name",
    "email",
    "phone",
    "company",
    "source",
    "payload"
  ];

  const csvRows = submissions.map((submission) =>
    [
      submission.id,
      submission.kind,
      submission.createdAt,
      submission.name,
      submission.email,
      submission.phone,
      submission.company ?? "",
      submission.source,
      JSON.stringify(submission.payload)
    ]
      .map(escapeCsvValue)
      .join(",")
  );

  await Promise.all([
    writeFile(jsonPath, JSON.stringify(submissions, null, 2), "utf8"),
    writeFile(csvPath, [csvHeader.join(","), ...csvRows].join("\n"), "utf8")
  ]);

  console.log(`Exported ${submissions.length} submissions.`);
  console.log(`JSON: ${jsonPath}`);
  console.log(`CSV: ${csvPath}`);
}

run().catch((error) => {
  console.error("Submission export failed.", error);
  process.exit(1);
});
