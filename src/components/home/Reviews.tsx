"use client";

/* Reviews — секция отзывов с 4 карточками и навигацией стрелками.
   Client Component потому что: scroll-by-card логика на стрелках.
   Стили из globals.css: .reviews, .review-card, etc.

   Отзывы захардкожены (по брифу — 5-6 ручных из Google). После Sanity
   подключения можно вынести в CMS, если Jacob захочет. */

import { useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import type { LangProps } from "@/lib/types";

const STRINGS = {
  ru: {
    eyebrow: "Доверие",
    title: "Что говорят наши клиенты",
    prevLabel: "Предыдущий",
    nextLabel: "Следующий",
    starsLabel: "5 из 5",
    googleLink: "Все отзывы на Google →",
    navAriaLabel: "Навигация по отзывам",
    reviews: [
      {
        text: "«С первых дней я почувствовала, что делом занимается настоящий профессионал. Сейчас мой сын на свободе — для нашей семьи это самое большое счастье.»",
        initial: "Н",
        name: "Ната Иванова",
        meta: "Иммиграционный суд · 2026",
      },
      {
        text: "«Сестра быстро получила интервью на гражданство. После одобрения убежища я подал на смену статуса и жду Грин-карту.»",
        initial: "K",
        name: "Kazat Baimatov",
        meta: "Убежище и смена статуса · 2026",
      },
      {
        text: "«Благодаря тщательной подготовке и грамотному подходу к делу мы успешно выиграли суд.»",
        initial: "А",
        name: "Анастасия Пашкова",
        meta: "Выигранный суд · 2026",
      },
      {
        text: "«Я из Казахстана, суд был 8 декабря 2025. Спасибо адвокату Jacob Shidaev! Всем рекомендую.»",
        initial: "S",
        name: "Sayat Kuanysh",
        meta: "Иммиграционный суд · 2025",
      },
    ],
  },
  en: {
    eyebrow: "Trust",
    title: "What clients say",
    prevLabel: "Previous",
    nextLabel: "Next",
    starsLabel: "5 of 5",
    googleLink: "Read all reviews on Google →",
    navAriaLabel: "Navigate reviews",
    reviews: [
      {
        text: '"Got detained in January and thanks to quick action, they scheduled the court fast and got me out on bond at the beginning of March. Thank you!"',
        initial: "K",
        name: "Kristina Musiienko",
        meta: "Bond Hearing · 2026",
      },
      {
        text: '"From our first consultation, Jacob explained every step clearly. My case was handled smoothly and successfully."',
        initial: "M",
        name: "Maxim Maximoff",
        meta: "Immigration Case · 2025",
      },
      {
        text: '"Highly recommend. Professional, attentive to detail, and anticipates questions before they arise."',
        initial: "R",
        name: "Regina Gamadaeva",
        meta: "Immigration Case · 2026",
      },
      {
        text: '"What impressed me most was their attention to detail and dedication. They worked hard to achieve the best outcome."',
        initial: "L",
        name: "Leyla Shakhmilova",
        meta: "Immigration Case · 2026",
      },
    ],
  },
} as const;

export default function Reviews({ lang }: LangProps) {
  const t = STRINGS[lang];
  const gridRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const grid = gridRef.current;
    if (!grid) return;
    const card = grid.querySelector(".review-card");
    if (!card) return;
    const step = card.getBoundingClientRect().width + 16;
    grid.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="reviews-head reveal">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <div className="reviews-nav" aria-label={t.navAriaLabel}>
            <button
              type="button"
              aria-label={t.prevLabel}
              onClick={() => scrollByCard(-1)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label={t.nextLabel}
              onClick={() => scrollByCard(1)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="reviews-grid stagger" ref={gridRef}>
          {t.reviews.map((r) => (
            <article key={r.name} className="review-card">
              <span className="review-stars" aria-label={t.starsLabel}>
                ★ ★ ★ ★ ★
              </span>
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <span className="review-avatar">{r.initial}</span>
                <div>
                  <p className="review-name">{r.name}</p>
                  <p className="review-meta">{r.meta}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reviews-cta">
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener"
          >
            {t.googleLink}
          </a>
        </div>
      </div>
    </section>
  );
}
