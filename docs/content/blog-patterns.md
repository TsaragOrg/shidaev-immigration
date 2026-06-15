# Blog Patterns Research — Law Offices of Jacob Shidaev

Источник: research-agent (поиск по сети, реальные примеры, разбор паттернов).
Цель: определить как делать блог Jacob'а — две категории, без фото, mobile-first, bilingual.

---

## Тема 1. Две категории — где живут и как переключают

### Изученные примеры

- **Stripe Blog** — отдельные sub-pages по категориям, каждая своя зона, без табов. Сильно при многих категориях, избыточно для двух.
- **Notion Blog** — горизонтальные табы над сеткой. JS-фильтр без перезагрузки. Eyebrow-лейбл на карточке. ✅ Лучшее для 2-7 категорий.
- **Kingsley Napley Immigration Blog** — sidebar с 17 категориями. Избыточно для нас.
- **Manifest Law** — Educational guides и Approved Cases как отдельные секции.
- **Stratechery** — series-based, без табов, визуальная группировка зонами.
- **Farnam Street** — тематические разделы, eyebrow над заголовком.

### Анти-паттерны

- Sidebar с 15+ категориями — хаос для аудитории в стрессе
- Dropdown скрытый за кнопкой — категория не видна
- Хронологическая лента без маркировки — типы статей не различимы
- Цветовое кодирование без текстовой метки — не работает без легенды

### Рекомендация для Jacob

**Tab toggle вверху index-страницы:** 3 кнопки `[Все] [Полезно знать] [Из практики]`. Default — «Все». На мобиле — два таба на всю ширину под title. JS-фильтр без перезагрузки.

---

## Тема 2. Editorial-карточки без фото — 8 подходов

### Что работает

1. **Eyebrow + крупный заголовок как anchor.** Заголовок 24-28px bold — становится «картинкой» для мозга. (Stripe)
2. **Eyebrow с цветовой дифференциацией.** Bronze для «Полезно знать», dark text для «Из практики». Минимально, не кричащее. (Notion)
3. **Date prominence.** Дата крупная, не мелкий metadata. Создаёт вертикальный ритм. (Pragmatic Engineer)
4. **Pull-quote/deck вместо excerpt.** Одна выбранная редактором фраза-крючок вместо первых 120 символов. (The Marginalian)
5. **Serif + sans контраст.** Inter eyebrow + EB Garamond заголовок. Контраст без графики. (Stripe Press)
6. **Увеличенный featured first card.** Первая 2x размером — большой заголовок, длинный deck. (Notion)
7. **Чистые пропорции с whitespace.** Без border, без тени — только воздух разделяет. (Farnam Street)
8. **Reading time как доверительный сигнал.** «5 мин чтения» — критично для аудитории в стрессе. (Medium)

### Что НЕ работает для Jacob

- Placeholder цветные квадраты (выглядят как broken image)
- Буквенные аватары (дешёвое решение)
- Декоративные линии и орнаменты (против дизайн-системы)
- Тёмные карточки с инверсным текстом (агрессивно для аудитории в панике)

### Карточка для Jacob — структура

```
[ПОЛЕЗНО ЗНАТЬ]  ·  12 мин  ·  RU                  ← eyebrow + meta (bronze)
Что делать если вам отказали в визе                ← EB Garamond, 20-22px
«Повторный отказ — не приговор. Вот три             ← deck-строка
пути которые работают»                              ← Inter, 14-15px
18 марта 2025                                       ← дата, small
```

---

## Тема 3. Длинная статья на мобиле — паттерны 2024-2026

### 6 рабочих паттернов

1. **Collapsible TOC.** Не sticky-кнопка — она часто пропускается. Аккордеон в начале статьи с человеческими заголовками секций.
2. **Reading time.** В начале + опционально в конце. Стандарт после Medium.
3. **Progress bar 2px бронза.** Sticky сверху viewport. CSS-only через scroll-driven animations.
4. **Типографика для длинного чтения:**
   - Body: 17-18px на мобиле
   - Line-height: 1.6-1.75
   - Max-width: 65-75 символов
   - Paragraph spacing: 1-1.5em
   - EB Garamond для body на статьях 1500+ слов
5. **Callout-блоки + pull-quotes** (Substack-стиль):
   - Callout «Важно знать» — border-left bronze, для дедлайнов/ограничений
   - Pull-quote — EB Garamond крупно, для ключевой мысли, **только раз на статью**
6. **Related articles + share** в конце:
   - 2-3 связанные статьи (из той же категории)
   - Share: только «Скопировать ссылку» + native share API (Twitter/FB кнопки устарели)

### Footnotes vs inline-ссылки

Для иммиграционного домена — **inline-ссылки на gov.uscis.gov, cfr.gov прямо в тексте**. Footnotes — для академического контента. Аудитория в стрессе не скроллит вниз за сносками.

---

## Тема 4. Главная страница блога — 7 подходов

### Layout

**На старте Jacob (до 20 статей):**
- **List layout** (одна колонка) — editorial feel, быстро, хорошо на мобиле
- Каждая статья = строка с датой + категорией + заголовком + deck'ом

**После 20 статей:**
- Переход к **Hybrid layout** (featured + grid 2 колонки)

### Фильтр

- 2 категории → таба наверху страницы достаточно, sticky не нужен
- При 4+ категориях → sticky filter bar

### Дата

- Иммиграционный контент устаревает → дата критична
- Для evergreen («Что такое H-1B») → «Обновлено: [дата]», не дата первой публикации

### Excerpt vs deck

- «Полезно знать» (SEO) → excerpt 120-140 символов
- «Из практики» (case studies) → deck-строка (одна выбранная фраза)

### Pagination vs Load More

- Лучшее для SEO + UX: **Load More с query param** (?page=2)
- Infinite scroll — нет (плохо для SEO, теряется позиция на мобиле)

### Author display

- Solo-юрист → имя автора в карточке избыточно
- Достаточно «Jacob Shidaev» в шапке блога. Место в карточке отдать дате и reading time.

---

## Тема 5. Bilingual — паттерны переключения языка

### Архитектура в Sanity

**Document-level localization** (рекомендуем):
- Каждая статья — отдельный документ с полем `language: "ru" | "en"`
- Связь переводов через `_ref`
- Jacob может опубликовать только RU, EN добавить потом или вообще не делать

**Field-level localization** — НЕ рекомендуем (ломает workflow).

### Паттерны для смешанной доступности

| Подход | Когда | Плюс | Минус |
|--------|-------|------|-------|
| **A. Language badge на карточке** | Всегда показывать | Пользователь знает что доступно | Маленькое доп. inforeau |
| **B. Скрывать непереведённое** | Если переводов почти нет | Чистый UX | «Из практики» (RU-only) становится невидимой для EN |
| **C. Показывать с пометкой "Russian only"** | Двуязычная аудитория | Пользователь знает что контент есть | EN-only читатель разочарован |
| **D. Авто-fallback** | Никогда | — | Антипаттерн (USWDS предупреждает) |
| **E. Switcher на странице статьи** | В сочетании с C | Прямой переход к переводу | — |

### Рекомендация для Jacob

- **Sanity:** document-level + плагин `@sanity/document-internationalization`
- **Index:** показывать все статьи доступные на текущем языке, badge «RU» или «EN» рядом с датой
- **«Из практики» (вероятно RU-only):** на EN-версии показывать с плашкой «Russian only»
- **На странице статьи:** кнопка «Read in English» если есть, нет — нет кнопки

Аудитория Jacob — иммигранты из RU-speaking стран, многие двуязычны. RU-only контент уместен.

---

## Итоговые решения для блога Jacob

### Структура

- **Index-страница** — list layout, два таба + «Все»
- **Карточка** — eyebrow + reading time + язык, EB Garamond заголовок, deck-строка, дата
- **Статья** — collapsible TOC, progress bar, callouts, related articles, скопировать ссылку
- **Bilingual** — document-level в Sanity, badge на карточке, пометка «Russian only» где нужно

### Что НЕ делаем

- ❌ Фото-thumbnails (даже когда появятся — сломают editorial стиль)
- ❌ Sidebar с категориями (избыточно для двух)
- ❌ Infinite scroll (плохо для SEO + позиция теряется)
- ❌ Twitter/FB share buttons (устарели)
- ❌ Flags (🇺🇸/🇷🇺) как language indicators (flags = страны, не языки)
- ❌ Auto-fallback на другой язык без предупреждения

### Дизайн-токены подтверждаются

- EB Garamond — для заголовков статей и body на длинных статьях
- Inter — для eyebrow, meta, UI элементов
- Bronze `#A8894A` — для eyebrow «Полезно знать», для callout border, для progress bar
- Light beige `#FAFAF9` — фон, как уже задано

---

## Что идёт в этап 6

Когда начнём миграцию на Next.js + Sanity:

1. Схема `post` с полями: title, slug, language, translation (ref), category (ref), eyebrow, deck, body (Portable Text), readTimeMinutes, publishedAt, updatedAt
2. Схема `category` с titleRu, titleEn, slug, colorAccent
3. Кастомные блоки в Portable Text: callout, pull-quote, inline-image (опц.), case-reference
4. Index `/blog` с табами + list layout
5. Article `/blog/[slug]` с TOC + progress bar + related + share
6. Plugin `@sanity/document-internationalization`
