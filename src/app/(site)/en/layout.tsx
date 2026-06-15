/* /en/ layout — оборачивает все английские страницы в div с lang="en".
   Это нужно для скринридеров (NVDA, JAWS, VoiceOver), чтобы они
   переключили произношение на английское. Корневой html lang="ru"
   остаётся (Next.js App Router имеет один root html), но внутренний
   lang атрибут на div переопределяет его для всего поддерева — это
   валидный HTML и стандартный паттерн для мультиязычных SPA. */

import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    locale: "en_US",
    alternateLocale: ["ru_RU"],
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div lang="en">{children}</div>;
}
