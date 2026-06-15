"use client";

/* /studio — Sanity Studio embed внутри Next.js.
   "use client" нужен потому что Sanity использует React Context.
   Динамический сегмент [[...tool]] catch-all нужен Studio чтобы
   роутить свои внутренние страницы (содержимое/настройки/превью).

   Inline <style> внизу — фикс контраста для дропдауна стилей в
   Portable Text editor: H2/H3 в превью рендерятся как реальные h2/h3
   тэги и могут быть тёмными на тёмной теме Sanity. Принудительно
   делаем их белыми с прозрачностью — как обычные текстовые элементы
   в студии. */

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

const STUDIO_STYLES = `
  /* Контраст для превью стилей в Portable Text dropdown.
     Селекторы покрывают все возможные обёртки Sanity v3:
     menu items, list items, button content. */
  [data-ui="MenuItem"] h1,
  [data-ui="MenuItem"] h2,
  [data-ui="MenuItem"] h3,
  [data-ui="MenuItem"] h4,
  [data-ui="MenuItem"] h5,
  [data-ui="MenuItem"] h6,
  [data-ui="MenuItem"] p,
  [data-ui="MenuItem"] blockquote,
  [data-portable-text-editor] h1,
  [data-portable-text-editor] h2,
  [data-portable-text-editor] h3,
  [data-portable-text-editor] h4,
  [data-portable-text-editor] h5,
  [data-portable-text-editor] h6,
  [data-portable-text-editor] blockquote,
  [role="menuitem"] h1,
  [role="menuitem"] h2,
  [role="menuitem"] h3,
  [role="menuitem"] h4,
  [role="menuitem"] h5,
  [role="menuitem"] h6,
  [role="menuitem"] blockquote {
    color: rgba(255, 255, 255, 0.95) !important;
    font-family: inherit !important;
    letter-spacing: normal !important;
  }
`;

export default function StudioPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STUDIO_STYLES }} />
      <NextStudio config={config} />
    </>
  );
}
