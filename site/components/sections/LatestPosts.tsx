import Link from "next/link";
import { getHomePage, getLatestPosts } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";

const IC_TITLE = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg";
const IC_ARROW_BLACK = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6921538e227be2cec8f60124_ic-arrow-black.svg";

function formatFrenchDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  const formatted = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(d);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export async function LatestPosts() {
  const home = await getHomePage();

  if (home?.latestPostsEnabled === false) return null;

  const tagline = home?.latestPostsTagline;
  const heading = home?.latestPostsHeading;
  const count = typeof home?.latestPostsCount === "number" ? home.latestPostsCount : 3;
  const sort: "recent" | "mostViewed" = home?.latestPostsSort === "mostViewed" ? "mostViewed" : "recent";

  const posts: any[] = await getLatestPosts(count, sort);

  if ((!posts || posts.length === 0) && !tagline && !heading) return null;

  return (
    <section className="posts">
      <div className="container">
        {(tagline || heading) && (
          <div className="section-title">
            {tagline && (
              <div className="sub-title">
                <img src={IC_TITLE} alt="" />
                <div>{tagline}</div>
              </div>
            )}
            {heading && <h2 className="section-heading">{heading}</h2>}
          </div>
        )}
        {posts && posts.length > 0 && (
          <div className="post-list-02">
            {posts.map((article) => {
              const slug = article?.slug?.current;
              const imgUrl = article?.mainImage?.asset
                ? urlForImage(article.mainImage).width(800).height(600).url()
                : null;
              return (
                <div key={article._id} className="post-item">
                  <Link
                    href={slug ? `/actualites/${slug}` : "/actualites"}
                    className="post-block-02 reveal"
                  >
                    <div className="post-meta-02">
                      {article?.categorie && <div className="post-tag-02">{article.categorie}</div>}
                      {article?.publishedAt && (
                        <div className="post-date-02">{formatFrenchDate(article.publishedAt)}</div>
                      )}
                    </div>
                    {imgUrl && (
                      <div className="post-img-02">
                        <img src={imgUrl} alt={article.title} className="post-image-02" />
                      </div>
                    )}
                    <div className="post-title-wrapper-02">
                      <h3 className="post-title-02">{article.title}</h3>
                    </div>
                    <div className="post-arrow-02">
                      <img src={IC_ARROW_BLACK} alt="Go" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
