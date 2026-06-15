import type { Metadata, Viewport } from "next";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import FabScrollTop from "@/components/layout/FabScrollTop";
import "../globals.css";

/* Site layout — route group (site).
   Применяется ко всем публичным страницам сайта (главная, /about, /blog,
   /contact, /practice, /legal/* и тп). НЕ применяется к /studio —
   Sanity Studio имеет свою тёмную тему и не должна получать наследование
   глобальных стилей сайта (h2/h3 цвета, body фон и тп).

   html/body и шрифты — в корневом src/app/layout.tsx (общий для всего
   приложения). globals.css импортится только здесь, поэтому не утечёт
   в Studio. */

export const metadata: Metadata = {
  metadataBase: new URL("https://shidaev.com"),
  title: {
    default: "Law Offices of Jacob Shidaev",
    template: "%s — Law Offices of Jacob Shidaev",
  },
  description:
    "Иммиграционный адвокат с судебным подходом к каждому делу. Дела об убежище, иммиграционный суд, федеральные суды. Представляю клиентов по всей стране.",
  /* Open Graph + Twitter — для превью в мессенджерах и соцсетях.
     Per-page metadata переопределяет дефолты. */
  openGraph: {
    type: "website",
    siteName: "Law Offices of Jacob Shidaev",
    title: "Law Offices of Jacob Shidaev",
    description:
      "Иммиграционный адвокат с судебным подходом к каждому делу. Asylum, removal defense, federal courts.",
    images: [
      {
        url: "/photos/shidaev-black-hero.png",
        width: 1200,
        height: 1200,
        alt: "Jacob Shidaev — Immigration Attorney, Los Angeles",
      },
    ],
    locale: "ru_RU",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Law Offices of Jacob Shidaev",
    description:
      "Иммиграционный адвокат с судебным подходом к каждому делу. Asylum, removal defense, federal courts.",
    images: ["/photos/shidaev-black-hero.png"],
  },
  /* SEO базовое */
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
      en: "/en",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <RevealOnScroll />
      {children}
      <FabScrollTop />
    </>
  );
}
