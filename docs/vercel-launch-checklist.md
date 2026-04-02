# Vercel Launch Checklist

Use this checklist when deploying the standalone Nia website from:

`C:\Users\CeehleM\Desktop\C-hle\NIA\nia-events-site`

## 1. Create the Vercel project

1. Create a new project in Vercel.
2. Import the repository or upload the code that contains `nia-events-site`.
3. Set the **Root Directory** to `nia-events-site`.
4. Let Vercel detect **Next.js** automatically.

## 2. Add production environment variables

Required:

- `NEXT_PUBLIC_SITE_URL`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

Optional:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `FORM_NOTIFICATION_WEBHOOK_URL`
- `FORM_NOTIFICATION_EMAIL_TO`
- `FORM_NOTIFICATION_FROM`
- `RESEND_API_KEY`

## 3. Exact env value format

### `NEXT_PUBLIC_SITE_URL`

Use the final public domain, including `https://`.

Example:

```env
NEXT_PUBLIC_SITE_URL=https://www.niaevents.co.za
```

### `FIREBASE_PROJECT_ID`

Use the Firebase project id, not the project display name.

Example:

```env
FIREBASE_PROJECT_ID=nia-events-live
```

### `FIREBASE_CLIENT_EMAIL`

Use the service account client email from Firebase or Google Cloud.

Example:

```env
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxx@nia-events-live.iam.gserviceaccount.com
```

### `FIREBASE_PRIVATE_KEY`

In Vercel, paste the private key as **one line** with literal `\n` sequences.

Correct format:

```env
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nABC123...\n-----END PRIVATE KEY-----\n
```

Do not paste it as multiple physical lines in the Vercel input.

### `FORM_NOTIFICATION_FROM`

If you enable Resend email notifications, use a verified sender identity.

Example:

```env
FORM_NOTIFICATION_FROM=Nia Events <website@niaevents.co.za>
```

## 4. Firebase checks before deploy

1. Firestore is enabled in **Native mode**
2. Service account is created
3. Service account has Firestore access
4. Collection name is ready:
   - `nia_submissions`

## 5. Deploy

1. Save the Vercel env vars
2. Trigger a production deployment
3. Open the live domain

## 6. Immediate smoke test after deploy

Check:

- `/`
- `/about`
- `/services`
- `/projects`
- `/events`
- `/artist-development`
- `/partners`
- `/contact`
- `/quote-request`
- `/blog`
- `/privacy-policy`
- `/terms`

Then submit:

- one contact form
- one quote request
- one partner enquiry
- one artist registration

Confirm:

- each request returns a success message
- Firestore receives each submission
- webhook fires if configured
- Resend email arrives if configured

## 7. Final launch checks

- favicon appears in the browser tab
- social preview shows the branded OG image
- `robots.txt` loads
- `sitemap.xml` loads
- WhatsApp button opens correctly
- map embed loads on the contact page
- no development domain remains in metadata

## 8. If something fails

- confirm `NEXT_PUBLIC_SITE_URL` is the production domain
- confirm the Firebase Admin env vars are present in Vercel Production
- re-check the `FIREBASE_PRIVATE_KEY` formatting
- redeploy after any env change
