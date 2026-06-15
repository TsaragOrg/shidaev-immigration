/* PortableTextRenderer — рендерит тело статьи из Sanity.
   Включает 5 кастомных блоков: callout, pullQuote, checklist,
   caseReference, inlineImage.

   Стандартные стили (H2, H3, blockquote, lists, marks bold/italic/link)
   подключены автоматически через next-sanity. */

import { PortableText, type PortableTextComponents } from "next-sanity";
import Image from "next/image";
import type { PortableTextBlock } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

interface CalloutValue {
  tone: "info" | "warning" | "urgent" | "deadline";
  title?: string;
  text: string;
}

interface PullQuoteValue {
  text: string;
  attribution?: string;
}

interface ChecklistValue {
  title?: string;
  items: string[];
}

interface CaseReferenceValue {
  citation: string;
  summary?: string;
  link?: string;
}

interface InlineImageValue {
  asset: { _ref: string };
  alt?: string;
  caption?: string;
  hotspot?: { x: number; y: number };
}

interface LinkMarkValue {
  href: string;
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="article-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="article-h3">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="article-blockquote">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="article-p">{children}</p>,
  },

  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href = (value as LinkMarkValue)?.href || "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          className="article-link"
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </a>
      );
    },
  },

  list: {
    bullet: ({ children }) => <ul className="article-list">{children}</ul>,
    number: ({ children }) => <ol className="article-list-ol">{children}</ol>,
  },

  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  types: {
    callout: ({ value }) => {
      const v = value as CalloutValue;
      return (
        <aside className={`article-callout article-callout--${v.tone}`}>
          {v.title && <p className="article-callout-title">{v.title}</p>}
          <p className="article-callout-text">{v.text}</p>
        </aside>
      );
    },

    pullQuote: ({ value }) => {
      const v = value as PullQuoteValue;
      return (
        <blockquote className="article-pullquote">
          <p>{v.text}</p>
          {v.attribution && (
            <footer className="article-pullquote-attr">
              — {v.attribution}
            </footer>
          )}
        </blockquote>
      );
    },

    checklist: ({ value }) => {
      const v = value as ChecklistValue;
      return (
        <div className="article-checklist">
          {v.title && <p className="article-checklist-title">{v.title}</p>}
          <ul className="article-checklist-items">
            {v.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );
    },

    caseReference: ({ value }) => {
      const v = value as CaseReferenceValue;
      const inner = (
        <>
          <p className="article-case-citation">{v.citation}</p>
          {v.summary && (
            <p className="article-case-summary">{v.summary}</p>
          )}
        </>
      );
      if (v.link) {
        return (
          <a
            href={v.link}
            target="_blank"
            rel="noopener noreferrer"
            className="article-case article-case--linked"
          >
            {inner}
          </a>
        );
      }
      return <div className="article-case">{inner}</div>;
    },

    inlineImage: ({ value }) => {
      const v = value as InlineImageValue;
      if (!v?.asset) return null;
      return (
        <figure className="article-figure">
          <Image
            src={urlFor(v).width(1200).fit("max").url()}
            alt={v.alt || ""}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 700px"
          />
          {v.caption && (
            <figcaption className="article-figure-caption">
              {v.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface Props {
  value: PortableTextBlock[] | undefined;
}

export default function PortableTextRenderer({ value }: Props) {
  if (!value || value.length === 0) return null;
  return <PortableText value={value} components={components} />;
}
