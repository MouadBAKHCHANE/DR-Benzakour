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

async function purgeLegacyFields() {
  console.log("Fetching all specialty documents...");
  const docs = await client.fetch(`*[_type == "specialty"]`);
  
  const fieldsToRemove = [
    "heroImage", 
    "whyTitle", 
    "whyText", 
    "whyImage", 
    "advantages", 
    "advantagesImage", 
    "typesLabel", 
    "types", 
    "didYouKnow", 
    "body", 
    "faq"
  ];

  for (const doc of docs) {
    const slug = doc.slug?.current || doc._id;
    console.log(`Checking ${slug}...`);

    let needsUpdate = false;
    const unsetFields: string[] = [];

    fieldsToRemove.forEach(field => {
      if (doc[field] !== undefined) {
        unsetFields.push(field);
        needsUpdate = true;
      }
    });

    if (needsUpdate) {
      console.log(`Purging fields from live doc ${slug}:`, unsetFields);
      await client.patch(doc._id).unset(unsetFields).commit();
      
      const draftId = `drafts.${doc._id.replace("drafts.", "")}`;
      const draft = await client.getDocument(draftId);
      if (draft) {
        let draftNeedsUpdate = false;
        const draftUnset: string[] = [];
        fieldsToRemove.forEach(field => {
            if (draft[field] !== undefined) {
                draftUnset.push(field);
                draftNeedsUpdate = true;
            }
        });
        if (draftNeedsUpdate) {
            console.log(`Purging fields from draft doc ${draftId}:`, draftUnset);
            await client.patch(draftId).unset(draftUnset).commit();
        }
      }
    } else {
      console.log(`No legacy fields found in ${slug}.`);
    }
  }

  console.log("✓ All specialty pages purged of legacy fields successfully!");
}

purgeLegacyFields().catch(console.error);
