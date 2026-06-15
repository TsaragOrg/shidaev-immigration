/* Legal Notice — обязательные раскрытия для US immigration law firm:
   – Attorney Advertising (Cal. R. Prof. C. 7.1–7.3 + ABA Model Rules 7.1–7.3)
   – No Legal Advice
   – No Attorney-Client Relationship (consistent с Cal. R. Prof. C. 1.18)
   – Past Results Disclaimer (Cal. Bus. & Prof. Code § 6157.2 с поправками
     SB 37, действующими с 1 января 2026 г.) */

import type { LegalContent } from "@/components/legal/LegalLayout";

const FIRM = "Law Offices of Jacob Shidaev";
const BAR_NUMBER = "343616";
const RESPONSIBLE_ATTORNEY = "Jacob Shidaev, Esq.";
const FIRM_ADDRESS = "15233 Ventura Blvd, Suite 1004, Sherman Oaks, CA 91403";
const CONTACT_EMAIL = "info@shidaev.com";

export const noticeRu: LegalContent = {
  eyebrow: "Правовая информация",
  title: "Правовое уведомление",
  lastUpdated: "Последнее обновление: 1 июня 2026 г.",
  intro:
    "Сайт shidaev.com принадлежит и поддерживается адвокатской практикой Law Offices of Jacob Shidaev, расположенной в Калифорнии. Размещённые материалы являются рекламой юридических услуг по California Rules of Professional Conduct 7.1–7.3 и Model Rules of Professional Conduct Американской коллегии адвокатов (ABA).",
  sections: [
    {
      title: "Реклама юридических услуг",
      body: [
        `Сайт носит характер рекламы юридических услуг. Ответственный адвокат — <strong>${RESPONSIBLE_ATTORNEY}</strong>, член California State Bar (#${BAR_NUMBER}). Офис: ${FIRM_ADDRESS}.`,
        "Материалы сайта не являются предложением о представительстве и не заменяют индивидуальную юридическую консультацию.",
      ],
    },
    {
      title: "Не юридическая консультация",
      body: [
        "Информация на сайте носит справочный характер и не заменяет юридическую консультацию. Применение любого положения к конкретной ситуации зависит от индивидуальных обстоятельств и может меняться при изменениях законодательства, нормативных актов и практики.",
        "Не принимайте и не воздерживайтесь от каких-либо действий на основании материалов сайта без предварительной консультации с лицензированным адвокатом, знакомым с обстоятельствами вашего дела.",
      ],
    },
    {
      title: "Отсутствие отношений «адвокат — клиент»",
      body: [
        "Посещение сайта, чтение материалов, заполнение формы обращения или отправка электронного письма <strong>не создают отношений «адвокат — клиент»</strong>. Такие отношения возникают только после заключения письменного соглашения о представительстве, подписанного фирмой и клиентом, и после проверки на отсутствие конфликта интересов. Это согласуется с California Rule of Professional Conduct 1.18 (Duties to Prospective Client).",
        "До заключения соглашения не передавайте через сайт или электронную почту конфиденциальные или чувствительные сведения. Информация, отправленная до того, как возникли отношения «адвокат — клиент», не защищена адвокатской тайной.",
      ],
    },
    {
      title: "Результаты предыдущих дел",
      body: [
        "В соответствии с California Business and Professions Code § 6157.2 (с поправками SB 37, действующими с 1 января 2026 г.): <strong>результаты предыдущих дел не гарантируют, не подтверждают и не предсказывают результат вашего дела</strong>. Любой иммиграционный или судебный исход зависит от уникальных фактов конкретного дела, применимого права на момент рассмотрения и решения соответствующего органа или суда.",
        "Отзывы и упоминания результатов на сайте не являются обещанием аналогичного исхода в иной ситуации.",
      ],
    },
    {
      title: "Где Jacob Shidaev допущен к практике",
      body: [
        `California State Bar (#${BAR_NUMBER}); окружные суды США Центрального, Восточного и Северного округов Калифорнии; Executive Office for Immigration Review (EOIR) — все иммиграционные суды США. В других штатах допуск возможен в порядке pro hac vice — по запросу для конкретного дела с разрешения принимающего суда.`,
        "Иммиграционная практика — федеральная, поэтому может вестись для клиентов из любого штата. Дела в неиммиграционных судах за пределами Калифорнии могут потребовать pro hac vice или привлечения местного адвоката.",
      ],
    },
    {
      title: "Ссылки на сторонние ресурсы",
      body: [
        "Сайт может содержать ссылки на сторонние ресурсы (государственные органы, профессиональные ассоциации, СМИ). Фирма не контролирует их содержание и не отвечает за него. Наличие ссылки не означает одобрения или подтверждения точности.",
      ],
    },
    {
      title: "Изображения на сайте",
      body: [
        "Фотографии и визуальные элементы на сайте — постановочные иллюстрации или изображения, сгенерированные с помощью искусственного интеллекта. Они не изображают реальных клиентов фирмы и не описывают конкретные дела. Любое сходство с действительными лицами или ситуациями случайно. Портрет адвоката (Jacob Shidaev) — реальный.",
      ],
    },
    {
      title: "Авторские права",
      body: [
        `Все материалы сайта — тексты, дизайн, фотографии — защищены авторским правом. © ${FIRM}. Воспроизведение или распространение без письменного разрешения не допускается, кроме случаев добросовестного использования по закону США.`,
      ],
    },
    {
      title: "Контакт",
      body: [
        `Вопросы по содержанию сайта направляйте на <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> или по адресу: ${FIRM}, ${FIRM_ADDRESS}.`,
      ],
    },
  ],
};

export const noticeEn: LegalContent = {
  eyebrow: "Legal",
  title: "Legal Notice",
  lastUpdated: "Last updated: June 1, 2026",
  intro:
    "shidaev.com is owned and maintained by the Law Offices of Jacob Shidaev, a law practice located in California. The materials on this site constitute attorney advertising under California Rules of Professional Conduct 7.1–7.3 and the American Bar Association Model Rules of Professional Conduct.",
  sections: [
    {
      title: "Attorney advertising",
      body: [
        `This website is attorney advertising. The attorney responsible for its content is <strong>${RESPONSIBLE_ATTORNEY}</strong>, a member of the State Bar of California (#${BAR_NUMBER}). Office address: ${FIRM_ADDRESS}.`,
        "Material on this site does not constitute an offer of representation and is not a substitute for individualized legal advice.",
      ],
    },
    {
      title: "Not legal advice",
      body: [
        "The information on this site is for general informational purposes only and is not a substitute for legal advice. Whether any principle applies to a specific situation depends on individual facts and may change as laws, regulations, or agency practice change.",
        "Do not act or refrain from acting on the basis of any content on this site without first consulting a licensed attorney familiar with the circumstances of your matter.",
      ],
    },
    {
      title: "No attorney-client relationship",
      body: [
        "Visiting this site, reading its materials, submitting a contact form, or sending an email <strong>does not create an attorney-client relationship</strong>. Such a relationship is created only after a written engagement agreement has been signed by the firm and the client and a conflict-of-interest check has been completed. This is consistent with California Rule of Professional Conduct 1.18 (Duties to Prospective Client).",
        "Before that relationship is in place, do not transmit confidential or sensitive information through the website or email. Information sent before an attorney-client relationship exists is not protected by the attorney-client privilege.",
      ],
    },
    {
      title: "Past results",
      body: [
        "Under California Business and Professions Code § 6157.2 (as amended by SB 37, effective January 1, 2026): <strong>prior results do not guarantee, warrant, or predict the outcome of your matter</strong>. The outcome of any immigration matter or litigation depends on the specific facts of the case, the applicable law at the time of decision, and the decision of the relevant agency or court.",
        "Testimonials and references to outcomes on this site are not a promise of similar results in any other matter.",
      ],
    },
    {
      title: "Where Jacob Shidaev is admitted to practice",
      body: [
        `State Bar of California (#${BAR_NUMBER}); the United States District Courts for the Central, Eastern, and Northern Districts of California; the Executive Office for Immigration Review (EOIR) — all U.S. immigration courts. In other states, admission may be sought pro hac vice — on a per-matter basis, subject to approval by the receiving court.`,
        "Immigration practice is federal in nature and can therefore be conducted for clients located in any state. Matters in non-immigration courts outside of California may require pro hac vice admission or association with local counsel.",
      ],
    },
    {
      title: "Third-party links",
      body: [
        "This site may contain links to third-party resources (government agencies, professional associations, news outlets). The firm does not control these resources and is not responsible for their content. The presence of a link does not imply endorsement or verification of accuracy.",
      ],
    },
    {
      title: "Imagery on this site",
      body: [
        "Photographs and visual elements on this site are stylized illustrations or AI-generated imagery. They do not depict actual clients of the firm and do not portray specific cases. Any resemblance to real persons or situations is coincidental. The attorney's portrait (Jacob Shidaev) is a real photograph.",
      ],
    },
    {
      title: "Copyright",
      body: [
        `All content on the site — text, design, photography — is protected by copyright. © ${FIRM}. Reproduction or distribution without written permission is prohibited, except as permitted under U.S. fair use law.`,
      ],
    },
    {
      title: "Contact",
      body: [
        `Direct any questions about this site to <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> or to ${FIRM}, ${FIRM_ADDRESS}.`,
      ],
    },
  ],
};
