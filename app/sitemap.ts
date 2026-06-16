import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { works } from "@/content/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/opere`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/frammenti`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/giuspe`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const publishedWorks = works
    .filter((work) => work.status === "published")
    .map((work) => ({
      url: `${siteUrl}/opere/${work.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...staticRoutes, ...publishedWorks];
}
