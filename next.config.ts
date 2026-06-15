import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Разрешаем external image hosts.
       Unsplash — для placeholder фоновых картинок (adversarial, journal).
       Sanity CDN — для боевых картинок из CMS после подключения. */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  /* Security headers — глобально для всех роутов.
     CSP (Content-Security-Policy) пока не подключаю — нужно сначала собрать
     whitelist всех внешних источников (Calendly, Sanity CDN, Google Fonts,
     Stripe в будущем). Это второй шаг.

     Сейчас базовый набор:
       - X-Frame-Options: запрет встраивания в iframe (защита от clickjacking)
       - X-Content-Type-Options: запрет MIME-sniffing
       - Referrer-Policy: не утекать query-параметры на сторонние сайты
       - Permissions-Policy: явно отключить camera/microphone/geolocation —
         сайту они не нужны, защита от XSS-эксплойтов
     HSTS уже выставляет Vercel автоматически. */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
