---
description: "Дизайн-система Shidaev: секции, кнопки, токены. Читать перед изменением компонентов или CSS."
paths:
  - "src/components/**"
  - "src/styles/**"
  - "src/app/**/page.tsx"
  - "src/app/**/layout.tsx"
---

# Правило — Дизайн-система Shidaev

Подгружается когда трогаю компоненты, стили или верстку страниц.

Не пересоздавать секцию которая уже есть. Не вводить четвёртый тип кнопки. Не плодить цвета.

---

## Готовые секции главной

Каждая = 1 компонент в `src/components/home/` + 1 CSS-файл в `src/styles/`.

**Колонка «Характерные строки»** — уникальные фразы которые встречаются ТОЛЬКО в этой секции. При запросе «поменяй фразу X» — искать X в этой колонке, чтобы за один шаг найти где живёт.

| Секция | TSX | CSS | Характерные строки (для поиска) |
|---|---|---|---|
| Первый экран — фото + имя + CTA | `Hero.tsx` | `03-hero.css` + `18-hero-mobile.css` | "Jacob Shidaev", "иммиграционный адвокат, Лос-Анджелес", "Immigration defense", "Asylum, removal defense, and federal litigation" |
| 4 практики карточками | `Practice.tsx` | `04-practice-home.css` | "Against DHS in court", "Bond and parole", "Defending the right to remain", "Cases we take to court", "All practice areas" |
| Наш подход (философия) | `Adversarial.tsx` | `05-adversarial.css` | "Философия процесса", "Philosophy of practice", "It's a full trial" |
| Credentials (бар, EOIR) | `Credentials.tsx` | `07-credentials.css` | "Bar #343616", "Federal districts · California", "SoCal Chapter", "Полные допуски и опыт →", "Full admissions and experience →" |
| Отзывы клиентов | `Reviews.tsx` | `10-reviews.css` | имена авторов: "Kazat Baimatov", "Kristina Musiienko", "Leyla Shakhmilova", "Sayat Kuanysh", "Анастасия Пашкова" и др. |
| Свежая публикация из блога | `Journal.tsx` | `11-journal.css` | "Свежие материалы", "Latest articles", "Все публикации →", "All publications →", "Публикации", "Publications" |
| Финальный CTA «связаться» | `FinalCTA.tsx` | `12-final-cta-home.css` | "Обсудим ваше дело", "Let's discuss your case", "Записаться на консультацию", "Request a consultation", "Срочный вопрос", "Urgent matter" |

## Готовые секции других страниц

| Где | TSX/CSS | Характерные строки |
|---|---|---|
| About — биография + story-badge | `AboutPage.tsx` / `06-story.css` | **"Trial-Trained" / "С судебным опытом"** (story-badge на About!), "Background & credentials" |
| About — quick facts | `08-about-quickfacts.css` | "B.A. Business Economics", "B.A. по бизнес-экономике" |
| About — credentials расширенные | `09-about-credentials.css` | "California State Bar — #343616 · действующий член", "American Immigration Lawyers Association (AILA)", "Court admissions" |
| About — мостик-CTA | `39-about-cta.css` | переход к /practice или /contact |
| Practice page детальная | `PracticePage.tsx` / `13-practice-page.css` | "A bond hearing is set", "A denial has been issued — appeal to BIA is needed", "Adjustment of status after asylum approval (I-485)", "Appeals to BIA", "Book your initial consultation" |
| Contact — обёртка страницы | `ContactPage.tsx` / `20-contact-page.css` | "Map of Law Offices of Jacob Shidaev", "Book a consultation" |
| Contact — intent grid (выбор темы) | `21-intent-grid.css` | (на странице /contact, форматы карточек тем) |
| Contact — secondary блок | `22-contact-secondary.css` | — |
| Contact — каналы (тел/email/адрес) | `23-contact-channels.css`, `31-contact-channels-strip.css` | "Mon – Fri · 9:00 AM – 5:00 PM PT", "Message on WhatsApp" |
| Contact — final CTA compact | `24-final-cta-compact.css` | — |
| Contact — Calendly booking | `25-contact-booking.css` | "Book a consultation" (на /contact, не Hero) |
| Final CTA micro вариант | `27-final-cta-micro.css` | — |
| Responsive book/contact специфика | `32-responsive-book-contact.css` | — |
| Blog index | `33-blog-index.css` |
| Blog featured card | `35-featured-post.css` |
| Blog grid medium | `36-blog-grid-medium.css` |
| Blog article | `34-article.css` |
| Legal pages wrapper | `LegalLayout.tsx` / `41-legal.css` |
| 404 | `40-not-found.css` |

## Header / Footer / общие

| Что | CSS |
|---|---|
| Header (фиксированный) | `02-header.css` |
| Footer | `14-footer.css` |
| Анимации появления | `15-animations.css` + `RevealOnScroll.tsx` |
| Responsive global брейкпоинты | `16-responsive-global.css` |
| Touch / hover reset | `19-touch-hover-reset.css` |
| Active nav state | `38-nav-active.css` |
| Background fix | `37-bg-fix.css` |
| Intro overlay | `17-intro.css` |


---

## Кнопки — три типа, не больше

| Тип | Визуал | Где используется |
|---|---|---|
| **Primary** | Большая, чёрная заливка, светлый текст | Hero CTA, FinalCTA |
| **Secondary** | Outline чёрный, прозрачный фон | Practice карточки, Adversarial |
| **Tertiary** | Текстовая со стрелкой, без рамки | Journal «читать дальше», Reviews «все отзывы» |
| **Sticky bottom bar** | Только мобайл, fixed внизу экрана | Главная мобайл (после Hero) |

**Правило:** не делать «четвёртую похожую но другую» кнопку. Брать одну из этих. Если CTA должен выглядеть по-новому — это перепроверка зачем (большинство случаев = ложная тревога).

---

## Стек стилей — гибрид

В проекте используются **оба** подхода параллельно:

| Подход | Где | Для чего |
|---|---|---|
| **CSS-split** (`src/styles/00→41`) | Большие секции, страницы | Основа. По одному файлу на секцию. |
| **Tailwind v4** (`@import "tailwindcss"` в globals.css) | Внутри JSX через `className="…"` | Утилиты — gap, padding, flex, текстовые мелочи когда не хочется создавать новый CSS-файл. |

**Когда что использовать:**

- Новая секция / страница / переиспользуемый блок → **CSS-split**, отдельный файл в `src/styles/`.
- Мелкая утилита внутри одного JSX (gap между парой элементов, текстовый размер для одиночного span) → **Tailwind ок**.
- Не дублировать: если стиль уже есть в CSS-split — не делать Tailwind-альтернативу.

Tailwind активно используется в: `Journal.tsx`, `BlogIndex.tsx`, `PostCardMedium.tsx`, `ContactPage.tsx`. При работе с этими файлами — нормально продолжать с Tailwind, не переписывать на CSS-split «ради чистоты».

---

## Токены — единственный источник правды

`src/styles/00-tokens-base.css` — все CSS-переменные. Цвета, шрифты, скруления, тени.

**Цвета** — используются только из переменных. Если нужен новый оттенок — сначала переменная в 00-tokens, потом использование.

**Шрифты:**
- `--font-serif` = EB Garamond (заголовки, имя, цитаты)
- `--font-sans` = Inter (UI, body, кнопки, метки)

Третий шрифт **не вводить**.

**Spacing** — `--space-*` переменные. Не хардкодить `padding: 24px` в CSS-split. (В Tailwind допустимо — `p-4` это и есть утилита.)

**Layout базовый** — `src/styles/01-type-layout.css`. Контейнеры, типография, базовые отступы.

---

## Mobile-first

- CSS пишется **с мобайла**. Десктоп — через `@media (min-width: ...)`.
- Hover **только** в `@media (hover: hover)`. На touch — `:active` для tap-feedback.
- Все критичные действия (CTA, телефон, Calendly) — в 1 тап на мобайле.
- iOS Safari top-bar — литеральный HEX в каркасе (html/body/header), не `var()`. Без `mix-blend-mode`/`view-transitions` на fixed-overlay.

---

## Когда правда нужна новая секция

Перепроверка перед созданием:

1. Можно ли использовать **существующую** секцию с другим контентом? (Hero с другими CTA, Adversarial с другим текстом — обычно да)
2. Если правда новая — следующий свободный номер в `src/styles/NN-name.css`.
3. Соблюсти изоляцию: компонент в `src/components/{home|pages|...}/` + CSS-файл рядом по номеру.
4. Использовать токены из 00-tokens-base. Ничего нового без обоснования.
5. Mobile-first структура.
6. Если новая секция используется на нескольких страницах — выделить как переиспользуемый компонент.

---

## Запрещено (специфично для дизайна)

Общие запреты — в `AGENTS.md` «Чего НЕ делать». Здесь — только дизайн-специфика:

- ❌ Стилизованный `<a>` вместо кнопки одного из трёх типов
- ❌ Inline-стили в JSX (`style={{...}}`) — кроме редких динамических значений
- ❌ CSS-in-JS (`styled-components`, `emotion`) — в стеке нет, не вводить
- ❌ Хардкод `px` для spacing в CSS-split там где есть `--space-*` (в Tailwind утилиты `p-4` ок)
