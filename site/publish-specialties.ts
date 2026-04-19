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

const slugs = [
  "chirurgie-digestive-viscerale",
  "chirurgie-oncologique",
  "chirurgie-laparoscopique-robotique",
  "cytoreduction-chip-hipec",
];

async function publishAll() {
  console.log("Publishing all specialty documents...");

  for (const slug of slugs) {
    // Fetch the draft
    const draft = await client.fetch(
      `*[_id == "drafts.specialty-" + $slug][0]`,
      { slug }
    );

    if (!draft) {
      console.log(`No draft found for ${slug}, checking live doc...`);
      const live = await client.fetch(
        `*[_type == "specialty" && slug.current == $slug && !(_id in path("drafts.**"))][0]`,
        { slug }
      );
      if (live) console.log(`  Live doc already published: ${slug}`);
      else console.warn(`  ⚠ No document found for ${slug}`);
      continue;
    }

    // Copy draft data onto the live document (publish)
    const { _id, _rev, _createdAt, _updatedAt, _system, ...publishData } = draft;
    const liveId = _id.replace("drafts.", "");

    console.log(`Publishing ${slug} (draft ${_id} → ${liveId})...`);
    await client.createOrReplace({ ...publishData, _id: liveId });
    console.log(`  ✓ Published ${slug}`);
  }

  console.log("\n✓ All specialties published!");
}

publishAll().catch(console.error);
