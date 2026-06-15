/* Studio layout — overrides root layout (без Header/Footer/RevealOnScroll).
   Metadata/viewport здесь, потому что page.tsx это Client Component
   (Sanity использует React Context).

   CSS override: водяной знак (полупрозрачный заголовок документа над формой)
   в дефолтной тёмной теме Sanity почти не виден. Поднимаем opacity. */

export { metadata, viewport } from "next-sanity/studio";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        /* Все h1/h2 в шапке документа — повышаем непрозрачность.
           Перебираем известные дата-атрибуты Sanity v3 + общий fallback. */
        [data-ui="DocumentPaneHeader"] h1,
        [data-ui="DocumentPaneHeader"] h2,
        [data-ui="DocumentPaneHeader"] [data-ui="Heading"],
        [data-ui="DocumentPanel"] [data-ui="Heading"],
        [data-testid="pane-header-title"],
        [data-testid="document-panel-document-title"],
        [data-testid="document-header-title"],
        article[data-testid="document-pane"] h1,
        article[data-testid="document-pane"] h2 {
          color: #FFFFFF !important;
          opacity: 0.95 !important;
        }

        /* Если водяной знак — отдельный sticky-слой с прозрачностью внутри
           Card, поднимаем и его. */
        [data-ui="DocumentPaneHeader"] [data-ui="Card"] {
          opacity: 1 !important;
        }
      `}</style>
      {children}
    </>
  );
}
