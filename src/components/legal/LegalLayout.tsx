/* LegalLayout — общий wrapper для юридических страниц
   (/privacy, /legal, /terms, /accessibility).

   Принимает уже локализованный контент. Сам ничего не переводит —
   локализация живёт в src/lib/legal/*.ts. */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { LangProps } from "@/lib/types";

export interface LegalSection {
  /** Заголовок раздела. Может быть пустым — тогда выводится только текст. */
  title?: string;
  /** Абзацы раздела. Простая строка = <p>. Массив = маркированный список. */
  body: Array<string | { list: string[] }>;
}

export interface LegalContent {
  eyebrow: string;
  title: string;
  /** Например: "Updated: June 1, 2026" / "Обновлено: 1 июня 2026". */
  lastUpdated: string;
  /** Лид-абзац над разделами. */
  intro: string;
  sections: LegalSection[];
}

interface LegalLayoutProps extends LangProps {
  content: LegalContent;
}

export default function LegalLayout({ lang, content }: LegalLayoutProps) {
  return (
    <>
      <Header lang={lang} />
      <main className="legal">
        <div className="legal-container">
          <header className="legal-header">
            <p className="legal-eyebrow">{content.eyebrow}</p>
            <h1 className="legal-title">{content.title}</h1>
            <p className="legal-meta">{content.lastUpdated}</p>
          </header>

          <p className="legal-intro">{content.intro}</p>

          {content.sections.map((section, i) => (
            <section className="legal-section" key={i}>
              {section.title && <h2>{section.title}</h2>}
              {section.body.map((block, j) =>
                typeof block === "string" ? (
                  <p
                    key={j}
                    dangerouslySetInnerHTML={{ __html: block }}
                  />
                ) : (
                  <ul key={j}>
                    {block.list.map((item, k) => (
                      <li
                        key={k}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                )
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
