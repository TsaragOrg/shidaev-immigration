/* Credentials — узкая полоска с 4 quick-facts.
   Серверный компонент. Стили из globals.css: .credentials. */

import Link from "next/link";
import type { LangProps } from "@/lib/types";

const STRINGS = {
  ru: {
    items: [
      { value: "CA", label: "Bar #343616" },
      { value: "3", label: "фед. округа · Калифорния" },
      { value: "50", label: "штатов · EOIR" },
      { value: "AILA", label: "отделение SoCal" },
    ],
    linkText: "Полные допуски и опыт →",
    linkHref: "/about#credentials",
  },
  en: {
    items: [
      { value: "CA", label: "Bar #343616" },
      { value: "3", label: "Federal districts · California" },
      { value: "50", label: "states · EOIR" },
      { value: "AILA", label: "SoCal Chapter" },
    ],
    linkText: "Full admissions and experience →",
    linkHref: "/en/about#credentials",
  },
} as const;

export default function Credentials({ lang }: LangProps) {
  const t = STRINGS[lang];

  return (
    <section className="credentials">
      <div className="container">
        <ul className="credentials-strip">
          {t.items.map((item) => (
            <li key={item.value + item.label}>
              <span className="cred-value">{item.value}</span>
              <span className="cred-label">{item.label}</span>
            </li>
          ))}
        </ul>
        <p className="credentials-link">
          <Link href={t.linkHref}>{t.linkText}</Link>
        </p>
      </div>
    </section>
  );
}
