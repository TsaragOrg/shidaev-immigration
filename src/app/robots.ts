/* Robots.txt — указания поисковым роботам.
   Открываем весь сайт, скрываем Sanity Studio (нет смысла индексировать). */

import type { MetadataRoute } from "next";

const SITE_URL = "https://shidaev.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/api"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
