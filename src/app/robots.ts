import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const isVercelPreview = process.env.VERCEL === "1" && process.env.VERCEL_ENV !== "production";

export default function robots(): MetadataRoute.Robots {
  if (isVercelPreview) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
