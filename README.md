# FamilyIT landing page

Marketing site for FamilyIT, a friendly tech-support service for households.
Built with Next.js (App Router), TypeScript and Tailwind CSS. Fully static,
no client-side JavaScript of its own, no CMS or database.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
npm start
```

## Before launch: replace the placeholders

Every real-world fact lives in **`src/config/site.ts`**. Search that file for
`PLACEHOLDER` and replace:

| Key | What it is |
| --- | --- |
| `url` | Production domain. Drives canonical URLs, sitemap, robots, Open Graph and JSON-LD. |
| `legalName` | Registered company name (footer, privacy, terms). |
| `phone.display` / `phone.e164` | Phone number as shown, and in E.164 form for `tel:` links and JSON-LD. |
| `email` | Support email. Also the target of the contact form's `mailto:`. |
| `bookingUrl` | Optional online booking link. `null` sends "Book" buttons to the contact form. |
| `address` | Street address used in the footer and LocalBusiness JSON-LD. |
| `serviceArea` | Summary, list of towns, and remote-support note. |
| `hours.display` / `hours.schema` | Opening hours for copy and JSON-LD. Keep them in sync. |
| `priceRange` | LocalBusiness price band. |
| `foundingYear` | Footer copyright and JSON-LD foundingDate. |
| `socials` | Social profile URLs for JSON-LD `sameAs`. Empty array is fine. |
| `twitterHandle` | For Twitter card metadata, or `null`. |
| `plans[]` | Names, prices and bullets shown in the pricing section. |
| `testimonials[]` | **Sample quotes, not real reviews.** Replace with permissioned quotes and set `isPlaceholder: false`, or set `showTestimonials: false`. |
| `lastModified` | Date used for sitemap `lastmod` and legal page "last updated". |

Also:

- `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` carry a visible
  "Placeholder" notice. Have the text reviewed and remove the notice in
  `src/components/legal-page.tsx`.
- The contact form in `src/components/sections/contact.tsx` posts to a
  `mailto:` link. Swap in a Server Action or form service before launch
  (see the TODO comment there).

Marketing copy that does not depend on real facts (services, steps, trust
points, FAQ) lives in `src/content/landing.ts`.

## Structure

```
src/app/
  layout.tsx           fonts, global metadata, header/footer, Organization + LocalBusiness + WebSite JSON-LD
  page.tsx             landing page sections + FAQPage JSON-LD
  privacy/, terms/     minimal legal pages
  sitemap.ts           /sitemap.xml
  robots.ts            /robots.txt
  manifest.ts          /manifest.webmanifest
  opengraph-image.tsx  1200x630 OG/Twitter image via next/og
  icon.svg             favicon
  apple-icon.tsx       180x180 apple touch icon via next/og
src/components/        header, footer, ui primitives, inline SVG icons, sections/
src/config/site.ts     all real-world facts and placeholders
src/content/landing.ts marketing copy
src/lib/structured-data.ts JSON-LD builders
```
