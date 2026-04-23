import { getHomePage } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";

const MARQUEE_ICON =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a0f5194d6fa1a7e3e965_ic-subtitle.svg";

const FALLBACK_MARQUEE = [
  "Excellence Chirurgicale",
  "Innovation Médicale",
  "Soins de Confiance",
  "Expertise Reconnue",
];

const FALLBACK_DESCRIPTION =
  "Le Dr Benzakour s’engage à offrir des soins chirurgicaux avancés et accessibles, combinant expertise médicale et attention personnalisée.";

const FALLBACK_HIGHLIGHT =
  "Très impliqué dans l’évolution de la médecine au Maroc, il collabore avec des organisations de premier plan et participe activement à des conférences sur la médecine de demain.";

const FALLBACK_IMAGE = "/images/IMG_0024.webp";

const FALLBACK_COMMITMENTS = [
  {
    id: "01",
    label: "Diagnostic Précis",
    iconUrl:
      "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a35f3a3075be20c47fa4_ic-trusted-01.svg",
  },
  {
    id: "02",
    label: "Prévention Santé",
    iconUrl:
      "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a35f8f1db73c0c58b8f7_ic-trusted-02.svg",
  },
  {
    id: "03",
    label: "Pratique Éthique",
    iconUrl:
      "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a360167ce2fed3198d33_ic-trusted-03.svg",
  },
  {
    id: "04",
    label: "Suivi à Vie",
    iconUrl:
      "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a35f3606afaaa24586bc_ic-trusted-04.svg",
  },
  {
    id: "05",
    label: "Soins Bienveillants",
    iconUrl:
      "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a35fbc1302600ed9652b_ic-trusted-05.svg",
  },
];

export async function TrustMarquee() {
  const data = await getHomePage();

  const marqueeItems: string[] = data?.trustMarquee?.length
    ? data.trustMarquee
    : FALLBACK_MARQUEE;

  const description: string = data?.trustDescription || FALLBACK_DESCRIPTION;
  const highlight: string = data?.trustHighlight || FALLBACK_HIGHLIGHT;

  const image: string = data?.trustImage
    ? urlForImage(data.trustImage).url()
    : FALLBACK_IMAGE;

  const commitments: Array<{ id: string; label: string; iconUrl: string | undefined }> =
    data?.commitments?.length
      ? data.commitments.map((c: any, i: number) => ({
          id: c?.id || FALLBACK_COMMITMENTS[i]?.id || String(i + 1).padStart(2, "0"),
          label: c?.label || FALLBACK_COMMITMENTS[i]?.label || "",
          iconUrl: c?.icon
            ? urlForImage(c.icon).url()
            : FALLBACK_COMMITMENTS[i]?.iconUrl,
        }))
      : FALLBACK_COMMITMENTS;

  // duplicate for the seamless marquee loop
  const marqueeLoop = [...marqueeItems, ...marqueeItems];

  return (
    <section className="trusted-section">
      <div className="trusted-bottom reveal">
        <div className="trusted-wrapper">
          {/* Image */}
          <div className="trusted-img">
            <img src={image} alt="Trusted" loading="lazy" />
          </div>

          {/* Texts and Values List */}
          <div className="trusted-wrap">
            {/* Marquee */}
            <div className="trusted-marquee-container">
              <div className="trusted-marquee">
                {marqueeLoop.map((item, i) => (
                  <span key={i}>
                    <span>{item}</span> <img src={MARQUEE_ICON} alt="" />
                  </span>
                ))}
              </div>
            </div>

            {/* Description Text */}
            <div className="trusted-data">
              <p>{description}</p>
              <p>{highlight}</p>
            </div>

            {/* Commitments */}
            {commitments.map((c, i) => (
              <div
                key={`${c.id}-${i}`}
                className={`trusted-block${i === 0 ? " top" : ""}`}
              >
                <div className="trusted-info">
                  <span className="body-small">{c.id}</span>
                  <div>{c.label}</div>
                </div>
                {c.iconUrl && (
                  <img
                    className="trusted-icon"
                    src={c.iconUrl}
                    alt=""
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
