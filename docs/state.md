# State — текущий статус проекта

Живой журнал. Где сейчас стоим, что менялось, что висит.

Обновляется когда меняется что-то существенное. Описание самого продукта — `docs/spec.md`. Открытые вопросы — `docs/facts/open-questions.md`.

---

## Где проект сейчас

- **Стадия:** Готов к запуску. **НЕ в проде** — домен `shidaev.com` ещё не подключён, живёт на Vercel preview (`shidaev-immigration.vercel.app`).
- **Инфраструктура** временно на аккаунтах Zouli. Когда Jacob/Maga подтвердят готовность — передача (см. «Что отложено / открыто» ниже).
- **Последний релизный коммит на main:** см. журнал ниже или `git log`.

Полные URL'ы и стек — `docs/spec.md` § 11.

---

## Журнал изменений (формат 6 полей для закрытия этапов, 4 поля для обычных правок)

### 2026-07-07 — Home Hero opens Calendly directly

- **Что меняла:** Hero CTA на главной больше не ведёт на `/contact`: он открывает Calendly popup напрямую. Вынесла общую Calendly-логику в `src/components/booking/CalendlyBookingButton.tsx` и загрузку widget assets в `CalendlyWidgetAssets.tsx`; `/contact` использует тот же CTA-компонент. CTA рендерится как `button`, чтобы клик не запускал внешний navigation/loading state сайта перед popup. Обновила specs/facts/design catalog под новый поток.
- **На что опиралась:** запрос Zouli в текущем чате, `docs/04-функции/запись-на-консультацию.md`, `docs/spec.md` § 7, `docs/facts/project-facts.md`, `docs/04-функции/i18n.md`, `.claude/rules/design-system.md`, `.claude/rules/content-edit.md`, `src/components/home/Hero.tsx`, `src/components/pages/ContactPage.tsx`, `src/lib/calendly.ts`.
- **Что НЕ затронуло:** FinalCTA/About/Practice/Blog CTA всё ещё ведут на `/contact`; Calendly URL/env, consultation price env, phone/email/WhatsApp fallback, legal/compliance pages и внешний payment setup.
- **Открытые вопросы:** Если Jacob захочет, чтобы все CTA открывали Calendly напрямую, отдельно расширить поведение на остальные компоненты.

### 2026-07-07 — Consultation price moved to env

- **Что меняла:** Цена 30-минутной консультации на `/contact` теперь берётся из `NEXT_PUBLIC_CONSULTATION_PRICE_USD` с fallback `$50`. Добавила `src/lib/consultation.ts`, обновила RU/EN строки ContactPage, `.env.example`, booking spec и список проверок перед запуском.
- **На что опиралась:** `AGENTS.md`, `.claude/rules/design-system.md`, `.claude/rules/content-edit.md`, `docs/facts/project-facts.md`, `docs/04-функции/i18n.md`, `docs/04-функции/запись-на-консультацию.md`, `docs/facts/data-to-verify.md`, `docs/facts/open-questions.md`, `docs/spec.md`, `src/components/pages/ContactPage.tsx`, `src/lib/calendly.ts`, `.env.example`.
- **Что НЕ затронуло:** Calendly event URL и popup-поведение, главная/About/Practice CTA без цены, legal/compliance body-тексты, реальные настройки Calendly/Stripe/LawPay вне сайта.
- **Открытые вопросы:** Перед запуском Vercel env и платёжный/Calendly event должны иметь ту же цену `50`.

### 2026-06-17 — Contact form removed

- **Что меняла:** Убрала с `/contact` модалку «Написать письмо» и весь runtime отправки формы через внешний endpoint. Удалила `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` из `.env.example` и `siteConfig`, убрала Formspree/fallback CSS из глобального bundle, обновила specs/open questions/data-to-verify под решение: контакт только через Calendly, email, phone и WhatsApp.
- **На что опиралась:** запрос Zouli в текущем чате, `docs/04-функции/формы.md`, `docs/spec.md` § 7, `.claude/rules/design-system.md`, `.claude/rules/content-edit.md`, `src/components/pages/ContactPage.tsx`, `src/lib/site-config.ts`, `src/styles/README.md`.
- **Что НЕ затронуло:** Calendly popup и `NEXT_PUBLIC_CALENDLY_URL`, прямые `mailto:`/`tel:`/WhatsApp-ссылки, офисная карта, legal body-тексты Legal Notice / Privacy / Terms / Accessibility / Fraud Warning.
- **Открытые вопросы:** Legal pages всё ещё содержат общие упоминания contact forms; это отдельный legal/compliance проход, если Zouli подтвердит замену формулировок.

### 2026-06-17 — Consultation payment non-refund clause

- **Что меняла:** Добавила в Terms of Use RU/EN отдельную секцию об оплате консультаций: после завершения платежа оплата консультации не возвращается. Обновила дату Terms на 17 июня 2026.
- **На что опиралась:** подтверждение Zouli в текущем чате, `AGENTS.md` legal/compliance stop, `docs/04-функции/юридические-страницы.md`, `.claude/rules/content-edit.md`, `src/lib/legal/terms.ts`.
- **Что НЕ затронуло:** Legal Notice, Privacy Policy, Accessibility Statement, Fraud Warning, admissions/pro hac vice формулировки, no attorney-client relationship disclaimer, публичные CTA и Calendly/payment integration.
- **Открытые вопросы:** нет.

### 2026-06-17 — Blog translation slug fallback

- **Что меняла:** Упростила workflow переводов в Sanity: slug теперь обязателен только у первой языковой версии. Если у перевода slug пустой, публичные blog queries, detail route, language switch, related posts, latest posts и sitemap используют slug связанной статьи через `translation->slug.current`.
- **На что опиралась:** `docs/04-функции/блог.md`, `docs/04-функции/i18n.md`, `docs/for-jacob/sanity-guide.md`, `src/sanity/lib/queries.ts`, `src/app/sitemap.ts`, `src/sanity/schemaTypes/post.ts`, реальная Sanity-пара `first-immigration-consultation` EN/RU.
- **Что НЕ затронуло:** Тексты статей, категории, Sanity dataset content после ручной фиксации текущей пары, legal/compliance pages, публичный дизайн карточек/статьи.
- **Открытые вопросы:** нет. Официальный workflow: создать первую версию с Generate slug → создать перевод → выбрать `Translation of` → Publish.

### 2026-06-17 — Favicon and app icons

- **Что меняла:** Добавила новый favicon в фирменном регистре Shidaev: SVG source `src/app/icon.svg`, Apple touch icon `src/app/apple-icon.png`, обновлённый multi-size `src/app/favicon.ico`. Подключила иконки явно через `metadata.icons` в публичном site layout.
- **На что опиралась:** `docs/04-функции/seo.md`, `docs/04-функции/i18n.md`, `docs/spec.md` § 4/6, `.claude/rules/design-system.md`, `src/styles/00-tokens-base.css`, `src/app/(site)/layout.tsx`, текущий `src/app/favicon.ico`.
- **Что НЕ затронуло:** Open Graph images, Twitter cards, sitemap/robots, legal/compliance pages, Sanity Studio metadata, публичные тексты RU/EN.
- **Открытые вопросы:** нет.

### 2026-06-17 — Sanity blog translation slug sync

- **Что меняла:** Обновила Sanity-схему `post`: slug теперь уникален внутри одного языка, но может совпадать у RU/EN перевода. `translation` переведён в weak reference, чтобы связь перевода не блокировала удаление статьи. Расширила `autoLinkTranslations`: при Publish связанная пара публикаций получает общий slug, обратная `translation` reference проставляется автоматически и записывается слабой ссылкой. При Delete Studio сначала снимает `translation` у связанных статей, затем удаляет выбранную публикацию. Для переводов slug можно не заполнять вручную, если выбран `Translation of` на статью со slug.
- **На что опиралась:** `docs/04-функции/блог.md`, `docs/04-функции/i18n.md`, `docs/spec.md` § 6, `.claude/rules/design-system.md`, `src/sanity/schemaTypes/post.ts`, `src/sanity/plugins/autoLinkTranslations.ts`, `src/components/blog/BlogArticle.tsx`, `src/app/(site)/blog/[slug]/page.tsx`, `src/app/(site)/en/blog/[slug]/page.tsx`, `docs/for-jacob/sanity-guide.md`.
- **Что НЕ затронуло:** Публичный дизайн статьи, GROQ-запросы чтения, legal/compliance страницы, тексты статических RU/EN страниц, категории, авторы, sitemap.
- **Открытые вопросы:** Для уже опубликованных старых пар с разными slug нужно один раз переопубликовать одну из связанных статей или вручную выровнять slug в Studio. Для удаления старых пар достаточно использовать обновлённую Studio: delete-action снимет старую hard reference перед удалением.

### 2026-06-15 — Mobile hero/about images optimized

- **Что меняла:** Заменила прямые mobile `srcSet` на lightweight WebP variants: `shidaev-mobile-hero-800/1200.webp` и `shidaev-about-mobile-800/1200.webp`. Удалила старые PNG `shidaev-mobile-hero.png` (7.0 MB) и `shidaev-about-mobile.png` (3.3 MB), которые браузер скачивал напрямую мимо `next/image`. Убрала `priority` preload с desktop fallback hero image, чтобы mobile не запрашивал лишнюю desktop-картинку.
- **На что опиралась:** `src/components/home/Hero.tsx`, `src/components/pages/AboutPage.tsx`, размеры файлов в `public/photos/`, mobile CSS в `src/styles/18-hero-mobile.css` и `src/styles/06-story.css`.
- **Что НЕ затронуло:** Desktop hero image, текст RU/EN, layout секций, Sanity images, legal/compliance pages.
- **Открытые вопросы:** нет. Ожидаемый эффект: mobile hero скачивает ~13-25 KB WebP вместо 7.0 MB PNG; about mobile скачивает ~18-30 KB WebP вместо 3.3 MB PNG.

### 2026-06-15 — Публичные интеграционные URL вынесены в config

- **Что меняла:** Добавила `src/lib/site-config.ts` как единый источник для `NEXT_PUBLIC_SITE_URL`, контактных ссылок, адреса, соцсетей, Google Reviews URL, Google Maps iframe и hero fallback image. Подключила config в Header, Footer, ContactPage, FinalCTA, Reviews, Adversarial, sitemap, robots, metadata, Article JSON-LD и Attorney JSON-LD. Form endpoint позже удалён отдельным решением.
- **На что опиралась:** `docs/spec.md` § 7/11, `docs/04-функции/формы.md`, `docs/04-функции/seo.md`, `docs/facts/data-to-verify.md`, `src/components/pages/ContactPage.tsx`, `src/components/home/Reviews.tsx`, `src/components/seo/AttorneyJsonLd.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`.
- **Что НЕ затронуло:** Legal Notice / Privacy / Terms / Accessibility / Fraud Warning body-тексты и их локальные legal constants; их править только отдельным legal/compliance проходом. Также не меняла фактические значения телефона, email, адреса, соцсетей и Google Reviews fallback.
- **Открытые вопросы:** `NEXT_PUBLIC_GOOGLE_REVIEWS_URL` пока generic/fallback; адрес офиса и соцсети требуют подтверждения Jacob/Maga.

### 2026-06-15 — Calendly вынесен в env-конфиг

- **Что меняла:** Убрала hardcoded Calendly URL из `ContactPage`: теперь `/contact` берёт URL из `NEXT_PUBLIC_CALENDLY_URL`, добавляет widget-параметры централизованно в `src/lib/calendly.ts`, а `.env.example` содержит текущий demo URL.
- **На что опиралась:** `docs/spec.md` § 7/11, `docs/04-функции/запись-на-консультацию.md`, `docs/facts/data-to-verify.md`, `docs/facts/open-questions.md`, `src/components/pages/ContactPage.tsx`, `.env.example`.
- **Что НЕ затронуло:** Поведение popup, RU/EN тексты страницы, legal/compliance страницы, альтернативные каналы phone/email/WhatsApp.
- **Открытые вопросы:** Production Calendly всё ещё нужен от Jacob/Maga; при запуске заменить `NEXT_PUBLIC_CALENDLY_URL` в Vercel env на календарь Jacob.

### 2026-06-15 — Hover-эффекты убраны с touch/mobile

- **Что меняла:** Перенесла оставшиеся CSS `:hover`-эффекты в `@media (hover: hover)` в header, hero, reviews, journal, final CTA, practice page, footer, mobile controls и contact channels. Старый `19-touch-hover-reset.css` оставлен как placeholder без touch-hover overrides, чтобы mobile больше не зависел от сбросов после tap.
- **На что опиралась:** `AGENTS.md`, `/Users/magomedsouleymanov/AGENTS.md`, `/Users/magomedsouleymanov/00_Codex_Knowledge/CURRENT_CONTEXT.md`, `/Users/magomedsouleymanov/00_Codex_Knowledge/ACTIVE_WORK.md`, `docs/spec.md` § 6/8, `.claude/rules/design-system.md`, `docs/04-функции/доступность.md`, `src/styles/README.md`.
- **Что НЕ затронуло:** React-компоненты, тексты RU/EN, legal/compliance страницы, дизайн-токены, порядок импортов CSS в `src/app/globals.css`.
- **Открытые вопросы:** нет. Проверено: механический scan подтвердил, что все `:hover` в `src/styles/` находятся внутри `@media (hover: hover)`; `npm run lint` и `npm run build` проходят; локальная проверка в браузере на `390x844` touch показала `hover: none`, на desktop — `hover: hover`.

### 2026-06-15 — Sanity launch error + image-url warning

- **Что меняла:** Исправила импорт `@sanity/image-url` в `src/sanity/lib/image.ts`: deprecated default export заменён на named export `createImageUrlBuilder`.
- **На что опиралась:** `docs/spec.md` § 6/11, `docs/04-функции/блог.md`, `docs/04-функции/seo.md`, `.env.local`, `.next/dev/logs/next-development.log`, `src/sanity/env.ts`, `src/sanity/lib/client.ts`, `src/sanity/lib/image.ts`.
- **Что НЕ затронуло:** Sanity dataset/project ID, GROQ-запросы, схемы Studio, контент блога, маршруты `/blog` и `/studio`.
- **Открытые вопросы:** нет. Ошибка `Dataset "productionposts" not found` была от старого значения env в запущенном dev server; текущий `.env.local` содержит `NEXT_PUBLIC_SANITY_DATASET=production`, локальная главная отвечает `200 OK`.

### 2026-06-06 — Реверс-индекс строк в design-system.md

- **Что меняла:** В `.claude/rules/design-system.md` добавила колонку «Характерные строки» к таблице секций. Для каждой секции — 1-3 уникальные фразы из реального кода. Особо выделено: «Trial-Trained» / «С судебным опытом» → story-badge на About (НЕ Hero). В Матрице задач AGENTS.md добавила первый шаг «искать строку в design-system.md колонке "Характерные строки"».
- **На что опиралась:** реальные строки grep'нула из src/components/home/*.tsx и src/components/pages/*.tsx, отчёт холодного агента-теста (4/5 — нашёл проблему реверс-индекса), AboutPage.tsx:46+109 для подтверждения badge
- **Что НЕ затронуло:** код проекта, контент сайта
- **Открытые вопросы:** нет

### 2026-06-06 — Этап 3.5 (Фиксация документации) применён ретроспективно

- **Что произведено:** AGENTS.md (с Матрицей задач), 11 файлов в `docs/04-функции/` (запись-на-консультацию, i18n, блог, выбор-темы-обращения, intro-мобайл, seo, формы, аналитика, доступность, юридические-страницы, README). Обновлены `docs/spec.md`, `docs/state.md`, `docs/facts/project-facts.md`.
- **На что опиралась:** существующий код в `src/`, `package.json`, ранее существующие docs/spec.md и docs/specs/*, отчёт холодного агента-аудитора, отчёт архитектора, `~/.claude/skills/web-spec-freeze/SKILL.md` шаблон
- **Что НЕ затронуло:** код проекта (src/) — только документация
- **Открытые вопросы:** см. ниже «Что отложено / открыто» + cold-reader audit нашёл 7+ слабых мест в feature specs (intro-мобайл «проверить», дубли Calendly данных, шаблон 7 секций не везде) — НЕ починены в этой сессии
- **Запрос подтверждения:** Спек-фриз применён к Шидаеву (он сданный проект, ретроспективно). Подтверди — система зафиксирована, дальше работаем по Матрице задач?
- **Ответ Zouli:** ✅ Подтверждено 2026-06-06. Дальше работаем по Матрице задач из AGENTS.md.

### 2026-06-04..06 — Реорганизация документации

- **Что меняла:** Перенесла 15 .md в `docs/`, AGENTS.md в корне, `.claude/rules/`, создала feature specs. Выровняли описания под реальность кода (Tailwind в стек, маршруты legal, Calendly URL = тест на Zouli). Чистка мусора: удалили legacy book-* CSS (28, 29, 30), убрали `styled-components` dead dep.
- **На что опиралась:** агент-аудитор холодного чтения, package.json, существующий src/, отчёт архитектора
- **Что НЕ затронуло:** функциональность сайта, поведение
- **Открытые вопросы:** домен `shidaev.com` не подключён, Calendly URL временно на Zouli

### Ранее

- 2026-06-04..06: Визитки Jacob — отдельный артефакт, перенесены в `~/Desktop/Vizitki-Shidaev-Print/mockups/`
- 2026-06-02..03: CSS-split — 41 файл по секциям
- 2026-06-01: Phase 8 delivery-summary draft
- ранее: Phases 1-7 (запуск, базовые страницы, блог, legal-пакет, UX-полировка)

Полный лог — `git log`.

---

## Что в работе сейчас

- ✅ Реорганизация документации (закончила).
- 🟡 Будут скиллы (`.claude/skills/`) — позже, когда Zouli подтвердит имена и приоритет.

---

## Что висит на Zouli (требует её действия)

См. `docs/facts/open-questions.md` — там полный список вопросов для Maga/Jacob.

Кратко:
- Подтверждение мелких compliance-формулировок
- Финальные фото для блог-постов
- Решение по analytics (подключать ли и какой)

---

## Что отложено / открыто

**Передача Jacob (когда боевой запуск):**
- **Домен `shidaev.com`** — ещё не подключён, инфраструктура на аккаунтах Zouli. При передаче: домен → Jacob, Vercel project → передача, Sanity dataset → передача (или сборка нового на его org).
- **Canonical URL** — `NEXT_PUBLIC_SITE_URL` сейчас указывает на `https://shidaev.com`; проверить Vercel env при подключении домена.
- **Calendly URL** — `NEXT_PUBLIC_CALENDLY_URL` сейчас указывает на `calendly.com/zulihan1993/30min` (тест). Заменить env-переменную на календарь Jacob.
- **Google Reviews URL** — `NEXT_PUBLIC_GOOGLE_REVIEWS_URL` пока generic/fallback; заменить на verified GBP URL.
- **Email `info@shidaev.com`** — статус неизвестен, нужно уточнить работает ли mail provider на домене.

**Текущая работа:**
- **Analytics** — пока не подключено, решение откладывается. (Принципиальные «не делаем» — в `docs/spec.md` § 10.)

---

## Следующие возможные направления (не обязательства, варианты)

- Подключить analytics (выбор: Plausible / Umami / GA4 — нужно решение Zouli)
- Добавить ещё 2-3 пилотных blog-поста за Jacob
- Перевести фото-заглушки на финальные фото (когда Jacob пришлёт)
- (если попросит Maga) — добавить языковую страницу про visa categories отдельно

---

## Когда обновлять этот файл

- Добавилась/убралась фича на сайте → обновить раздел «Что в работе» и журнал.
- Поменялось решение по интеграциям → обновить «Что НЕ подключено».
- Закрыт вопрос из `open-questions.md` → отметить в журнале.
- Большой коммит/деплой → отметить в журнале (краткой строкой, не дубль `git log`).

Не дублировать `git log` целиком — здесь только осмысленные вехи.
