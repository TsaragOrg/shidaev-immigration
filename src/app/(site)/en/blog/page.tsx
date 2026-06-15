/* /en/blog — EN список статей. */

import { client } from "@/sanity/lib/client";
import { POSTS_BY_LANG_QUERY } from "@/sanity/lib/queries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogIndex from "@/components/blog/BlogIndex";
import type { PostCard } from "@/sanity/lib/types";

export const metadata = {
  title: "Publications",
  description: "Publications by Law Offices of Jacob Shidaev.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch<PostCard[]>(POSTS_BY_LANG_QUERY, {
    lang: "en",
  });

  return (
    <>
      <Header lang="en" />
      <main>
        <BlogIndex posts={posts} lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
