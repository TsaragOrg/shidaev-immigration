/* /blog/[slug] — RU отдельная статья. */

import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import {
  POST_BY_SLUG_QUERY,
  RELATED_POSTS_QUERY,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogArticle from "@/components/blog/BlogArticle";
import ArticleJsonLd from "@/components/blog/ArticleJsonLd";
import type { PostFull, PostCard } from "@/sanity/lib/types";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<PostFull | null>(POST_BY_SLUG_QUERY, {
    slug,
    lang: "ru",
  });
  if (!post) return {};

  const title = post.seo?.metaTitle || post.title;
  const description =
    post.seo?.metaDescription || post.excerpt || post.deck || undefined;
  const ogImage = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(630).fit("crop").url()
    : "/photos/shidaev-black-hero.png";

  const url = `https://shidaev.com/blog/${post.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      locale: "ru_RU",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
      languages: post.translation
        ? {
            "en-US": `https://shidaev.com/en/blog/${post.translation.slug}`,
          }
        : undefined,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<PostFull | null>(POST_BY_SLUG_QUERY, {
    slug,
    lang: "ru",
  });

  if (!post) notFound();

  const categoryIds = post.categories?.map((c) => c._id) || [];
  const related = categoryIds.length
    ? await client.fetch<PostCard[]>(RELATED_POSTS_QUERY, {
        lang: "ru",
        excludeId: post._id,
        categoryIds,
      })
    : [];

  return (
    <>
      <ArticleJsonLd post={post} lang="ru" />
      <Header lang="ru" />
      <main>
        <BlogArticle post={post} related={related} lang="ru" />
      </main>
      <Footer lang="ru" />
    </>
  );
}
