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

async function cleanupContent() {
  const slug = "chirurgie-digestive-viscerale";
  console.log(`Cleaning up content for ${slug}...`);

  const doc = await client.fetch(`*[_type == "specialty" && slug.current == $slug][0]`, { slug });

  if (doc) {
    const updatedSections = (doc.sections || []).filter((s: any) => s.heading !== "Pathologies bénignes");
    
    const patch: any = { sections: updatedSections };
    const unsetFields: string[] = [];

    if (doc.cardDescription?.includes("Pathologies hépato-biliaires")) {
        patch.cardDescription = "Expertise en chirurgie digestive et prise en charge des urgences chirurgicales.";
    }
    if (doc.intro?.includes("pathologies bénignes")) {
        patch.intro = "Chirurgie du quotidien — prise en charge experte des urgences digestives et abdominales.";
    }
    if (doc.subtitle?.includes("pathologies bénignes")) {
        patch.subtitle = "Chirurgie du quotidien — prise en charge experte des urgences digestives et abdominales.";
    }
    if (doc.whyTitle !== undefined) {
        unsetFields.push("whyTitle");
    }
    if (doc.whyText !== undefined) {
        unsetFields.push("whyText");
    }

    console.log(`Patching ${slug}...`, patch);

    const liveOp = client.patch(doc._id).set(patch);
    if (unsetFields.length > 0) liveOp.unset(unsetFields);
    await liveOp.commit();
    
    console.log("✓ Live document updated.");

    const draftId = `drafts.${doc._id}`;
    const draft = await client.getDocument(draftId);
    if (draft) {
      const draftOp = client.patch(draftId).set(patch);
      if (unsetFields.length > 0) draftOp.unset(unsetFields);
      await draftOp.commit();
      console.log("✓ Draft document updated.");
    }
  } else {
    console.warn("Document not found.");
  }
}

cleanupContent().catch(console.error);
