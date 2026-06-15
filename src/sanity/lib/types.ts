/* Типы данных из Sanity. Согласованы с GROQ-проекциями в queries.ts.

   Не используем @sanity/types-codegen сейчас — ручные типы достаточны
   для нашей небольшой схемы. Если контент сильно разрастётся —
   подключим автогенерацию из схемы. */

import type { PortableTextBlock } from "next-sanity";
import type { Locale } from "@/lib/types";

export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number };
  alt?: string;
}

export interface Author {
  _id: string;
  name: string;
  role?: string;
  bio?: string;
  photo?: SanityImage;
}

export interface Category {
  _id: string;
  titleRu: string;
  titleEn: string;
  slug: string;
  description?: string;
  colorAccent?: string;
}

/* Для карточек в списке. Без тела статьи. */
export interface PostCard {
  _id: string;
  title: string;
  slug: string;
  language: Locale;
  deck?: string;
  excerpt?: string;
  /* Короткое слово (до 6 симв) для карточки без фото — крупно
     отображается на месте фото-зоны. Например NTA, USCIS, I-589. */
  cardKicker?: string;
  /* Расшифровка kicker — мелким текстом под крупным сокращением
     с обрамляющими золотыми линиями. Например «NOTICE TO APPEAR». */
  cardKickerSubtitle?: string;
  /* Массив text-строк spans первого block-узла тела. Fallback
     для карточки если deck и excerpt не заполнены — присоединяем
     через join(" ") и берём первые ~200 символов. */
  firstParagraphSpans?: string[];
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  coverImage?: SanityImage & { alt?: string };
  categories: Category[];
  author?: Author;
  hasTranslation: boolean;
}

/* Для отдельной страницы статьи. С телом + связь с переводом. */
export interface PostFull extends Omit<PostCard, "hasTranslation"> {
  body?: PortableTextBlock[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
  translation?: {
    _id: string;
    title: string;
    slug: string;
    language: Locale;
  };
}
