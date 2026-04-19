import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const SHARED_QUOTE =
  "La chirurgie est un métier de transmission et d'évolution. Mon rôle est de mettre trente ans de savoir-faire et les innovations de demain au service de votre guérison.";

interface SpecialtyUpdate {
  slug: string;
  sections: any[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  subtitle: string;
  cardDescription: string;
}

const specialtyData: SpecialtyUpdate[] = [
  {
    slug: "chirurgie-digestive-viscerale",
    subtitle:
      "Prise en charge complète des pathologies digestives, hépato-biliaires et abdominales par une équipe spécialisée à Casablanca.",
    cardDescription:
      "Traitement expert des pathologies digestives, hépatiques et abdominales — urgences incluses.",
    seoTitle:
      "Chirurgie Digestive & Viscérale à Casablanca | Dr Benzakour Mohammed Amal",
    seoDescription:
      "Chirurgie digestive et viscérale à Casablanca : hernies, calculs biliaires, reflux, urgences digestives. Dr Benzakour, 30 ans d'expertise en chirurgie mini-invasive.",
    seoKeywords: [
      "chirurgie digestive Casablanca",
      "chirurgie viscérale Maroc",
      "hernie inguinale Casablanca",
      "calculs biliaire chirurgie",
      "reflux gastro-oesophagien",
      "chirurgie laparoscopique abdomen",
      "Dr Benzakour chirurgien digestif",
      "urgences digestives Casablanca",
    ],
    sections: [
      {
        _key: uuid(),
        heading: "Urgences digestives",
        content:
          "Les urgences chirurgicales abdominales sont prises en charge sans délai dans des établissements parfaitement équipés : ulcères gastro-duodénaux perforés, péritonites, occlusions intestinales, appendicites et hernies étranglées. Chaque intervention est préparée avec rigueur pour garantir la sécurité maximale du patient.",
      },
      {
        _key: uuid(),
        heading: "Pathologie hépato-biliaire",
        content:
          "La vésicule biliaire et les voies biliaires sont fréquemment sièges de calculs (lithiase biliaire) ou de formations kystiques comme le kyste hydatique du foie. Ces pathologies sont traitées préférentiellement par cœlioscopie, permettant une récupération rapide et des suites opératoires confortables.",
        list: [
          "Cholécystectomie laparoscopique (ablation de la vésicule)",
          "Chirurgie du kyste hydatique hépatique",
          "Exploration chirurgicale des voies biliaires",
        ],
      },
      {
        _key: uuid(),
        heading: "Chirurgie œsogastrique",
        content:
          "La hernie hiatale et le reflux gastro-œsophagien chronique sont des pathologies fréquentes qui altèrent considérablement la qualité de vie. L'intervention de fundoplicature (Nissen), réalisée par cœlioscopie, offre une solution définitive avec un taux de réussite élevé.",
        list: [
          "Fundoplicature de Nissen (anti-reflux)",
          "Traitement chirurgical de la hernie hiatale",
          "Chirurgie des ulcères gastro-duodénaux",
        ],
      },
      {
        _key: uuid(),
        heading: "Chirurgie de la paroi abdominale",
        content:
          "Les hernies de la paroi abdominale — inguinales, ombilicales ou éventrations post-opératoires — sont traitées avec des techniques de pointe, incluant la pose de prothèses (filets) par cœlioscopie, réduisant le risque de récidive et favorisant une reprise rapide des activités.",
        list: [
          "Hernies inguinales (unilatérales ou bilatérales)",
          "Hernies ombilicales et épigastriques",
          "Éventrations et hernies de l'aine complexes",
        ],
        quote: SHARED_QUOTE,
      },
      {
        _key: uuid(),
        heading: "Domaines d'expertise",
        list: [
          "Pathologie hépato-biliaire (kyste hydatique, calculs vésiculaires)",
          "Chirurgie œsogastrique (ulcères, hernie hiatale, reflux)",
          "Chirurgie de la paroi abdominale (hernies, éventrations)",
          "Urgences digestives (péritonites, occlusions, ulcères perforés)",
        ],
      },
    ],
  },
  {
    slug: "chirurgie-oncologique",
    subtitle:
      "Prise en charge chirurgicale experte des cancers digestifs et gynécologiques, au service de votre guérison depuis 30 ans.",
    cardDescription:
      "Chirurgie cancérologique digestive et gynécologique — expertise de trois décennies au bénéfice des patients.",
    seoTitle:
      "Chirurgie Oncologique à Casablanca | Dr Benzakour Mohammed Amal",
    seoDescription:
      "Chirurgie oncologique à Casablanca : cancers colorectaux, gastriques, hépatiques et gynécologiques. Dr Benzakour, chirurgien spécialisé en oncologie digestive depuis 30 ans.",
    seoKeywords: [
      "chirurgie oncologique Casablanca",
      "cancer colorectal chirurgie Maroc",
      "cancer gastrique chirurgien",
      "chirurgie cancer foie Casablanca",
      "cancer ovaire chirurgie",
      "oncologie digestive Maroc",
      "Dr Benzakour oncologie",
      "chirurgie cancers digestifs",
    ],
    sections: [
      {
        _key: uuid(),
        heading: "Une expertise au service de l'oncologie",
        content:
          "Ma pratique est principalement orientée vers la chirurgie cancérologique, qu'il s'agisse de pathologies digestives ou gynécologiques. Trois décennies d'activité m'ont permis d'accompagner de nombreux patients dans des parcours de soins complexes, avec une attention constante portée à la sécurité opératoire et à la qualité de vie post-opératoire. Chaque cas est discuté en réunion de concertation pluridisciplinaire (RCP) pour garantir la meilleure stratégie thérapeutique.",
      },
      {
        _key: uuid(),
        heading: "Cancers pris en charge",
        list: [
          "Cancers œsogastriques (estomac, œsophage)",
          "Cancers hépato-bilio-pancréatiques (foie, vésicule, pancréas)",
          "Cancers colorectaux (côlon, rectum)",
          "Cancer de l'ovaire avec ou sans carcinose péritonéale",
          "Tumeurs rares du péritoine (pseudomyxome, mésothéliome, sarcomes)",
        ],
      },
      {
        _key: uuid(),
        heading: "Approche chirurgicale moderne",
        content:
          "La chirurgie cancérologique a considérablement évolué grâce aux approches mini-invasives. La cœlioscopie et la chirurgie robotique permettent d'opérer avec une précision millimétrique, de réduire les pertes sanguines et d'accélérer la reprise des traitements médicaux complémentaires (chimiothérapie, radiothérapie).",
        stats: [
          { value: "30+", label: "années d'expérience en oncologie" },
          { value: "RCP", label: "concertation pluridisciplinaire systématique" },
          { value: "Mini-invasive", label: "approche privilégiée quand possible" },
        ],
      },
      {
        _key: uuid(),
        heading: "Coordination des soins",
        content:
          "La prise en charge oncologique ne se limite pas à l'acte chirurgical. Elle s'inscrit dans un parcours de soins coordonné avec des oncologues médicaux, des radiothérapeutes et des spécialistes en soins de support, garantissant une continuité optimale tout au long du traitement.",
        quote: SHARED_QUOTE,
      },
    ],
  },
  {
    slug: "chirurgie-laparoscopique-robotique",
    subtitle:
      "Pionnier de la chirurgie robotique digestive au Maroc — précision, sécurité et récupération accélérée pour chaque patient.",
    cardDescription:
      "Chirurgie mini-invasive de pointe : cœlioscopie et robotique pour une précision maximale et une récupération accélérée.",
    seoTitle:
      "Chirurgie Laparoscopique & Robotique Casablanca | Dr Benzakour",
    seoDescription:
      "Chirurgie laparoscopique et robotique à Casablanca. Dr Benzakour, pionnier de la chirurgie robotique digestive au Maroc, offre des interventions mini-invasives avec une récupération rapide.",
    seoKeywords: [
      "chirurgie laparoscopique Casablanca",
      "chirurgie robotique Maroc",
      "cœlioscopie chirurgien Casablanca",
      "chirurgie mini-invasive Maroc",
      "robot chirurgical digestif Maroc",
      "Dr Benzakour laparoscopie",
      "chirurgie sans cicatrice visible",
      "récupération rapide chirurgie",
    ],
    sections: [
      {
        _key: uuid(),
        heading: "Une chirurgie sans ouvrir l'abdomen",
        content:
          "La chirurgie digestive mini-invasive regroupe deux approches complémentaires — la cœlioscopie et la chirurgie robotique — qui permettent d'opérer à travers de petites incisions, sans ouvrir l'abdomen. Le patient bénéficie ainsi de suites opératoires plus simples, d'une douleur réduite et d'un retour plus rapide à la vie normale.",
      },
      {
        _key: uuid(),
        heading: "Pionnier de la chirurgie robotique au Maroc",
        content:
          "J'ai eu l'honneur d'être le pionnier de la chirurgie robotique digestive au Maroc, en étant le premier chirurgien digestif à introduire et pratiquer cette discipline dans notre pays. Cette innovation majeure permet aujourd'hui d'offrir une précision millimétrique au service de la sécurité du geste opératoire, particulièrement en oncologie.",
        quote:
          "Premier chirurgien marocain à réaliser une intervention digestive par robot au Maroc, je mets cette expertise au service de mes patients — pour des opérations plus précises, moins douloureuses et une récupération accélérée.",
      },
      {
        _key: uuid(),
        heading: "Les bénéfices démontrés",
        content:
          "Les avantages de la chirurgie mini-invasive sont validés par de nombreuses études cliniques internationales. Pour le patient, cela se traduit concrètement par moins de douleurs post-opératoires, une hospitalisation raccourcie et des cicatrices discrètes.",
        stats: [
          { value: "−80%", label: "de douleurs post-opératoires" },
          { value: "2×", label: "plus vite de retour à domicile" },
          { value: "Minimes", label: "cicatrices discrètes" },
        ],
      },
      {
        _key: uuid(),
        heading: "Interventions réalisées par voie mini-invasive",
        list: [
          "Cholécystectomie (vésicule biliaire) laparoscopique",
          "Résection colorectale et rectale",
          "Fundoplicature anti-reflux (Nissen)",
          "Chirurgie de l'obésité (sleeve gastrectomy)",
          "Cure de hernie inguinale ou ombilicale",
          "Splenectomie et surrénalectomie laparoscopiques",
          "Résection hépatique et pancréatique mini-invasive",
        ],
        quote: SHARED_QUOTE,
      },
    ],
  },
  {
    slug: "cytoreduction-chip-hipec",
    subtitle:
      "Traitement de référence de la carcinose péritonéale : cytoréduction chirurgicale combinée à la chimiothérapie hyperthermique intrapéritonéale (CHIP/HIPEC).",
    cardDescription:
      "Traitement combiné de la carcinose péritonéale — chirurgie de cytoréduction et chimiothérapie hyperthermique intrapéritonéale.",
    seoTitle:
      "Cytoréduction & CHIP HIPEC Casablanca | Dr Benzakour Mohammed Amal",
    seoDescription:
      "Traitement de la carcinose péritonéale par cytoréduction et CHIP (HIPEC) à Casablanca. Dr Benzakour, chirurgien spécialisé dans la prise en charge du cancer de l'ovaire et des tumeurs péritonéales.",
    seoKeywords: [
      "HIPEC Casablanca",
      "CHIP chirurgie Maroc",
      "carcinose péritonéale traitement",
      "cytoréduction cancer ovaire",
      "chimiothérapie hyperthermique intrapéritonéale",
      "cancer péritoine chirurgie Maroc",
      "Dr Benzakour HIPEC",
      "pseudomyxome péritoine",
    ],
    sections: [
      {
        _key: uuid(),
        heading: "La carcinose péritonéale : comprendre le défi",
        content:
          "La carcinose péritonéale correspond à la dissémination de cellules cancéreuses sur le péritoine, la membrane qui tapisse l'intérieur de l'abdomen. Elle survient fréquemment dans les cancers de l'ovaire, du côlon, de l'appendice ou de l'estomac, souvent à un stade avancé. Pendant longtemps considérée comme incurable, elle bénéficie aujourd'hui d'un traitement combiné particulièrement efficace.",
      },
      {
        _key: uuid(),
        heading: "1. La chirurgie de cytoréduction",
        content:
          "Première étape de la prise en charge. Son objectif est de retirer toutes les tumeurs visibles dans la cavité abdominale — nodules, portions d'organes envahis — afin d'obtenir une cytoréduction complète (CC0), ne laissant aucune trace macroscopique de maladie. C'est une intervention longue et techniquement exigeante qui requiert une expertise chirurgicale de haut niveau.",
      },
      {
        _key: uuid(),
        heading: "2. La CHIP (HIPEC)",
        content:
          "La chimiothérapie hyperthermique intrapéritonéale prend le relais immédiatement après. La maladie microscopique, invisible à l'œil nu, est détruite par une chimiothérapie chauffée à environ 41–43°C, délivrée directement dans la cavité péritonéale juste après la chirurgie — avant que les adhérences post-opératoires ne se forment et ne piègent des cellules tumorales résiduelles. La chaleur améliore la pénétration dans les tissus cancéreux et renforce l'action cytotoxique.",
      },
      {
        _key: uuid(),
        heading: "Cancers éligibles à la CHIP/HIPEC",
        list: [
          "Cancer de l'ovaire avec carcinose péritonéale",
          "Cancer colorectal avec dissémination péritonéale",
          "Pseudomyxome péritonéal (appendice)",
          "Mésothéliome péritonéal malin",
          "Cancer gastrique avec carcinose localisée",
          "Sarcomes abdominaux",
        ],
      },
      {
        _key: uuid(),
        heading: "Une approche multidisciplinaire",
        content:
          "La CHIP est une chirurgie complexe et multidisciplinaire, impliquant chirurgiens, anesthésistes-réanimateurs, oncologues médicaux et radiologues. Elle nécessite une sélection rigoureuse des patients en réunion de concertation pluridisciplinaire (RCP) pour garantir les meilleures chances de succès et limiter la morbidité.",
        quote:
          "La chirurgie est un équilibre entre le savoir-faire acquis par le temps et l'audace des technologies de demain. Mon rôle est de mettre cette double expertise au service de votre guérison.",
      },
      {
        _key: uuid(),
        heading: "Résultats & bénéfices",
        stats: [
          { value: "CC0", label: "objectif : cytoréduction complète" },
          { value: "41–43°C", label: "température de la chimiothérapie" },
          { value: "RCP", label: "décision pluridisciplinaire systématique" },
        ],
      },
    ],
  },
];

async function populateSpecialties() {
  console.log("Starting specialty content population...");

  for (const sp of specialtyData) {
    const doc = await client.fetch(
      `*[_type == "specialty" && slug.current == $slug] | order(_updatedAt desc)[0]`,
      { slug: sp.slug }
    );

    if (!doc) {
      console.warn(`⚠ Specialty not found: ${sp.slug}`);
      continue;
    }

    const patch = {
      sections: sp.sections,
      seoTitle: sp.seoTitle,
      seoDescription: sp.seoDescription,
      seoKeywords: sp.seoKeywords,
      subtitle: sp.subtitle,
      cardDescription: sp.cardDescription,
    };

    console.log(`Updating ${sp.slug}...`);
    await client.patch(doc._id).set(patch).commit();

    // Also update draft if exists
    const draftId = `drafts.${doc._id.replace("drafts.", "")}`;
    const draft = await client.getDocument(draftId);
    if (draft) {
      await client.patch(draftId).set(patch).commit();
      console.log(`  ✓ Draft updated for ${sp.slug}`);
    }
    console.log(`  ✓ Live doc updated for ${sp.slug}`);
  }

  console.log("\n✓ All specialty pages populated successfully!");
}

populateSpecialties().catch(console.error);
