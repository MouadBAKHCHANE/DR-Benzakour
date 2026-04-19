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

async function migrateData() {
  console.log("Migrating Homepage and Settings data...");

  // --- SITE SETTINGS ---
  console.log("-> Migrating Site Settings...");
  await client.createIfNotExists({
    _id: "siteSettings",
    _type: "siteSettings",
    title: "Cabinet Dr Benzakour Mohammed Amal",
    contact: {
      phone: "05 22 89 44 19 / 07 67 49 49 16",
      email: "drmohammedamalbenzakour@gmail.com",
      address: "Uptown Business Center, 5e étage N°9, Immeuble D, CFC, Bd Moulay Abdellah Chérif, Casablanca, Maroc",
      mapsUrl: "https://maps.google.com/maps?q=Uptown+Business+Center+CFC+Bd+Moulay+Abdellah+Cherif+Casablanca",
    },
    seo: {
      metaTitle: "Dr Mohammed Amal Benzakour | Chirurgien Viscérale & Digestive Casablanca",
      metaDesc: "Expertise de 30 ans en chirurgie oncologique, digestive et robotique à Casablanca.",
    }
  });

  // --- HOMEPAGE ---
  console.log("-> Migrating Homepage...");
  await client.createIfNotExists({
    _id: "homePage",
    _type: "homePage",
    heroTitle: "Votre Santé, Notre Mission",
    heroDescription: "Dr Benzakour Mohammed Amal, spécialiste en Chirurgie Digestive et Viscérale, Coelioscopique & Robotique. Expert en Chirurgie Oncologique Viscérale et Péritonéale (HIPEC/CRS) à Casablanca.",
    heroMarquee: [
      "Chirurgie Robotique",
      "Chirurgie Oncologique",
      "CRS & HIPEC",
      "Chirurgie Digestive",
      "Chirurgie Bariatrique",
      "Chirurgie HBP",
    ],
    storyTagline: "À Propos",
    storyHeading: "L'excellence chirurgicale au service de votre santé",
    storyText: "Le Dr Mohammed Amal Benzakour est un chirurgien de renom basé à Casablanca, spécialisé dans la chirurgie viscérale, digestive et oncologique. Il se distingue par sa chirurgie coelioscopique et robotique.",
    
    servicesTagline: "Nos Spécialités",
    servicesHeading: "Domaines d'Expertise",

    credentialsTagline: "Formation",
    credentialsHeading: "Parcours Académique",
    credentialsList: [
      { label: "Doctorat", title: "Médecine", description: "Doctorat en Médecine", institution: "Université de Lorraine" },
      { label: "Spécialisation", title: "Chirurgie Viscérale", description: "Chirurgie Viscérale et Digestive", institution: "Formation Complète" },
      { label: "DU Paris", title: "Chirurgie Robotique", description: "Diplôme Universitaire Chirurgie Robotique Digestive", institution: "Université de Paris" },
      { label: "DIU Paris", title: "Chirurgie HBP", description: "Diplôme Inter-Universitaire Chirurgie Hépato-Bilio-Pancréatique", institution: "Université de Paris" },
      { label: "DUCLA", title: "Laparoscopie", description: "DUCLA - Paris Chirurgie Laparoscopique", institution: "Paris" },
    ],

    trustDescription: "Le Dr Benzakour s'engage à offrir des soins chirurgicaux avancés et accessibles, combinant expertise médicale et attention personnalisée. Très impliqué dans l'évolution de la médecine au Maroc, il collabore avec des organisations de premier plan.",
    trustMarquee: [
      "Excellence Chirurgicale",
      "Innovation Médicale",
      "Soins de Confiance",
      "Expertise Reconnue",
    ],
    commitments: [
      { id: "01", label: "Diagnostic Précis" },
      { id: "02", label: "Prévention Santé" },
      { id: "03", label: "Pratique Éthique" },
      { id: "04", label: "Suivi à Vie" },
      { id: "05", label: "Soins Bienveillants" },
    ],

    appointmentTagline: "Rendez-vous",
    appointmentTitle: "Demander une consultation.",
    appointmentDescription: "Vos coordonnées seront transmises à notre secrétariat qui vous contactera rapidement.",

    seo: {
      metaTitle: "Accueil | Dr Mohammed Amal Benzakour | Chirurgien Casablanca",
      metaDescription: "Bienvenue au cabinet du Dr Benzakour, expert en chirurgie viscérale, digestive, oncologique et robotique à Casablanca.",
    }
  });

  console.log("✓ All content migrated to Sanity!");
}

migrateData().catch(console.error);
