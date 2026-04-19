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

const posts = [
  {
    _id: `post-quand-consulter-chirurgien-digestif`,
    _type: "post",
    title: "Quand consulter un chirurgien digestif ?",
    slug: { _type: "slug", current: "quand-consulter-chirurgien-digestif" },
    author: "Dr Benzakour Mohammed Amal",
    categorie: "Chirurgie Digestive",
    publishedAt: "2024-03-28T09:00:00Z",
    excerpt: "Les signes qui doivent vous alerter et le rôle d'un chirurgien spécialisé dans la prise en charge des pathologies digestives.",
    body: [
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Beaucoup de patients hésitent à consulter un chirurgien digestif, pensant que la chirurgie est toujours un dernier recours. Pourtant, un avis chirurgical précoce permet souvent d'éviter des complications et d'envisager des solutions moins invasives." }],
      },
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Certains symptômes doivent vous amener à consulter sans tarder : douleurs abdominales persistantes, troubles du transit, présence de sang dans les selles, perte de poids inexpliquée ou encore difficultés à avaler." }],
      },
      {
        _type: "block", _key: uuid(), style: "h2",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Quand faut-il voir un chirurgien ?" }],
      },
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Le chirurgien digestif évalue la situation, propose les examens complémentaires nécessaires et discute avec vous des différentes options thérapeutiques. Dans de nombreux cas, un suivi médical suffit ; lorsqu'une intervention est nécessaire, elle est planifiée sereinement avec une prise en charge personnalisée." }],
      },
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "N'attendez pas que les symptômes s'aggravent. Un diagnostic précoce est la clé d'une prise en charge efficace et d'une récupération rapide." }],
      },
    ],
    seo: {
      title: "Quand Consulter un Chirurgien Digestif ? | Dr Benzakour Casablanca",
      description: "Douleurs abdominales, troubles du transit, sang dans les selles ? Découvrez les signes qui nécessitent une consultation chez un chirurgien digestif à Casablanca.",
    },
  },
  {
    _id: `post-chirurgie-robotique-revolution`,
    _type: "post",
    title: "La chirurgie robotique : révolution au bloc opératoire",
    slug: { _type: "slug", current: "chirurgie-robotique-revolution" },
    author: "Dr Benzakour Mohammed Amal",
    categorie: "Innovation",
    publishedAt: "2024-04-12T09:00:00Z",
    excerpt: "Comment les systèmes Da Vinci et MedBot transforment la pratique chirurgicale et améliorent la récupération des patients.",
    body: [
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "La chirurgie robotique représente l'évolution la plus récente de la chirurgie mini-invasive. Grâce à des systèmes comme le Da Vinci Xi ou le MedBot, le chirurgien dispose d'une vision 3D haute définition et d'instruments d'une précision inégalée." }],
      },
      {
        _type: "block", _key: uuid(), style: "h2",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Les bénéfices pour le patient" }],
      },
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Pour le patient, les bénéfices sont concrets : incisions plus petites, douleurs post-opératoires réduites, hospitalisation plus courte et reprise rapide des activités. La précision robotique permet également de préserver les structures anatomiques délicates, notamment dans les chirurgies oncologiques complexes." }],
      },
      {
        _type: "block", _key: uuid(), style: "h2",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Un pionnier au Maroc" }],
      },
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Au Maroc, la chirurgie robotique digestive en est à ses débuts. Le Dr Benzakour fait partie des pionniers qui contribuent à introduire ces technologies dans le pays, offrant aux patients marocains un accès aux mêmes standards que les meilleures équipes internationales." }],
      },
    ],
    seo: {
      title: "Chirurgie Robotique au Maroc — Innovation au Bloc | Dr Benzakour",
      description: "Le Dr Benzakour, pionnier de la chirurgie robotique digestive au Maroc, explique comment la technologie Da Vinci révolutionne la sécurité et le confort des patients à Casablanca.",
    },
  },
  {
    _id: `post-carcinose-peritoneale-chip`,
    _type: "post",
    title: "Carcinose péritonéale : la technique CHIP (HIPEC)",
    slug: { _type: "slug", current: "carcinose-peritoneale-chip" },
    author: "Dr Benzakour Mohammed Amal",
    categorie: "Cancérologie",
    publishedAt: "2024-05-05T09:00:00Z",
    excerpt: "La chimiothérapie hyperthermique intrapéritonéale (CHIP) associée à la chirurgie de cytoréduction : comprendre ce traitement innovant.",
    body: [
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "La carcinose péritonéale, longtemps considérée comme incurable, bénéficie aujourd'hui d'une prise en charge spécialisée combinant chirurgie de cytoréduction et chimiothérapie hyperthermique intrapéritonéale (CHIP/HIPEC)." }],
      },
      {
        _type: "block", _key: uuid(), style: "h2",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Comment fonctionne la CHIP ?" }],
      },
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Le principe : retirer chirurgicalement toutes les lésions visibles dans la cavité abdominale (cytoréduction), puis administrer une chimiothérapie chauffée à 41–43°C directement dans le péritoine pour détruire les cellules cancéreuses microscopiques restantes." }],
      },
      {
        _type: "block", _key: uuid(), style: "h2",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Pour quels patients ?" }],
      },
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Cette approche, exigeante techniquement, nécessite une expertise pluridisciplinaire et un suivi post-opératoire rigoureux. Elle offre aujourd'hui un espoir réel pour certains patients atteints de pseudomyxome, mésothéliome péritonéal ou carcinose d'origine colorectale ou ovarienne." }],
      },
    ],
    seo: {
      title: "CHIP HIPEC : Traitement de la Carcinose Péritonéale | Dr Benzakour",
      description: "Comprendre la technique CHIP (HIPEC) pour traiter la carcinose péritonéale. Dr Benzakour, chirurgien expert à Casablanca, explique cette approche innovante combinant cytoréduction et chimiothérapie chauffée.",
    },
  },
  {
    _id: `post-raac-recuperation-amelioree`,
    _type: "post",
    title: "RAAC : récupérer plus vite après une chirurgie",
    slug: { _type: "slug", current: "raac-recuperation-amelioree" },
    author: "Dr Benzakour Mohammed Amal",
    categorie: "Récupération",
    publishedAt: "2024-06-20T09:00:00Z",
    excerpt: "Le protocole de récupération améliorée après chirurgie place le confort du patient au centre de chaque intervention.",
    body: [
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "La Récupération Améliorée Après Chirurgie (RAAC) est un ensemble de mesures pré, per et post-opératoires visant à diminuer le stress chirurgical et accélérer la convalescence du patient." }],
      },
      {
        _type: "block", _key: uuid(), style: "h2",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Les piliers du protocole RAAC" }],
      },
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Concrètement, cela passe par une préparation optimale avant l'intervention, une anesthésie adaptée, des techniques chirurgicales mini-invasives, et une mobilisation précoce dès le réveil. La nutrition est reprise rapidement, la douleur est anticipée et contrôlée par des protocoles multimodaux." }],
      },
      {
        _type: "block", _key: uuid(), style: "h2",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Des résultats prouvés" }],
      },
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Les résultats sont impressionnants : réduction de la durée d'hospitalisation, diminution des complications post-opératoires, retour plus rapide aux activités habituelles. Le patient devient acteur de sa récupération, accompagné à chaque étape par une équipe coordonnée." }],
      },
    ],
    seo: {
      title: "RAAC : Récupération Rapide Après Chirurgie | Dr Benzakour Casablanca",
      description: "Tout savoir sur le protocole RAAC (Récupération Améliorée Après Chirurgie). Moins de douleurs, hospitalisation réduite, retour à domicile plus rapide avec le Dr Benzakour à Casablanca.",
    },
  },
  {
    _id: `post-avantages-chirurgie-mini-invasive`,
    _type: "post",
    title: "Les avantages de la chirurgie mini-invasive",
    slug: { _type: "slug", current: "avantages-chirurgie-mini-invasive" },
    author: "Dr Benzakour Mohammed Amal",
    categorie: "Innovation",
    publishedAt: "2024-07-15T09:00:00Z",
    excerpt: "Petites incisions, grandes différences : pourquoi la laparoscopie est devenue la norme pour de nombreuses interventions digestives.",
    body: [
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "La chirurgie mini-invasive, ou laparoscopie, consiste à opérer à travers de petites incisions à l'aide d'une caméra et d'instruments fins. Elle a révolutionné la chirurgie digestive depuis les années 1990 et est aujourd'hui le standard pour de nombreuses interventions." }],
      },
      {
        _type: "block", _key: uuid(), style: "h2",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Pourquoi choisir la laparoscopie ?" }],
      },
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Les avantages pour le patient sont nombreux : douleur post-opératoire réduite, cicatrices discrètes, moins de complications pariétales, hospitalisation plus courte et reprise rapide des activités professionnelles et personnelles." }],
      },
      {
        _type: "block", _key: uuid(), style: "h2",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Quelles interventions sont concernées ?" }],
      },
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Aujourd'hui, la majorité des interventions digestives courantes peuvent être réalisées par laparoscopie : cholécystectomie (vésicule biliaire), cure de hernie, chirurgie colorectale, chirurgie anti-reflux, et même certaines interventions oncologiques complexes comme les résections hépatiques." }],
      },
    ],
    seo: {
      title: "Avantages de la Chirurgie Mini-Invasive (Laparoscopie) | Dr Benzakour",
      description: "Découvrez les bénéfices de la chirurgie laparoscopique : moins de cicatrices, moins de douleurs, hospitalisation raccourcie. Dr Benzakour, chirurgien mini-invasif expert à Casablanca.",
    },
  },
  {
    _id: `post-bilan-digestif-depistage`,
    _type: "post",
    title: "Bilan digestif : pourquoi un dépistage régulier est essentiel",
    slug: { _type: "slug", current: "bilan-digestif-depistage" },
    author: "Dr Benzakour Mohammed Amal",
    categorie: "Chirurgie Digestive",
    publishedAt: "2024-08-03T09:00:00Z",
    excerpt: "Le dépistage régulier permet de détecter précocement les pathologies digestives et d'améliorer significativement le pronostic.",
    body: [
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "De nombreuses pathologies digestives évoluent silencieusement pendant des années avant de se manifester. Un bilan digestif régulier permet de détecter précocement ces affections et d'intervenir avant l'apparition de complications." }],
      },
      {
        _type: "block", _key: uuid(), style: "h2",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Le dépistage du cancer colorectal" }],
      },
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Le dépistage du cancer colorectal est recommandé à partir de 50 ans, ou plus tôt en cas d'antécédents familiaux. Une simple coloscopie permet de détecter et retirer les polypes précancéreux, réduisant considérablement le risque de développer un cancer." }],
      },
      {
        _type: "block", _key: uuid(), style: "h2",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Autres pathologies à dépister" }],
      },
      {
        _type: "block", _key: uuid(), style: "normal",
        children: [{ _type: "span", _key: uuid(), marks: [], text: "Au-delà du cancer, un bilan régulier permet aussi de prendre en charge précocement le reflux gastro-œsophagien, les calculs biliaires ou encore les hernies de l'aine. Parlez-en à votre médecin traitant qui vous orientera selon votre âge, vos antécédents et vos symptômes éventuels." }],
      },
    ],
    seo: {
      title: "Bilan Digestif & Dépistage Précoce | Dr Benzakour Casablanca",
      description: "Pourquoi faire un bilan digestif régulier ? Cancer colorectal, reflux, calculs biliaires : le dépistage précoce sauve des vies. Consultez le Dr Benzakour à Casablanca.",
    },
  },
];

async function publishPosts() {
  console.log(`Publishing ${posts.length} blog posts to Sanity...`);

  for (const post of posts) {
    const existing = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]._id`,
      { slug: post.slug.current }
    );

    if (existing) {
      console.log(`Updating existing: ${post.slug.current}`);
      await client.patch(existing).set(post).commit();
    } else {
      console.log(`Creating new: ${post.slug.current}`);
      await client.createOrReplace(post);
    }
    console.log(`  ✓ ${post.title}`);
  }

  console.log(`\n✓ All ${posts.length} posts published!`);
}

publishPosts().catch(console.error);
