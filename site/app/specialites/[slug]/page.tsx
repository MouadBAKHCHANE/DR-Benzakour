import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AppointmentForm } from "@/components/sections/AppointmentForm";

/* ── CDN assets ── */
const IC_ARROW_DOT =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg";
const SERVICE_IMG =
  "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920566fe381bd8491964e60_service-main-06.webp";

/* ── Service data ── */
interface ServiceData {
  title: string;
  subtitle: string;
  image: string;
  sections: { heading: string; content: string; list?: string[] }[];
}

const services: Record<string, ServiceData> = {
  "chirurgie-viscerale": {
    title: "Chirurgie Visc\u00e9rale et Digestive",
    subtitle:
      "Prise en charge compl\u00e8te des pathologies de l\u2019appareil digestif, du diagnostic au suivi postop\u00e9ratoire.",
    image: "/images/spec-1.png",
    sections: [
      {
        heading: "Pr\u00e9sentation",
        content:
          "La chirurgie visc\u00e9rale et digestive couvre l\u2019ensemble des interventions portant sur les organes abdominaux\u00a0: estomac, intestin gr\u00eale, c\u00f4lon, rectum, foie, pancr\u00e9as, v\u00e9sicule biliaire et paroi abdominale. Le Dr\u00a0Benzakour propose une approche personnalis\u00e9e alliant expertise chirurgicale de pointe et accompagnement humain.",
      },
      {
        heading: "Pathologies trait\u00e9es",
        content:
          "Notre \u00e9quipe prend en charge un large \u00e9ventail de pathologies\u00a0:",
        list: [
          "Hernies inguinales, ombilicales et \u00e9ventrations",
          "Lithiase biliaire et chol\u00e9cystectomie",
          "Appendicite aigu\u00eb et p\u00e9ritonite",
          "Pathologies colorectales (diverticulose, polypes)",
          "Occlusions intestinales et adh\u00e9rences",
        ],
      },
      {
        heading: "Suivi & R\u00e9cup\u00e9ration",
        content:
          "Chaque patient b\u00e9n\u00e9ficie d\u2019un protocole de r\u00e9cup\u00e9ration am\u00e9lior\u00e9e apr\u00e8s chirurgie (RAAC) avec\u00a0:",
        list: [
          "R\u00e9alimentation pr\u00e9coce et mobilisation rapide",
          "Gestion optimis\u00e9e de la douleur",
          "Consultations de suivi r\u00e9guli\u00e8res",
          "Coordination avec votre m\u00e9decin traitant",
        ],
      },
    ],
  },
  "chirurgie-robotique": {
    title: "Chirurgie Robotique",
    subtitle:
      "La pr\u00e9cision du robot Da Vinci au service de votre sant\u00e9 digestive.",
    image: "/images/spec-4.png",
    sections: [
      {
        heading: "Pr\u00e9sentation",
        content:
          "La chirurgie robotique repr\u00e9sente l\u2019\u00e9volution la plus r\u00e9cente de la chirurgie mini-invasive. Gr\u00e2ce au syst\u00e8me Da Vinci, le Dr\u00a0Benzakour r\u00e9alise des interventions complexes avec une pr\u00e9cision millim\u00e9trique, une vision 3D haute d\u00e9finition et une amplitude de mouvement sup\u00e9rieure \u00e0 la main humaine.",
      },
      {
        heading: "Avantages de la chirurgie robotique",
        content: "Cette technologie offre de nombreux b\u00e9n\u00e9fices\u00a0:",
        list: [
          "Incisions plus petites et cicatrices r\u00e9duites",
          "Moins de douleurs postop\u00e9ratoires",
          "Dur\u00e9e d\u2019hospitalisation raccourcie",
          "Pr\u00e9cision accrue pour les dissections d\u00e9licates",
          "Retour plus rapide aux activit\u00e9s quotidiennes",
        ],
      },
      {
        heading: "Indications principales",
        content:
          "La chirurgie robotique est particuli\u00e8rement adapt\u00e9e aux interventions suivantes\u00a0:",
        list: [
          "Chirurgie colorectale canc\u00e9reuse",
          "Chirurgie de l\u2019ob\u00e9sit\u00e9 (bypass, sleeve)",
          "Chirurgie du reflux gastro-\u0153sophagien",
          "Interventions h\u00e9patiques et pancr\u00e9atiques s\u00e9lectionn\u00e9es",
        ],
      },
    ],
  },
  "chirurgie-mini-invasive": {
    title: "Chirurgie Mini-Invasive",
    subtitle:
      "Des techniques laparoscopiques avanc\u00e9es pour une r\u00e9cup\u00e9ration plus rapide.",
    image: "/images/spec-2.png",
    sections: [
      {
        heading: "Pr\u00e9sentation",
        content:
          "La chirurgie mini-invasive, ou laparoscopie, permet de r\u00e9aliser des interventions abdominales \u00e0 travers de petites incisions de 5 \u00e0 12\u00a0mm. Le Dr\u00a0Benzakour privil\u00e9gie syst\u00e9matiquement cette approche lorsqu\u2019elle est possible, afin de r\u00e9duire le traumatisme chirurgical et acc\u00e9l\u00e9rer la convalescence.",
      },
      {
        heading: "B\u00e9n\u00e9fices pour le patient",
        content:
          "La chirurgie laparoscopique offre des avantages significatifs\u00a0:",
        list: [
          "Moins de douleur et de cicatrices",
          "Hospitalisation r\u00e9duite (\u00e0 souvent ambulatoire)",
          "Reprise d\u2019activit\u00e9 acc\u00e9l\u00e9r\u00e9e",
          "Risque inf\u00e9rieur d\u2019infection postop\u00e9ratoire",
          "R\u00e9sultat esth\u00e9tique am\u00e9lior\u00e9",
        ],
      },
      {
        heading: "Interventions propos\u00e9es",
        content:
          "Nous pratiquons en laparoscopie la majorit\u00e9 des interventions courantes\u00a0:",
        list: [
          "Chol\u00e9cystectomie (ablation de la v\u00e9sicule)",
          "Appendicectomie",
          "Cure de hernie (inguinale, ombilicale, hiatale)",
          "Chirurgie anti-reflux (Nissen)",
          "R\u00e9sections coliques et rectales",
        ],
      },
    ],
  },
  "cancerologie-digestive": {
    title: "Canc\u00e9rologie Digestive",
    subtitle:
      "Prise en charge chirurgicale des cancers digestifs en coordination multidisciplinaire.",
    image: "/images/spec-5.png",
    sections: [
      {
        heading: "Pr\u00e9sentation",
        content:
          "Le Dr\u00a0Benzakour intervient dans la prise en charge chirurgicale des cancers de l\u2019appareil digestif, en \u00e9troite collaboration avec les oncologues, gastro-ent\u00e9rologues et radiologues. Chaque dossier est discut\u00e9 en r\u00e9union de concertation pluridisciplinaire (RCP) pour garantir la meilleure strat\u00e9gie th\u00e9rapeutique.",
      },
      {
        heading: "Cancers pris en charge",
        content:
          "Notre expertise couvre l\u2019ensemble des cancers digestifs\u00a0:",
        list: [
          "Cancer de l\u2019estomac",
          "Cancer du c\u00f4lon et du rectum",
          "Cancer du pancr\u00e9as",
          "Cancer du foie et des voies biliaires",
          "Carcinose p\u00e9riton\u00e9ale (CRS & CHIP / HIPEC)",
        ],
      },
      {
        heading: "Approche th\u00e9rapeutique",
        content:
          "Nous combinons les derni\u00e8res avanc\u00e9es en chirurgie canc\u00e9rologique\u00a0:",
        list: [
          "Chirurgie carcinologique r\u00e9gl\u00e9e avec curage ganglionnaire",
          "Techniques mini-invasives et robotiques quand indiqu\u00e9es",
          "Chimio-hyperthermie intrap\u00e9riton\u00e9ale (CHIP / HIPEC)",
          "Coordination avec chimioth\u00e9rapie n\u00e9o-adjuvante et adjuvante",
        ],
      },
    ],
  },
  raac: {
    title: "RAAC \u2014 R\u00e9cup\u00e9ration Am\u00e9lior\u00e9e",
    subtitle:
      "Un protocole de soins optimis\u00e9 pour une convalescence plus rapide et plus confortable.",
    image: SERVICE_IMG,
    sections: [
      {
        heading: "Pr\u00e9sentation",
        content:
          "La RAAC (R\u00e9cup\u00e9ration Am\u00e9lior\u00e9e Apr\u00e8s Chirurgie) est un ensemble de mesures p\u00e9riop\u00e9ratoires \u00e9prouv\u00e9es visant \u00e0 r\u00e9duire le stress chirurgical, acc\u00e9l\u00e9rer la gu\u00e9rison et am\u00e9liorer le confort du patient. Le Dr\u00a0Benzakour int\u00e8gre ces protocoles dans chacune de ses interventions.",
      },
      {
        heading: "Principes cl\u00e9s",
        content:
          "Le programme RAAC repose sur plusieurs piliers\u00a0:",
        list: [
          "Information et pr\u00e9paration pr\u00e9op\u00e9ratoire du patient",
          "Anesth\u00e9sie et analg\u00e9sie multimodale",
          "Chirurgie mini-invasive privil\u00e9gi\u00e9e",
          "R\u00e9alimentation et mobilisation pr\u00e9coces",
          "Pr\u00e9vention des naus\u00e9es et des complications",
        ],
      },
      {
        heading: "R\u00e9sultats observ\u00e9s",
        content:
          "Gr\u00e2ce \u00e0 la RAAC, nos patients constatent\u00a0:",
        list: [
          "R\u00e9duction de la dur\u00e9e d\u2019hospitalisation de 30 \u00e0 50\u00a0%",
          "Diminution des complications postop\u00e9ratoires",
          "Meilleur confort et satisfaction globale",
          "Retour plus rapide \u00e0 la vie normale",
        ],
      },
    ],
  },
  consultation: {
    title: "Consultation Sp\u00e9cialis\u00e9e",
    subtitle:
      "\u00c9valuation compl\u00e8te et orientation personnalis\u00e9e pour chaque patient.",
    image: SERVICE_IMG,
    sections: [
      {
        heading: "Pr\u00e9sentation",
        content:
          "La consultation sp\u00e9cialis\u00e9e est la premi\u00e8re \u00e9tape de votre parcours de soins. Le Dr\u00a0Benzakour prend le temps d\u2019\u00e9couter, d\u2019examiner et d\u2019expliquer chaque diagnostic afin que vous compreniez pleinement les options th\u00e9rapeutiques qui s\u2019offrent \u00e0 vous.",
      },
      {
        heading: "D\u00e9roulement de la consultation",
        content:
          "Chaque visite suit un processus structur\u00e9\u00a0:",
        list: [
          "Analyse de votre dossier m\u00e9dical et historique",
          "Examen clinique approfondi",
          "Interpr\u00e9tation des examens compl\u00e9mentaires (scanner, IRM, endoscopie)",
          "Discussion claire du diagnostic et du plan de traitement",
          "R\u00e9daction d\u2019un compte-rendu d\u00e9taill\u00e9 pour votre m\u00e9decin traitant",
        ],
      },
      {
        heading: "Motifs de consultation fr\u00e9quents",
        content:
          "Les patients nous consultent notamment pour\u00a0:",
        list: [
          "Douleurs abdominales chroniques ou aigu\u00ebs",
          "Bilan pr\u00e9op\u00e9ratoire avant chirurgie digestive",
          "Second avis chirurgical",
          "Suivi postop\u00e9ratoire et contr\u00f4le",
          "Prise en charge de l\u2019ob\u00e9sit\u00e9 morbide",
        ],
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
                    <div key={i}>
                      <h3>{section.heading}</h3>
                      <p>{section.content}</p>
                      {section.list && (
                        <ul role="list">
                          {section.list.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {i < service.sections.length - 1 && (
                        <p>{"\u200B"}</p>
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
