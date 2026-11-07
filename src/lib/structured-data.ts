import { absoluteUrl, siteConfig } from "@/config/site";
import { faqs } from "@/content/landing";

const orgId = absoluteUrl("/#organization");
const businessId = absoluteUrl("/#localbusiness");
const websiteId = absoluteUrl("/#website");
const logoUrl = absoluteUrl("/icon.svg");

/** Organization + LocalBusiness/ProfessionalService + WebSite, as one graph. */
export function siteGraph() {
  const address = {
    "@type": "PostalAddress",
    ...siteConfig.address,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        email: siteConfig.email,
        telephone: siteConfig.phone.e164,
        foundingDate: siteConfig.foundingYear,
        sameAs: siteConfig.socials,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: siteConfig.phone.e164,
            email: siteConfig.email,
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": businessId,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        logo: logoUrl,
        image: absoluteUrl("/opengraph-image"),
        telephone: siteConfig.phone.e164,
        email: siteConfig.email,
        priceRange: siteConfig.priceRange,
        address,
        areaServed: siteConfig.serviceArea.places.map((place) => ({
          "@type": "Place",
          name: place,
        })),
        openingHoursSpecification: siteConfig.hours.schema.map((h) => ({
          "@type": "OpeningHoursSpecification",
          ...h,
        })),
        parentOrganization: { "@id": orgId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Home tech support plans",
          itemListElement: siteConfig.plans.map((plan) => ({
            "@type": "Offer",
            name: plan.name,
            description: plan.description,
            price: plan.price.replace(/[^0-9.]/g, ""),
            priceCurrency: "USD",
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: { "@id": orgId },
        inLanguage: "en-US",
      },
    ],
  };
}

export function faqPage() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
