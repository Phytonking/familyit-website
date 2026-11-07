/**
 * Single source of truth for every business fact on the site.
 *
 * Anything marked `// PLACEHOLDER` must be replaced with real information
 * before launch. Search this file for "PLACEHOLDER" to find them all.
 * Marketing copy that does not depend on real-world facts lives in
 * `src/content/*`.
 */

export const siteConfig = {
  name: "FamilyIT",
  legalName: "FamilyIT LLC", // PLACEHOLDER: registered legal entity name
  tagline: "Friendly tech help for the whole household",
  description:
    "FamilyIT provides patient, plain-English tech support for families: home Wi-Fi, device setup, parental controls, backups, smart homes and help for older relatives. Remote or in-home visits.",

  /** Canonical origin, no trailing slash. Used for metadataBase, sitemap, JSON-LD. */
  url: "https://www.familyit.example.com", // PLACEHOLDER: real production domain

  /** Primary contact channels. */
  phone: {
    display: "(555) 010-0199", // PLACEHOLDER: real phone number as shown to visitors
    e164: "+15550100199", // PLACEHOLDER: same number in E.164 format for tel: links and JSON-LD
  },
  email: "hello@familyit.example.com", // PLACEHOLDER: real support email

  /** Optional online booking link (Calendly, Cal.com, etc.). Set to null to hide. */
  bookingUrl: null as string | null, // PLACEHOLDER: booking link, or leave null

  /** Physical address. Used in the footer and LocalBusiness JSON-LD. */
  address: {
    streetAddress: "123 Example Street", // PLACEHOLDER
    addressLocality: "Springfield", // PLACEHOLDER: city
    addressRegion: "WA", // PLACEHOLDER: state / region code
    postalCode: "00000", // PLACEHOLDER
    addressCountry: "US", // PLACEHOLDER: ISO 3166-1 alpha-2
  },

  /** Where in-home visits are offered. Shown in copy and JSON-LD areaServed. */
  serviceArea: {
    summary: "Springfield and surrounding neighborhoods", // PLACEHOLDER
    places: ["Springfield", "Shelbyville", "Capital City"], // PLACEHOLDER: towns / neighborhoods
    remoteNote: "Remote support is available anywhere in the US.", // PLACEHOLDER
  },

  /** Opening hours in schema.org format (Mo, Tu, We, Th, Fr, Sa, Su). */
  hours: {
    display: "Mon to Sat, 8am to 7pm", // PLACEHOLDER
    schema: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
    ], // PLACEHOLDER: keep in sync with `display`
  },

  /** Rough price band for LocalBusiness JSON-LD ("$", "$$", "$$$", "$$$$" or e.g. "$49-$149"). */
  priceRange: "$$", // PLACEHOLDER

  /** Year the company started, shown in footer and JSON-LD foundingDate. */
  foundingYear: "2024", // PLACEHOLDER

  /** Social profiles for JSON-LD sameAs. Remove entries you do not have. */
  socials: [
    // PLACEHOLDER: real profile URLs, or empty array
    "https://www.facebook.com/familyit.example",
    "https://www.instagram.com/familyit.example",
  ],

  /** Twitter / X handle for Twitter card metadata, or null. */
  twitterHandle: null as string | null, // PLACEHOLDER: e.g. "@familyit"

  /** Plans shown in the pricing section. */
  plans: [
    {
      name: "Quick Fix",
      price: "$79", // PLACEHOLDER
      unit: "per session",
      description: "A single remote session to solve one problem, start to finish.",
      features: [
        "Up to 60 minutes of remote help",
        "Screen sharing on Mac, Windows, iPhone or Android",
        "Plain-English summary emailed afterwards",
        "No fix, no fee",
      ],
      cta: "Book a Quick Fix",
      highlighted: false,
    },
    {
      name: "Home Visit",
      price: "$149", // PLACEHOLDER
      unit: "first hour, then $60 per half hour", // PLACEHOLDER
      description: "We come to you for Wi-Fi, new devices, smart-home setup or anything hands-on.",
      features: [
        "In-home visit within our service area",
        "Wi-Fi survey and router tune-up included",
        "Set up as many devices as time allows",
        "30-day follow-up by phone or email",
      ],
      cta: "Schedule a visit",
      highlighted: true,
    },
    {
      name: "Family Care Plan",
      price: "$39", // PLACEHOLDER
      unit: "per month, cancel anytime",
      description: "Ongoing peace of mind for busy households and older relatives.",
      features: [
        "Unlimited quick questions by phone or chat",
        "Two remote sessions every month",
        "Backup and update health checks",
        "Priority scheduling and member rates on visits",
      ],
      cta: "Start a care plan",
      highlighted: false,
    },
  ],

  /**
   * PLACEHOLDER TESTIMONIALS.
   * These are illustrative examples, NOT real customer reviews. Replace with
   * genuine, permissioned quotes before launch, or set `showTestimonials`
   * to false to hide the section entirely. Never publish invented reviews.
   */
  showTestimonials: true,
  testimonials: [
    {
      // While `isPlaceholder` is true the card shows a visible "Sample" badge.
      isPlaceholder: true,
      quote:
        "Sample quote showing how a real review will look here. Replace with a genuine, permissioned customer quote before launch.",
      name: "Customer name", // PLACEHOLDER
      detail: "Parent of two, Springfield", // PLACEHOLDER: neighborhood or situation
    },
    {
      isPlaceholder: true,
      quote:
        "Sample quote showing how a real review will look here. Replace with a genuine, permissioned customer quote before launch.",
      name: "Customer name", // PLACEHOLDER
      detail: "Booked for her dad, Shelbyville", // PLACEHOLDER
    },
    {
      isPlaceholder: true,
      quote:
        "Sample quote showing how a real review will look here. Replace with a genuine, permissioned customer quote before launch.",
      name: "Customer name", // PLACEHOLDER
      detail: "Family Care Plan member", // PLACEHOLDER
    },
  ],

  /** Last meaningful content update, used for sitemap lastModified. */
  lastModified: "2026-11-07",
} as const;

export type SiteConfig = typeof siteConfig;

/** Absolute URL helper built on the canonical origin. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

export const telHref = `tel:${siteConfig.phone.e164}`;
export const mailHref = `mailto:${siteConfig.email}`;
