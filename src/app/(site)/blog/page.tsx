/* /blog — RU список статей. Server Component, данные из Sanity. */

import { client } from "@/sanity/lib/client";
import { POSTS_BY_LANG_QUERY } from "@/sanity/lib/queries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogIndex from "@/components/blog/BlogIndex";
import type { PostCard } from "@/sanity/lib/types";

export const metadata = {
  title: "Публикации",
  description: "Публикации Law Offices of Jacob Shidaev.",
};

/* ISR — обновлять данные раз в минуту. Если пост опубликовали в
   Sanity — появится на сайте максимум через 60 сек. */
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch<PostCard[]>(POSTS_BY_LANG_QUERY, {
    lang: "ru",
  });

  return (
    <>
      <Header lang="ru" />
      <main>
        <BlogIndex posts={posts} lang="ru" />
      </main>
      <Footer lang="ru" />
    </>
  );
}
