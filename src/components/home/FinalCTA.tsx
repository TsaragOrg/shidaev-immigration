/* FinalCTA — заключительная секция с призывом к консультации.
   Серверный компонент. Стили из globals.css: .final-cta, etc. */

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import type { LangProps } from "@/lib/types";

const STRINGS = {
  ru: {
    title: "Обсудим ваше дело",
    lead: "Консультация 30 минут. В офисе в Sherman Oaks или удалённо по всей стране.",
    cta: "Записаться на консультацию",
    contactHref: "/contact",
    urgentLabel: "Срочный вопрос",
  },
  en: {
    title: "Let's discuss your case.",
    lead:
      "30-minute consultation. In our Sherman Oaks office or remotely, nationwide.",
    cta: "Request a consultation",
    contactHref: "/en/contact",
    urgentLabel: "Urgent matter",
  },
} as const;

/* Маленькие линейные иконки — встроены в строку слева от текста,
   currentColor (белый), 16px. Не золотые рамки — никакого шума. */
const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8 10a16 16 0 006 6l1.36-1.38a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export default function FinalCTA({ lang }: LangProps) {
  const t = STRINGS[lang];

  return (
    <section className="final-cta" id="contact">
      <div className="container">
        <div className="final-cta-center reveal">
          <h2>{t.title}</h2>
          <p className="final-lead">{t.lead}</p>

          <div className="final-cta-actions">
            <Link href={t.contactHref} className="final-cta-btn">
              {t.cta}
              <span className="arrow">→</span>
            </Link>

            <div className="final-urgent">
              <span className="final-urgent-label">{t.urgentLabel}</span>
              <div className="final-urgent-contacts">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="final-urgent-link"
                >
                  <PhoneIcon />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
                <span className="final-urgent-sep" aria-hidden>
                  ·
                </span>
                <a
                  href={siteConfig.contact.emailHref}
                  className="final-urgent-link"
                >
                  <EmailIcon />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
