import { defineField, defineType } from "sanity";

/* Post — публикация блога. Bilingual через language + translation ref.

   Поля сгруппированы в 3 уровня видимости:
   1. Открыто сразу — обязательное минимум (title, slug, language,
      categories, body, publishedAt).
   2. Fieldset «Для карточки и фото» — collapsed, оптические улучшения
      (author, cover, deck, excerpt, featured).
   3. Fieldset «Перевод и расширенное» — collapsed, продвинутые штуки
      (translation, updatedAt, SEO).

   Цель — снять страх «много полей» у автора. Минимум для публикации
   статьи — 6 полей. Остальное опционально, можно добавить позже. */
export default defineType({
  name: "post",
  title: "Publication",
  type: "document",
  fieldsets: [
    {
      name: "card",
      title: "Для карточки и фото",
      description:
        "Эти поля делают карточку статьи в списке /blog красивее. Все опциональны — можно оставить пустыми и заполнить позже.",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "advanced",
      title: "Перевод и расширенное",
      description:
        "Связь с переводом, дата правок, SEO. Заполняй только если нужно.",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    /* ====== ОБЯЗАТЕЛЬНОЕ — открыто сразу ====== */
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Заголовок публикации.",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "Адрес статьи в URL. Жми Generate — сгенерируется из заголовка.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      description: "Язык публикации. Определяет на каком сайте появится.",
      options: {
        list: [
          { title: "Русский", value: "ru" },
          { title: "English", value: "en" },
        ],
        layout: "radio",
      },
      initialValue: "ru",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      description:
        "Нажми «+ Add item» → выбери готовую категорию из списка. " +
        "Кнопка «Create new» внизу списка открывает форму новой категории " +
        "в pane справа (можно сразу заполнить EN и RU название).",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      description:
        "Опционально. Главное фото статьи — показывается в начале и в карточке на /blog. Без фото карточка остаётся текстовой.",
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description:
            "Что на фото — короткая фраза. Например: «адвокат с клиентом». Помогает Google и людям со слабым зрением.",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      description: "Текст статьи. Поддерживает заголовки H2/H3, цитаты, чек-листы, картинки.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: "object",
          name: "callout",
          title: "Callout",
          fields: [
            defineField({
              name: "tone",
              type: "string",
              title: "Tone",
              description: "Тон плашки.",
              options: {
                list: [
                  { title: "Info — информация", value: "info" },
                  { title: "Warning — предупреждение", value: "warning" },
                  { title: "Urgent — срочно", value: "urgent" },
                  { title: "Deadline — дедлайн", value: "deadline" },
                ],
                layout: "radio",
              },
              initialValue: "info",
            }),
            defineField({
              name: "title",
              type: "string",
              title: "Title",
              description: "Заголовок плашки.",
            }),
            defineField({
              name: "text",
              type: "text",
              title: "Text",
              rows: 3,
              description: "Текст плашки.",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "text" },
          },
        },
        {
          type: "object",
          name: "pullQuote",
          title: "Pull quote",
          fields: [
            defineField({
              name: "text",
              type: "text",
              title: "Quote",
              rows: 3,
              description: "Текст крупной выделенной цитаты.",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "attribution",
              type: "string",
              title: "Attribution",
              description: "Автор цитаты (опционально).",
            }),
          ],
          preview: {
            select: { title: "text", subtitle: "attribution" },
          },
        },
        {
          type: "object",
          name: "checklist",
          title: "Checklist",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Title",
              description: "Заголовок чек-листа.",
            }),
            defineField({
              name: "items",
              type: "array",
              title: "Items",
              of: [{ type: "string" }],
              description: "Пункты списка.",
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: { title: "title", items: "items" },
            prepare: ({ title, items }) => ({
              title: title || "Checklist",
              subtitle: items ? `${items.length} items` : undefined,
            }),
          },
        },
        {
          type: "object",
          name: "caseReference",
          title: "Case reference",
          fields: [
            defineField({
              name: "citation",
              type: "string",
              title: "Citation",
              description:
                "Прецедент. Например: Matter of A-B-, 27 I&N Dec. 316 (A.G. 2018).",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "summary",
              type: "text",
              title: "Summary",
              rows: 3,
              description: "Краткое объяснение прецедента.",
            }),
            defineField({
              name: "link",
              type: "url",
              title: "Source link",
              description: "Ссылка на источник (опционально).",
            }),
          ],
          preview: {
            select: { title: "citation", subtitle: "summary" },
          },
        },
        {
          type: "image",
          name: "inlineImage",
          title: "Inline image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alt text",
              description: "Описание для поисковиков и скринридеров.",
            }),
            defineField({
              name: "caption",
              type: "string",
              title: "Caption",
              description: "Подпись под картинкой.",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      description: "Дата публикации.",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),

    /* ====== СВЁРНУТО: «Для карточки и фото» ====== */
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      fieldset: "card",
      description: "Можно оставить пустым.",
    }),
    /* coverImage перенесён на верхний уровень — видимое место
       сразу после Categories. Подсказка автору о том, что фото
       опционально и есть альтернатива (kicker). */
    defineField({
      name: "cardKicker",
      title: "Card kicker",
      type: "string",
      fieldset: "card",
      description:
        "Короткое слово или сокращение (до 6 символов) — показывается на карточке статьи КРУПНО когда нет фото. Например: NTA, USCIS, MCH, I-589, §. Эстетично закрывает «дыру» вместо фото. Можно оставить пустым.",
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: "cardKickerSubtitle",
      title: "Card kicker subtitle",
      type: "string",
      fieldset: "card",
      description:
        "Расшифровка kicker'а — небольшой текст под крупным сокращением, золотом, в обрамлении тонких линий. Например: «NOTICE TO APPEAR» для NTA, «FORM I-589» для I-589. Опционально — если оставить пустым, под kicker будет просто тонкая линия. Заполнять имеет смысл только если kicker — сокращение.",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "deck",
      title: "Deck",
      type: "string",
      fieldset: "card",
      description:
        "Одно предложение под заголовком в карточке статьи. Можно оставить пустым — будет только заголовок.",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      fieldset: "card",
      description:
        "1-2 предложения о чём статья. Покажется в карточке на /blog и в превью когда шлёшь ссылку в WhatsApp. Если пусто — подставится первый абзац.",
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      fieldset: "card",
      description:
        "Включай только для одной статьи — она будет крупно сверху в /blog. Включишь две — featured станет последняя из них.",
    }),

    /* ====== СВЁРНУТО: «Перевод и расширенное» ====== */
    defineField({
      name: "translation",
      title: "Translation of",
      type: "reference",
      to: [{ type: "post" }],
      fieldset: "advanced",
      description:
        "Если у статьи есть версия на другом языке — выбери её. Тогда на странице статьи появится кнопка переключения.",
    }),
    defineField({
      name: "updatedAt",
      title: "Updated at",
      type: "datetime",
      fieldset: "advanced",
      description:
        "Заполняй когда возвращаешься править — на странице статьи под заголовком появится строка «Обновлено · дата». Дата первой публикации остаётся.",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fieldset: "advanced",
      description:
        "Что увидит Google и Facebook при шаринге. Если оставить пустым — подставится Title и Excerpt.",
      fields: [
        defineField({
          name: "metaTitle",
          type: "string",
          title: "Meta title",
          description: "Заголовок в результатах поиска. Если пусто — берётся Title.",
          validation: (Rule) => Rule.max(70),
        }),
        defineField({
          name: "metaDescription",
          type: "text",
          rows: 3,
          title: "Meta description",
          description:
            "Описание в результатах поиска. Если пусто — берётся Excerpt.",
          validation: (Rule) => Rule.max(160),
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      lang: "language",
      cat: "categories.0.titleRu",
      catEn: "categories.0.titleEn",
      date: "publishedAt",
      media: "coverImage",
    },
    prepare: ({ title, lang, cat, catEn, date, media }) => ({
      title: title || "Untitled",
      subtitle: [
        lang === "ru" ? "🇷🇺 RU" : "🇬🇧 EN",
        catEn || cat,
        date ? new Date(date).toLocaleDateString() : null,
      ]
        .filter(Boolean)
        .join(" · "),
      media,
    }),
  },

  orderings: [
    {
      title: "Newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Oldest first",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
  ],
});
