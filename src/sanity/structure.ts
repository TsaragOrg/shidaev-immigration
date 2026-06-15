import type { StructureResolver } from "sanity/structure";

/* Структура сайдбара Studio — порядок и группировка.

   Помимо стандартного списка Publications, добавлен view
   «По категориям»: drill-in по категориям, внутри каждой —
   только публикации этой категории. Это даёт клиенту быстрый
   способ найти все статьи определённой темы, не пользуясь
   поиском, и при необходимости массово их удалить. */

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Контент")
    .items([
      S.documentTypeListItem("post").title("Publications"),

      /* «По категориям» — drill view.
         Список категорий → клик на категорию → список её публикаций.
         GROQ-фильтр: посты, у которых выбранная категория есть в ссылках. */
      S.listItem()
        .title("По категориям")
        .icon(() => "🏷")
        .child(
          S.documentTypeList("category")
            .title("Выбери категорию")
            .child((categoryId) =>
              S.documentList()
                .title("Публикации в категории")
                .schemaType("post")
                .filter('_type == "post" && $categoryId in categories[]._ref')
                .params({ categoryId })
                .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
            )
        ),

      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
    ]);
