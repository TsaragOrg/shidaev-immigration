/* Privacy Policy — CCPA + CPRA (статут с поправками, действующий с
   1 января 2026) + GDPR + COPPA. Учитывает обязательные категории
   PI/SPI, ADMT-заявление, DPF + SCCs для трансграничной передачи,
   retention по Cal. R. Prof. C. 1.16(e)(1).

   Шаблонный контент для US immigration law firm в California.
   Окончательный текст утверждает Jacob при handoff. */

import type { LegalContent } from "@/components/legal/LegalLayout";

const CONTACT_EMAIL = "info@shidaev.com";
const FIRM = "Law Offices of Jacob Shidaev";
const FIRM_ADDRESS = "15233 Ventura Blvd, Suite 1004, Sherman Oaks, CA 91403";

export const privacyRu: LegalContent = {
  eyebrow: "Правовая информация",
  title: "Политика конфиденциальности",
  lastUpdated: "Последнее обновление: 1 июня 2026 г.",
  intro:
    "Эта политика объясняет, какие персональные данные собирает сайт shidaev.com, как они используются и какие у вас есть права. Документ составлен с учётом California Consumer Privacy Act с изменениями California Privacy Rights Act (CCPA/CPRA, редакция, действующая с 1 января 2026 г.), Общего регламента ЕС о защите данных (GDPR) и Закона о защите конфиденциальности детей в интернете (COPPA).",
  sections: [
    {
      title: "Оператор данных",
      body: [
        `Оператор персональных данных — <strong>${FIRM}</strong>, ${FIRM_ADDRESS}.`,
        `По всем вопросам обработки данных обращайтесь к Jacob Shidaev по адресу <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.`,
      ],
    },
    {
      title: "Категории данных, которые мы собираем",
      body: [
        "В формализованных категориях California Civil Code § 1798.140(v):",
        {
          list: [
            "<strong>Идентификаторы (identifiers):</strong> имя, email, телефон, почтовый адрес, IP-адрес",
            "<strong>Коммерческая информация (commercial information):</strong> факт обращения, дата и канал, краткое описание ситуации",
            "<strong>Интернет- и сетевая активность (internet/network activity):</strong> страницы сайта, источник перехода, тип браузера и устройства, временные метки",
            "<strong>Общая геолокация (general geolocation):</strong> страна/регион по IP. Точные координаты GPS не собираем",
            "<strong>Профессиональная и связанная с работой информация (professional/employment):</strong> только если вы сами её упоминаете в обращении",
          ],
        },
        "<strong>Чувствительные персональные данные (Sensitive Personal Information).</strong> Иммиграционные дела по своей природе связаны с чувствительными данными: иммиграционным статусом, государственными идентификаторами (passport number, A-number), национальным происхождением, иногда — религиозными убеждениями или медицинской информацией. Такие данные мы собираем только после того, как вы добровольно их сообщили в рамках возможного представительства, и обрабатываем исключительно для оценки и ведения дела. Вы имеете право ограничить использование таких данных целями, указанными ниже.",
      ],
    },
    {
      title: "Источники данных",
      body: [
        "В формализованных категориях CCPA:",
        {
          list: [
            "<strong>Непосредственно от вас</strong> — формы обращения на сайте, переписка по email, телефонные разговоры",
            "<strong>Автоматически с вашего устройства</strong> — технические логи при посещении сайта",
            "<strong>От направивших лиц</strong> — других адвокатов, друзей или родственников, рекомендовавших вас фирме, только с их слов",
          ],
        },
      ],
    },
    {
      title: "Цели обработки",
      body: [
        {
          list: [
            "ответить на ваше обращение и обсудить возможное представительство",
            "провести проверку на отсутствие конфликта интересов до начала консультации",
            "оценить и вести ваше дело, если фирма берётся за представительство",
            "поддерживать работу и безопасность сайта",
            "соблюдать обязанности адвоката, установленные California Rules of Professional Conduct и иными применимыми нормами",
          ],
        },
        "Чувствительные данные обрабатываются только для перечисленных целей. Мы не используем их для рекламы, профилирования или передачи третьим лицам в коммерческих целях.",
      ],
    },
    {
      title: "Автоматизированное принятие решений",
      body: [
        "Фирма <strong>не использует</strong> автоматизированные системы принятия решений или профилирования (ADMT) при оценке вашего дела или ответа на обращение. Все решения принимает адвокат лично.",
      ],
    },
    {
      title: "Правовые основания обработки (для жителей ЕС/ЕЭЗ)",
      body: [
        "Согласно GDPR мы обрабатываем ваши данные на следующих основаниях: ваше согласие (ст. 6(1)(a)); необходимость предпринять действия до заключения договора или для его исполнения (ст. 6(1)(b)); законный интерес фирмы в обеспечении работы сайта и защите от злоупотреблений (ст. 6(1)(f)); исполнение установленных законом обязанностей (ст. 6(1)(c)). Чувствительные данные обрабатываются на основании ст. 9(2)(a) — ваше явное согласие.",
      ],
    },
    {
      title: "Категории получателей",
      body: [
        "Мы не продаём и не передаём ваши данные третьим лицам в коммерческих целях по смыслу CCPA/CPRA. Доступ к данным может быть предоставлен:",
        {
          list: [
            "техническим подрядчикам (хостинг, email-сервис) — в объёме, необходимом для оказания услуги, на основании договоров о защите данных",
            "государственным органам — по законному требованию",
            "другим адвокатам, привлечённым к вашему делу, — только с вашего согласия",
          ],
        },
      ],
    },
    {
      title: "Сроки хранения",
      body: [
        "Сроки хранения для каждой категории:",
        {
          list: [
            "<strong>Обращения, не приведшие к представительству</strong> — до 24 месяцев",
            "<strong>Файлы клиентов</strong> — в течение срока ведения дела и не менее 5 лет после закрытия, как требует California Rule of Professional Conduct 1.16(e)(1)",
            "<strong>Финансовые записи и trust account документы</strong> — не менее 5 лет (California Rule of Professional Conduct 1.15(e)(7))",
            "<strong>Технические логи</strong> — не более 12 месяцев",
          ],
        },
      ],
    },
    {
      title: "Ваши права",
      body: [
        "<strong>Жители Калифорнии (CCPA/CPRA).</strong> Право знать, какие данные о вас собраны и как используются; право удалить данные; право исправить неточные данные; право ограничить использование и раскрытие чувствительных персональных данных только перечисленными выше целями; право отказаться от продажи или передачи (мы не продаём и не передаём); право отказаться от автоматизированного принятия решений (мы их не применяем); право на недискриминацию за реализацию любого из этих прав.",
        "<strong>Жители ЕС/ЕЭЗ (GDPR).</strong> Право доступа, исправления, удаления, ограничения обработки, переносимости; право возражать против обработки на основании законного интереса; право отозвать согласие в любой момент; право подать жалобу в надзорный орган своей страны. Прямой маркетинг мы не ведём.",
        `Для реализации права свяжитесь с нами: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>. Мы ответим в течение 45 дней (CCPA) или 30 дней (GDPR). Личность запрашивающего проверяется в разумных пределах для защиты ваших же данных.`,
      ],
    },
    {
      title: "Уведомление при сборе данных (Notice at Collection)",
      body: [
        "На каждой форме обращения размещена краткая ссылка на эту политику. Заполняя форму, вы получаете уведомление о категориях собираемых данных и целях обработки до или в момент сбора.",
      ],
    },
    {
      title: "Дети до 13 лет (COPPA)",
      body: [
        "Сайт не предназначен для пользователей младше 13 лет и не собирает их данные сознательно. Если вы считаете, что данные ребёнка попали к нам, сообщите — мы удалим их.",
      ],
    },
    {
      title: "Передача данных за пределы ЕС/ЕЭЗ",
      body: [
        "Сервер сайта расположен у Vercel Inc. в США. Передача данных из ЕС в США осуществляется на основании EU–U.S. Data Privacy Framework (DPF), утверждённого решением Европейской комиссии об адекватной защите от 10 июля 2023 г., если получатель сертифицирован по DPF, либо на основании стандартных договорных условий (SCC), утверждённых Европейской комиссией, как резервного механизма.",
      ],
    },
    {
      title: "Cookies",
      body: [
        "Сайт использует только функциональные cookies, строго необходимые для базовой работы — например, для запоминания выбранного языка. Рекламные и трекинговые cookies третьих сторон не устанавливаются. Согласие на функциональные cookies по GDPR/ePrivacy не требуется.",
      ],
    },
    {
      title: "Безопасность",
      body: [
        "Сайт работает по HTTPS. Доступ к административной части ограничен и защищён двухфакторной аутентификацией. Мы применяем разумные технические и организационные меры, но ни одна система не защищена полностью.",
      ],
    },
    {
      title: "Изменения политики",
      body: [
        "Мы можем обновлять эту политику. Дата последнего изменения указана вверху документа. Существенные изменения отмечаем на сайте.",
      ],
    },
    {
      title: "Контакт",
      body: [
        `Вопросы по обработке данных направляйте на <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> или почтой: ${FIRM}, ${FIRM_ADDRESS}.`,
      ],
    },
  ],
};

export const privacyEn: LegalContent = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  lastUpdated: "Last updated: June 1, 2026",
  intro:
    "This Privacy Policy explains what personal information shidaev.com collects, how it is used, and what rights you have. It is drafted to reflect the California Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA/CPRA, as in effect on January 1, 2026), the European Union General Data Protection Regulation (GDPR), and the Children's Online Privacy Protection Act (COPPA).",
  sections: [
    {
      title: "Data controller",
      body: [
        `The data controller is <strong>${FIRM}</strong>, ${FIRM_ADDRESS}.`,
        `Direct all data processing inquiries to Jacob Shidaev at <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.`,
      ],
    },
    {
      title: "Categories of personal information we collect",
      body: [
        "Using the categories defined in California Civil Code § 1798.140(v):",
        {
          list: [
            "<strong>Identifiers:</strong> name, email, phone, mailing address, IP address",
            "<strong>Commercial information:</strong> the fact of your inquiry, its date and channel, a brief description of your situation",
            "<strong>Internet or network activity:</strong> pages visited, referring source, browser and device type, timestamps",
            "<strong>General geolocation:</strong> country or region inferred from IP. We do not collect precise GPS coordinates",
            "<strong>Professional or employment-related information:</strong> only if you mention it in your inquiry",
          ],
        },
        "<strong>Sensitive Personal Information.</strong> Immigration matters by their nature involve sensitive data: immigration status, government identifiers (passport number, A-number), national origin, and sometimes religious belief or health information. We collect such data only after you voluntarily provide it in connection with possible representation, and we process it solely to assess and handle your matter. You have the right to limit the use of sensitive personal information to those purposes.",
      ],
    },
    {
      title: "Sources of information",
      body: [
        "Using the CCPA source categories:",
        {
          list: [
            "<strong>Directly from you</strong> — site contact forms, email correspondence, phone calls",
            "<strong>Automatically from your device</strong> — technical logs when you visit the site",
            "<strong>From referring parties</strong> — other attorneys, friends, or family who refer you to the firm, based on what they tell us",
          ],
        },
      ],
    },
    {
      title: "Purposes of processing",
      body: [
        {
          list: [
            "to respond to your inquiry and discuss possible representation",
            "to run a conflict-of-interest check before any consultation",
            "to evaluate and handle your matter if the firm undertakes representation",
            "to operate and secure the site",
            "to comply with attorney obligations under the California Rules of Professional Conduct and other applicable rules",
          ],
        },
        "Sensitive Personal Information is processed only for the purposes listed above. We do not use it for advertising, profiling, or commercial disclosure to third parties.",
      ],
    },
    {
      title: "Automated decision-making",
      body: [
        "The firm <strong>does not use</strong> automated decision-making technology (ADMT) or profiling to evaluate your matter or respond to your inquiry. All decisions are made personally by the attorney.",
      ],
    },
    {
      title: "Legal bases (EU/EEA residents)",
      body: [
        "Under GDPR we process your data on the following bases: your consent (Art. 6(1)(a)); steps taken at your request prior to entering into a contract, or performance of a contract (Art. 6(1)(b)); the firm's legitimate interest in operating the site and preventing abuse (Art. 6(1)(f)); compliance with legal obligations (Art. 6(1)(c)). Special categories of data are processed under Art. 9(2)(a) — your explicit consent.",
      ],
    },
    {
      title: "Categories of recipients",
      body: [
        "We do not sell or share your personal information for commercial purposes as those terms are defined under CCPA/CPRA. We may grant access to:",
        {
          list: [
            "technical service providers (hosting, email) — only as necessary, under data processing agreements",
            "government authorities — when required by valid legal process",
            "co-counsel or other attorneys retained to assist on your matter — only with your consent",
          ],
        },
      ],
    },
    {
      title: "Retention",
      body: [
        "Retention periods by category:",
        {
          list: [
            "<strong>Inquiries that do not result in representation</strong> — up to 24 months",
            "<strong>Client files</strong> — for the duration of the matter and for no less than 5 years after closure, as required by California Rule of Professional Conduct 1.16(e)(1)",
            "<strong>Financial and trust account records</strong> — at least 5 years (California Rule of Professional Conduct 1.15(e)(7))",
            "<strong>Technical logs</strong> — no longer than 12 months",
          ],
        },
      ],
    },
    {
      title: "Your rights",
      body: [
        "<strong>California residents (CCPA/CPRA).</strong> The right to know what personal information has been collected and how it is used; the right to delete; the right to correct inaccurate information; the right to limit use and disclosure of Sensitive Personal Information to the purposes listed above; the right to opt out of sale or sharing (we do not sell or share); the right to opt out of automated decision-making (we do not use it); the right to non-discrimination for exercising any of these rights.",
        "<strong>EU/EEA residents (GDPR).</strong> The right of access, rectification, erasure, restriction of processing, and data portability; the right to object to processing based on legitimate interest; the right to withdraw consent at any time; the right to lodge a complaint with your supervisory authority. We do not engage in direct marketing.",
        `To exercise a right, contact us at <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>. We respond within 45 days (CCPA) or 30 days (GDPR). We verify the identity of the requester to a reasonable degree, for the protection of your own data.`,
      ],
    },
    {
      title: "Notice at Collection",
      body: [
        "A short link to this Policy is included on each contact form. Submitting a form provides notice of the categories collected and the purposes of processing at or before the point of collection.",
      ],
    },
    {
      title: "Children under 13 (COPPA)",
      body: [
        "The site is not directed at children under 13 and does not knowingly collect their information. If you believe a child's data has reached us, contact us and we will delete it.",
      ],
    },
    {
      title: "International transfers",
      body: [
        "The site is hosted by Vercel Inc. in the United States. Personal data is transferred from the EU to the US under the EU–U.S. Data Privacy Framework (DPF), recognized by the European Commission's adequacy decision of July 10, 2023, where the recipient is DPF-certified, and otherwise under the European Commission's Standard Contractual Clauses as a fallback.",
      ],
    },
    {
      title: "Cookies",
      body: [
        "The site uses only functional cookies that are strictly necessary for basic operation (such as remembering language preference). No third-party advertising or tracking cookies are installed. Consent for strictly necessary cookies is not required under GDPR/ePrivacy.",
      ],
    },
    {
      title: "Security",
      body: [
        "The site operates over HTTPS. Administrative access is restricted and protected with two-factor authentication. We apply reasonable technical and organizational measures; no system can be guaranteed fully secure.",
      ],
    },
    {
      title: "Changes to this Policy",
      body: [
        "We may update this Policy. The date at the top reflects the most recent revision. Material changes will be noted on the site.",
      ],
    },
    {
      title: "Contact",
      body: [
        `Direct privacy questions to <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> or by mail to ${FIRM}, ${FIRM_ADDRESS}.`,
      ],
    },
  ],
};
