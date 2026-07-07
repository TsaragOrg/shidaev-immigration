/* Hero — первый экран главной.
   Серверный компонент. Calendly CTA вынесен в маленький client component.
   Стили из globals.css.

   Картинки оптимизированы через next/image — отдаются в нужном формате
   и размере автоматически. Hero — fetchpriority="high" чтобы рендерилось
   первым (LCP — Largest Contentful Paint оптимизация). */

import Image from "next/image";
import CalendlyBookingButton from "@/components/booking/CalendlyBookingButton";
import type { LangProps } from "@/lib/types";

const STRINGS = {
  ru: {
    eyebrow: "",
    titleBefore: "Защита в иммиграционных делах, ",
    titleEm: "готовая к суду.",
    lead: "Убежище, защита от депортации и федеральные иски. ",
    leadEm: "Представляем клиентов во всех 50 штатах.",
    cta: "Записаться на консультацию",
    strip: ["Убежище", "Иммиграционный суд", "Федеральные суды", "Помощь задержанным"],
    photoAlt: "Jacob Shidaev — иммиграционный адвокат, Лос-Анджелес",
  },
  en: {
    eyebrow: "",
    titleBefore: "Immigration defense, ",
    titleEm: "built for court.",
    lead: "Asylum, removal defense, and federal litigation. ",
    leadEm: "We represent clients in all 50 states.",
    cta: "Book a consultation",
    strip: ["Asylum", "Immigration Court", "Federal Litigation", "Detained Representation"],
    photoAlt: "Jacob Shidaev — immigration attorney, Los Angeles",
  },
} as const;

export default function Hero({ lang }: LangProps) {
  const t = STRINGS[lang];

  return (
    <section className="hero">
      <div className="hero-bg">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/photos/shidaev-mobile-hero-800.webp 800w, /photos/shidaev-mobile-hero-1200.webp 1200w"
            sizes="100vw"
            type="image/webp"
          />
          <Image
            src="/photos/shidaev-black-hero.png"
            alt={t.photoAlt}
            width={1536}
            height={1024}
            fetchPriority="high"
            sizes="100vw"
          />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
      </div>

      <div className="hero-inner">
        <div className="hero-card">
          {t.eyebrow ? (
            <span className="eyebrow-line">{t.eyebrow}</span>
          ) : (
            <span className="eyebrow-line" aria-hidden="true"></span>
          )}

          <h1>
            {t.titleBefore}
            <em>{t.titleEm}</em>
          </h1>

          <figure className="hero-portrait" aria-hidden="true">
            <Image
              src="/photos/shidaev-black-hero.png"
              alt=""
              width={1203}
              height={1600}
              loading="lazy"
            />
          </figure>

          <p className="hero-card-lead">
            {t.lead}
            <em>{t.leadEm}</em>
          </p>

          <div className="hero-card-actions">
            <CalendlyBookingButton className="btn btn-shimmer">
              {t.cta}
              <span className="arrow">→</span>
            </CalendlyBookingButton>
          </div>

          <div className="hero-card-strip">
            {t.strip.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-label">Explore</span>
        <span className="hero-scroll-line"></span>
      </div>
    </section>
  );
}
