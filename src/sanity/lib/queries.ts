/* GROQ-запросы для блога.
   GROQ — язык запросов Sanity, похож на SQL/GraphQL.
   Документация: https://www.sanity.io/docs/groq */

import { groq } from "next-sanity";

/* Постоянная проекция автора — переиспользуется в нескольких запросах. */
const AUTHOR_PROJECTION = `
  _id,
  name,
  role,
  bio,
  photo
`;

/* Проекция категории — выбираем оба языка titleRu/titleEn. */
const CATEGORY_PROJECTION = `
  _id,
  titleRu,
  titleEn,
  "slug": slug.current,
  description,
  colorAccent
`;

/* Проекция поста для КАРТОЧКИ (список блога) — без тела.
   firstParagraphSpans — массив строк-текстов первого block-узла
   тела. Берём через прямой projection (надёжнее чем pt::text(),
   который в некоторых dataset-конфигурациях возвращает пусто).
   В JS присоединяем их через join — получаем чистый текст
   первого параграфа. Fallback для карточки когда excerpt и deck
   не заполнены — карточка не остаётся «голой». */
const POST_CARD_PROJECTION = `
  _id,
  title,
  "slug": coalesce(slug.current, translation->slug.current),
  language,
  deck,
  excerpt,
  cardKicker,
  cardKickerSubtitle,
  "firstParagraphSpans": body[_type == "block"][0].children[]{
    "text": text
  }.text,
  publishedAt,
  updatedAt,
  featured,
  coverImage,
  "categories": categories[]->{${CATEGORY_PROJECTION}},
  "author": author->{${AUTHOR_PROJECTION}},
  "hasTranslation": defined(translation)
`;

/* Проекция поста для СТРАНИЦЫ (отдельная статья) — с телом. */
const POST_FULL_PROJECTION = `
  _id,
  title,
  "slug": coalesce(slug.current, translation->slug.current),
  language,
  deck,
  excerpt,
  publishedAt,
  updatedAt,
  featured,
  coverImage,
  body,
  "categories": categories[]->{${CATEGORY_PROJECTION}},
  "author": author->{${AUTHOR_PROJECTION}},
  seo,
  "translation": translation->{
    _id,
    title,
    "slug": coalesce(slug.current, ^.slug.current),
    language
  }
`;

/* ============================================================
   QUERIES
============================================================ */

/* Все опубликованные посты выбранного языка, сортировка по дате (новые сверху). */
export const POSTS_BY_LANG_QUERY = groq`
  *[
    _type == "post"
    && language == $lang
    && defined(coalesce(slug.current, translation->slug.current))
  ]
    | order(featured desc, publishedAt desc) {
    ${POST_CARD_PROJECTION}
  }
`;

/* Все категории. Для табов на странице блога. */
export const CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(titleRu asc) {
    ${CATEGORY_PROJECTION}
  }
`;

/* Один пост по slug + language. Возвращает полное тело + связанный перевод. */
export const POST_BY_SLUG_QUERY = groq`
  *[
    _type == "post"
    && coalesce(slug.current, translation->slug.current) == $slug
    && language == $lang
  ][0] {
    ${POST_FULL_PROJECTION}
  }
`;

/* Связанные посты — из тех же категорий, кроме текущего. Лимит 2. */
export const RELATED_POSTS_QUERY = groq`
  *[
    _type == "post"
    && language == $lang
    && _id != $excludeId
    && defined(coalesce(slug.current, translation->slug.current))
    && count(categories[@._ref in $categoryIds]) > 0
  ] | order(publishedAt desc)[0...2] {
    ${POST_CARD_PROJECTION}
  }
`;

/* Последние статьи для секции «Публикации» на главной.
   Берём 3: первая — featured большой блок, две следующие —
   вторичные карточки рядом. Все три адаптируются и с фото, и без. */
export const LATEST_POSTS_QUERY = groq`
  *[
    _type == "post"
    && language == $lang
    && defined(coalesce(slug.current, translation->slug.current))
  ]
    | order(publishedAt desc)[0...3] {
    ${POST_CARD_PROJECTION}
  }
`;
