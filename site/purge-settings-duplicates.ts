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

// Fields removed from schema — must be purged from the DB document.
// We keep: phoneFixe, phoneMobile, phone, email, address, googleMapsUrl,
//          googleMapsEmbedQuery, consultationDays, openingHours, instagramUrl,
//          facebook, twitter, linkedin, youtube, title, legalCompanyName,
//          tagline, siteDescription, logo, mainCtaLabel, appointmentText,
//          seo, marketing
const FIELDS_TO_REMOVE = [
  "siteName",         // dup of title
  "siteTagline",      // dup of tagline
  "mobile",           // dup of phoneMobile
  "instagram",        // dup of instagramUrl
  "mapUrl",           // dup of googleMapsUrl
  "consultationHours",// dup of consultationDays / openingHours
  "socialLinks",      // replaced by individual social URL fields
  "contact",          // legacy nested object group
];

async function purgeFields() {
  const doc = await client.fetch(`*[_type == "siteSettings"][0]{_id}`);
  if (!doc) { console.error("siteSettings document not found!"); return; }

  console.log(`Found siteSettings: ${doc._id}`);

  const patch = client.patch(doc._id).unset(FIELDS_TO_REMOVE);
  const result = await patch.commit();

  console.log("✓ Removed duplicate fields:", FIELDS_TO_REMOVE.join(", "));
  console.log("Updated document revision:", result._rev);
}

purgeFields().catch(console.error);
