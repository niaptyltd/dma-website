# Dumbe Music Awards Website

Production-ready Next.js website for **Dumbe Music Awards**, built as a premium, content-driven platform that celebrates local talent, honours cultural legacy, and gives the brand a credible public presence for artists, sponsors, media, and the wider community.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Local structured content files in `src/data`
- Local placeholder artwork in `public/dumbe`

## Features

- Premium black, gold, and ivory brand system
- Sticky transparent header that becomes solid on scroll
- Responsive editorial-style layouts across all major pages
- Reusable components for hero sections, ceremony cards, gallery, and CTAs
- Dynamic ceremony detail pages at `/ceremonies/[slug]`
- Filterable gallery with lightbox
- Frontend-only contact form that prepares email or WhatsApp messages without a backend
- SEO metadata, sitemap, robots, manifest, favicon, OG image, and Twitter image
- Structured data for the homepage and ceremony detail pages

## Pages

- `/`
- `/about`
- `/founder`
- `/ceremonies`
- `/ceremonies/2026`
- `/ceremonies/2025`
- `/ceremonies/2024`
- `/ceremonies/2023`
- `/gallery`
- `/vision`
- `/contact`
- `/partners`
- `/media`

## Content Structure

Update site content from these files:

- `src/data/site.ts`
- `src/data/about.ts`
- `src/data/founder.ts`
- `src/data/vision.ts`
- `src/data/ceremonies.ts`
- `src/data/gallery.ts`
- `src/data/sponsors.ts`
- `src/data/media.ts`

Helpful supporting files:

- `src/types/site.ts`
- `lib/content.ts`
- `lib/metadata.ts`
- `lib/format.ts`

## Image Replacements

Current ceremony and gallery visuals are premium placeholder SVG assets stored in:

- `public/dumbe/`

To replace them later:

1. Add the final image file to `public/dumbe/`
2. Update the relevant `src` field in the matching data file
3. Keep the existing filenames only if you want to avoid changing data references

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Deployment

The project is ready for Vercel deployment.

Recommended environment variable:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

If no public site URL is set, the app falls back to `http://localhost:3000`.

## Verification Completed

The current codebase was verified with:

```bash
npm run typecheck
npm run lint
npm run build
```

## Notes

- The contact experience is backend-free for this first version. It prepares an email or WhatsApp message from the form data so the site is usable immediately.
- The codebase is structured to make future additions like nominations, voting, ticketing, sponsor forms, and media publishing straightforward.
