/* Sitemap для поисковиков. Динамический — пуллит posts из Sanity
   и собирает все URL'ы автоматом. Next.js конвертирует в /sitemap.xml. */

import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const SITE_URL = "https://shidaev.com";

interface PostSitemapItem {
  slug: string;
  language: "ru" | "en";
  publishedAt: string;
  updatedAt?: string;
}

const POSTS_FOR_SITEMAP = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    language,
    publishedAt,
    updatedAt
  }
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch<PostSitemapItem[]>(POSTS_FOR_SITEMAP);

  /* Статические страницы (главная + основные разделы + legal, обе локали). */
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/practice`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/fraud-warning`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/legal`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/accessibility`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/en`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/en/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/en/practice`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/en/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/en/blog`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/en/fraud-warning`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/en/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/en/legal`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/en/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/en/accessibility`, changeFrequency: "yearly", priority: 0.3 },
  ];

  /* Динамические — статьи блога. */
  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}${p.language === "en" ? "/en" : ""}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt || p.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...postPages];
}
