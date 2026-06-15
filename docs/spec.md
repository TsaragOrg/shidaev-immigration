# Global Spec — Shidaev Immigration

Общее описание проекта. Что/Зачем/Из чего. Без правил, без процедур.

Это вход для человека (Zouli, Maga, ревьюер, новый AI). Прочитал → за 5 минут понял проект.

---

## 1. Что это

Веб-сайт **Law Offices of Jacob Shidaev** — иммиграционного адвоката в Калифорнии (Sherman Oaks, обслуживание по всем США).

Билингв: **RU дефолт** + **EN зеркало** через `/en/*`.

Функционально: информационный сайт + контактные каналы + блог.

---

## 2. Зачем (цели сайта)

| Цель | Как достигается |
|---|---|
| Первый контакт потенциального клиента | Hero CTA, Calendly, телефон, email, WhatsApp, intent grid на /contact |
| Trust signals | Credentials (бар-номер, EOIR), отзывы клиентов, Fraud Warning |
| SEO под иммиграционные запросы | Статические страницы, sitemap, JSON-LD, alt-тексты |
| Образовательный контент | Блог через Sanity CMS, ведёт Jacob/Maga |
| Compliance | Полный legal-пакет: Privacy, Legal Notice, Terms, Accessibility, Fraud Warning |

---

## 3. Аудитория

| Группа | Язык | Особенности |
|---|---|---|
| Русскоязычные иммигранты в США | RU | Основная. Часто ищут адвоката для близкого, не для себя. |
| Англоязычные клиенты | EN | Вторичная. Через органический поиск. |
| Family/friends ищущие адвоката | RU/EN | Decision maker не = end client. CTA должны работать «передать ссылку родственнику». |

Решение Zouli: **чеченский на сайте НЕ упоминаем** (есть в `docs/facts/project-facts.md`).

---

## 4. Состав сайта

### Публичные страницы

| Маршрут | Назначение |
|---|---|
| `/` | Главная: первый контакт + краткий обзор |
| `/about` | Биография, credentials, подход |
| `/practice` | Детальные описания 4 практик |
| `/contact` | Intent grid + каналы + Calendly |
| `/blog` | Список публикаций |
| `/blog/[slug]` | Страница публикации |
| `/legal` | Legal Notice (правовое уведомление) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/accessibility` | Accessibility Statement |
| `/fraud-warning` | Fraud Warning (immigration scams) |

Каждая страница есть в RU (корневой) и EN (`/en/*`).

### Служебные

| Маршрут | Назначение |
|---|---|
| `/studio` | Sanity Studio (CMS для блога) |
| `/sitemap.xml` | XML sitemap (генерация) |
| `/robots.txt` | robots |
| 404 | Кастомная страница |

### Секции главной (порядок)

1. **Hero** — фото Jacob, имя, eyebrow с credentials, две CTA
2. **Practice** — 4 направления карточками
3. **Adversarial** — наш подход (философия защиты)
4. **Credentials** — admissions (бар, EOIR, SoCal)
5. **Reviews** — отзывы клиентов
6. **Journal** — свежая публикация из блога
7. **FinalCTA** — последний экран «связаться»

---

## 5. 4 направления практики

| # | Направление | Differentiator |
|---|---|---|
| I | Защита убежища (Asylum defense) | Affirmative + defensive |
| II | Федеральные суды (Federal litigation) | **Главное отличие.** Habeas, Mandamus, TRO, BIA Appeals. Большинство иммигр. фирм этим не занимается. |
| III | Защита от депортации (Removal defense) | EOIR proceedings, cancellation, withholding, CAT |
| IV | Помощь задержанным (Detained representation) | Освобождение из-под стражи |

---

## 6. Технологический стек

| Слой | Технология | Версия |
|---|---|---|
| Framework | Next.js | 16.2.x (App Router) |
| UI runtime | React | 19.2 |
| Язык | TypeScript | strict |
| Стили — основа | Свой CSS-split | 41 файл в `src/styles/` |
| Стили — утилиты | Tailwind v4 | для ad-hoc spacing/layout в JSX |
| CMS (блог) | Sanity | v5, Studio на `/studio` |
| Хостинг | Vercel | auto-deploy с `main` |
| Шрифты | EB Garamond (serif) + Inter (sans) | Google Fonts |
| Иконки | Inline SVG | без библиотеки |

**Гибрид стилей:** основная нагрузка на CSS-split (по файлу на секцию), Tailwind используется параллельно в нескольких компонентах (Journal, BlogIndex, PostCardMedium, ContactPage) для утилитарных классов. Подробности — `.claude/rules/design-system.md`.

Список зависимостей — `package.json`.

**Dead dependency:** `styled-components` присутствует в `package.json`, но в коде не используется. Уборка — отдельная задача.

---

## 7. Формы и интеграции

| Интеграция | Что делает | Как встроена |
|---|---|---|
| Calendly | Запись на консультацию | Popup-режим только на `/contact` (с других страниц CTA ведут на `/contact`). Детали — `docs/04-функции/запись-на-консультацию.md`. |
| `mailto:` | Email | Прямые ссылки на `info@shidaev.com` |
| `tel:` | Звонок | Клик-в-звонок `+14245584141` |
| WhatsApp | Тот же номер | Срочный канал, открывается ссылкой |
| Sanity | CMS блога | Studio embedded в `/studio`, контент в Sanity Cloud |

**НЕ интегрировано:**
- Custom form submission backend — нет.
- Платежи (Stripe/PayPal) — нет.
- Live chat / интерком — нет.
- Email-маркетинг (Mailchimp/ConvertKit) — нет.
- Analytics — пока не подключено (см. `docs/state.md`).

---

## 8. Архитектура (верхний уровень)

- **Static generation** для статических страниц (About, Practice, Contact, Legal).
- **ISR / on-demand revalidate** для блога (Sanity).
- **i18n**: RU — корневые роуты, EN — зеркало через `/en/[...]`. Без `next-intl` — раздельные роуты вручную.
- **Каждая секция = 1 React-компонент + 1 CSS-файл.** Изоляция стилей.
- **Mobile-first** в стилях. Брейкпоинты только когда нужно.

Детали поведения отдельных функций — `docs/04-функции/*.md`.

---

## 9. Контент-менеджмент

| Что | Кто меняет | Как |
|---|---|---|
| Блог-публикации | Jacob / Maga | Через Sanity Studio `/studio` |
| Категории блога | Jacob / Maga | Через Sanity Studio |
| Статические страницы (Hero, About, Practice, Contact) | Zouli через меня | Правки в коде, через AGENTS.md правил |
| Legal-страницы | Только Zouli + ревью | Особый осторожный режим, юр. формулировки |

Гайд для Jacob/Maga по Sanity — `docs/for-jacob/sanity-guide.md`.

---

## 10. Принципиально не делаем

Эти решения зафиксированы и не пересматриваются без отдельного обсуждения:

- Платежи на сайте (Stripe/PayPal)
- Custom-формы приёма заявок (используется Calendly + mailto/tel)
- Subscription / membership модели
- Чат-бот
- Личные правовые консультации без подтверждения адвоката
- Personalized investment / financial advice (вообще не профиль)

---

## 11. Где живёт

**Текущий статус: домен `shidaev.com` ЕЩЁ НЕ ПОДКЛЮЧЁН.** Вся инфраструктура временно на аккаунтах Zouli (`doukhaeva-design` / `zulihan1993`). Когда Jacob/Maga подтвердят готовность — домен переносится к Jacob, аккаунты передаются.

| Что | Где | Чей аккаунт |
|---|---|---|
| **Live URL** | `https://shidaev-immigration.vercel.app` (Vercel preview-домен) | Zouli |
| **Домен `shidaev.com`** | ❌ НЕ подключён (планируется к Jacob) | — |
| **Repo** | `github.com/doukhaeva-design/shidaev-immigration` (private) | Zouli |
| **Vercel project** | `shidaev-immigration` | Zouli |
| **Sanity Studio** | `/studio` на проде, project ID в `.env.local` | Zouli |
| **Calendly** | `calendly.com/zulihan1993/30min` | Zouli (тест) |

В коде (`robots.ts`, `sitemap.ts`, `metadataBase`, JSON-LD) URL `https://shidaev.com` уже зашит — это canonical для SEO. После подключения домена работает автоматически, переписывать ничего не надо.

**Email `info@shidaev.com`** — работает ли сейчас, требует уточнения (мейл-сервис на домене должен быть настроен отдельно от веб-домена).

Текущий статус и журнал изменений — `docs/state.md`.
