import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

/* Sanity client для чтения данных из CMS на сервере (RSC).
   useCdn: true в продакшене — отдаёт кешированный контент быстро.
   В dev — false, чтобы видеть свежие изменения сразу. */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  perspective: "published",
  stega: { studioUrl: "/studio" },
});
