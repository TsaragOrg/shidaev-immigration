import { defineField, defineType } from "sanity";

/* Author — карточка автора публикации. Сейчас один (Jacob), но в будущем
   может быть несколько (помощники, гостевые эксперты). */
export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Как показывать имя в подписи под статьёй.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "name", maxLength: 80 },
      description: "Адрес страницы автора. Жми Generate — сгенерируется из имени.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: "Должность. Например: Attorney, Founding Partner.",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 3,
      description: "Краткая биография для подписи (1-2 предложения).",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      description: "Опционально.",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
