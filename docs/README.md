# docs/ — карта документации

Один план проекта. Без параллельных версий.

---

## Структура

```
docs/
├── README.md            ← этот файл (карта)
├── spec.md              ← ОПИСАНИЕ ПРОЕКТА (что/зачем/из чего)
├── state.md             ← ЖУРНАЛ (где сейчас стоим)
│
├── 04-функции/          ← КАТАЛОГ ФУНКЦИЙ (по одной на файл)
│   ├── README.md
│   ├── запись-на-консультацию.md
│   ├── i18n.md
│   ├── блог.md
│   ├── выбор-темы-обращения.md
│   ├── intro-мобайл.md
│   ├── seo.md
│   ├── формы.md
│   ├── аналитика.md
│   ├── доступность.md
│   └── юридические-страницы.md
│
├── facts/               ← источники правды о клиенте
│   ├── project-facts.md     факты о Jacob, контактах, практиках
│   ├── open-questions.md    вопросы для Maga/Jacob
│   └── data-to-verify.md    что Maga обещала уточнить
│
├── content/             ← заготовки для блога
│   ├── blog-patterns.md
│   └── blog-topics.md
│
└── for-jacob/           ← handoff материалы (читает Jacob/Maga)
    └── sanity-guide.md
```

---

## Правила и скиллы (не в `docs/`)

```
AGENTS.md             конституция проекта (правила работы агента)
.claude/rules/        правила контекст-зависимые (load по path)
  ├── design-system.md       загружается когда трогаю компоненты/CSS
  └── content-edit.md        загружается когда трогаю тексты
.claude/skills/       процедуры (появятся позже)
```

---

## Куда что класть в будущем

| Что | Куда |
|---|---|
| Описание новой функции (поведение, не код) | `docs/04-функции/feature-NAME.md` |
| Уточнение факта о Jacob | `docs/facts/project-facts.md` |
| Открытый вопрос для Maga | `docs/facts/open-questions.md` |
| Закрытый вопрос → ответ от Maga | обновить `project-facts.md` + отметить в `open-questions.md` |
| Идея темы блога | `docs/content/blog-topics.md` |
| Туториал для Jacob/Maga | `docs/for-jacob/` |
| Изменение в сайте/проекте | строка в журнале `docs/state.md` |

---

## Чтение по сценариям

| Сценарий | Что открыть |
|---|---|
| «Что за проект?» | `AGENTS.md` → `docs/spec.md` |
| «Где сейчас стоим?» | `docs/state.md` |
| «Как работает Calendly / билингв?» | `docs/04-функции/*.md` |
| «Какой бар-номер / адрес / телефон?» | `docs/facts/project-facts.md` |
| «Что висит без ответа?» | `docs/facts/open-questions.md` |
| «Как Jacob ведёт блог?» | `docs/for-jacob/sanity-guide.md` |
| «Какие темы блога?» | `docs/content/blog-topics.md` |
| «Дизайн-система: секции, кнопки» | `.claude/rules/design-system.md` |
| «Правила правки текстов» | `.claude/rules/content-edit.md` |
