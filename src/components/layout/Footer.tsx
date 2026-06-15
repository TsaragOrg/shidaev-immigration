/* Footer — общий для всех страниц.
   Серверный компонент. Стили из globals.css.

   Bilingual: получает lang prop. Соц.сети, телефон, адрес — общие
   (один офис, один Jacob); метки и колонки локализованы. */

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import type { LangProps } from "@/lib/types";

const STRINGS = {
  ru: {
    brand: "Jacob Shidaev",
    blurb:
      "Иммиграционный адвокат с судебным подходом к каждому делу. Дела об убежище, иммиграционный суд, федеральные суды. Представляем клиентов во всех 50 штатах.",
    socialLabel: "Социальные сети",
    practiceTitle: "Практика",
    practice: [
      { label: "Защита убежища", href: "/practice#asylum" },
      { label: "Защита от депортации", href: "/practice#removal" },
      { label: "Помощь задержанным", href: "/practice#detained" },
      { label: "Федеральные суды", href: "/practice#federal" },
    ],
    officeTitle: "Офис",
    officeHours: "Пн–Пт · 9:00–17:00 PT",
    officeWeekend: "Сб–Вс · по записи",
    legalTitle: "Правовая информация",
    legal: [
      { label: "Осторожно: мошенники", href: "/fraud-warning" },
      { label: "Политика конфиденциальности", href: "/privacy" },
      { label: "Правовое уведомление", href: "/legal" },
      { label: "Условия использования", href: "/terms" },
      { label: "Доступность", href: "/accessibility" },
    ],
    copyright:
      "© 2026 Law Offices of Jacob Shidaev · Все права защищены · Реклама юридических услуг",
    disclaimer:
      "Сайт носит информационный характер и не является юридической консультацией.",
    creditLabel: "Дизайн и разработка",
  },
  en: {
    brand: "Jacob Shidaev",
    blurb:
      "Trial-ready immigration defense. Asylum, removal defense, federal litigation. Representing clients nationwide.",
    socialLabel: "Social media",
    practiceTitle: "Practice",
    practice: [
      { label: "Asylum", href: "/en/practice#asylum" },
      { label: "Removal Defense", href: "/en/practice#removal" },
      { label: "Detained Representation", href: "/en/practice#detained" },
      { label: "Federal Courts", href: "/en/practice#federal" },
    ],
    officeTitle: "Office",
    officeHours: "Mon–Fri · 9:00 AM – 5:00 PM PT",
    officeWeekend: "Sat–Sun · by appointment",
    legalTitle: "Legal",
    legal: [
      { label: "Beware of scams", href: "/en/fraud-warning" },
      { label: "Privacy Policy", href: "/en/privacy" },
      { label: "Legal Notice", href: "/en/legal" },
      { label: "Terms of Use", href: "/en/terms" },
      { label: "Accessibility", href: "/en/accessibility" },
    ],
    copyright:
      "© 2026 Law Offices of Jacob Shidaev · All rights reserved · Attorney Advertising",
    disclaimer:
      "This site is for informational purposes only and does not constitute legal advice.",
    creditLabel: "Design & development",
  },
} as const;

export default function Footer({ lang }: LangProps) {
  const t = STRINGS[lang];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="footer-brand">{t.brand}</p>
            <p className="footer-blurb">{t.blurb}</p>
            <ul className="footer-social" aria-label={t.socialLabel}>
              {siteConfig.socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>{t.practiceTitle}</h5>
            <ul>
              {t.practice.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>{t.officeTitle}</h5>
            <p className="footer-address">
              {siteConfig.address.building}
              <br />
              {siteConfig.address.streetAddress}
              <br />
              {siteConfig.address.cityStateZip}
              <br />
              <br />
              {t.officeHours}
              <br />
              {t.officeWeekend}
            </p>
          </div>

          <div className="footer-col">
            <h5>{t.legalTitle}</h5>
            <ul>
              {t.legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          {/* Sanity Studio админка доступна по прямому URL /studio.
              Раньше был скрытый © admin link — убран по запросу. */}
          <span>{t.copyright}</span>
          <span>{t.disclaimer}</span>
          <span className="footer-credit">
            {t.creditLabel} ·{" "}
            <a
              href="https://www.doukhaeva.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              doukhaeva.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
