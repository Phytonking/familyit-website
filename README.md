# FamilyIT waitlist site

Pre-launch marketing site and waitlist for FamilyIT, a technology care service
for older relatives, people with disabilities, children and care centers.
Next.js (App Router), TypeScript, Tailwind CSS. Static pages plus one server
action for the waitlist. No CMS, auth or database.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
npm start
```

Waitlist signups are appended to `data/waitlist.ndjson` (gitignored) by
default. See `src/lib/waitlist/README.md` to plug in a real provider.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Problem, solution, benefits, who it's for, how it works, FAQ, waitlist |
| `/solutions/seniors` | Older relatives |
| `/solutions/disabilities` | People with disabilities |
| `/solutions/children` | Children and parents |
| `/solutions/care-centers` | Care centers (B2B) |
| `/privacy`, `/terms` | Minimal legal pages, marked as placeholders |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | Generated |
| `/opengraph-image`, `/solutions/*/opengraph-image` | Generated social images |

Each solution page has its own metadata, canonical, Open Graph image and
JSON-LD (WebPage + Service, FAQPage). The waitlist form on each pre-selects
the matching "who is this for" option.

## Before launch: placeholders

Everything factual lives in **`src/config/site.ts`**; search for `PLACEHOLDER`:

| Key | What it is |
| --- | --- |
| `url` | Production domain (canonical, sitemap, robots, OG, JSON-LD) |
| `legalName`, `foundingYear` | Footer and legal pages |
| `contactEmail` | Footer and privacy/terms |
| `socials`, `twitterHandle` | JSON-LD `sameAs`, Twitter cards |
| `product.launchWindow` | "Early access opens in…" shown by the form and in the FAQ |
| `product.initialRegions` | Launch regions, used in FAQ and Service JSON-LD |
| `product.pricingNote` | Pricing sentence shown by the form and in the FAQ |
| `product.deliveryNote`, `product.devicesNote` | How the service is delivered and what it covers |

Also:

- Privacy and terms pages show a visible "Placeholder" notice from
  `src/components/legal-page.tsx`. Remove it once the text is reviewed.
- Wire a real waitlist provider (`src/lib/waitlist/index.ts`) before deploying
  to a serverless host; the file provider is for local development.

Outcome-level copy (no product claims) lives in `src/content/landing.ts`,
`src/content/solutions.ts` and `src/content/audiences.ts`.

## Design

- Typeface: Atkinson Hyperlegible, designed by the Braille Institute for
  low-vision readers. One family, two weights. Body text is 18px.
- Palette: paper `#fbfaf7`, sage `#e6ede6`, pine `#244b43`, moss `#3e6b5e`,
  berry `#7c3c5c` (the single accent, used for the primary action).
- Mark: three paper-cut circles leaning together (`Mark` in
  `src/components/icons.tsx`, also `src/app/icon.svg`).
- No cards, gradients or decorative icons. Hairline rules separate list items;
  numbers appear only in the genuinely sequential "How it works".

## Scripts

- `scripts/screenshot.mjs <url> <width> <height> <out.png> [y]` captures a page
  through headless Chrome's DevTools protocol (start Chrome with
  `--headless=new --remote-debugging-port=9333` first).
- `scripts/e2e-waitlist.mjs <url> <email> [out.png]` fills and submits the
  waitlist form and exits non-zero unless the success state renders.

## Structure

```
src/app/
  layout.tsx                 font, global metadata, header/footer, Organization + WebSite JSON-LD
  page.tsx                   home
  solutions/<slug>/          page.tsx + opengraph-image.tsx per audience
  actions/waitlist.ts        server action: honeypot, validation, storage
  privacy/, terms/           legal pages
  sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx, icon.svg, apple-icon.tsx
src/components/
  sections/                  hero, problem, solution, benefits, audiences, how-it-works, faq, waitlist-section
  waitlist-form.tsx          client form using useActionState
  solution-page.tsx          shared solution page template
  header.tsx, footer.tsx, ui.tsx, icons.tsx, og-card.tsx, json-ld.tsx, legal-page.tsx
src/config/site.ts           real-world facts and placeholders
src/content/                 copy: landing.ts, solutions.ts, audiences.ts
src/lib/waitlist/            provider interface, validation, file provider
src/lib/structured-data.ts   JSON-LD builders
```
