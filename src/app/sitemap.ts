import type { MetadataRoute } from "next";
import { absoluteUrl, guides } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      priority: 1,
    },
    {
      url: absoluteUrl("/tools/korea-post-parcel"),
      lastModified: now,
      priority: 0.9,
    },
    ...guides.map((guide) => ({
      url: absoluteUrl(`/guides/${guide.slug}`),
      lastModified: now,
      priority: 0.75,
    })),
  ];
}

