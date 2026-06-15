/* Создание 7 стартовых категорий в Sanity + удаление тестовой «Публикации».

   Запуск:
     npx sanity login   (один раз — браузер откроется, залогинься через GitHub)
     npx sanity exec scripts/seed-categories.ts --with-user-token

   Если категория с таким slug уже есть — она пропускается (idempotent). */

import { getCliClient } from "sanity/cli";

interface SeedCategory {
  titleEn: string;
  titleRu: string;
  slug: string;
  description?: string;
}

const CATEGORIES: SeedCategory[] = [
  {
    titleEn: "Immigration Law",
    titleRu: "Иммиграционное право",
    slug: "immigration-law",
    description:
      "General materials on U.S. immigration law for individuals and families.",
  },
  {
    titleEn: "Asylum",
    titleRu: "Убежище",
    slug: "asylum",
    description: "Affirmative and defensive asylum, withholding, CAT.",
  },
  {
    titleEn: "Deportation Defense",
    titleRu: "Защита от депортации",
    slug: "deportation-defense",
    description: "Removal proceedings, immigration court, relief from removal.",
  },
  {
    titleEn: "Federal Litigation",
    titleRu: "Федеральные суды",
    slug: "federal-litigation",
    description: "Habeas corpus petitions, TROs, federal court practice.",
  },
  {
    titleEn: "Detention / Bond",
    titleRu: "Задержание / залог",
    slug: "detention-bond",
    description: "Bond hearings, detained representation, ICE detention.",
  },
  {
    titleEn: "News & Updates",
    titleRu: "Новости и обновления",
    slug: "news-updates",
    description: "Changes in immigration policy, agency announcements.",
  },
  {
    titleEn: "Practical Guides",
    titleRu: "Практические материалы",
    slug: "practical-guides",
    description: "Step-by-step explanations of common immigration procedures.",
  },
];

async function run() {
  const client = getCliClient();

  console.log("→ Проверяю текущие категории…");
  const existing: Array<{ _id: string; slug?: { current?: string }; titleRu?: string; titleEn?: string }> =
    await client.fetch(`*[_type == "category"]{_id, slug, titleRu, titleEn}`);
  const existingSlugs = new Set(
    existing.map((c) => c.slug?.current).filter(Boolean) as string[]
  );

  console.log(`  Найдено: ${existing.length}`);
  if (existing.length) {
    existing.forEach((c) =>
      console.log(`    · ${c.slug?.current || "(no slug)"} — ${c.titleEn || c.titleRu}`)
    );
  }

  /* Удаляем тестовую «Публикации» если она есть. Она была создана для теста
     и не входит в новый seed-список. */
  const testCategory = existing.find((c) => c.slug?.current === "publications");
  if (testCategory) {
    console.log("→ Удаляю тестовую «Публикации» (slug: publications)…");
    try {
      await client.delete(testCategory._id);
      console.log("  ✓ Удалена");
    } catch (err) {
      console.error("  ✗ Не удалось удалить:", err);
      console.log(
        "    (возможно, на неё ссылается какая-то статья — удаление вручную в Studio)"
      );
    }
  }

  /* Создаём новые. Идемпотентно — если slug уже есть, пропускаем. */
  console.log("→ Создаю категории…");
  let created = 0;
  let skipped = 0;
  for (const cat of CATEGORIES) {
    if (existingSlugs.has(cat.slug)) {
      console.log(`  ⤳ ${cat.slug} уже есть, пропускаю`);
      skipped++;
      continue;
    }

    await client.create({
      _type: "category",
      titleEn: cat.titleEn,
      titleRu: cat.titleRu,
      slug: { _type: "slug", current: cat.slug },
      description: cat.description,
    });
    console.log(`  ✓ ${cat.titleEn} / ${cat.titleRu}`);
    created++;
  }

  console.log(
    `\nГотово. Создано: ${created}, пропущено (уже было): ${skipped}.`
  );
}

run().catch((err) => {
  console.error("Ошибка:", err);
  process.exit(1);
});
