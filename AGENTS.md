# AGENTS.md — Shidaev Immigration

Конституция проекта. Только правила работы агента. Описание самого проекта — `docs/spec.md`.

Читать первым в любой сессии. Не следовать тому что здесь = бракованная работа.

---

## С кем работаю

**Только с Zouli.** Jacob — её клиент. Я с ним не общаюсь, не пишу, не уточняю напрямую.

**Maga** — помощница Jacob, ведёт коммуникацию между мной (через Zouli) и Jacob. Правки на сайт приходят от Maga через Zouli. С Maga я тоже напрямую не общаюсь — поток всегда через Zouli.

Правки/вопросы → через Zouli. Она гейтит.  
Не уверена в факте → НЕ выдумываю. Записываю в `docs/facts/open-questions.md`, Zouli уточняет у Maga/Jacob.

---

## Регистр

С Zouli — **инженерный регистр**. Она UX developer, не клиент. Технические термины — нормально.

Упрощаю язык только в текстах сайта (читают конечные пользователи).

---

## Стек одной строкой

Next.js 16 / React 19 / TypeScript / Sanity CMS / Vercel.

**Где живёт прямо сейчас:** Vercel preview `shidaev-immigration.vercel.app`. Домен `shidaev.com` ещё не подключён, вся инфраструктура временно на аккаунтах Zouli. Детали — `docs/spec.md` § 11.

---

## Карта проекта (верхний уровень)

```
src/             код
  app/           роуты Next.js (RU дефолт, /en/* зеркало, /studio Sanity)
  components/    компоненты (home, pages, layout, blog, legal, seo)
  sanity/        схемы Studio
  styles/        CSS-split на 41 файл
docs/            ВСЯ ДОКУМЕНТАЦИЯ (карта в docs/README.md)
.claude/         правила для меня + скиллы (когда появятся)
public/          статика, фото Jacob
scripts/         seed-скрипты Sanity, css-diff
```

---

## 🕸 Матрица задач — сетка проверки (правило для Шидаева)

**Принцип:** никакого действия без трассировки. Запись «что меняла» без «во что упёрлась» — недоделанная работа.

| Тип задачи | ⬅ Прочитать ДО (по порядку) | ➡ Обновить ПОСЛЕ |
|---|---|---|
| **Меняю текст на странице** | `.claude/rules/design-system.md` колонка **«Характерные строки»** (найти секцию по строке) → `.claude/rules/content-edit.md` → `docs/facts/project-facts.md` → `docs/04-функции/i18n.md` → `docs/04-функции/<если затронута>` | `docs/state.md` |
| **Добавляю компонент** | `.claude/rules/design-system.md` (КАТАЛОГ) → `docs/spec.md` § 6 (стек) → `src/components/` (что есть) | `.claude/rules/design-system.md` + `docs/state.md` |
| **Добавляю функцию** | `docs/04-функции/` (все) → `docs/spec.md` § 6 (стек) → `.claude/rules/design-system.md` → `node ~/.claude/templates/audit-stack.mjs` | `docs/04-функции/<новая>.md` + `docs/spec.md` § 6 (если новая dep) + `docs/state.md` |
| **Меняю стек / зависимости** | `docs/spec.md` § 6 → `~/.claude/templates/default-stack.md` → `node ~/.claude/templates/audit-stack.mjs` | `docs/spec.md` § 6 + `docs/state.md` |
| **Трогаю legal / compliance** | `docs/04-функции/юридические-страницы.md` → AGENTS.md «Чего НЕ делать» → СПРОСИТЬ Zouli | НЕ обновлять без подтверждения |
| **Меняю SEO / мета** | `docs/04-функции/seo.md` → `docs/04-функции/i18n.md` → `src/app/(site)/layout.tsx` | `docs/04-функции/seo.md` + `docs/state.md` |
| **Меняю дизайн-токены** | `.claude/rules/design-system.md` → `src/styles/00-tokens-base.css` | `.claude/rules/design-system.md` + `docs/state.md` |
| **Добавляю страницу** | `docs/spec.md` § 4 (состав) → `.claude/rules/design-system.md` (какие секции) → `docs/04-функции/i18n.md` (parity) | `docs/spec.md` § 4 + `docs/state.md` |
| **Решение «не делаем X»** | `docs/spec.md` § 10 → `docs/04-функции/` | `docs/spec.md` § 10 + `docs/state.md` |

## Правило записи в `docs/state.md` (4 поля)

- **Что меняла**
- **На что опиралась** (файлы которые прочитала)
- **Что НЕ затронуло** (что проверила и оставила)
- **Открытые вопросы**

## Источники правды по типам данных

| Что нужно | Куда |
|---|---|
| Что это за проект, состав, стек | `docs/spec.md` |
| Как работает конкретная функция | `docs/04-функции/*.md` |
| Факты о Jacob | `docs/facts/project-facts.md` |
| Открытые вопросы | `docs/facts/open-questions.md` |
| Что обещали уточнить у Jacob | `docs/facts/data-to-verify.md` |
| Текущий статус | `docs/state.md` |
| Темы для блога | `docs/content/blog-topics.md` |
| Sanity-туториал для Jacob | `docs/for-jacob/sanity-guide.md` |
| Дизайн-каталог | `.claude/rules/design-system.md` |
| Правила правки текстов | `.claude/rules/content-edit.md` |

---

## Конвенции (всегда)

- **Компонент = 1 файл, секция = 1 компонент, CSS изолирован.**
- **RU + EN параллельно.** Меняю RU → сразу EN. Иначе расхождение.
- **Mobile-first.** Проектирую с телефона. Проверяю мобайл первым.
- **Hover** — только `@media (hover: hover)`. Иначе на touch залипает.
- **Простой язык** в текстах сайта (для конечного пользователя).
- **Перевод** — по смыслу, не калькой.
- **Git, не копии.** Никаких `index-v1.html`, версии через ветки/теги.
- **iOS Safari top-bar** — литеральный HEX в каркасе (html/body/header), не `var()`. Без `mix-blend-mode`/`view-transitions` на fixed-overlay.

---

## Чего НЕ делать

- **Не выдумывать** факты о Jacob — дела, статистику, отзывы, образование.
- **Не править** заявления про pro hac vice / admissions без подтверждения Zouli.
- **Не трогать** Legal Notice / Privacy / Terms / Accessibility / Fraud Warning — точные юр-формулировки, прошли проверку.
- **Не вводить** новые цвета / шрифты / типы кнопок без обоснования (правила в `.claude/rules/design-system.md`).
- **Не предлагать** Tilda / Wix / no-code — стек по умолчанию код.
- **Не предлагать** subscription-модель сопровождения.
- **Не делать** копии файлов — версионирование через git.

---

## Спек-первый порядок (Spec-Driven)

При любой задаче ВНЕ простой опечатки:

1. Открыть соответствующую спеку (`docs/spec.md` или `docs/04-функции/feature-X.md`).
2. **Неясно в спеке** → уточняю у Zouli, не делаю по догадке.
3. **Противоречит спеке** → останавливаюсь. Не лезу в код пока не разрешено.
4. Если спеки нет → создать перед кодом (порядок: SPEC → PLAN → CODE).

---

## Чего ожидать от меня после паузы

После недели/месяца простоя — память это снимок. Перед опорой на «помню что было» — проверяю:

- `git log --oneline -10` — что менялось
- `docs/state.md` — где сейчас стоим
- `docs/facts/open-questions.md` — что висит

Не предполагаю — проверяю.
