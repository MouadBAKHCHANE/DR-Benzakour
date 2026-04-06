export interface Article {
  slug: string;
  title: string;
  tag: string;
  date: string;
  img: string;
  excerpt: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "quand-consulter-chirurgien-digestif",
    title: "Quand consulter un chirurgien digestif ?",
    tag: "Chirurgie Digestive",
    date: "Mars 28, 2024",
    img: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920479c5449ad2c1f67e104_blog-thumb-05.webp",
    excerpt:
      "Les signes qui doivent vous alerter et le rôle d'un chirurgien spécialisé dans la prise en charge des pathologies digestives.",
    content: [
      "Beaucoup de patients hésitent à consulter un chirurgien digestif, pensant que la chirurgie est toujours un dernier recours. Pourtant, un avis chirurgical précoce permet souvent d'éviter des complications et d'envisager des solutions moins invasives.",
      "Certains symptômes doivent vous amener à consulter sans tarder : douleurs abdominales persistantes, troubles du transit, présence de sang dans les selles, perte de poids inexpliquée ou encore difficultés à avaler.",
      "Le chirurgien digestif évalue la situation, propose les examens complémentaires nécessaires et discute avec vous des différentes options thérapeutiques. Dans de nombreux cas, un suivi médical suffit ; lorsqu'une intervention est nécessaire, elle est planifiée sereinement avec une prise en charge personnalisée.",
    ],
  },
  {
    slug: "chirurgie-robotique-revolution",
    title: "La chirurgie robotique : révolution au bloc",
    tag: "Innovation",
    date: "Avril 12, 2024",
    img: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920438f88d8092a8b2bfba4_blog-thumb-07.webp",
    excerpt:
      "Comment les systèmes Da Vinci et MedBot transforment la pratique chirurgicale et améliorent la récupération des patients.",
    content: [
      "La chirurgie robotique représente l'évolution la plus récente de la chirurgie mini-invasive. Grâce à des systèmes comme le Da Vinci Xi ou le MedBot, le chirurgien dispose d'une vision 3D haute définition et d'instruments d'une précision inégalée.",
      "Pour le patient, les bénéfices sont concrets : incisions plus petites, douleurs post-opératoires réduites, hospitalisation plus courte et reprise rapide des activités. La précision robotique permet également de préserver les structures anatomiques délicates.",
      "Au Maroc, la chirurgie robotique digestive en est à ses débuts. Le Dr Benzakour fait partie des pionniers qui contribuent à introduire ces technologies dans le pays, offrant aux patients marocains un accès aux mêmes standards que les meilleures équipes internationales.",
    ],
  },
  {
    slug: "carcinose-peritoneale-chip",
    title: "Carcinose péritonéale : la technique CHIP",
    tag: "Cancérologie",
    date: "Mai 05, 2024",
    img: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692043767b164b60cbdc8e93_blog-thumb-06.webp",
    excerpt:
      "La chimiothérapie hyperthermique intrapéritonéale (CHIP) associée à la chirurgie de cytoréduction.",
    content: [
      "La carcinose péritonéale, longtemps considérée comme incurable, bénéficie aujourd'hui d'une prise en charge spécialisée combinant chirurgie de cytoréduction et chimiothérapie hyperthermique intrapéritonéale (CHIP).",
      "Le principe : retirer chirurgicalement toutes les lésions visibles dans la cavité abdominale, puis administrer une chimiothérapie chauffée directement dans le péritoine pour détruire les cellules cancéreuses microscopiques restantes.",
      "Cette approche, exigeante techniquement, nécessite une expertise pluridisciplinaire et un suivi post-opératoire rigoureux. Elle offre aujourd'hui un espoir réel pour certains patients atteints de pseudomyxome, mésothéliome péritonéal ou carcinose d'origine colorectale.",
    ],
  },
  {
    slug: "raac-recuperation-amelioree",
    title: "RAAC : récupérer plus vite après chirurgie",
    tag: "Récupération",
    date: "Juin 20, 2024",
    img: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204347fef2a08f472e1a17_blog-thumb-04.webp",
    excerpt:
      "Le protocole de récupération améliorée après chirurgie place le confort du patient au centre de chaque intervention.",
    content: [
      "La Récupération Améliorée Après Chirurgie (RAAC) est un ensemble de mesures pré, per et post-opératoires visant à diminuer le stress chirurgical et accélérer la convalescence du patient.",
      "Concrètement, cela passe par une préparation optimale avant l'intervention, une anesthésie adaptée, des techniques chirurgicales mini-invasives, et une mobilisation précoce dès le réveil. La nutrition est reprise rapidement, la douleur est anticipée et contrôlée.",
      "Les résultats sont impressionnants : réduction de la durée d'hospitalisation, diminution des complications, retour plus rapide aux activités habituelles. Le patient devient acteur de sa récupération, accompagné à chaque étape par une équipe coordonnée.",
    ],
  },
  {
    slug: "avantages-chirurgie-mini-invasive",
    title: "Les avantages de la chirurgie mini-invasive",
    tag: "Laparoscopie",
    date: "Juillet 15, 2024",
    img: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920430d8f976c682e998bae_blog-thumb-03.webp",
    excerpt:
      "Petites incisions, grandes différences : pourquoi la laparoscopie est devenue la norme pour de nombreuses interventions.",
    content: [
      "La chirurgie mini-invasive, ou laparoscopie, consiste à opérer à travers de petites incisions à l'aide d'une caméra et d'instruments fins. Elle a révolutionné la chirurgie digestive depuis les années 1990.",
      "Les avantages pour le patient sont nombreux : douleur post-opératoire réduite, cicatrices discrètes, moins de complications pariétales, hospitalisation plus courte et reprise rapide des activités professionnelles et personnelles.",
      "Aujourd'hui, la majorité des interventions digestives courantes peuvent être réalisées par laparoscopie : cholécystectomie, cure de hernie, chirurgie colorectale, chirurgie de l'obésité, et même certaines interventions oncologiques complexes.",
    ],
  },
  {
    slug: "bilan-digestif-depistage",
    title: "Bilan digestif : pourquoi un dépistage régulier",
    tag: "Prévention",
    date: "Août 03, 2024",
    img: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692042f4eb1b14e84fda4e4c_blog-thumb-02.webp",
    excerpt:
      "Le dépistage régulier permet de détecter précocement les pathologies digestives et d'améliorer significativement le pronostic.",
    content: [
      "De nombreuses pathologies digestives évoluent silencieusement pendant des années avant de se manifester. Un bilan digestif régulier permet de détecter précocement ces affections et d'intervenir avant l'apparition de complications.",
      "Le dépistage du cancer colorectal, par exemple, est recommandé à partir de 50 ans. Une simple coloscopie permet de détecter et retirer les polypes précancéreux, réduisant considérablement le risque de développer un cancer.",
      "Au-delà du dépistage du cancer, un bilan régulier permet aussi de prendre en charge précocement le reflux gastro-œsophagien, les calculs biliaires ou encore les hernies. Parlez-en à votre médecin traitant qui vous orientera selon votre âge, vos antécédents et vos symptômes éventuels.",
    ],
  },
];

export const categories = Array.from(new Set(articles.map((a) => a.tag)));
