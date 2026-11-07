/**
 * Single source of truth for every real-world fact on the site.
 *
 * Anything marked `// PLACEHOLDER` must be replaced before launch. Search this
 * file for "PLACEHOLDER" to find them all. Outcome-level marketing copy lives
 * in `src/content/*`; product specifics that are not yet known live here under
 * `product` so they can be swapped in one place.
 */

export const siteConfig = {
  name: "FamilyIT",
  legalName: "FamilyIT LLC", // PLACEHOLDER: registered legal entity name
  tagline: "Technology care for the people you love",
  description:
    "FamilyIT keeps the people you care for connected, safe and confident with their technology: older parents, family members with disabilities, children, and the residents of care centers. Join the waitlist.",

  /** Canonical origin, no trailing slash. Used for metadataBase, sitemap, JSON-LD. */
  url: "https://www.familyit.example.com", // PLACEHOLDER: real production domain

  /** Shown in the footer and used for mailto links. */
  contactEmail: "hello@familyit.example.com", // PLACEHOLDER: real contact email

  /** Social profiles for JSON-LD sameAs. Empty array is fine. */
  socials: [] as string[], // PLACEHOLDER: e.g. "https://www.linkedin.com/company/familyit"

  /** Twitter / X handle for Twitter card metadata, or null. */
  twitterHandle: null as string | null, // PLACEHOLDER: e.g. "@familyit"

  /** Year the company started, shown in the footer copyright. */
  foundingYear: "2026", // PLACEHOLDER

  /**
   * Product specifics that are not yet decided. Everything here is a
   * PLACEHOLDER and is written so the copy still reads sensibly if left as is.
   */
  product: {
    /** Where we are in the launch, e.g. "Launching spring 2027". Shown near the waitlist form. */
    launchWindow: "Early access opens in 2027", // PLACEHOLDER
    /** Regions where the first wave will be available. */
    initialRegions: "the United States", // PLACEHOLDER
    /** Rough shape of the offer. Kept vague on purpose until pricing is known. */
    pricingNote: "Pricing will be announced to the waitlist first.", // PLACEHOLDER
    /** How the service is delivered. Replace with real channels once known. */
    deliveryNote:
      "Support is planned to be remote first, with in-person options in selected areas.", // PLACEHOLDER
    /** Devices and platforms the first release will cover. */
    devicesNote:
      "We are starting with the phones, tablets and computers families already own.", // PLACEHOLDER
  },

  /**
   * Waitlist storage. Default appends to a local NDJSON file (gitignored).
   * See `src/lib/waitlist/README.md` for wiring a real provider.
   */
  waitlist: {
    /** Shown under the form. */
    privacyNote:
      "We only use your email to tell you about FamilyIT. No spam, and you can leave the list with one click.",
    /** Confirmation copy. */
    successTitle: "You're on the list.",
    successBody:
      "We'll email you when early access opens. If you told us who this is for, we'll make sure the first invitation fits.",
  },

  /** Last meaningful content update, used for sitemap lastModified. */
  lastModified: "2026-11-07",
} as const;

export type SiteConfig = typeof siteConfig;

/** Absolute URL helper built on the canonical origin. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

export const mailHref = `mailto:${siteConfig.contactEmail}`;
