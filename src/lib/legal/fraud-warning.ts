/* Fraud Warning — предупреждение о мошенниках в иммиграционной сфере.
   Это не legal-страница, а content-страница для аудитории. USCIS прямо
   рекомендует таким сайтам делать предупреждения; по данным USCIS и
   FTC, русскоязычные и латиноамериканские иммигранты — частые цели
   иммиграционных мошенников.

   Использует тот же LegalLayout — формат подходит. Контент тёплый,
   без юр.канцелярита: цель — реально предупредить, а не galочка
   compliance. */

import type { LegalContent } from "@/components/legal/LegalLayout";

const FIRM = "Law Offices of Jacob Shidaev";
const CONTACT_EMAIL = "info@shidaev.com";
const FIRM_PHONE = "+1 (424) 558-4141";

export const fraudWarningRu: LegalContent = {
  eyebrow: "Для будущих клиентов",
  title: "Иммиграционные мошенники: как распознать",
  lastUpdated: "Последнее обновление: 1 июня 2026 г.",
  intro:
    "На иммигрантах в США зарабатывают не только адвокаты. Каждый год тысячи людей теряют деньги — а иногда и иммиграционный статус — из-за «помощников», которые не имеют права представлять клиента в иммиграционном суде. Эта страница объясняет, как отличить настоящего адвоката от мошенника и куда обращаться, если вы уже стали жертвой.",
  sections: [
    {
      title: "Кто такие «нотариос»",
      body: [
        "В странах Латинской Америки и постсоветского пространства <strong>notario público</strong> или «нотариус» — это юрист с высокой квалификацией. В США <strong>notary public</strong> — это совсем другое: человек, имеющий право только заверить подпись. Заполнять иммиграционные формы за вас, представлять интересы перед USCIS или в суде нотариус по американскому закону <strong>не имеет права</strong>.",
        "Когда «иммиграционный консультант» или «нотариус» обещает оформить вам убежище, грин-карту или защиту от депортации — он либо занимается практикой права без лицензии (unauthorized practice of law), либо формально заполняет формы без понимания последствий. Ошибки в этих формах часто стоят отказа, депортации или многолетнего бана на въезд.",
      ],
    },
    {
      title: "Красные флаги — когда стоит уйти",
      body: [
        "Любой из этих признаков — повод не подписывать договор и проверить, с кем вы имеете дело:",
        {
          list: [
            "<strong>«Гарантирую грин-карту / убежище / положительный исход»</strong> — никто не может гарантировать решение USCIS или иммиграционного суда. Это нарушение California Rules of Professional Conduct для адвокатов и признак мошенника для всех остальных.",
            "<strong>«Оформим всё за неделю», «У меня свой человек в USCIS»</strong> — officer'ы USCIS принимают решения по конкретным правилам, а не по личным знакомствам. Обещание результата через «связи» — это либо обман, либо предложение незаконного.",
            "<strong>Только наличные, без квитанции, без письменного договора</strong> — лицензированный адвокат обязан оформлять engagement letter и принимать оплату прозрачно.",
            "<strong>Отказ показать California Bar number или лицензию другого штата</strong> — настоящий адвокат всегда укажет свой Bar number; его легко проверить онлайн (см. ниже).",
            "<strong>Заполняют формы от вашего имени без вашей подписи</strong> или забирают оригиналы документов и не возвращают — в зависимости от обстоятельств это может составлять unauthorized practice of law или подделку документов.",
            "<strong>Реклама в соцсетях без названия фирмы, адреса или Bar number</strong> — солидный адвокат не прячется за никнеймом.",
            "<strong>«Не нужно идти на интервью / суд лично»</strong> — иммиграционное интервью и суд требуют личного присутствия. Никто не может «оформить через знакомых» без вашего участия.",
          ],
        },
      ],
    },
    {
      title: "Как проверить, что перед вами настоящий адвокат",
      body: [
        "Это занимает 2 минуты:",
        {
          list: [
            "<strong>California State Bar — поиск адвоката.</strong> Зайдите на <a href=\"https://apps.calbar.ca.gov/attorney/Licensee/Search\" target=\"_blank\" rel=\"noopener noreferrer\">apps.calbar.ca.gov/attorney/Licensee/Search</a> и введите имя или Bar number. Должно быть указано «Active», без disciplinary actions. Адвокат «Inactive» не имеет права представлять клиентов.",
            "<strong>Bar number фирмы.</strong> Лицензированный адвокат указывает Bar number на сайте, в подписи писем и в engagement letter. Если номера нет нигде — это плохой знак.",
            "<strong>Адрес офиса.</strong> Настоящая фирма имеет физический адрес. P.O. Box без офиса — повод задать вопрос.",
            "<strong>Соглашение в письменном виде.</strong> California требует от адвокатов письменного engagement letter, где указаны: гонорар, объём услуг, реквизиты адвоката, право клиента расторгнуть договор. Если соглашение не дают — уходите.",
            "<strong>Жалобы на адвоката.</strong> На сайте California State Bar в карточке адвоката отображается история дисциплинарных дел. Несколько жалоб — серьёзный сигнал.",
          ],
        },
      ],
    },
    {
      title: "Если вы уже стали жертвой",
      body: [
        "Куда обращаться — все эти каналы бесплатные:",
        {
          list: [
            "<strong>California State Bar</strong> — жалоба на адвоката или на человека, выдающего себя за адвоката: <a href=\"https://www.calbar.ca.gov/Public/Complaints-Claims/Attorney-Complaints\" target=\"_blank\" rel=\"noopener noreferrer\">calbar.ca.gov/Public/Complaints-Claims</a>. Телефон Lawyer Referral Service: <a href=\"tel:+18664422529\">1-866-442-2529</a>.",
            "<strong>USCIS — Avoid Scams.</strong> Официальная страница USCIS со ссылками на отчётные формы: <a href=\"https://www.uscis.gov/avoid-scams\" target=\"_blank\" rel=\"noopener noreferrer\">uscis.gov/avoid-scams</a>.",
            "<strong>FTC Report Fraud.</strong> Федеральная торговая комиссия принимает жалобы на immigration scams: <a href=\"https://reportfraud.ftc.gov\" target=\"_blank\" rel=\"noopener noreferrer\">reportfraud.ftc.gov</a>.",
            "<strong>California Department of Justice — Immigration Services Complaint.</strong> Прокуратура штата принимает жалобы на «иммиграционных консультантов»: <a href=\"https://oag.ca.gov/immigrant/complaint\" target=\"_blank\" rel=\"noopener noreferrer\">oag.ca.gov/immigrant/complaint</a>.",
            "<strong>Local Sheriff или Police.</strong> Если у вас забрали документы и не возвращают — это уголовное преступление, обращайтесь в полицию.",
          ],
        },
        "Жалобу можно подать на русском или английском. Калифорния — sanctuary state, и большинство государственных органов штата не передают иммиграционные данные федеральным властям. Если ваш иммиграционный статус нестандартный — обсудите подачу жалобы с адвокатом до обращения.",
      ],
    },
    {
      title: "Чем отличается настоящий иммиграционный адвокат",
      body: [
        "Иммиграционное право — федеральное, поэтому адвокат, лицензированный в любом штате США, может вести иммиграционные дела по всей стране. Что должно быть у настоящего адвоката:",
        {
          list: [
            "<strong>Лицензия Bar Association</strong> хотя бы одного штата с действующим статусом",
            "<strong>Письменный договор</strong> с указанием гонорара, объёма работы и условий расторжения",
            "<strong>Прозрачная оплата</strong> — чеки, квитанции, безналичные платежи",
            "<strong>Готовность объяснить риски</strong> — настоящий адвокат расскажет и про слабые стороны вашего дела, а не только пообещает успех",
            "<strong>Личное представительство</strong> — адвокат сам ведёт ваше дело, не передаёт «помощнику без лицензии»",
            "<strong>Связь</strong> — фирма доступна для вопросов в течение разумного срока, особенно перед интервью или судом",
          ],
        },
      ],
    },
    {
      title: "Если у вас остались вопросы",
      body: [
        "Проверка адвоката и осознанный выбор — лучшая защита от ошибок. Если вы хотите убедиться, что ваше дело ведёт лицензированный профессионал, или ищете адвоката с нуля — наш офис открыт для оценки ситуации.",
        `${FIRM} — Jacob Shidaev, California State Bar #343616 (действующий член), допуски в федеральные суды Калифорнии и иммиграционные суды во всех 50 штатах. Напишите <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> или позвоните <a href="tel:+14245584141">${FIRM_PHONE}</a>. Консультация платная; её цель — оценить вашу ситуацию и обсудить, какие шаги имеют смысл.`,
      ],
    },
  ],
};

export const fraudWarningEn: LegalContent = {
  eyebrow: "For future clients",
  title: "Immigration scams: how to recognize them",
  lastUpdated: "Last updated: June 1, 2026",
  intro:
    "Immigrants in the United States are targeted not only by attorneys. Every year, thousands of people lose money — and sometimes their immigration status — to unauthorized \"helpers\" who have no right to represent a client in immigration court. This page explains how to tell a real attorney from a scammer, and where to turn if you have already been harmed.",
  sections: [
    {
      title: "Who are \"notarios\"",
      body: [
        "In Latin America and parts of the former Soviet Union, a <strong>notario público</strong> or \"notary\" is a highly qualified lawyer. In the United States, a <strong>notary public</strong> is something completely different — a person authorized only to witness signatures. Filling out immigration forms on your behalf, representing your interests before USCIS, or appearing in immigration court is <strong>not</strong> within a notary's authority under U.S. law.",
        "When an \"immigration consultant\" or \"notary\" promises to obtain asylum, a green card, or relief from removal, they are either engaged in the unauthorized practice of law, or going through the motions of preparing forms without understanding the consequences. Errors on those forms regularly cost people their case, lead to deportation, or trigger multi-year bars from re-entering the country.",
      ],
    },
    {
      title: "Red flags — when to walk away",
      body: [
        "Any of these signals is reason to refuse the contract and verify who you are dealing with:",
        {
          list: [
            "<strong>\"I guarantee a green card / asylum / a successful outcome.\"</strong> No one can guarantee a decision by USCIS or an immigration judge. For licensed attorneys this is a violation of the California Rules of Professional Conduct; for anyone else it is a hallmark of a scam.",
            "<strong>\"We can do it in a week,\" \"I have someone inside USCIS.\"</strong> USCIS officers decide cases under specific rules, not personal favors. Anyone promising results through \"connections\" is either misleading you or proposing something unlawful.",
            "<strong>Cash only, no receipt, no written agreement.</strong> A licensed attorney is required to provide an engagement letter and to process payments transparently.",
            "<strong>Refusal to provide a California Bar number or a license number from another state.</strong> A real attorney will always provide their Bar number; you can verify it online (see below).",
            "<strong>Filing forms in your name without your signature</strong>, or taking your original documents and refusing to return them — depending on the circumstances, this may constitute unauthorized practice of law or document fraud.",
            "<strong>Ads on social media without a firm name, office address, or Bar number.</strong> A reputable attorney does not hide behind a nickname.",
            "<strong>\"You don't need to appear at the interview / hearing in person.\"</strong> Immigration interviews and court appearances require your physical presence. No one can \"handle it through contacts\" without you.",
          ],
        },
      ],
    },
    {
      title: "How to verify that you are dealing with a real attorney",
      body: [
        "This takes two minutes:",
        {
          list: [
            "<strong>California State Bar — attorney search.</strong> Go to <a href=\"https://apps.calbar.ca.gov/attorney/Licensee/Search\" target=\"_blank\" rel=\"noopener noreferrer\">apps.calbar.ca.gov/attorney/Licensee/Search</a> and enter the name or Bar number. The status must say \"Active,\" with no disciplinary actions. An \"Inactive\" attorney is not authorized to represent clients.",
            "<strong>Firm Bar number.</strong> A licensed attorney will display the Bar number on the website, in email signatures, and in the engagement letter. If you cannot find it anywhere, that is a warning sign.",
            "<strong>Office address.</strong> A real firm has a physical office. A P.O. Box without an address is a reason to ask questions.",
            "<strong>Written engagement agreement.</strong> California requires attorneys to provide a written engagement letter listing the fee, scope of services, attorney's credentials, and the client's right to terminate. If no agreement is offered — walk away.",
            "<strong>Disciplinary history.</strong> The California State Bar attorney profile shows past disciplinary actions. A pattern of complaints is a serious signal.",
          ],
        },
      ],
    },
    {
      title: "If you have already been harmed",
      body: [
        "Where to report — all of these channels are free:",
        {
          list: [
            "<strong>California State Bar</strong> — complaint against an attorney or someone holding themselves out as an attorney: <a href=\"https://www.calbar.ca.gov/Public/Complaints-Claims/Attorney-Complaints\" target=\"_blank\" rel=\"noopener noreferrer\">calbar.ca.gov/Public/Complaints-Claims</a>. Lawyer Referral Service: <a href=\"tel:+18664422529\">1-866-442-2529</a>.",
            "<strong>USCIS — Avoid Scams.</strong> Official USCIS page with links to reporting forms: <a href=\"https://www.uscis.gov/avoid-scams\" target=\"_blank\" rel=\"noopener noreferrer\">uscis.gov/avoid-scams</a>.",
            "<strong>FTC Report Fraud.</strong> The Federal Trade Commission accepts complaints about immigration scams: <a href=\"https://reportfraud.ftc.gov\" target=\"_blank\" rel=\"noopener noreferrer\">reportfraud.ftc.gov</a>.",
            "<strong>California Department of Justice — Immigration Services Complaint.</strong> The state Attorney General accepts complaints against \"immigration consultants\": <a href=\"https://oag.ca.gov/immigrant/complaint\" target=\"_blank\" rel=\"noopener noreferrer\">oag.ca.gov/immigrant/complaint</a>.",
            "<strong>Local sheriff or police.</strong> If your documents have been taken and not returned, that is a criminal offense — file a police report.",
          ],
        },
        "Reports can be filed in English or Russian. California is a sanctuary state, and most state agencies do not share immigration data with federal immigration enforcement. If your immigration status is uncertain, discuss filing a complaint with an attorney first.",
      ],
    },
    {
      title: "What a real immigration attorney looks like",
      body: [
        "Immigration law is federal, so an attorney licensed in any U.S. state can handle immigration matters nationwide. What a real attorney provides:",
        {
          list: [
            "<strong>Bar Association license</strong> in at least one state, in active status",
            "<strong>A written engagement agreement</strong> listing the fee, the scope of work, and termination terms",
            "<strong>Transparent payment</strong> — receipts, invoices, traceable payment methods",
            "<strong>Willingness to discuss risk</strong> — a real attorney will explain weaknesses in your case, not only promise success",
            "<strong>Personal representation</strong> — the attorney handles your matter, not an unlicensed \"helper\"",
            "<strong>Communication</strong> — the firm is reachable within reasonable time, especially before an interview or hearing",
          ],
        },
      ],
    },
    {
      title: "If you still have questions",
      body: [
        "Verifying your attorney and making an informed choice is the best protection from mistakes. If you want to confirm that your case is being handled by a licensed professional, or you are looking for an attorney from scratch — our office is open to assess the situation.",
        `${FIRM} — Jacob Shidaev, California State Bar #343616 (member in good standing), admitted to federal district courts in California and immigration courts nationwide. Email <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> or call <a href="tel:+14245584141">${FIRM_PHONE}</a>. Consultations are paid; the purpose is to assess your situation and discuss what next steps make sense.`,
      ],
    },
  ],
};
