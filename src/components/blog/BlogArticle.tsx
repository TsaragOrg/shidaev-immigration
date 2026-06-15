/* BlogArticle — отдельная страница статьи /blog/[slug].
   Структура (по research-плану):
   - eyebrow (категория · дата · reading time)
   - H1 заголовок
   - deck-строка (если есть)
   - tело (Portable Text + 5 кастомных блоков)
   - footer: автор, кнопка переключения языка если есть перевод,
     related posts, share link.

   Server Component — данные подгружены сервером. */

import Link from "next/link";
import Image from "next/image";
import PortableTextRenderer from "./PortableTextRenderer";
import PostCard from "./PostCard";
import { urlFor } from "@/sanity/lib/image";
import type { PostFull, PostCard as PostCardType } from "@/sanity/lib/types";
import type { Locale } from "@/lib/types";

const STRINGS = {
  ru: {
    backToBlog: "← Все статьи",
    blogHref: "/blog",
    publishedOn: "Опубликовано",
    updatedOn: "Обновлено",
    minRead: "мин чтения",
    readInOther: "Read in English →",
    relatedTitle: "Читать дальше",
    shareLink: "Скопировать ссылку",
    shareCopied: "Скопировано!",
  },
  en: {
    backToBlog: "← All articles",
    blogHref: "/en/blog",
    publishedOn: "Published",
    updatedOn: "Updated",
    minRead: "min read",
    readInOther: "Читать по-русски →",
    relatedTitle: "Read next",
    shareLink: "Copy link",
    shareCopied: "Copied!",
  },
} as const;

interface Props {
  post: PostFull;
  related: PostCardType[];
  lang: Locale;
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

/* Считаем реальные слова в теле Portable Text — рекурсивно проходим
   по блокам, вынимаем children.text. JSON.stringify не подходит:
   считал ключи/скобки/null-ы как «слова» — выходило завышение.

   Скорость чтения 220 слов/мин — средняя для русского/английского
   взрослого читателя на тексте средней сложности. Минимум 1 мин
   (а не «3 мин» как было раньше — это выглядело странно для короткой
   статьи в 200 слов). */
function estimateReadingTime(post: PostFull): number {
  if (!post.body || !Array.isArray(post.body)) return 1;

  const collectText = (node: unknown): string => {
    if (typeof node === "string") return node;
    if (!node || typeof node !== "object") return "";
    const obj = node as Record<string, unknown>;
    /* Текст в leaf-блоках лежит в obj.text. У block-узлов есть
       массив children. Кастомные блоки (callout, pullQuote и т.п.)
       тоже имеют свои text-поля — ловим через имя ключа. */
    if (typeof obj.text === "string") return obj.text;
    if (Array.isArray(obj.children)) {
      return obj.children.map(collectText).join(" ");
    }
    /* Для кастомных блоков — собираем все строковые значения. */
    return Object.values(obj)
      .filter((v) => typeof v === "string")
      .join(" ");
  };

  const allText = post.body.map(collectText).join(" ");
  const wordCount = allText.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 220));
}

export default function BlogArticle({ post, related, lang }: Props) {
  const t = STRINGS[lang];
  const cat = post.categories?.[0];
  const catTitle = lang === "ru" ? cat?.titleRu : cat?.titleEn;
  const readTime = estimateReadingTime(post);
  const accentColor = cat?.colorAccent || "#A8894A";

  const translationHref = post.translation
    ? `/${post.translation.language === "en" ? "en/" : ""}blog/${post.translation.slug}`
    : null;

  return (
    <article className="article">
      <div className="container article-container">
        <p className="article-back">
          <Link href={t.blogHref}>{t.backToBlog}</Link>
        </p>

        <header className="article-header">
          <div className="article-eyebrow">
            {catTitle && (
              <span
                className="article-eyebrow-cat"
                style={{ color: accentColor }}
              >
                {catTitle}
              </span>
            )}
            <span className="article-eyebrow-dot">·</span>
            <span>{formatDate(post.publishedAt, lang)}</span>
            <span className="article-eyebrow-dot">·</span>
            <span>
              {readTime} {t.minRead}
            </span>
          </div>

          <h1 className="article-title">{post.title}</h1>

          {post.deck && <p className="article-deck">{post.deck}</p>}

          {post.updatedAt && post.updatedAt !== post.publishedAt && (
            <p className="article-updated">
              {t.updatedOn} · {formatDate(post.updatedAt, lang)}
            </p>
          )}
        </header>

        {post.coverImage?.asset && (
          <figure className="article-cover">
            <Image
              src={urlFor(post.coverImage).width(1600).fit("max").url()}
              alt={post.coverImage.alt || post.title}
              width={1600}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </figure>
        )}

        <div className="article-body">
          <PortableTextRenderer value={post.body} />
        </div>

        <footer className="article-footer">
          {post.author && (
            <div className="article-author">
              {post.author.photo && (
                <Image
                  src={urlFor(post.author.photo).width(120).height(120).fit("crop").url()}
                  alt={post.author.name}
                  width={60}
                  height={60}
                  className="article-author-photo"
                />
              )}
              <div>
                <p className="article-author-name">{post.author.name}</p>
                {post.author.role && (
                  <p className="article-author-role">{post.author.role}</p>
                )}
              </div>
            </div>
          )}

          {translationHref && (
            <p className="article-translation-link">
              <Link href={translationHref}>{t.readInOther}</Link>
            </p>
          )}
        </footer>

        {related.length > 0 && (
          <aside className="article-related">
            <h2 className="article-related-title">{t.relatedTitle}</h2>
            <div className="article-related-list">
              {related.map((p) => (
                <PostCard key={p._id} post={p} lang={lang} />
              ))}
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}
