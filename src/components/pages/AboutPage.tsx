/* AboutPage — страница /about (обе локали).
   Story-нарратив asylum + credentials (допуски, специализация, языки).
   Header/Footer общие. Стили из globals.css — без изменений. */

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { LangProps } from "@/lib/types";

const STRINGS = {
  ru: {
    eyebrow: "История и квалификация",
    title: "Я знаю иммиграционный процесс ",
    titleEm: "с обеих сторон",
    titleEnd: ".",
    quickfactsLabel: "Ключевые допуски",
    quickfacts: [
      { value: "CA", label: "Bar\n#343616" },
      { value: "3", label: "фед\nокруга" },
      { value: "50", label: "штатов\nEOIR" },
      { value: "AILA", label: "SoCal\nchapter" },
    ],
    prose: [
      "В 2000 году мы с отцом получили политическое убежище в США. Подростком я оформлял для семьи документы на постоянный статус и гражданство — иммиграционное право стало моим делом раньше юридической школы.",
      "Этот опыт остаётся со мной. За каждым делом стоят люди, для которых решение имеет вес.",
      "До открытия собственной практики я работал в коммерческих судебных спорах. Позже мне предложили должность заместителя окружного прокурора в Tulare County — я выбрал иммиграционное право и в 2023 открыл свой офис.",
      "Иммиграционный суд остаётся судом. Подготовка, доказательства, стратегия и работа в зале значат не меньше, чем поданные документы.",
    ],
    pledgeBefore: "Наша команда работает организованно. Каждое дело я веду лично, ",
    pledgeEm: "от первой консультации до решения суда",
    pledgeEnd: ".",
    educationLabel: "Образование",
    education: [
      "JD · LL.M. по налоговому праву",
      "University of San Diego School of Law",
      "B.A. по бизнес-экономике",
      "University of California, Riverside",
    ],
    membershipLabel: "Членство",
    membership: [
      "American Immigration Lawyers Association (AILA)",
      "отделение Южной Калифорнии",
    ],
    photoAlt: "Jacob Shidaev в зале суда",
    badge: "С судебным опытом",
    aboutCtaTitle: "Обсудим ваше дело",
    aboutCtaText: "Консультация 30 минут. Оценим ситуацию и обсудим, какие шаги имеют смысл.",
    aboutCtaButton: "Записаться на консультацию",
    aboutCtaHref: "/contact",
    credsEyebrow: "Допуски и опыт",
    credsTitle: "Где я ",
    credsTitleEm: "веду дела",
    credsTitleEnd: ".",
    courtsTitle: "Допуски в суды",
    courts: [
      "California State Bar — #343616 · действующий член",
      "Окружные суды США · Центральный, Восточный и Северный округа Калифорнии",
      "Pro hac vice — допуск в других штатах по запросу для конкретного дела",
      "Executive Office for Immigration Review (EOIR) — все 50 штатов",
    ],
    practiceTitle: "Специализация",
    practice: [
      "Дела об убежище — заявительные и защитные",
      "Защита от депортации · отмена депортации · приостановление · Конвенция против пыток",
      "Помощь задержанным · слушания о залоге · parole",
      "Федеральные суды · Habeas Corpus · Mandamus · временный запретительный приказ",
      "Ходатайства о возобновлении и прекращении дела · апелляции",
    ],
    languagesTitle: "Языки",
    languagesNote: "Свободное владение",
    languages: ["Русский", "Английский"],
    nationwide: "Иммиграционные дела во всех 50 штатах",
  },
  en: {
    eyebrow: "Background & credentials",
    title: "I know the immigration process ",
    titleEm: "from both sides",
    titleEnd: ".",
    quickfactsLabel: "Key admissions",
    quickfacts: [
      { value: "CA", label: "Bar\n#343616" },
      { value: "3", label: "federal\ndistricts" },
      { value: "50", label: "states\nEOIR" },
      { value: "AILA", label: "SoCal\nchapter" },
    ],
    prose: [
      "In 2000, my father and I were granted political asylum in the United States. As a teenager, I filled out residency and citizenship forms for my family — immigration law became my work before law school.",
      "That experience stays with me. Behind every case are people for whom the outcome carries weight.",
      "Before opening my own practice, I worked in commercial litigation. Later, I was offered a Deputy District Attorney position in Tulare County — I chose immigration law and opened my office in 2023.",
      "Immigration court is still court. Preparation, evidence, strategy, and courtroom work matter no less than the documents filed.",
    ],
    pledgeBefore: "Our team is organized. I personally lead every case, ",
    pledgeEm: "from the first consultation through the final ruling",
    pledgeEnd: ".",
    educationLabel: "Education",
    education: [
      "JD · LL.M. in Taxation",
      "University of San Diego School of Law",
      "B.A. Business Economics",
      "University of California, Riverside",
    ],
    membershipLabel: "Membership",
    membership: [
      "American Immigration Lawyers Association (AILA)",
      "Southern California Chapter",
    ],
    photoAlt: "Jacob Shidaev in the courtroom",
    badge: "Trial-Trained",
    aboutCtaTitle: "Let's discuss your case",
    aboutCtaText: "30-minute consultation. We assess the situation and discuss what steps make sense.",
    aboutCtaButton: "Book a consultation",
    aboutCtaHref: "/en/contact",
    credsEyebrow: "Credentials & experience",
    credsTitle: "Where I'm ",
    credsTitleEm: "admitted to practice",
    credsTitleEnd: ".",
    courtsTitle: "Court admissions",
    courts: [
      "California State Bar — #343616 · member in good standing",
      "U.S. District Courts · Central, Eastern, Northern Districts of California",
      "Pro hac vice — admission in other states on a per-matter basis as needed",
      "Executive Office for Immigration Review (EOIR) — all 50 states",
    ],
    practiceTitle: "Practice areas",
    practice: [
      "Asylum — affirmative & defensive",
      "Removal Defense · Cancellation · Withholding · CAT",
      "Detained Representation · Bond Hearings · Parole",
      "Federal Litigation · Habeas · Mandamus · TRO",
      "Motions to Reopen / Terminate · Appeals",
    ],
    languagesTitle: "Languages",
    languagesNote: "Fluent in",
    languages: ["English", "Russian"],
    nationwide: "Immigration cases in all 50 states",
  },
} as const;

export default function AboutPage({ lang }: LangProps) {
  const t = STRINGS[lang];

  return (
    <>
      <Header lang={lang} />
      <main>
        {/* STORY */}
        <section className="story" id="story" style={{ paddingTop: "clamp(48px, 7vw, 180px)" }}>
          <div className="container">
            <div className="story-grid">
              <div className="story-photo-wrap reveal">
                <div className="story-photo">
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet="/photos/shidaev-about-mobile.png"
                    />
                    <Image
                      src="/photos/hero.jpg"
                      alt={t.photoAlt}
                      width={1200}
                      height={1600}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="story-badge">
                  <p className="story-badge-title">{t.badge}</p>
                </div>
              </div>

              <div className="story-text reveal">
                <span className="eyebrow">{t.eyebrow}</span>
                <h2>
                  {t.title}
                  <em>{t.titleEm}</em>
                  {t.titleEnd}
                </h2>
                <ul
                  className="about-quickfacts"
                  aria-label={t.quickfactsLabel}
                >
                  {t.quickfacts.map((qf) => (
                    <li key={qf.value + qf.label}>
                      <span className="qf-value">{qf.value}</span>
                      <span className="qf-label">{qf.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="story-prose">
                  {t.prose.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>

                <p className="story-pledge">
                  <span className="story-pledge-mark">—</span>
                  {t.pledgeBefore}
                  <em>{t.pledgeEm}</em>
                  {t.pledgeEnd}
                </p>

                <div className="story-meta">
                  <div>
                    <p className="story-meta-label">{t.educationLabel}</p>
                    <p className="story-meta-value">
                      {t.education.map((line, i) => (
                        <span key={line}>
                          {line}
                          {i < t.education.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <p className="story-meta-label">{t.membershipLabel}</p>
                    <p className="story-meta-value">
                      {t.membership.map((line, i) => (
                        <span key={line}>
                          {line}
                          {i < t.membership.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section className="about-credentials" id="credentials">
          <div className="container">
            <div className="about-credentials-head reveal">
              <span className="eyebrow">{t.credsEyebrow}</span>
              <h2>
                {t.credsTitle}
                <em>{t.credsTitleEm}</em>
                {t.credsTitleEnd}
              </h2>
            </div>

            <div className="about-credentials-grid stagger">
              <div className="about-cred-col">
                <h3 className="about-cred-title">{t.courtsTitle}</h3>
                <ul className="about-cred-list">
                  {t.courts.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="about-cred-col">
                <h3 className="about-cred-title">{t.practiceTitle}</h3>
                <ul className="about-cred-list">
                  {t.practice.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="about-cred-col">
                <h3 className="about-cred-title">{t.languagesTitle}</h3>
                <p className="about-cred-note">{t.languagesNote}</p>
                <div className="about-cred-langs">
                  {t.languages.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </div>
                <ul className="about-cred-list about-cred-list--secondary">
                  <li>{t.nationwide}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA после credentials блока — мостик к контактам */}
        <section className="about-cta">
          <div className="container">
            <div className="about-cta-inner reveal">
              <h2 className="about-cta-title">{t.aboutCtaTitle}</h2>
              <p className="about-cta-text">{t.aboutCtaText}</p>
              <Link href={t.aboutCtaHref} className="btn btn-shimmer">
                {t.aboutCtaButton}
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
