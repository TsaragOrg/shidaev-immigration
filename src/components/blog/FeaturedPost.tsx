/* FeaturedPost — большой блок «свежая статья».
   Используется и на главной (секция блога), и на /blog (первая статья).

   Адаптивный: с coverImage — фото + текст рядом, без — только текст. */

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { PostCard as PostCardType } from "@/sanity/lib/types";
import type { Locale } from "@/lib/types";

const STRINGS = {
  ru: { readMore: "Читать →" },
  en: { readMore: "Read more →" },
} as const;

function formatDate(iso: string, lang: Locale): string {
  const date = new Date(iso);
  const locale = lang === "ru" ? "ru-RU" : "en-US";
  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface Props {
  post: PostCardType;
  lang: Locale;
}

/* Структура body: meta + title + deck — наверху (flex-start),
   CTA — внизу с margin-top:auto. Так CTA «прижата» к низу карточки,
   выглядит как осмысленный footer, а не висит в воздухе. */
export default function FeaturedPost({ post, lang }: Props) {
  const t = STRINGS[lang];
  const cat = post.categories?.[0];
  /* На RU-сайте если перевод пустой — показываем EN-название (fallback). */
  const catTitle =
    lang === "ru" ? cat?.titleRu || cat?.titleEn : cat?.titleEn;
  const href = `${lang === "en" ? "/en" : ""}/blog/${post.slug}`;
  const hasCover = Boolean(post.coverImage?.asset);

  return (
    <Link
      href={href}
      className={`featured-post${hasCover ? " has-cover" : " no-cover"}`}
    >
      {hasCover && post.coverImage && (
        <div className="featured-post-media">
          <Image
            src={urlFor(post.coverImage).width(1200).height(800).fit("crop").url()}
            alt={post.title}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="featured-post-body">
        <div className="featured-post-head">
          <p className="featured-post-meta">
            {catTitle && <span>{catTitle}</span>}
            {catTitle && <span> · </span>}
            <span>{formatDate(post.publishedAt, lang)}</span>
          </p>
          <h3 className="featured-post-title">{post.title}</h3>
          {(() => {
            /* Lede приоритет: excerpt → deck → первый параграф body.
               Не оставляем featured-карточку «голой» без описания. */
            const bodyText = (post.firstParagraphSpans || [])
              .filter(Boolean)
              .join("");
            const lede = post.excerpt || post.deck || bodyText || null;
            if (!lede) return null;
            const trimmed = lede.length > 240
              ? lede.slice(0, lede.lastIndexOf(" ", 240)).trim() + "…"
              : lede;
            return <p className="featured-post-deck">{trimmed}</p>;
          })()}
        </div>
        <span className="featured-post-cta">{t.readMore}</span>
      </div>
    </Link>
  );
}
