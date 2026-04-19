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

const SHARED_QUOTE =
  "La chirurgie est un métier de transmission et d’évolution. Mon rôle est de mettre trente ans de savoir-faire et les innovations de demain au service de votre guérison.";

const servicesContent: Record<string, any> = {
  "chirurgie-digestive-viscerale": [
    {
      heading: "Urgences digestives",
      content:
        "Les urgences sont également prises en charge dans les meilleures conditions, au sein d’établissements parfaitement bien équipés : ulcères perforés, péritonites, occlusions intestinales et autres situations nécessitant une intervention rapide.",
    },
    {
      heading: "Domaines d’expertise",
      list: [
        "Pathologie hépato-biliaire (kyste hydatique, calculs vésiculaires)",
        "Chirurgie œsogastrique (ulcères, hernie hiatale, reflux)",
        "Chirurgie de la paroi abdominale (hernies, éventrations)",
        "Urgences digestives (péritonites, occlusions, ulcères perforés)",
      ],
      quote: SHARED_QUOTE,
    },
  ],
  "chirurgie-oncologique": [
    {
      heading: "Une expertise au service de l’oncologie",
      content:
        "Ma pratique est principalement orientée vers la chirurgie cancérologique, qu’il s’agisse de pathologies digestives ou gynécologiques. Ces trois décennies d’activité m’ont permis d’accompagner de nombreux patients dans des parcours de soins complexes, avec une attention constante portée à la sécurité et à la qualité de vie post-opératoire.",
    },
    {
      heading: "Cancers pris en charge",
      list: [
        "Cancers œsogastriques",
        "Cancers hépato-bilio-pancréatiques",
        "Cancers colorectaux",
        "Cancers de l’ovaire",
        "Tumeurs rares du péritoine (pseudomyxome, mésothéliome, sarcomes)",
      ],
      quote: SHARED_QUOTE,
    },
  ],
  "chirurgie-laparoscopique-robotique": [
    {
      heading: "Une chirurgie sans ouvrir l’abdomen",
      content:
        "La chirurgie digestive mini-invasive regroupe deux approches complémentaires — la cœlioscopie et la chirurgie robotique — qui permettent d’opérer à travers de petites incisions, sans ouvrir l’abdomen. Le patient bénéficie ainsi de suites opératoires plus simples, d’une douleur réduite et d’un retour plus rapide à la vie normale.",
    },
    {
      heading: "Pionnier de la chirurgie robotique au Maroc",
      content:
        "J’ai eu l’honneur d’être le pionnier de la chirurgie robotique digestive au Maroc, en étant le premier chirurgien digestif à introduire et pratiquer cette discipline dans notre pays. Cette innovation majeure permet aujourd’hui d’offrir une précision millimétrique au service de la sécurité du geste opératoire, particulièrement en oncologie.",
      quote:
        "Premier chirurgien marocain à réaliser une intervention digestive par robot au Maroc, je mets cette expertise au service de mes patients — pour des opérations plus précises, moins douloureuses et une récupération accélérée.",
    },
    {
      heading: "Les bénéfices démontrés",
      stats: [
        { value: "−80%", label: "de douleurs post-opératoires" },
        { value: "2×", label: "plus vite de retour à domicile" },
        { value: "Minimes", label: "cicatrices discrètes" },
      ],
    },
  ],
  "cytoreduction-chip-hipec": [
    {
      heading: "Une stratégie en deux temps",
      content:
        "Le cancer de l’ovaire est souvent diagnostiqué à un stade avancé avec carcinose péritonéale. Face à cette réalité, la prise en charge moderne repose sur une stratégie en deux temps, particulièrement efficace : la chirurgie de cytoréduction suivie immédiatement de la chimiothérapie hyperthermique intrapéritonéale (CHIP/HIPEC).",
    },
    {
      heading: "1. La chirurgie de cytoréduction",
      content:
        "Première étape de la prise en charge. Son objectif est de retirer toutes les tumeurs visibles dans la cavité abdominale — nodules, portions d’organes — afin d’obtenir une cytoréduction complète (CC0), ne laissant aucune trace macroscopique de maladie. C’est une intervention longue et techniquement exigeante.",
    },
    {
      heading: "2. La CHIP (HIPEC)",
      content:
        "La chimiothérapie hyperthermique intrapéritonéale prend le relais immédiatement après. La maladie microscopique, invisible à l’œil nu, est détruite par une chimiothérapie chauffée à environ 41–43°C, délivrée directement dans la cavité péritonéale juste après la chirurgie — avant que les adhérences post-opératoires ne se forment et ne piègent des cellules tumorales résiduelles. La chaleur améliore la pénétration dans les tissus cancéreux et renforce l’action cytotoxique.",
    },
    {
      heading: "Une approche multidisciplinaire",
      content:
        "La CHIP est une chirurgie complexe et multidisciplinaire, impliquant chirurgiens, anesthésistes, oncologues et radiologues. Elle nécessite une sélection rigoureuse des patientes en réunion de concertation pluridisciplinaire (RCP) pour garantir les meilleures chances de succès.",
      quote:
        "La chirurgie est un équilibre entre le savoir-faire acquis par le temps et l’audace des technologies de demain. Mon rôle est de mettre cette double expertise au service de votre guérison.",
    },
  ],
};

async function restoreContent() {
  console.log("Restoring full specialty content...");

  for (const [slug, sections] of Object.entries(servicesContent)) {
    const doc = await client.fetch(`*[_type == "specialty" && slug.current == $slug][0]`, { slug });

    if (doc) {
      console.log(`Updating ${slug}...`);
      await client
        .patch(doc._id)
        .set({ sections })
        .commit();

      // Also publish draft if exists
      const draftId = `drafts.${doc._id}`;
      const draft = await client.getDocument(draftId);
      if (draft) {
        await client.patch(draftId).set({ sections }).commit();
      }
    } else {
      console.warn(`Specialty ${slug} not found in Sanity!`);
    }
  }

  console.log("✓ All content restored successfully!");
}

restoreContent().catch(console.error);
