/* Глобальные TypeScript-типы для проекта */

/** Локали сайта. RU — дефолт (корень), EN — алиас в /en/. */
export type Locale = "ru" | "en";

/** Пропс для bilingual компонентов. */
export interface LangProps {
  lang: Locale;
}
