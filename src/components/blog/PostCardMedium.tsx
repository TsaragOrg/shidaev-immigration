/* PostCardMedium — карточка для 2-колоночной grid-секции.
   Два варианта: с фото (фото сверху + текст под) или без фото
   (только текст). Карточка адаптируется автоматически.

   На /blog текстовые варианты не нужны (там отдельная зона
   плоского списка), поэтому /blog фильтрует только с фото.
   Главная использует и те, и те — UI остаётся согласованным. */

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

export default function PostCardMedium({ post, lang }: Props) {
  const t = STRINGS[lang];
  const cat = post.categories?.[0];
  /* На RU-сайте если перевод пустой — показываем EN-название (fallback). */
  const catTitle =
    lang === "ru" ? cat?.titleRu || cat?.titleEn : cat?.titleEn;
  const href = `${lang === "en" ? "/en" : ""}/blog/${post.slug}`;
  /* Бронза по умолчанию для категории eyebrow на карточке.
     Сайт globally монохромный (--accent = dark charcoal), но в
     editorial-карточках золото даёт визуальную иерархию ка в
     референс-мокапе. Категории в Sanity могут переопределить
     через colorAccent. */
  const accentColor = cat?.colorAccent || "#A8894A";
  const hasCover = Boolean(post.coverImage?.asset);

  return (
    <Link
      href={href}
      className={`post-medium${hasCover ? " has-cover" : " no-cover"}`}
    >
      {hasCover && post.coverImage ? (
        <div className="post-medium-media">
          <Image
            src={urlFor(post.coverImage).width(800).height(450).fit("crop").url()}
            alt={post.title}
            width={800}
            height={450}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : post.cardKicker ? (
        /* Без фото с kicker — типографическая плашка на месте фото.
           Крупное сокращение + опциональный подзаголовок с обрамляющими
           золотыми линиями. Закрывает «дыру» без AI-плейсхолдера. */
        <div className="post-medium-kicker" aria-hidden="true">
          <span className="post-medium-kicker-text">{post.cardKicker}</span>
          {post.cardKickerSubtitle ? (
            <span className="post-medium-kicker-sub">
              <span className="post-medium-kicker-subtitle">
                {post.cardKickerSubtitle}
              </span>
            </span>
          ) : (
            <span className="post-medium-kicker-rule" />
          )}
        </div>
      ) : null /* Без фото и без kicker — карточка чисто текстовая. */}
      <div className="post-medium-body">
        <div className="post-medium-eyebrow">
          {catTitle && (
            <span className="post-medium-cat" style={{ color: accentColor }}>
              {catTitle}
            </span>
          )}
          {catTitle && <span className="post-medium-dot">·</span>}
          <span className="post-medium-date">
            {formatDate(post.publishedAt, lang)}
          </span>
        </div>
        <h3 className="post-medium-title">{post.title}</h3>
        {(() => {
          /* Lede приоритет с учётом длины:
             - Если Excerpt >= 70 симв → использовать (автор написал
               полный preview, уважаем).
             - Иначе → bodyPreview (если длиннее) или deck.
             Так короткие excerpt'ы вроде «Что подготовить заранее»
             заменяются первым абзацем тела — карточка не выглядит
             полупустой с одной строкой. */
          const bodyText = (post.firstParagraphSpans || [])
            .filter(Boolean)
            .join("");
          const excerptIsFull = (post.excerpt?.length ?? 0) >= 70;
          const lede = excerptIsFull
            ? post.excerpt
            : (bodyText || post.excerpt || post.deck || null);
          if (!lede) return null;
          const trimmed = lede.length > 200
            ? lede.slice(0, lede.lastIndexOf(" ", 200)).trim() + "…"
            : lede;
          return <p className="post-medium-lede">{trimmed}</p>;
        })()}
        <span className="post-medium-cta">{t.readMore}</span>
      </div>
    </Link>
  );
}
