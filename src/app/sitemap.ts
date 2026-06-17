/* Sitemap для поисковиков. Динамический — пуллит posts из Sanity
   и собирает все URL'ы автоматом. Next.js конвертирует в /sitemap.xml. */

import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { absoluteUrl } from "@/lib/site-config";

interface PostSitemapItem {
  slug: string;
  language: "ru" | "en";
  publishedAt: string;
  updatedAt?: string;
}

const POSTS_FOR_SITEMAP = groq`
  *[_type == "post" && defined(coalesce(slug.current, translation->slug.current))] {
    "slug": coalesce(slug.current, translation->slug.current),
    language,
    publishedAt,
    updatedAt
  }
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch<PostSitemapItem[]>(POSTS_FOR_SITEMAP);

  /* Статические страницы (главная + основные разделы + legal, обе локали). */
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/practice"), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/contact"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/blog"), changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/fraud-warning"), changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/privacy"), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/legal"), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms"), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/accessibility"), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/en"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/en/about"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/en/practice"), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/en/contact"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/en/blog"), changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/en/fraud-warning"), changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/en/privacy"), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/en/legal"), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/en/terms"), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/en/accessibility"), changeFrequency: "yearly", priority: 0.3 },
  ];

  /* Динамические — статьи блога. */
  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: absoluteUrl(`${p.language === "en" ? "/en" : ""}/blog/${p.slug}`),
    lastModified: new Date(p.updatedAt || p.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...postPages];
}
