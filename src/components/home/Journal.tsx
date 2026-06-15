/* Journal — секция «Публикации» на главной.
   Server Component — async fetch напрямую в компоненте.

   Дизайн: 3 равные карточки в сетке. Без featured-иерархии —
   на главной мало места, и разноразмерные блоки только ломают
   ритм. Все карточки одной формы, фото опционально.

   Если статей <3 — рендерим сколько есть. Если 0 — секция скрыта. */

import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { LATEST_POSTS_QUERY } from "@/sanity/lib/queries";
import PostCardMedium from "@/components/blog/PostCardMedium";
import type { PostCard as PostCardType } from "@/sanity/lib/types";
import type { LangProps } from "@/lib/types";

const STRINGS = {
  ru: {
    eyebrow: "Публикации",
    title: "Свежие материалы",
    allLink: "Все публикации →",
    allHref: "/blog",
  },
  en: {
    eyebrow: "Publications",
    title: "Latest articles",
    allLink: "All publications →",
    allHref: "/en/blog",
  },
} as const;

export default async function Journal({ lang }: LangProps) {
  const t = STRINGS[lang];

  const posts = await client.fetch<PostCardType[]>(LATEST_POSTS_QUERY, {
    lang,
  });

  /* Нет ни одной статьи — секция не рендерится. */
  if (!posts?.length) return null;

  return (
    <section className="journal" id="journal">
      <div className="container">
        <div className="journal-head reveal">
          <div className="journal-head-title">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2>{t.title}</h2>
          </div>
          {/* Desktop: ссылка справа сверху рядом с заголовком */}
          <Link href={t.allHref} className="journal-all journal-all--desktop">
            {t.allLink}
          </Link>
        </div>

        <div className="journal-grid-cards reveal">
          {posts.map((post) => (
            <PostCardMedium key={post._id} post={post} lang={lang} />
          ))}
        </div>

        {/* Mobile: ссылка под карточками — большая, центрированная */}
        <Link href={t.allHref} className="journal-all journal-all--mobile">
          {t.allLink}
        </Link>
      </div>
    </section>
  );
}
