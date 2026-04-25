import { getHomePage } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";

const IC_TITLE = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg";

export async function Doctors() {
  const data = await getHomePage();

  const tagline = data?.credentialsTagline;
  const heading = data?.credentialsHeading;
  const list: any[] = Array.isArray(data?.credentialsList) ? data.credentialsList : [];

  if (!tagline && !heading && list.length === 0) return null;

  return (
    <section className="doctors">
      <div className="container">
        {(tagline || heading) && (
          <div className="section-title reveal">
            {tagline && (
              <div className="sub-title">
                <img src={IC_TITLE} alt="" />
                {tagline}
              </div>
            )}
            {heading && <h2 className="section-heading">{heading}</h2>}
          </div>
        )}
        {list.length > 0 && (
          <div className="doctors-list-02">
            {list.map((item, i) => {
              const imgUrl = item?.image?.asset
                ? urlForImage(item.image).width(400).height(400).url()
                : null;
              return (
                <div
                  key={item._key || i}
                  className={`doctores-block reveal${i > 0 ? ` reveal-d${i}` : ""}`}
                >
                  {(item?.label || item?.title) && (
                    <div className="doctor-wrap">
                      {item?.label && <span className="doctor-specialty">{item.label}</span>}
                      {item?.title && <span className="doctor-text">{item.title}</span>}
                    </div>
                  )}
                  <div className="doctors-img-wrap">
                    {imgUrl && (
                      <div className="doctor-img">
                        <img
                          className="doctor-image"
                          src={imgUrl}
                          alt={item?.title || ""}
                          loading="lazy"
                        />
                      </div>
                    )}
                    {(item?.description || item?.institution) && (
                      <div className="doctor-data">
                        {item?.description && <span>{item.description}</span>}
                        {item?.institution && <span>{item.institution}</span>}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
