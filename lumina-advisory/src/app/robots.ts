import type { MetadataRoute } from "next";

// Required for `output: "export"` static builds
export const dynamic = "force-static";

/**
 * robots.txt — tells crawlers what they can index and where the sitemap is.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/"],
    },
    sitemap: "https://luminalegacy.co.za/sitemap.xml",
    host: "https://luminalegacy.co.za",
  };
}
