import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AppointmentForm } from "@/components/sections/AppointmentForm";

/* ── CDN assets ── */
const IC_ARROW_DOT =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg";

/* ── Service data ── */
interface ServiceData {
  title: string;
  subtitle: string;
  image: string;
  sections: { heading: string; content?: string; list?: string[]; quote?: string; stats?: { value: string; label: string }[] }[];
}

const SHARED_QUOTE =
  "La chirurgie est un métier de transmission et d\u2019évolution. Mon rôle est de mettre trente ans de savoir-faire et les innovations de demain au service de votre guérison.";

const services: Record<string, ServiceData> = {
  "chirurgie-digestive-viscerale": {
    title: "Chirurgie Digestive & Viscérale",
    subtitle:
      "Chirurgie du quotidien — prise en charge experte des pathologies bénignes et des urgences digestives.",
    image: "/images/spec-1.webp",
    sections: [
      {
        heading: "Pathologies bénignes",
        content:
          "Prise en charge experte de la pathologie hépato-biliaire (kyste hydatique du foie, calculs de la vésicule biliaire), œsogastrique (ulcères, hernie hiatale et reflux gastro-œsophagien) et de la paroi abdominale : hernies inguinales, ombilicales et éventrations de la paroi abdominale.",
      },
      {
        heading: "Urgences digestives",
        content:
          "Les urgences sont également prises en charge dans les meilleures conditions, au sein d\u2019établissements parfaitement bien équipés : ulcères perforés, péritonites, occlusions intestinales et autres situations nécessitant une intervention rapide.",
      },
      {
        heading: "Domaines d\u2019expertise",
        list: [
          "Pathologie hépato-biliaire (kyste hydatique, calculs vésiculaires)",
          "Chirurgie œsogastrique (ulcères, hernie hiatale, reflux)",
          "Chirurgie de la paroi abdominale (hernies, éventrations)",
          "Urgences digestives (péritonites, occlusions, ulcères perforés)",
        ],
        quote: SHARED_QUOTE,
      },
    ],
  },
  "chirurgie-oncologique": {
    title: "Chirurgie Oncologique",
    subtitle:
      "Trois décennies d\u2019expérience en chirurgie cancérologique digestive et gynécologique.",
    image: "/images/spec-5.webp",
    sections: [
      {
        heading: "Une expertise au service de l\u2019oncologie",
        content:
          "Ma pratique est principalement orientée vers la chirurgie cancérologique, qu\u2019il s\u2019agisse de pathologies digestives ou gynécologiques. Ces trois décennies d\u2019activité m\u2019ont permis d\u2019accompagner de nombreux patients dans des parcours de soins complexes, avec une attention constante portée à la sécurité et à la qualité de vie post-opératoire.",
      },
      {
        heading: "Cancers pris en charge",
        list: [
          "Cancers œsogastriques",
          "Cancers hépato-bilio-pancréatiques",
          "Cancers colorectaux",
          "Cancers de l\u2019ovaire",
          "Tumeurs rares du péritoine (pseudomyxome, mésothéliome, sarcomes)",
        ],
        quote: SHARED_QUOTE,
      },
    ],
  },
  "chirurgie-laparoscopique-robotique": {
    title: "Chirurgie Laparoscopique & Robotique",
    subtitle:
      "Moins de cicatrices, plus de précision — l\u2019expertise mini-invasive au service de votre récupération.",
    image: "/images/spec-4.webp",
    sections: [
      {
        heading: "Une chirurgie sans ouvrir l\u2019abdomen",
        content:
          "La chirurgie digestive mini-invasive regroupe deux approches complémentaires — la cœlioscopie et la chirurgie robotique — qui permettent d\u2019opérer à travers de petites incisions, sans ouvrir l\u2019abdomen. Le patient bénéficie ainsi de suites opératoires plus simples, d\u2019une douleur réduite et d\u2019un retour plus rapide à la vie normale.",
      },
      {
        heading: "Pionnier de la chirurgie robotique au Maroc",
        content:
          "J\u2019ai eu l\u2019honneur d\u2019être le pionnier de la chirurgie robotique digestive au Maroc, en étant le premier chirurgien digestif à introduire et pratiquer cette discipline dans notre pays. Cette innovation majeure permet aujourd\u2019hui d\u2019offrir une précision millimétrique au service de la sécurité du geste opératoire, particulièrement en oncologie.",
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
  },
  "cytoreduction-chip-hipec": {
    title: "Cytoréduction & CHIP (HIPEC)",
    subtitle:
      "Un traitement combiné contre la carcinose péritonéale, alliant chirurgie et chimiothérapie hyperthermique.",
    image: "/images/spec-2.webp",
    sections: [
      {
        heading: "Une stratégie en deux temps",
        content:
          "Le cancer de l\u2019ovaire est souvent diagnostiqué à un stade avancé avec carcinose péritonéale. Face à cette réalité, la prise en charge moderne repose sur une stratégie en deux temps, particulièrement efficace : la chirurgie de cytoréduction suivie immédiatement de la chimiothérapie hyperthermique intrapéritonéale (CHIP/HIPEC).",
      },
      {
        heading: "1. La chirurgie de cytoréduction",
        content:
          "Première étape de la prise en charge. Son objectif est de retirer toutes les tumeurs visibles dans la cavité abdominale — nodules, portions d\u2019organes — afin d\u2019obtenir une cytoréduction complète (CC0), ne laissant aucune trace macroscopique de maladie. C\u2019est une intervention longue et techniquement exigeante.",
      },
      {
        heading: "2. La CHIP (HIPEC)",
        content:
          "La chimiothérapie hyperthermique intrapéritonéale prend le relais immédiatement après. La maladie microscopique, invisible à l\u2019œil nu, est détruite par une chimiothérapie chauffée à environ 41–43°C, délivrée directement dans la cavité péritonéale juste après la chirurgie — avant que les adhérences post-opératoires ne se forment et ne piègent des cellules tumorales résiduelles. La chaleur améliore la pénétration dans les tissus cancéreux et renforce l\u2019action cytotoxique.",
      },
      {
        heading: "Une approche multidisciplinaire",
        content:
          "La CHIP est une chirurgie complexe et multidisciplinaire, impliquant chirurgiens, anesthésistes, oncologues et radiologues. Elle nécessite une sélection rigoureuse des patientes en réunion de concertation pluridisciplinaire (RCP) pour garantir les meilleures chances de succès.",
        quote:
          "La chirurgie est un équilibre entre le savoir-faire acquis par le temps et l\u2019audace des technologies de demain. Mon rôle est de mettre cette double expertise au service de votre guérison.",
      },
    ],
  },
};

/* ── Static params ── */
export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

/* ── Page component ── */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <ScrollReveal>
        {/* ── Page Title ── */}
        <div className="page-title">
          <div className="w-layout-blockcontainer container w-container">
            <div className="pg-inner">
              <h1 className="main-heading reveal">{service.title}</h1>
              <p className="pg-title-text">{service.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="page-wrap">
          {/* ── Service Main ── */}
          <section className="service-main">
            <div className="w-layout-blockcontainer container w-container">
              <div className="service-main-img">
                <img
                  src={service.image}
                  loading="eager"
                  alt={service.title}
                  className="service-main-image reveal"
                />
              </div>

              <div className="service-main-details reveal">
                <div className="service-details">
                  {service.sections.map((section, i) => (
                    <div key={i} className="service-content-section">
                      <h3>{section.heading}</h3>
                      {section.content && <p>{section.content}</p>}
                      {section.list && (
                        <ul className="service-feature-list" role="list">
                          {section.list.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {section.stats && (
                        <div className="service-stats-grid">
                          {section.stats.map((stat, k) => (
                            <div key={k} className="service-stat">
                              <div className="service-stat-value">{stat.value}</div>
                              <div className="service-stat-label">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      {section.quote && (
                        <blockquote className="service-quote">
                          {section.quote}
                        </blockquote>
                      )}
                    </div>
                  ))}
                </div>

                <button type="button" data-appointment className="primary-button">
                  <div className="arrow-wrap _01">
                    <img loading="lazy" src={IC_ARROW_DOT} alt="Arrow" />
                  </div>
                  <div className="primary-text">
                    <div>Prendre Rendez-vous</div>
                  </div>
                  <div className="arrow-wrap _02">
                    <img loading="lazy" src={IC_ARROW_DOT} alt="Arrow" />
                  </div>
                </button>
              </div>
            </div>
          </section>

          {/* ── Appointment Section ── */}
          <AppointmentForm />
        </div>
      </ScrollReveal>
      <Footer />
    </>
  );
}
