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

async function checkContent() {
  const slug = "chirurgie-digestive-viscerale";
  const doc = await client.fetch(`*[_type == "specialty" && slug.current == $slug][0]`, { slug });
  console.log(JSON.stringify(doc, null, 2));
}

checkContent().catch(console.error);
