# SEO

## Что реализовано

| Элемент | Где |
|---|---|
| `sitemap.xml` | `src/app/sitemap.ts` — генерация |
| `robots.txt` | `src/app/robots.ts` — генерация |
| Meta title / description | `metadata` в каждом `page.tsx` |
| Open Graph | `metadata.openGraph` в layout + страницах |
| Twitter Card | `metadata.twitter` |
| JSON-LD Attorney | `src/components/seo/AttorneyJsonLd.tsx` (главная) |
| JSON-LD Article | `src/components/blog/ArticleJsonLd.tsx` (каждый пост) |
| `<html lang="">` | Корректный для каждой языковой версии |
| `hreflang` alternate | Между RU/EN зеркалами через `metadata.alternates` |
| Canonical URL | `https://shidaev.com` зашит (см. `02-стек.md` про текущий статус домена) |
| Sitemap включает посты | Через Sanity client в `sitemap.ts` |

## Целевой Lighthouse SEO

≥ 95.

## Что НЕ настраиваем (опционально, не делаем сейчас)

- Расширенные schema.org типы (LegalService, LocalBusiness) — Attorney уже покрывает базовое
- Knowledge Graph API integration — не приоритет

## Связано с

- `04-функции/блог.md` — посты в sitemap + JSON-LD
- `04-функции/i18n.md` — hreflang механика
- `02-стек.md` — Next.js нативные SEO-возможности
