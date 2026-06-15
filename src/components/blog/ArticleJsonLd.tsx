/* ArticleJsonLd — structured data для Google rich snippets.
   Schema.org Article — даёт карточки в результатах поиска,
   подсказки в Knowledge Graph, лучшее ранжирование. */

import { urlFor } from "@/sanity/lib/image";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import type { PostFull } from "@/sanity/lib/types";

interface Props {
  post: PostFull;
  lang: "ru" | "en";
}

export default function ArticleJsonLd({ post, lang }: Props) {
  const url = absoluteUrl(`${lang === "en" ? "/en" : ""}/blog/${post.slug}`);
  const imageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(630).fit("crop").url()
    : absoluteUrl(siteConfig.heroImagePath);

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
          name: siteConfig.firmName,
        },
    publisher: {
      "@type": "Organization",
      name: siteConfig.firmName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.heroImagePath),
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
