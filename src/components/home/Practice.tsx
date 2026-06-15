/* Practice — секция «Какие дела мы представляем в суде».
   Серверный компонент. Стили из globals.css: .practice, .practice-split,
   .practice-mini-card, .card-featured, etc.

   4 карточки: Asylum / Federal Courts / Removal Defense / Detained.
   Card #2 (Federal) — featured (тёмная на мобиле).
   Иконки SVG inline — те же что в HTML версии. */

import Link from "next/link";
import type { LangProps } from "@/lib/types";

const STRINGS = {
  ru: {
    eyebrow: "Практика",
    title: "Какие дела мы представляем в суде.",
    intro: "От заявления на убежище до федерального суда.",
    allPractice: "Все направления",
    allPracticeSub: "Полный перечень практик",
    practiceHref: "/practice",
    cards: [
      {
        href: "/practice#asylum",
        title: "Дела об убежище",
        text: "Защита права остаться в США из-за угрозы преследования.",
        extra: " Заявления в USCIS и слушания в иммиграционном суде.",
        tag: "Защита от преследования",
        number: "01",
        featured: false,
      },
      {
        href: "/practice#federal",
        title: "Федеральные суды",
        text: "Habeas corpus при незаконном задержании ICE, mandamus при затягивании USCIS,",
        extra: " обжалование решений в District Court",
        tag: "Федеральная литигация",
        number: "02",
        featured: true,
      },
      {
        href: "/practice#removal",
        title: "Защита от депортации",
        text: "Представительство в иммиграционном суде против обвинений DHS",
        extra: " — отмена депортации, защита по CAT, апелляции в BIA",
        tag: "Против обвинений DHS",
        number: "03",
        featured: false,
      },
      {
        href: "/practice#detained",
        title: "Помощь задержанным",
        text: "Освобождение из задержания ICE — слушания о залоге и ходатайства о parole",
        extra: ", представительство в местах задержания",
        tag: "Залог и parole",
        number: "04",
        featured: false,
      },
    ],
  },
  en: {
    eyebrow: "Practice",
    title: "Cases we take to court.",
    intro: "From asylum filings to federal court.",
    allPractice: "All practice areas",
    allPracticeSub: "Full list of practices",
    practiceHref: "/en/practice",
    cards: [
      {
        href: "/en/practice#asylum",
        title: "Asylum",
        text: "Defending the right to remain in the U.S. when persecution is real.",
        extra: " USCIS filings and immigration court hearings.",
        tag: "Protection from persecution",
        number: "01",
        featured: false,
      },
      {
        href: "/en/practice#federal",
        title: "Federal Courts",
        text: "Habeas corpus when ICE detention is unlawful, mandamus when USCIS stalls,",
        extra: " appeals from USCIS decisions in District Court",
        tag: "Federal litigation",
        number: "02",
        featured: true,
      },
      {
        href: "/en/practice#removal",
        title: "Removal Defense",
        text: "Representation in immigration court against DHS charges",
        extra: " — cancellation of removal, CAT protection, BIA appeals",
        tag: "Against DHS in court",
        number: "03",
        featured: false,
      },
      {
        href: "/en/practice#detained",
        title: "Detained Representation",
        text: "Release from ICE detention — bond hearings, parole",
        extra: ", representation inside detention centers",
        tag: "Bond and parole",
        number: "04",
        featured: false,
      },
    ],
  },
} as const;

/* Иконки практик. Lucide-стиль, inline SVG — те же что в HTML версии. */
const ICONS = [
  // 01 Asylum — shield with check
  <svg
    key="asylum"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
  // 02 Federal Courts — courthouse columns
  <svg
    key="federal"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" x2="21" y1="22" y2="22" />
    <line x1="6" x2="6" y1="18" y2="11" />
    <line x1="10" x2="10" y1="18" y2="11" />
    <line x1="14" x2="14" y1="18" y2="11" />
    <line x1="18" x2="18" y1="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </svg>,
  // 03 Removal Defense — gavel
  <svg
    key="removal"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
    <path d="m16 16 6-6" />
    <path d="m8 8 6-6" />
    <path d="m9 7 8 8" />
    <path d="m21 11-8-8" />
  </svg>,
  // 04 Detained — key
  <svg
    key="detained"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
    <path d="m21 2-9.6 9.6" />
    <circle cx="7.5" cy="15.5" r="5.5" />
  </svg>,
];

/* Иконка кнопки "Все направления" — burger lines */
const AllPracticeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

export default function Practice({ lang }: LangProps) {
  const t = STRINGS[lang];

  return (
    <section className="practice" id="practice">
      <div className="container">
        <div className="practice-split">
          <div className="practice-intro reveal">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2>{t.title}</h2>
            <p className="practice-intro-text">{t.intro}</p>
            <div className="practice-cta practice-cta--desktop">
              <Link href={t.practiceHref} className="btn-secondary">
                {t.allPractice}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="practice-cards stagger">
            {t.cards.map((card, i) => (
              <Link
                key={card.href}
                href={card.href}
                className={`practice-mini-card${card.featured ? " card-featured" : ""}`}
              >
                <span className="mini-icon" aria-hidden="true">
                  {ICONS[i]}
                </span>
                <div className="mini-text">
                  <h3>{card.title}</h3>
                  <p>
                    {card.text}
                    <span className="extra">{card.extra}</span>
                    {/* Точка/знак препинания зашит в text/extra по образцу HTML */}
                  </p>
                  <span className="mini-tag">{card.tag}</span>
                </div>
                <span className="mini-number" aria-hidden="true">
                  {card.number}
                </span>
              </Link>
            ))}
          </div>

          <div className="practice-cta practice-cta--mobile">
            <Link href={t.practiceHref} className="btn-allpractice">
              <span className="btn-allpractice-icon" aria-hidden="true">
                <AllPracticeIcon />
              </span>
              <span className="btn-allpractice-text">
                <span className="btn-allpractice-label">{t.allPractice}</span>
                <span className="btn-allpractice-sub">{t.allPracticeSub}</span>
              </span>
              <span className="btn-allpractice-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
