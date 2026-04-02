# Submission Operations

This project stores public website form submissions in the Firestore collection `nia_submissions` when Firebase Admin credentials are configured.

## Supported form types

- `contact`
- `quoteRequest`
- `partnerEnquiry`
- `artistRegistration`

## Production storage rules

- Production should use Firestore as the primary storage layer.
- Local JSON fallback is only available in development.
- If Firebase Admin credentials are missing in production, form submissions fail fast instead of silently writing to disk.

## Notification options

You can enable one or both notification paths:

- `FORM_NOTIFICATION_WEBHOOK_URL`
- `RESEND_API_KEY` with `FORM_NOTIFICATION_EMAIL_TO` and `FORM_NOTIFICATION_FROM`

Both notification paths fire after a submission has been stored successfully.

## Exporting submissions

Run this from the project root:

```bash
npm run export:submissions
```

The script writes both files into `exports/`:

- `nia-submissions-<timestamp>.json`
- `nia-submissions-<timestamp>.csv`

## Operational notes

- For production exports, the same Firebase Admin credentials used by the website are required locally.
- For development exports without Firebase Admin, the script reads `.nia-submissions.json`.
- Keep exported files in a secure location because they may contain personal contact details and project briefs.
