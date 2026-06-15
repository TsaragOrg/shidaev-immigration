/* autoLinkTranslations — Sanity plugin.

   Когда Jacob публикует пост-перевод (с заполненным полем translation),
   плагин автоматически проставляет обратную ссылку в исходном посте.

   Зачем: иначе Jacob должен поставить ссылку в обеих статьях вручную.
   Двойная работа + риск забыть. Теперь — одна ссылка достаточно. */

import {
  definePlugin,
  useClient,
  type DocumentActionComponent,
  type DocumentActionProps,
} from "sanity";

interface PostDoc {
  _id: string;
  _type: string;
  translation?: { _ref: string };
}

function wrapPublish(
  original: DocumentActionComponent
): DocumentActionComponent {
  const Wrapped: DocumentActionComponent = (props: DocumentActionProps) => {
    const client = useClient({ apiVersion: "2026-05-31" });
    const description = original(props);
    if (!description) return description;

    return {
      ...description,
      onHandle: async () => {
        await description.onHandle?.();

        const doc = (props.draft || props.published) as PostDoc | null;
        if (!doc || doc._type !== "post") return;

        const docId = doc._id?.replace(/^drafts\./, "");
        const translationRef = doc.translation?._ref;
        if (!docId || !translationRef) return;

        try {
          const target = await client.fetch(
            `*[_id == $id][0]{_id, translation}`,
            { id: translationRef }
          );

          if (
            target &&
            (target as { translation?: { _ref: string } }).translation?._ref !== docId
          ) {
            await client
              .patch(translationRef)
              .set({
                translation: { _type: "reference", _ref: docId },
              })
              .commit();
          }
        } catch (err) {
          console.warn("autoLinkTranslations:", err);
        }
      },
    };
  };
  return Wrapped;
}

export const autoLinkTranslations = definePlugin({
  name: "auto-link-translations",
  document: {
    actions: (prev, context) => {
      if (context.schemaType !== "post") return prev;
      return prev.map((a) =>
        a.action === "publish" ? wrapPublish(a) : a
      );
    },
  },
});
