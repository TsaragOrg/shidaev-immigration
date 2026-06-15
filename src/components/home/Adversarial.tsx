/* Adversarial — секция «Это полноценный судебный процесс».
   Тёмная секция с фоновой картинкой суда, цитата + фото зала.
   Серверный компонент. Стили из globals.css: .adversarial, etc. */

import Image from "next/image";
import type { LangProps } from "@/lib/types";

const STRINGS = {
  ru: {
    eyebrow: "Философия процесса",
    quote: "«Это полноценный судебный процесс.»",
    prose:
      "На стороне государства выступает юрист DHS. Поэтому к каждому делу мы подходим как к судебной защите: готовим доказательства, работаем с показаниями свидетелей и экспертов, заранее выстраиваем стратегию представления дела в суде.",
  },
  en: {
    eyebrow: "Philosophy of practice",
    quote: '"It\'s a full trial."',
    prose:
      "The government is represented by DHS counsel. We approach every case as a courtroom defense: prepare the evidence, work with witness and expert testimony, and build the strategy for presenting the case in court in advance.",
  },
} as const;

export default function Adversarial({ lang }: LangProps) {
  const t = STRINGS[lang];

  return (
    <section className="adversarial">
      <div className="adversarial-bg" aria-hidden="true">
        {/* Unsplash фон. Allowed host прописан в next.config.ts */}
        <Image
          src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1920&q=80"
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
        />
      </div>

      <div className="container">
        <div className="adversarial-grid">
          <div className="adversarial-text reveal">
            <span className="eyebrow">{t.eyebrow}</span>
            <blockquote className="adversarial-quote">{t.quote}</blockquote>
            <div className="adversarial-rule"></div>
            <div className="adversarial-prose">
              <p>{t.prose}</p>
            </div>
          </div>

          <figure className="adversarial-photo reveal" aria-hidden="true">
            <div className="adversarial-photo-frame">
              <Image
                src="/photos/zal-suda.png"
                alt=""
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
