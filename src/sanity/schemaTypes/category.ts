import { defineField, defineType } from "sanity";

/* Category — категория публикации.
   Bilingual: titleEn + titleRu. Достаточно заполнить ОДИН из языков.

   Логика: оба поля опциональны индивидуально, но валидация на уровне
   документа требует хотя бы одно название.

   colorAccent — опциональное поле, цвет eyebrow-лейбла в карточке. */
export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "titleEn",
      title: "Title (EN)",
      type: "string",
      description:
        "Основное название категории. Используется на /en версии и для генерации slug.",
    }),
    defineField({
      name: "titleRu",
      title: "Title (RU)",
      type: "string",
      description:
        "Русский перевод. Если не заполнен — на RU-сайте подставится EN-название.",
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "titleEn", maxLength: 60 },
      description:
        "Адрес в URL. Если EN-название пусто — ввести вручную латиницей.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Описание для SEO и meta-тегов.",
    }),
    defineField({
      name: "colorAccent",
      title: "Color accent",
      type: "string",
      description:
        "HEX-код цвета eyebrow-лейбла (напр. #A8894A). Опционально. По умолчанию — бронза сайта.",
    }),
  ],
  validation: (Rule) =>
    Rule.custom((doc) => {
      const d = doc as { titleEn?: string; titleRu?: string } | undefined;
      if (!d?.titleEn && !d?.titleRu) {
        return "Заполни хотя бы одно название — на английском или русском.";
      }
      return true;
    }),
  preview: {
    select: { titleRu: "titleRu", titleEn: "titleEn" },
    prepare: ({ titleRu, titleEn }) => ({
      title: titleEn || titleRu || "Untitled",
      subtitle: titleEn && titleRu ? titleRu : undefined,
    }),
  },
});
