/* PostCard — текстовая карточка в плоском хвосте /blog.
   Используется для статей БЕЗ coverImage. Со статьями с фото работает
   FeaturedPost (первая) и PostCardMedium (2-колоночный grid). */

import Link from "next/link";
import type { PostCard as PostCardType } from "@/sanity/lib/types";
import type { Locale } from "@/lib/types";

const STRINGS = {
  ru: { minRead: "мин" },
  en: { minRead: "min" },
} as const;

interface Props {
  post: PostCardType;
  lang: Locale;
}

/* Reading time приблизительно из excerpt/deck (без body точно не посчитать). */
function estimateReadingTime(post: PostCardType): number {
  const text = (post.excerpt || post.deck || "").split(/\s+/).length;
  return Math.max(3, Math.ceil(text / 200) + 5);
}

function formatDate(iso: string, lang: Locale): string {
  const date = new Date(iso);
  const locale = lang === "ru" ? "ru-RU" : "en-US";
  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function PostCard({ post, lang }: Props) {
  const t = STRINGS[lang];
  const cat = post.categories?.[0];
  /* На RU-сайте если перевод пустой — показываем EN-название (fallback). */
  const catTitle =
    lang === "ru" ? cat?.titleRu || cat?.titleEn : cat?.titleEn;
  const readTime = estimateReadingTime(post);
  const href = `/${lang === "en" ? "en/" : ""}blog/${post.slug}`;
  const accentColor = cat?.colorAccent || "#A8894A";

  return (
    <Link href={href} className="post-card">
      <div className="post-card-eyebrow">
        {catTitle && (
          <span className="post-card-cat" style={{ color: accentColor }}>
            {catTitle}
          </span>
        )}
        {catTitle && <span className="post-card-meta-dot">·</span>}
        <span className="post-card-readtime">
          {readTime} {t.minRead}
        </span>
      </div>

      <h3 className="post-card-title">{post.title}</h3>

      {post.deck && <p className="post-card-deck">{post.deck}</p>}

      <p className="post-card-date">{formatDate(post.publishedAt, lang)}</p>
    </Link>
  );
}
