import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const updatedDates: { slug: string; date: string }[] = [
  { slug: "quand-consulter-chirurgien-digestif",  date: "2025-02-10T09:00:00Z" },
  { slug: "chirurgie-robotique-revolution",        date: "2025-05-18T09:00:00Z" },
  { slug: "carcinose-peritoneale-chip",            date: "2025-08-06T09:00:00Z" },
  { slug: "raac-recuperation-amelioree",           date: "2025-10-21T09:00:00Z" },
  { slug: "avantages-chirurgie-mini-invasive",     date: "2026-01-14T09:00:00Z" },
  { slug: "bilan-digestif-depistage",              date: "2026-03-29T09:00:00Z" },
];

async function updateDates() {
  for (const { slug, date } of updatedDates) {
    const doc = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]{_id}`,
      { slug }
    );
    if (!doc) { console.warn(`Not found: ${slug}`); continue; }
    await client.patch(doc._id).set({ publishedAt: date }).commit();
    console.log(`✓ ${slug} → ${date}`);
  }
  console.log("\n✓ All dates updated!");
}

updateDates().catch(console.error);
