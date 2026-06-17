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
  language?: "ru" | "en";
  slug?: { _type?: "slug"; current?: string };
  translation?: { _type?: "reference"; _ref: string; _weak?: boolean };
}

type StudioClient = ReturnType<typeof useClient>;

const POST_BY_ANY_ID_QUERY = `coalesce(
  *[_id == $draftId][0]{
    _id,
    _type,
    language,
    slug,
    translation
  },
  *[_id == $publishedId][0]{
    _id,
    _type,
    language,
    slug,
    translation
  }
)`;

function publishedId(id: string): string {
  return id.replace(/^drafts\./, "");
}

function draftId(id: string): string {
  return `drafts.${publishedId(id)}`;
}

function slugValue(slug: string) {
  return { _type: "slug" as const, current: slug };
}

function translationValue(ref: string) {
  return { _type: "reference" as const, _ref: ref, _weak: true };
}

function currentSlug(doc: PostDoc | null | undefined): string | undefined {
  return doc?.slug?.current;
}

function chooseCanonicalSlug(current: PostDoc, target: PostDoc): string | null {
  const currentValue = currentSlug(current);
  const targetValue = currentSlug(target);

  if (current.language === "en" && currentValue) return currentValue;
  if (target.language === "en" && targetValue) return targetValue;

  return targetValue || currentValue || null;
}

async function fetchPostByAnyId(
  client: StudioClient,
  id: string
): Promise<PostDoc | null> {
  return client.fetch(POST_BY_ANY_ID_QUERY, {
    draftId: draftId(id),
    publishedId: publishedId(id),
  });
}

async function syncCurrentDraftSlug(
  client: StudioClient,
  current: PostDoc
): Promise<void> {
  const translationRef = current.translation?._ref;
  if (!translationRef) return;

  const target = await fetchPostByAnyId(client, translationRef);
  if (!target || target._type !== "post") return;

  const canonicalSlug = chooseCanonicalSlug(current, target);
  const set: Partial<Pick<PostDoc, "slug" | "translation">> = {};

  if (canonicalSlug && currentSlug(current) !== canonicalSlug) {
    set.slug = slugValue(canonicalSlug);
  }

  if (!current.translation?._weak) {
    set.translation = translationValue(translationRef);
  }

  if (Object.keys(set).length === 0) return;

  await client.patch(current._id).set(set).commit();
}

async function syncPublishedPair(
  client: StudioClient,
  current: PostDoc
): Promise<void> {
  const currentId = publishedId(current._id);
  const translationRef = current.translation?._ref;
  if (!currentId || !translationRef || publishedId(translationRef) === currentId) {
    return;
  }

  const publishedCurrent =
    (await client.fetch<PostDoc | null>(
      `*[_id == $id][0]{
        _id,
        _type,
        language,
        slug,
        translation
      }`,
      { id: currentId }
    )) || current;

  const target = await fetchPostByAnyId(client, translationRef);
  if (!target || target._type !== "post") return;

  const canonicalSlug = chooseCanonicalSlug(publishedCurrent, target);
  if (!canonicalSlug) return;

  if (currentSlug(publishedCurrent) !== canonicalSlug) {
    await client
      .patch(currentId)
      .set({ slug: slugValue(canonicalSlug) })
      .commit();
  }

  if (
    publishedCurrent.translation?._ref === translationRef &&
    !publishedCurrent.translation?._weak
  ) {
    await client
      .patch(currentId)
      .set({ translation: translationValue(translationRef) })
      .commit();
  }

  const targetId = publishedId(target._id);
  if (currentSlug(target) !== canonicalSlug) {
    await client
      .patch(targetId)
      .set({ slug: slugValue(canonicalSlug) })
      .commit();
  }

  if (target.translation?._ref !== currentId || !target.translation?._weak) {
    await client
      .patch(targetId)
      .set({ translation: translationValue(currentId) })
      .commit();
  }
}

async function unlinkTranslationReferrers(
  client: StudioClient,
  current: PostDoc
): Promise<void> {
  const currentId = publishedId(current._id);
  const ids = [currentId, draftId(currentId)];
  const referrers = await client.fetch<Array<{ _id: string }>>(
    `*[
      _type == "post"
      && translation._ref in $ids
    ]{_id}`,
    { ids }
  );

  await Promise.all(
    referrers.map((doc) =>
      client.patch(doc._id).unset(["translation"]).commit()
    )
  );
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
        const doc = (props.draft || props.published) as PostDoc | null;
        if (doc?._type === "post") {
          await syncCurrentDraftSlug(client, doc);
        }

        await description.onHandle?.();

        if (!doc || doc._type !== "post") return;

        try {
          await syncPublishedPair(client, doc);
        } catch (err) {
          console.warn("autoLinkTranslations:", err);
        }
      },
    };
  };
  return Wrapped;
}

function wrapDelete(original: DocumentActionComponent): DocumentActionComponent {
  const Wrapped: DocumentActionComponent = (props: DocumentActionProps) => {
    const client = useClient({ apiVersion: "2026-05-31" });
    const description = original(props);
    if (!description) return description;

    return {
      ...description,
      onHandle: async () => {
        const doc = (props.draft || props.published) as PostDoc | null;
        if (doc?._type === "post") {
          try {
            await unlinkTranslationReferrers(client, doc);
          } catch (err) {
            console.warn("autoLinkTranslations delete:", err);
          }
        }

        await description.onHandle?.();
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
      return prev.map((a) => {
        if (a.action === "publish") return wrapPublish(a);
        if (a.action === "delete") return wrapDelete(a);
        return a;
      });
    },
  },
});
