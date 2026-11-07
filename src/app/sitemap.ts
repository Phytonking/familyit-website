import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";
import { solutions } from "@/content/solutions";

const lastModified = new Date(siteConfig.lastModified);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    ...solutions.map((s) => ({
      url: absoluteUrl(`/solutions/${s.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: absoluteUrl("/privacy"), lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms"), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
