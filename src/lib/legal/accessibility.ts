/* Accessibility Statement — ADA Title III + WCAG 2.1 AA (с
   мониторингом обновлений WCAG 2.2). Контекст: Robles v. Domino's
   Pizza, LLC (9th Cir. 2019) — основа применения ADA к private
   website в California. */

import type { LegalContent } from "@/components/legal/LegalLayout";

const FIRM = "Law Offices of Jacob Shidaev";
const FIRM_ADDRESS = "15233 Ventura Blvd, Suite 1004, Sherman Oaks, CA 91403";
const FIRM_PHONE = "+1 (424) 558-4141";
const CONTACT_EMAIL = "info@shidaev.com";

export const accessibilityRu: LegalContent = {
  eyebrow: "Правовая информация",
  title: "Заявление о доступности",
  lastUpdated: "Последнее обновление: 1 июня 2026 г.",
  intro:
    "Law Offices of Jacob Shidaev стремится сделать свои услуги и информацию доступными для всех посетителей, в том числе для людей с инвалидностью. Сайт shidaev.com разрабатывается с ориентиром на Web Content Accessibility Guidelines (WCAG) 2.1, уровень AA, и в соответствии с Title III ADA (Americans with Disabilities Act, 42 U.S.C. § 12181 и далее), как этот закон применяется к коммерческим веб-сайтам в Девятом округе после решения Robles v. Domino's Pizza, LLC (9th Cir. 2019).",
  sections: [
    {
      title: "Что мы делаем",
      body: [
        "Сайт разрабатывается с целью, чтобы:",
        {
          list: [
            "сайт поддерживал полную клавиатурную навигацию без необходимости мыши",
            "содержание было читаемо распространёнными скринридерами (NVDA, JAWS, VoiceOver, TalkBack)",
            "изображения сопровождались альтернативным текстом, где это нужно для понимания смысла",
            "контрастность текста и фона соответствовала уровню AA WCAG 2.1",
            "сайт корректно работал при увеличении масштаба до 200% без потери функциональности",
            "формы имели понятные метки и сообщения об ошибках",
          ],
        },
        "Мы следим за обновлениями WCAG 2.2 (октябрь 2023) и включаем новые требования по мере обновления компонентов сайта.",
      ],
    },
    {
      title: "Текущий уровень соответствия",
      body: [
        "Мы оцениваем сайт как <strong>в основном соответствующий WCAG 2.1, уровень AA</strong>. «В основном» означает: отдельные элементы могут не полностью соответствовать стандарту. Такие случаи мы находим в ходе работы и устраняем в ближайшем обновлении.",
      ],
    },
    {
      title: "Известные ограничения",
      body: [
        "Сайт включает встроенные сторонние сервисы — например, видео на YouTube и форму записи на консультацию. Уровень доступности этих сервисов определяется их провайдерами и может отличаться от стандарта сайта. Мы выбираем провайдеров с доступными интерфейсами и меняем тех, кто этого не обеспечивает.",
      ],
    },
    {
      title: "Альтернативные способы связи",
      body: [
        "Если на сайте вам что-то мешает или вы предпочитаете другой способ связи, напишите или позвоните:",
        {
          list: [
            `по телефону: <a href="tel:+14245584141">${FIRM_PHONE}</a>`,
            `по email: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`,
            `лично в офисе: ${FIRM_ADDRESS}, по предварительной записи`,
          ],
        },
        "По запросу мы организуем переводчика на русский или английский язык, а при необходимости — переводчика ASL (американский жестовый язык) для встречи.",
      ],
    },
    {
      title: "Сообщить о проблеме",
      body: [
        "Если вы заметили проблему с доступностью, напишите нам — мы постараемся устранить её как можно быстрее. Опишите:",
        {
          list: [
            "адрес страницы, на которой возникла проблема",
            "что именно не сработало или было трудно",
            "устройство и вспомогательную технологию, которыми вы пользуетесь",
            "контактные данные, если хотите получить ответ",
          ],
        },
        `Направляйте сообщения на <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> или по телефону <a href="tel:+14245584141">${FIRM_PHONE}</a>. Мы стараемся ответить в течение пяти рабочих дней.`,
      ],
    },
    {
      title: "Постоянная работа",
      body: [
        "Доступность — это процесс, а не разовая задача. Мы регулярно проверяем сайт и улучшаем его. Это заявление мы будем обновлять по мере изменений.",
      ],
    },
    {
      title: "Контакт",
      body: [
        `Адвокат, ответственный за вопросы доступности: Jacob Shidaev, <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>. ${FIRM}, ${FIRM_ADDRESS}.`,
      ],
    },
  ],
};

export const accessibilityEn: LegalContent = {
  eyebrow: "Legal",
  title: "Accessibility Statement",
  lastUpdated: "Last updated: June 1, 2026",
  intro:
    "The Law Offices of Jacob Shidaev is committed to making its services and information accessible to all visitors, including people with disabilities. shidaev.com is designed for substantial conformance with the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, and consistent with Title III of the Americans with Disabilities Act (42 U.S.C. § 12181 et seq.) as applied to commercial websites in the Ninth Circuit following Robles v. Domino's Pizza, LLC (9th Cir. 2019).",
  sections: [
    {
      title: "What we do",
      body: [
        "The site is designed to ensure that:",
        {
          list: [
            "the site supports full keyboard navigation, without requiring a mouse",
            "content is readable with common screen readers (NVDA, JAWS, VoiceOver, TalkBack)",
            "images include alternative text where meaningful for understanding the content",
            "text and background contrast meet WCAG 2.1 Level AA",
            "the site renders correctly at 200% zoom without loss of functionality",
            "forms include clear labels and error messages",
          ],
        },
        "We monitor WCAG 2.2 updates (released October 2023) and incorporate new requirements as we update components of the site.",
      ],
    },
    {
      title: "Current level of conformance",
      body: [
        "We assess the site as <strong>substantially conforming to WCAG 2.1, Level AA</strong>. \"Substantially\" means: some elements may not yet fully meet the standard. We identify such cases during ongoing work and address them in the next available update.",
      ],
    },
    {
      title: "Known limitations",
      body: [
        "The site embeds some third-party services — for example, YouTube videos and a consultation-scheduling form. The accessibility of these services is determined by their providers and may differ from the site's own standard. We choose providers with accessible interfaces and replace those that do not provide them.",
      ],
    },
    {
      title: "Alternative ways to reach us",
      body: [
        "If something on the site does not work for you, or you prefer a different way to contact the firm, please write or call:",
        {
          list: [
            `phone: <a href="tel:+14245584141">${FIRM_PHONE}</a>`,
            `email: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`,
            `in person at the office: ${FIRM_ADDRESS}, by appointment`,
          ],
        },
        "On request we provide Russian or English interpretation and, where needed, an ASL (American Sign Language) interpreter for in-person meetings.",
      ],
    },
    {
      title: "Reporting a problem",
      body: [
        "If you encounter an accessibility problem, please let us know — we will try to fix it as soon as possible. Please include:",
        {
          list: [
            "the URL of the page where you encountered the problem",
            "what specifically did not work or was difficult",
            "the device and assistive technology you are using",
            "your contact information, if you would like us to follow up",
          ],
        },
        `Send reports to <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> or call <a href="tel:+14245584141">${FIRM_PHONE}</a>. We aim to respond within five business days.`,
      ],
    },
    {
      title: "Ongoing work",
      body: [
        "Accessibility is an ongoing process, not a one-time task. We test the site regularly and continue to improve it. This statement will be updated as changes are made.",
      ],
    },
    {
      title: "Contact",
      body: [
        `The attorney responsible for accessibility matters is Jacob Shidaev, <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>. ${FIRM}, ${FIRM_ADDRESS}.`,
      ],
    },
  ],
};
