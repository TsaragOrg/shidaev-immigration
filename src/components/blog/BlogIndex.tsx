"use client";

/* BlogIndex — страница /blog с тремя зонами (BBC-like):
   1. Первая статья — большая featured (FeaturedPost). С фото или без.
   2. Статьи с фото — в 2 колонки (PostCardMedium).
   3. Статьи без фото — плоский текстовый список (PostCard).

   Категории-фильтр: chip-row сверху. Появляется автоматически
   когда статей >= 3. Меньше — фильтр скрыт (юзер видит весь список
   сам). Состояние фильтра в useState на клиенте, не в URL —
   проще, но фильтр сбрасывается при перезагрузке (для блога такого
   объёма ОК; при росте до 50+ статей можно перевести на query-param).

   Server-side данные передаются в этот клиентский компонент сверху
   (BlogPage — Server Component). */

import { useMemo, useState } from "react";
import Link from "next/link";
import FeaturedPost from "./FeaturedPost";
import PostCardMedium from "./PostCardMedium";
import PostCard from "./PostCard";
import type { PostCard as PostCardType } from "@/sanity/lib/types";
import type { Locale } from "@/lib/types";

const STRINGS = {
  ru: {
    title: "Публикации",
    filterAll: "Все",
    filterAria: "Фильтр по категориям",
    emptyTitle: "Скоро здесь появятся первые статьи",
    emptyText:
      "Готовим разборы реальных дел, объяснения процедур и ответы на частые вопросы. А пока — если у вас есть конкретный иммиграционный вопрос, обсудим его лично.",
    emptyCta: "Записаться на консультацию",
    emptyCtaHref: "/contact",
    emptySecondary: "Узнать о мошенниках в иммиграционной сфере →",
    emptySecondaryHref: "/fraud-warning",
    noMatchTitle: "В этой категории пока пусто",
    noMatchText: "Скоро появятся статьи. Пока — посмотри другие категории.",
  },
  en: {
    title: "Publications",
    filterAll: "All",
    filterAria: "Filter by category",
    emptyTitle: "First articles coming soon",
    emptyText:
      "We're preparing case studies, procedural explainers, and answers to frequent questions. In the meantime — if you have a specific immigration question, let's discuss it directly.",
    emptyCta: "Book a consultation",
    emptyCtaHref: "/en/contact",
    emptySecondary: "Read about immigration scams →",
    emptySecondaryHref: "/en/fraud-warning",
    noMatchTitle: "Nothing in this category yet",
    noMatchText: "Articles coming soon. Meanwhile — check other categories.",
  },
} as const;

/* Фильтр показывается когда есть >= 2 категорий в статьях.
   С 1 категорией фильтр бессмысленный (только «Все» и одна кнопка).
   Порога по количеству статей нет — клиент сможет фильтровать
   сразу как добавит вторую категорию. */

interface Props {
  posts: PostCardType[];
  lang: Locale;
}

export default function BlogIndex({ posts, lang }: Props) {
  const t = STRINGS[lang];
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  /* Уникальные категории из всех постов. Сохраняем порядок: категория
     которая встретилась первой — слева. Это даёт детерминированный
     порядок чипов независимо от количества статей в каждой категории.

     Защита от broken refs: если категория удалена из Sanity, GROQ
     `->` возвращает null. Фильтруем nulls и пропускаем категории
     без _id или без названия. */
  const allCategories = useMemo(() => {
    const seen = new Map<
      string,
      { _id: string; titleRu?: string; titleEn?: string }
    >();
    for (const post of posts) {
      for (const cat of post.categories ?? []) {
        if (!cat || !cat._id) continue;
        if (!cat.titleRu && !cat.titleEn) continue;
        if (!seen.has(cat._id)) {
          seen.set(cat._id, cat);
        }
      }
    }
    return Array.from(seen.values());
  }, [posts]);

  /* Фильтрация: если категория активна — оставляем только посты с
     этой категорией. «Все» = activeCategoryId === null. Игнорируем
     null-references в categories[]. */
  const filteredPosts = useMemo(() => {
    if (!activeCategoryId) return posts;
    return posts.filter((p) =>
      p.categories?.some((c) => c && c._id === activeCategoryId),
    );
  }, [posts, activeCategoryId]);

  const showFilter = allCategories.length >= 2;

  /* Делим ленту: featured (первая) + rest с фото + rest без фото.
     Внутри каждой группы порядок Sanity (по дате) сохраняется. */
  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);
  const withCover = rest.filter((p) => p.coverImage?.asset);
  const withoutCover = rest.filter((p) => !p.coverImage?.asset);

  /* Локально для каждой категории её title с fallback. */
  const catLabel = (cat: { titleRu?: string; titleEn?: string }) =>
    lang === "ru" ? cat.titleRu || cat.titleEn || "" : cat.titleEn || cat.titleRu || "";

  return (
    <section className="blog-index">
      <div className="container">
        <header className="blog-index-head reveal">
          <h1>{t.title}</h1>
        </header>

        {showFilter && (
          <nav className="blog-filter reveal" aria-label={t.filterAria}>
            <button
              type="button"
              className={`blog-filter-chip${activeCategoryId === null ? " is-active" : ""}`}
              onClick={() => setActiveCategoryId(null)}
              aria-pressed={activeCategoryId === null}
            >
              {t.filterAll}
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat._id}
                type="button"
                className={`blog-filter-chip${
                  activeCategoryId === cat._id ? " is-active" : ""
                }`}
                onClick={() => setActiveCategoryId(cat._id)}
                aria-pressed={activeCategoryId === cat._id}
              >
                {catLabel(cat)}
              </button>
            ))}
          </nav>
        )}

        {posts.length === 0 && (
          <div className="blog-empty reveal">
            <h2 className="blog-empty-title">{t.emptyTitle}</h2>
            <p className="blog-empty-text">{t.emptyText}</p>
            <div className="blog-empty-actions">
              <Link href={t.emptyCtaHref} className="btn btn-shimmer">
                {t.emptyCta}
                <span className="arrow">→</span>
              </Link>
              <Link href={t.emptySecondaryHref} className="blog-empty-link">
                {t.emptySecondary}
              </Link>
            </div>
          </div>
        )}

        {/* Если фильтр активен и категория пуста — мини-empty-state. */}
        {posts.length > 0 && filteredPosts.length === 0 && (
          <div className="blog-empty reveal">
            <h2 className="blog-empty-title">{t.noMatchTitle}</h2>
            <p className="blog-empty-text">{t.noMatchText}</p>
          </div>
        )}

        {featured && (
          <div className="blog-featured-wrap reveal">
            <FeaturedPost post={featured} lang={lang} />
          </div>
        )}

        {withCover.length > 0 && (
          <div className="blog-grid-medium">
            {withCover.map((post) => (
              <PostCardMedium key={post._id} post={post} lang={lang} />
            ))}
          </div>
        )}

        {withoutCover.length > 0 && (
          <div className="blog-list">
            {withoutCover.map((post) => (
              <PostCard key={post._id} post={post} lang={lang} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
