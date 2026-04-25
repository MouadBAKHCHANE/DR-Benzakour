import { getHomePage } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";

const MARQUEE_ICON =
  "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6925a0f5194d6fa1a7e3e965_ic-subtitle.svg";

export async function TrustMarquee() {
  const data = await getHomePage();

  const marqueeItems: string[] = Array.isArray(data?.trustMarquee) ? data.trustMarquee : [];
  const description: string = data?.trustDescription || "";
  const highlight: string = data?.trustHighlight || "";
  const image: string | null = data?.trustImage ? urlForImage(data.trustImage).url() : null;

  const commitments: Array<{ id: string; label: string; iconUrl: string | null }> = Array.isArray(data?.commitments)
    ? data.commitments.map((c: any) => ({
        id: c?.id || "",
        label: c?.label || "",
        iconUrl: c?.icon ? urlForImage(c.icon).url() : null,
      }))
    : [];

  const hasAnyContent =
    marqueeItems.length > 0 ||
    description ||
    highlight ||
    image ||
    commitments.length > 0;

  if (!hasAnyContent) return null;

  const marqueeLoop = [...marqueeItems, ...marqueeItems];

  return (
    <section className="trusted-section">
      <div className="trusted-bottom reveal">
        <div className="trusted-wrapper">
          {image && (
            <div className="trusted-img">
              <img src={image} alt="Trusted" loading="lazy" />
            </div>
          )}

          <div className="trusted-wrap">
            {marqueeItems.length > 0 && (
              <div className="trusted-marquee-container">
                <div className="trusted-marquee">
                  {marqueeLoop.map((item, i) => (
                    <span key={i}>
                      <span>{item}</span> <img src={MARQUEE_ICON} alt="" />
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(description || highlight) && (
              <div className="trusted-data">
                {description && <p>{description}</p>}
                {highlight && <p>{highlight}</p>}
              </div>
            )}

            {commitments.map((c, i) => {
              if (!c.id && !c.label && !c.iconUrl) return null;
              return (
                <div
                  key={`${c.id}-${i}`}
                  className={`trusted-block${i === 0 ? " top" : ""}`}
                >
                  <div className="trusted-info">
                    {c.id && <span className="body-small">{c.id}</span>}
                    {c.label && <div>{c.label}</div>}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
