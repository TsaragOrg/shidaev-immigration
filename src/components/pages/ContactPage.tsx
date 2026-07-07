"use client";

/* ContactPage — страница /contact (обе локали).
   Hero с CTA Calendly, channels (WhatsApp/phone/email), office + map.

   Client Component потому что: Calendly popup использует window. */

import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { calendlyEventUrl, calendlyPopupUrl } from "@/lib/calendly";
import { consultationPriceDisplay } from "@/lib/consultation";
import { siteConfig } from "@/lib/site-config";
import type { LangProps } from "@/lib/types";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const STRINGS = {
  ru: {
    pageTitle: "Связаться ",
    pageTitleEm: "с офисом",
    pageTitleEnd: ".",
    consultation: `Консультация 30 минут — ${consultationPriceDisplay}`,
    bookCta: "Записаться на консультацию",
    channelsLead: "Также можете связаться с нами:",
    waText: "Написать в WhatsApp",
    officeLabel: "Офис",
    hoursLabel: "Часы работы",
    hours: "Пн – Пт · 9:00 – 17:00 PT",
    weekendHours: "Сб – Вс · по записи",
    mapTitle: "Карта офиса Law Offices of Jacob Shidaev",
  },
  en: {
    pageTitle: "Contact ",
    pageTitleEm: "the office",
    pageTitleEnd: ".",
    consultation: `30-minute consultation — ${consultationPriceDisplay}`,
    bookCta: "Book a consultation",
    channelsLead: "You can also reach us:",
    waText: "Message on WhatsApp",
    officeLabel: "Office",
    hoursLabel: "Office hours",
    hours: "Mon – Fri · 9:00 AM – 5:00 PM PT",
    weekendHours: "Sat – Sun · by appointment",
    mapTitle: "Map of Law Offices of Jacob Shidaev",
  },
} as const;

export default function ContactPage({ lang }: LangProps) {
  const t = STRINGS[lang];

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: calendlyPopupUrl,
      });
    } else {
      // Fallback — открываем в новой вкладке если виджет не загрузился
      window.open(calendlyEventUrl, "_blank", "noopener");
    }
  };

  return (
    <>
      {/* Calendly стили и скрипт */}
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <Header lang={lang} />
      <main>
        {/* HERO */}
        <section className="contact-hero">
          <div className="container">
            <div className="contact-hero-inner reveal">
              <h1>
                {t.pageTitle}
                <em>{t.pageTitleEm}</em>
                {t.pageTitleEnd}
              </h1>

              <p className="contact-hero-meta">{t.consultation}</p>

              <div className="contact-hero-buttons">
                <a
                  href={calendlyEventUrl}
                  onClick={openCalendly}
                  target="_blank"
                  rel="noopener"
                  className="contact-hero-btn"
                >
                  {t.bookCta}
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CHANNELS */}
        <section className="contact-channels-section">
          <div className="container">
            <div className="contact-channels-block reveal">
              <p className="contact-channels-lead">{t.channelsLead}</p>
              <div className="contact-channels-list contact-channels-list--simple">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  className="contact-channel-row"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="contact-channel-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.51 0 .2 5.32.2 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.37-1.67a11.83 11.83 0 005.66 1.44h.01c6.53 0 11.84-5.32 11.84-11.86 0-3.17-1.24-6.15-3.48-8.43zM12.04 21.8h-.01a9.84 9.84 0 01-5.02-1.37l-.36-.22-3.71.97.99-3.62-.23-.37a9.83 9.83 0 01-1.51-5.23c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 012.88 6.97c0 5.43-4.42 9.85-9.85 9.85zm5.4-7.37c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.51-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.03 1.01-1.03 2.45 0 1.45 1.06 2.85 1.21 3.05.15.2 2.09 3.19 5.07 4.47.71.31 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
                    </svg>
                  </span>
                  <span className="contact-channel-value">{t.waText}</span>
                  <span className="contact-channel-arrow">→</span>
                </a>

                <a
                  href={siteConfig.contact.phoneHref}
                  className="contact-channel-row"
                >
                  <span className="contact-channel-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8 10a16 16 0 006 6l1.36-1.38a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <span className="contact-channel-value">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                  <span className="contact-channel-arrow">→</span>
                </a>

                <a
                  href={siteConfig.contact.emailHref}
                  className="contact-channel-row"
                >
                  <span className="contact-channel-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="1" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  <span className="contact-channel-value">
                    {siteConfig.contact.email}
                  </span>
                  <span className="contact-channel-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OFFICE + MAP */}
        <section className="contact-office-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-office-info reveal">
                <div className="contact-info-block">
                  <span className="contact-info-label">{t.officeLabel}</span>
                  <address className="contact-info-address">
                    {siteConfig.address.building}
                    <br />
                    {siteConfig.address.streetAddress}
                    <br />
                    {siteConfig.address.cityStateZip}
                  </address>
                </div>

                <div className="contact-info-block">
                  <span className="contact-info-label">{t.hoursLabel}</span>
                  <p className="contact-info-hours">
                    {t.hours}
                    <br />
                    {t.weekendHours}
                  </p>
                </div>
              </div>

              <aside className="contact-map reveal">
                <iframe
                  src={siteConfig.address.mapsEmbedUrl}
                  width="100%"
                  height={320}
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t.mapTitle}
                />
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
