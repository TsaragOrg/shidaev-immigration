/* ArticleJsonLd — structured data для Google rich snippets.
   Schema.org Article — даёт карточки в результатах поиска,
   подсказки в Knowledge Graph, лучшее ранжирование. */

import { urlFor } from "@/sanity/lib/image";
import type { PostFull } from "@/sanity/lib/types";

const SITE_URL = "https://shidaev.com";

interface Props {
  post: PostFull;
  lang: "ru" | "en";
}

export default function ArticleJsonLd({ post, lang }: Props) {
  const url = `${SITE_URL}${lang === "en" ? "/en" : ""}/blog/${post.slug}`;
  const imageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(630).fit("crop").url()
    : `${SITE_URL}/photos/shidaev-black-hero.png`;

  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description:
      post.seo?.metaDescription || post.excerpt || post.deck || post.title,
    image: imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    inLanguage: lang === "ru" ? "ru-RU" : "en-US",
    author: post.author
      ? {
          "@type": "Person",
          name: post.author.name,
          ...(post.author.role && { jobTitle: post.author.role }),
        }
      : {
          "@type": "Organization",
          name: "Law Offices of Jacob Shidaev",
        },
    publisher: {
      "@type": "Organization",
      name: "Law Offices of Jacob Shidaev",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/photos/shidaev-black-hero.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
