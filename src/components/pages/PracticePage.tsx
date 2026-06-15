/* PracticePage — страница /practice (обе локали).
   4 direction areas + intro + final CTA. Структура одинаковая,
   контент в STRINGS — легко поддерживать. */

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTopOnMount from "@/components/layout/ScrollToTopOnMount";
import type { LangProps } from "@/lib/types";

const STRINGS = {
  ru: {
    eyebrow: "",
    titleParts: ["Четыре направления практики."],
    intro:
      "От заявления об убежище в USCIS до экстренного обращения в федеральный окружной суд.",
    tocLabel: "Навигация по практикам",
    toc: [
      { num: "01", label: "Дела об убежище", href: "#asylum" },
      { num: "02", label: "Федеральные суды", href: "#federal" },
      { num: "03", label: "Защита от депортации", href: "#removal" },
      { num: "04", label: "Помощь задержанным", href: "#detained" },
    ],
    areas: [
      {
        id: "asylum",
        num: "01",
        flag: null,
        dark: false,
        title: "Дела об убежище",
        subtitle: "Asylum — affirmative & defensive",
        lead:
          "Защита людей, которые не могут вернуться в страну происхождения из-за угрозы преследования по политическим, религиозным, этническим, национальным или социальным основаниям. Мы ведём заявительные дела в USCIS и защитные — в иммиграционном суде EOIR.",
        col1Title: "Когда обращаются",
        col1: [
          "Есть угроза преследования в стране происхождения и невозможно вернуться",
          "Подача в течение первого года в США (one-year filing deadline) — есть исключения для изменившихся обстоятельств",
          "Уже подана форма I-589 — нужна подготовка к интервью в Asylum Office",
          "Отказ в USCIS и направление дела в иммиграционный суд (defensive asylum)",
        ],
        col2Title: "Что мы делаем",
        col2: [
          "Оценка оснований и стратегия защиты на старте",
          "Подготовка письменного аффидавита заявителя",
          "Country conditions report — материалы о ситуации в стране",
          "Подготовка свидетелей и экспертов (медицинских, страновых)",
          "Представительство на интервью в Asylum Office или на слушании в суде",
          "Подача на смену статуса после одобрения убежища (I-485)",
        ],
        col1Terms: false,
        col2Terms: false,
        bottom: null,
        quote: {
          text:
            "«После одобрения политического убежища подал с ними на смену статуса и жду грин-карту. Сестра быстро получила интервью на гражданство — на каждом шагу помогали.»",
          author: "Kazat Baimatov",
          meta: "Убежище и смена статуса · 2026",
        },
      },
      {
        id: "federal",
        num: "02",
        flag: "Особое направление",
        dark: true,
        title: "Федеральные суды",
        subtitle: "Federal court litigation",
        lead:
          "Прямое обращение в федеральный окружной суд, когда административный путь исчерпан или государство нарушает срок и процедуру. Это отдельное направление практики, которое мы ведём напрямую.",
        col1Title: "Когда обращаются",
        col1: [
          "USCIS не принимает решение по делу годами — задержка без объяснения",
          "Клиент задержан без оснований или решение об освобождении затягивается",
          "Готовится незаконная депортация или отказ во въезде — нужно остановить срочно",
          "Решение BIA нужно оспорить в Circuit Court of Appeals",
        ],
        col2Title: "Инструменты",
        col2Terms: true,
        col2: [
          { term: "Habeas Corpus", def: "освобождение из-под стражи через федеральный суд" },
          { term: "Mandamus", def: "понуждение USCIS или DHS к действию" },
          { term: "Temporary Restraining Order", def: "экстренный запрет на исполнение действий государства" },
          { term: "Petition for Review", def: "оспаривание решений BIA в Circuit Court" },
        ],
        col1Terms: false,
        bottom: {
          title: "Что мы делаем",
          items: [
            "Анализ возможности перевода дела в федеральный суд — не для всех ситуаций",
            "Подготовка federal complaint и сопроводительных ходатайств",
            "Представительство в US District Court — Центральный, Восточный и Северный округа Калифорнии",
            "Координация с административным делом, которое идёт параллельно в USCIS или EOIR",
          ],
        },
        quote: null,
      },
      {
        id: "removal",
        num: "03",
        flag: null,
        dark: false,
        title: "Защита от депортации",
        subtitle: "Removal defense in immigration court",
        lead:
          "Представительство в иммиграционном суде EOIR против обвинений Department of Homeland Security. Это состязательный процесс: на стороне государства выступает прокурор DHS, идут перекрёстные допросы, ходатайства и работа с доказательствами.",
        col1Title: "Когда обращаются",
        col1: [
          "Получено Notice to Appear (NTA) — начало процедуры депортации",
          "Назначено Master Calendar Hearing — установочное слушание",
          "Готовится Individual Hearing — основное слушание по существу",
          "Получено решение об отказе — нужна апелляция в BIA",
        ],
        col2Title: "Что мы готовим",
        col2Terms: true,
        col2: [
          { term: "Cancellation of Removal", def: "отмена депортации для держателей грин-карты и без неё" },
          { term: "Withholding of Removal", def: "приостановление депортации по 8 USC § 1231(b)(3)" },
          { term: "Convention Against Torture", def: "защита по конвенции против пыток" },
          { term: "Motions to Reopen / Reconsider / Terminate", def: "ходатайства о пересмотре или прекращении дела" },
          { term: "Appeals to BIA", def: "апелляции в Board of Immigration Appeals" },
        ],
        col1Terms: false,
        bottom: null,
        quote: {
          text:
            "«Хочу искренне поблагодарить адвоката и всю его команду за отличную работу и поддержку на протяжении всего процесса. Благодаря тщательной подготовке и грамотному подходу к делу, мы успешно выиграли суд.»",
          author: "Анастасия Пашкова",
          meta: "Выигранный суд · 2026",
        },
      },
      {
        id: "detained",
        num: "04",
        flag: null,
        dark: false,
        title: "Помощь задержанным",
        subtitle: "Detained representation",
        lead:
          "Время в задержании ICE работает против клиента. Чем быстрее подключается адвокат, тем выше шанс выйти на свободу до основного слушания и подготовиться к делу не из-за решётки.",
        col1Title: "Когда обращаются",
        col1: [
          "Близкий человек задержан ICE — подключить адвоката в первые 72 часа",
          "Назначено bond hearing — слушание о залоге",
          "Отказ в parole — нужна апелляция или повторное ходатайство",
          "Перевод в другой detention center — нужна координация дела",
        ],
        col2Title: "Что мы делаем",
        col2: [
          "Связь с задержанным в течение 24 часов после обращения семьи",
          "Подготовка слушания о залоге — доказательства семейных связей, отсутствия угрозы, готовности к явке в суд",
          "Ходатайства о parole — для тех, кому не положен залог",
          "Представительство в местах задержания по всей стране",
          "Координация с семьёй на свободе — что собрать, кого пригласить свидетелем",
        ],
        col1Terms: false,
        col2Terms: false,
        bottom: null,
        quote: {
          text:
            "«Хочу выразить огромную благодарность Джейкобу за помощь в деле моего сына. С первых дней я почувствовала, что делом занимается настоящий профессионал. Сейчас мой сын на свободе, и для нашей семьи это самое большое счастье.»",
          author: "Ната Иванова",
          meta: "Иммиграционный суд · 2026",
        },
      },
    ],
    finalEyebrow: "Консультация",
    finalTitle: "Записаться на первичную консультацию",
    finalText:
      "30 минут · онлайн или в офисе в Sherman Oaks. На консультации обсуждаем ситуацию, документы, стратегию и сроки.",
    finalCta: "Записаться",
    finalContactHref: "/contact",
    finalWhatsApp: "Написать в WhatsApp",
  },
  en: {
    eyebrow: "",
    titleParts: ["Four practice areas."],
    intro:
      "From an asylum filing at USCIS to an emergency petition in federal district court.",
    tocLabel: "Practice areas",
    toc: [
      { num: "01", label: "Asylum", href: "#asylum" },
      { num: "02", label: "Federal Courts", href: "#federal" },
      { num: "03", label: "Removal Defense", href: "#removal" },
      { num: "04", label: "Detained Representation", href: "#detained" },
    ],
    areas: [
      {
        id: "asylum",
        num: "01",
        flag: null,
        dark: false,
        title: "Asylum",
        subtitle: "Affirmative & defensive cases",
        lead:
          "Representation of people who cannot return to their country of origin due to persecution on political, religious, ethnic, national, or social grounds. We handle affirmative cases at USCIS and defensive cases in immigration court.",
        col1Title: "When clients reach out",
        col1: [
          "There is persecution risk in the country of origin and returning is not possible",
          "Filing within the first year in the United States (one-year filing deadline) — exceptions exist for changed circumstances",
          "Form I-589 already filed — preparation for the Asylum Office interview",
          "USCIS denied the case and referred it to immigration court (defensive asylum)",
        ],
        col2Title: "What we do",
        col2: [
          "Evaluation of grounds and defense strategy at intake",
          "Preparation of the applicant's written affidavit",
          "Country conditions evidence and reports",
          "Preparation of witnesses and experts (medical, country-condition)",
          "Representation at the Asylum Office interview or in immigration court",
          "Adjustment of status after asylum approval (I-485)",
        ],
        col1Terms: false,
        col2Terms: false,
        bottom: null,
        quote: {
          text:
            '"From our first consultation, Jacob demonstrated a deep understanding of immigration law and took the time to explain every step in a way that made me feel informed and supported. Thanks to his guidance and expertise, my case was handled smoothly and successfully."',
          author: "Maxim Maximoff",
          meta: "Immigration Case · 2025",
        },
      },
      {
        id: "federal",
        num: "02",
        flag: "Distinct practice",
        dark: true,
        title: "Federal Courts",
        subtitle: "Federal court litigation",
        lead:
          "Direct litigation in federal district court when the administrative path is exhausted, or the government has breached procedure or timing. This is a distinct line of practice we handle directly.",
        col1Title: "When clients reach out",
        col1: [
          "USCIS has not adjudicated a case for years — unexplained delay",
          "Client is detained without lawful basis or release is being stalled",
          "An unlawful removal or denial of entry is imminent — needs an emergency stop",
          "BIA decision needs to be challenged in a Circuit Court of Appeals",
        ],
        col2Title: "Tools",
        col2Terms: true,
        col2: [
          { term: "Habeas Corpus", def: "release from custody through federal court" },
          { term: "Mandamus", def: "compelling action by USCIS or DHS" },
          { term: "Temporary Restraining Order", def: "emergency stop on government action" },
          { term: "Petition for Review", def: "challenging BIA decisions in Circuit Court" },
        ],
        col1Terms: false,
        bottom: {
          title: "What we do",
          items: [
            "Assessment of whether a case can move to federal court — not every situation qualifies",
            "Drafting the federal complaint and supporting motions",
            "Representation in U.S. District Court — Central, Eastern, and Northern Districts of California",
            "Coordination with the parallel administrative case in USCIS or EOIR",
          ],
        },
        quote: null,
      },
      {
        id: "removal",
        num: "03",
        flag: null,
        dark: false,
        title: "Removal Defense",
        subtitle: "Defense in immigration court",
        lead:
          "Representation in EOIR immigration court against Department of Homeland Security charges. This is an adversarial process — DHS counsel is on the other side, with cross-examination, motion practice, and a full evidentiary record.",
        col1Title: "When clients reach out",
        col1: [
          "A Notice to Appear (NTA) has been issued — removal proceedings have started",
          "Master Calendar Hearing is set — the initial scheduling hearing",
          "Individual Hearing is set — the merits hearing",
          "A denial has been issued — appeal to BIA is needed",
        ],
        col2Title: "What we prepare",
        col2Terms: true,
        col2: [
          { term: "Cancellation of Removal", def: "for LPRs and non-LPRs" },
          { term: "Withholding of Removal", def: "under 8 USC § 1231(b)(3)" },
          { term: "Convention Against Torture", def: "CAT-based protection" },
          { term: "Motions to Reopen / Reconsider / Terminate", def: "" },
          { term: "Appeals to BIA", def: "Board of Immigration Appeals" },
        ],
        col1Terms: false,
        bottom: null,
        quote: {
          text:
            '"Highly recommend this attorney. He is very professional, attentive to details, and truly cares about his clients. He always responds to requests quickly and often anticipates questions about the case before they even arise."',
          author: "Regina Gamadaeva",
          meta: "Immigration Case · 2026",
        },
      },
      {
        id: "detained",
        num: "04",
        flag: null,
        dark: false,
        title: "Detained Representation",
        subtitle: "ICE detention & bond",
        lead:
          "Time in ICE detention works against the client. The earlier an attorney is engaged, the higher the chance of release before the merits hearing — and of preparing the case outside detention.",
        col1Title: "When families reach out",
        col1: [
          "A family member has been detained by ICE — counsel needed within the first 72 hours",
          "A bond hearing is set",
          "Parole has been denied — appeal or renewed request needed",
          "Transfer between detention centers — case coordination needed",
        ],
        col2Title: "What we do",
        col2: [
          "Contact with the detained person within 24 hours of family engagement",
          "Bond hearing preparation — evidence of family ties, absence of danger, and reliability to appear in court",
          "Parole requests — for those ineligible for bond",
          "Representation in detention centers nationwide",
          "Coordination with the family outside — what to gather, who can serve as a witness",
        ],
        col1Terms: false,
        col2Terms: false,
        bottom: null,
        quote: {
          text:
            '"Got detained in January and thanks to quick action, they scheduled the court fast and got me out on bond at the beginning of March. Thank you!"',
          author: "Kristina Musiienko",
          meta: "Bond Hearing · March 2026",
        },
      },
    ],
    finalEyebrow: "Consultation",
    finalTitle: "Book your initial consultation",
    finalText:
      "30 minutes · online or at the Sherman Oaks office. We review the situation, documents, strategy, and timeline.",
    finalCta: "Book a consultation",
    finalContactHref: "/en/contact",
    finalWhatsApp: "Message on WhatsApp",
  },
} as const;

/* Type-guards для col2 — он может быть либо string[] либо {term,def}[]. */
function isTerm(item: unknown): item is { term: string; def: string } {
  return typeof item === "object" && item !== null && "term" in item;
}

export default function PracticePage({ lang }: LangProps) {
  const t = STRINGS[lang];

  return (
    <>
      <ScrollToTopOnMount />
      <Header lang={lang} />
      <main>
        {/* INTRO */}
        <section className="practice-page-intro" style={{ paddingTop: "clamp(48px, 12vw, 120px)" }}>
          <div className="container">
            <div className="practice-intro-grid reveal">
              {t.eyebrow && <span className="eyebrow">{t.eyebrow}</span>}
              <h1>
                {t.titleParts.map((part, i) => {
                  // Чередуем em-выделения: 1, 3, 5 (нечётные индексы) — em
                  if (i % 2 === 1) {
                    return <em key={i}>{part}</em>;
                  }
                  return <span key={i}>{part}</span>;
                })}
              </h1>
              <p className="practice-intro-lead">{t.intro}</p>
              <nav className="practice-toc" aria-label={t.tocLabel}>
                {t.toc.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.num} — {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* 4 AREAS */}
        {t.areas.map((area) => (
          <section
            key={area.id}
            className={`practice-area${area.dark ? " practice-area-dark" : ""}`}
            id={area.id}
          >
            <div className="container">
              <div className="area-head reveal">
                <span className="area-num">{area.num}</span>
                {area.flag && <span className="area-flag">{area.flag}</span>}
                <h2>{area.title}</h2>
                <p className="area-en">{area.subtitle}</p>
                <p className="area-lead">{area.lead}</p>
              </div>

              <div className="area-grid stagger">
                <div className="area-col">
                  <h4>{area.col1Title}</h4>
                  <ul className="area-list">
                    {area.col1.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="area-col">
                  <h4>{area.col2Title}</h4>
                  <ul
                    className={`area-list${area.col2Terms ? " area-list-terms" : ""}`}
                  >
                    {area.col2.map((item, i) => {
                      if (isTerm(item)) {
                        return (
                          <li key={item.term}>
                            <strong>{item.term}</strong>
                            {item.def && ` — ${item.def}`}
                          </li>
                        );
                      }
                      return <li key={i}>{item as string}</li>;
                    })}
                  </ul>
                </div>
              </div>

              {area.bottom && (
                <div className="area-bottom reveal">
                  <h4>{area.bottom.title}</h4>
                  <ul className="area-list">
                    {area.bottom.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Цитаты клиентов убраны из practice — концентрируются в
                  одном месте (главная Reviews блок). Practice работает
                  как чисто информационная страница «что мы делаем». */}
            </div>
          </section>
        ))}

        {/* FINAL CTA */}
        <section className="practice-final">
          <div className="container">
            <div className="practice-final-card reveal">
              <span className="eyebrow">{t.finalEyebrow}</span>
              <h2>{t.finalTitle}</h2>
              <p>{t.finalText}</p>
              <div className="practice-final-actions">
                <Link href={t.finalContactHref} className="btn btn-shimmer">
                  {t.finalCta}
                  <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
