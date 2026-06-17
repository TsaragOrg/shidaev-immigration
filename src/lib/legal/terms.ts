/* Terms of Use — условия использования сайта.
   Без одностороннего indemnification (для consumer-facing law firm
   это риск unconscionability в California). Limitation of liability
   с carve-out по Cal. Civ. Code § 1668. */

import type { LegalContent } from "@/components/legal/LegalLayout";

const FIRM = "Law Offices of Jacob Shidaev";
const FIRM_ADDRESS = "15233 Ventura Blvd, Suite 1004, Sherman Oaks, CA 91403";
const CONTACT_EMAIL = "info@shidaev.com";

export const termsRu: LegalContent = {
  eyebrow: "Правовая информация",
  title: "Условия использования",
  lastUpdated: "Последнее обновление: 17 июня 2026 г.",
  intro:
    "Используя сайт shidaev.com, вы соглашаетесь с настоящими условиями. Если вы не согласны с любым из положений — не используйте сайт.",
  sections: [
    {
      title: "Принятие условий",
      body: [
        `Сайт shidaev.com управляется ${FIRM}. Доступ к сайту и его использование означают согласие с настоящими Условиями использования, Политикой конфиденциальности и Правовым уведомлением.`,
      ],
    },
    {
      title: "Цель сайта",
      body: [
        "Сайт предоставляет общую информацию об иммиграционной практике фирмы. Он не предназначен для оказания юридической консультации и не создаёт отношений «адвокат — клиент». Подробнее — в <a href=\"/legal\">Правовом уведомлении</a>.",
      ],
    },
    {
      title: "Допустимое использование",
      body: [
        "Вы можете пользоваться сайтом в личных, некоммерческих и законных целях. Запрещается:",
        {
          list: [
            "пытаться получить несанкционированный доступ к серверу, базам данных или административной части сайта",
            "загружать или передавать вредоносный код, скрипты, средства автоматизированного сбора данных (скрейперы) сверх того, что разрешено правилами robots.txt",
            "представляться чужим именем или сообщать неверные сведения при обращении через формы сайта",
            "копировать, распространять или изменять материалы сайта вне случаев добросовестного использования по закону США",
            "использовать сайт способом, нарушающим применимое законодательство или права третьих лиц",
          ],
        },
      ],
    },
    {
      title: "Интеллектуальная собственность",
      body: [
        `Все материалы сайта — тексты, графика, дизайн, фотографии, программный код — принадлежат ${FIRM} или используются по лицензии. Использование без разрешения не допускается, кроме личного некоммерческого просмотра.`,
      ],
    },
    {
      title: "Материалы пользователя",
      body: [
        "Информация, отправленная через контактные формы, рассматривается как обращение для оценки возможного представительства. Не передавайте конфиденциальные сведения до заключения письменного соглашения о представительстве. Условия обработки персональных данных — в <a href=\"/privacy\">Политике конфиденциальности</a>.",
      ],
    },
    {
      title: "Оплата консультаций",
      body: [
        "Оплата консультации не возвращается после завершения платежа.",
      ],
    },
    {
      title: "Ссылки на сторонние ресурсы",
      body: [
        "Сайт может содержать ссылки на сторонние ресурсы. Фирма не отвечает за их содержание и не подтверждает достоверность размещённой там информации.",
      ],
    },
    {
      title: "Ограничение ответственности",
      body: [
        "В пределах, разрешённых законом, фирма не несёт ответственности за прямые, косвенные, случайные или последующие убытки, возникшие из использования или невозможности использования сайта, включая ущерб от опоры на размещённые материалы.",
        "Сайт предоставляется «как есть» без явных или подразумеваемых гарантий, включая гарантии товарной пригодности, пригодности для определённой цели и ненарушения прав третьих лиц.",
        "Настоящий раздел не ограничивает ответственность, которая по California Civil Code § 1668 ограничению не подлежит, — в том числе ответственность за умысел, грубую неосторожность или нарушение закона.",
      ],
    },
    {
      title: "Применимое право и юрисдикция",
      body: [
        "Настоящие Условия регулируются законодательством штата Калифорния без учёта коллизионных норм. Споры, возникающие из использования сайта, рассматриваются в судах штата Калифорния, расположенных в округе Лос-Анджелес, либо в федеральном суде Центрального округа Калифорнии.",
      ],
    },
    {
      title: "Изменения",
      body: [
        "Фирма вправе изменять настоящие Условия. Актуальная версия с датой обновления всегда доступна на этой странице. Продолжение использования сайта после изменений означает согласие с новой редакцией.",
      ],
    },
    {
      title: "Контакт",
      body: [
        `Вопросы по условиям использования направляйте на <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> или по адресу: ${FIRM}, ${FIRM_ADDRESS}.`,
      ],
    },
  ],
};

export const termsEn: LegalContent = {
  eyebrow: "Legal",
  title: "Terms of Use",
  lastUpdated: "Last updated: June 17, 2026",
  intro:
    "By using shidaev.com you agree to these Terms of Use. If you do not agree with any provision, please discontinue your use of the site.",
  sections: [
    {
      title: "Acceptance of terms",
      body: [
        `shidaev.com is operated by ${FIRM}. Accessing or using the site means you accept these Terms of Use, the Privacy Policy, and the Legal Notice.`,
      ],
    },
    {
      title: "Purpose of the site",
      body: [
        "The site provides general information about the firm's immigration practice. It is not intended to provide legal advice and does not create an attorney-client relationship. See the <a href=\"/en/legal\">Legal Notice</a> for details.",
      ],
    },
    {
      title: "Acceptable use",
      body: [
        "You may use the site for personal, non-commercial, and lawful purposes. You may not:",
        {
          list: [
            "attempt unauthorized access to the server, databases, or administrative areas of the site",
            "upload or transmit malware, scripts, or automated scraping tools beyond what is permitted by robots.txt",
            "impersonate another person or misrepresent yourself when contacting us through site forms",
            "copy, distribute, or modify site materials outside of U.S. fair use",
            "use the site in any manner that violates applicable law or the rights of third parties",
          ],
        },
      ],
    },
    {
      title: "Intellectual property",
      body: [
        `All site content — text, graphics, design, photography, source code — is the property of ${FIRM} or used under license. Use without permission is prohibited, except for personal, non-commercial viewing.`,
      ],
    },
    {
      title: "User submissions",
      body: [
        "Information sent through contact forms is treated as a submission for the purpose of evaluating possible representation. Do not transmit confidential material before a written engagement agreement is in place. Processing of personal data is described in the <a href=\"/en/privacy\">Privacy Policy</a>.",
      ],
    },
    {
      title: "Consultation payments",
      body: [
        "Consultation payments are non-refundable once payment has been completed.",
      ],
    },
    {
      title: "Third-party links",
      body: [
        "The site may contain links to external resources. The firm is not responsible for their content and does not endorse the accuracy of information posted there.",
      ],
    },
    {
      title: "Limitation of liability",
      body: [
        "To the extent permitted by law, the firm is not liable for any direct, indirect, incidental, or consequential damages arising out of your use of or inability to use the site, including damages resulting from reliance on the materials posted.",
        "The site is provided \"as is\" without express or implied warranties of any kind, including warranties of merchantability, fitness for a particular purpose, and non-infringement.",
        "This section does not limit any liability that cannot be limited under California Civil Code § 1668, including liability for willful injury, gross negligence, or violation of law.",
      ],
    },
    {
      title: "Governing law and forum",
      body: [
        "These Terms are governed by the laws of the State of California, without regard to conflict-of-laws principles. Any dispute arising from use of the site shall be heard in the state courts of California located in Los Angeles County or in the United States District Court for the Central District of California.",
      ],
    },
    {
      title: "Changes",
      body: [
        "The firm may modify these Terms. The current version with its revision date is always posted on this page. Continued use of the site after changes constitutes acceptance of the revised version.",
      ],
    },
    {
      title: "Contact",
      body: [
        `Direct questions about these Terms to <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> or to ${FIRM}, ${FIRM_ADDRESS}.`,
      ],
    },
  ],
};
