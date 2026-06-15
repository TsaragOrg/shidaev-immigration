import { createImageUrlBuilder } from "@sanity/image-url";

import { dataset, projectId } from "../env";

/* Inline тип — облегчает чтобы не зависеть от внутренних путей пакета. */
type SanityImageSource = Parameters<
  ReturnType<typeof createImageUrlBuilder>["image"]
>[0];

/* Билдер URL для картинок из Sanity CDN.
   Использование: urlFor(post.coverImage).width(800).height(500).url() */
const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
