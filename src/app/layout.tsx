import { Inter, EB_Garamond } from "next/font/google";

/* Корневой layout — минимальный.
   Содержит html/body и подключает шрифты как CSS-переменные на <html>.
   НЕ импортирует globals.css — глобальные стили сайта импортятся в
   (site)/layout.tsx, чтобы не утекать в /studio (у Sanity Studio своя
   тёмная тема и наши h2/h3 цвета её ломали).

   Шрифты Google загружаются здесь чтобы CSS-переменные были доступны
   и сайту, и Studio (Studio их не использует — игнорирует — но
   единый <html> класс безопасен). */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${ebGaramond.variable} antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
