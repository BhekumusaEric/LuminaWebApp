import type { MetadataRoute } from "next";

// Required for `output: "export"` static builds
export const dynamic = "force-static";

/**
 * Static sitemap for search engines.
 * Regenerated on every build. Submit the deployed URL
 * (https://luminalegacy.co.za/sitemap.xml) in Google Search Console.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://luminalegacy.co.za";
  const lastModified = new Date();

  return [
    { url: `${base}/`,              lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about/`,        lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/`,     lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/community/`,    lastModified, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/insights/`,     lastModified, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/testimonials/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact/`,      lastModified, changeFrequency: "yearly",  priority: 0.7 },
  ];
}
