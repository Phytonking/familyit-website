import { absoluteUrl, siteConfig } from "@/config/site";
import type { Solution } from "@/content/solutions";

const orgId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");
const logoUrl = absoluteUrl("/icon.svg");

type Faq = { question: string; answer: string };

/** Organization + WebSite, included on every page. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: { "@type": "ImageObject", url: logoUrl },
        email: siteConfig.contactEmail,
        foundingDate: siteConfig.foundingYear,
        ...(siteConfig.socials.length ? { sameAs: siteConfig.socials } : {}),
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: siteConfig.contactEmail,
            availableLanguage: ["English"],
          },
        ],
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

export function faqPage(faqs: Faq[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** WebPage + Service for a solution page. FAQPage is emitted separately. */
export function solutionGraph(solution: Solution) {
  const pageUrl = absoluteUrl(`/solutions/${solution.slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: solution.title,
        description: solution.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": `${pageUrl}#service` },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `${siteConfig.name}: ${solution.title}`,
        description: solution.description,
        serviceType: "Technology care and support",
        provider: { "@id": orgId },
        areaServed: siteConfig.product.initialRegions,
        audience: {
          "@type": "Audience",
          audienceType: solution.navLabel.replace(/^For /, ""),
        },
        url: pageUrl,
      },
    ],
  };
}
