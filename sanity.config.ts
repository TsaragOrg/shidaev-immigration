/* Sanity Studio config — основной файл для встроенной Studio.
   Studio живёт в Next.js на route /studio. */

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { projectId, dataset, apiVersion } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { autoLinkTranslations } from "./src/sanity/plugins/autoLinkTranslations";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  /* Отключаем Releases — фича для группового планирования
     публикаций (когда нужно одной кнопкой выкатить несколько
     изменений одновременно). Solo-автору, который ведёт блог
     одной статьёй за раз, она только мешает: каждый раз при
     создании нового документа спрашивает «куда положить — в
     Drafts или в Release?». Простой workflow «создал → заполнил
     → опубликовал» возвращается без жёлтых warning-плашек. */
  releases: {
    enabled: false,
  },
  plugins: [
    structureTool({ structure }),
    /* Vision — GROQ-плейграунд для разработчика (тестировать запросы). */
    visionTool({ defaultApiVersion: apiVersion }),
    /* Когда Jacob связывает RU-статью с EN-переводом —
       обратная ссылка проставляется автоматом, без двойной работы. */
    autoLinkTranslations,
  ],
});
