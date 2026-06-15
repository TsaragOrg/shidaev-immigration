/* Создание автора Jacob Shidaev. Идемпотентно — если уже есть, пропустит.

   Запуск:
     npx sanity exec scripts/seed-author.ts --with-user-token

   Photo пока пропускаем — Jacob сам загрузит позже через Studio. */

import { getCliClient } from "sanity/cli";

const AUTHOR = {
  name: "Jacob Shidaev",
  slug: "jacob-shidaev",
  role: "Immigration Attorney",
  bio:
    "California State Bar #343616. Admitted to U.S. District Courts for the Central, Eastern, and Northern Districts of California. Pro hac vice in Arizona, Arkansas, Kentucky, Nebraska, Oklahoma. Member of the American Immigration Lawyers Association, Southern California Chapter.",
};

async function run() {
  const client = getCliClient();

  console.log("→ Проверяю существующих авторов…");
  const existing: Array<{
    _id: string;
    name?: string;
    slug?: { current?: string };
  }> = await client.fetch(`*[_type == "author"]{_id, name, slug}`);

  console.log(`  Найдено: ${existing.length}`);
  if (existing.length) {
    existing.forEach((a) =>
      console.log(`    · ${a.slug?.current || "(no slug)"} — ${a.name}`)
    );
  }

  const alreadyExists = existing.find(
    (a) => a.slug?.current === AUTHOR.slug
  );
  if (alreadyExists) {
    console.log(`→ Автор «${AUTHOR.name}» уже есть, пропускаю.`);
    return;
  }

  console.log(`→ Создаю автора «${AUTHOR.name}»…`);
  await client.create({
    _type: "author",
    name: AUTHOR.name,
    slug: { _type: "slug", current: AUTHOR.slug },
    role: AUTHOR.role,
    bio: AUTHOR.bio,
  });
  console.log(`  ✓ Создан`);
  console.log(
    "\nГотово. Открой Studio → Authors → добавишь photo если есть."
  );
}

run().catch((err) => {
  console.error("Ошибка:", err);
  process.exit(1);
});
