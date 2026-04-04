import Link from "next/link";

const IC_TITLE = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691db30b09f7df66c548ed80_ic-title.svg";
const IC_ARROW_BLACK = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/6921538e227be2cec8f60124_ic-arrow-black.svg";

const articles = [
  {
    tag: "Chirurgie Digestive",
    date: "Mars 2026",
    title: "Quand consulter un chirurgien digestif ?",
    slug: "quand-consulter-chirurgien-digestif",
    image: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692043767b164b60cbdc8e93_blog-thumb-06.webp",
  },
  {
    tag: "Innovation",
    date: "Mars 2026",
    title: "La chirurgie robotique : révolution au bloc opératoire",
    slug: "chirurgie-robotique-revolution",
    image: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692042f4eb1b14e84fda4e4c_blog-thumb-02.webp",
  },
  {
    tag: "Récupération",
    date: "Mars 2026",
    title: "RAAC : récupérer plus vite après une chirurgie",
    slug: "raac-recuperation-amelioree",
    image: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920479c5449ad2c1f67e104_blog-thumb-05.webp",
  },
];

export function LatestPosts() {
  return (
    <section className="posts">
      <div className="container">
        <div className="section-title">
          <div className="sub-title">
            <img src={IC_TITLE} alt="" />
            <div>Actualités</div>
          </div>
          <h2 className="section-heading">Derniers Articles</h2>
        </div>
        <div className="post-list-02">
          {articles.map((article, i) => (
            <div key={i} className="post-item">
              <Link
                href={`/actualites/${article.slug}`}
                className="post-block-02 reveal"
              >
                <div className="post-left-02">
                  <div className="post-dots"></div>
                  <div className="post-wrapper">
                    <div>{article.tag}</div>
                    <div>{article.date}</div>
                  </div>
                </div>
                <div className="post-right">
                  <div className="post-img-02">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="post-image-02"
                    />
                  </div>
                  <div className="post-wrapper-02">
                    <div>{article.title}</div>
                    <img
                      src={IC_ARROW_BLACK}
                      alt="Arrow"
                      className="arrow-02"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
