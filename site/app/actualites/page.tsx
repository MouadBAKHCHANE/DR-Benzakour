import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const articles = [
  {
    title: "Quand consulter un chirurgien digestif ?",
    tag: "Chirurgie Digestive",
    img: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920479c5449ad2c1f67e104_blog-thumb-05.webp",
    srcSet:
      "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920479c5449ad2c1f67e104_blog-thumb-05-p-500.webp 500w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920479c5449ad2c1f67e104_blog-thumb-05-p-800.webp 800w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920479c5449ad2c1f67e104_blog-thumb-05-p-1080.webp 1080w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920479c5449ad2c1f67e104_blog-thumb-05.webp 1320w",
  },
  {
    title: "La chirurgie robotique : r\u00e9volution au bloc",
    tag: "Innovation",
    img: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920438f88d8092a8b2bfba4_blog-thumb-07.webp",
    srcSet:
      "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920438f88d8092a8b2bfba4_blog-thumb-07-p-500.webp 500w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920438f88d8092a8b2bfba4_blog-thumb-07-p-800.webp 800w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920438f88d8092a8b2bfba4_blog-thumb-07-p-1080.webp 1080w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920438f88d8092a8b2bfba4_blog-thumb-07.webp 1320w",
  },
  {
    title: "Carcinose p\u00e9riton\u00e9ale : la technique CHIP",
    tag: "Canc\u00e9rologie",
    img: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692043767b164b60cbdc8e93_blog-thumb-06.webp",
    srcSet:
      "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692043767b164b60cbdc8e93_blog-thumb-06-p-500.webp 500w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692043767b164b60cbdc8e93_blog-thumb-06-p-800.webp 800w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692043767b164b60cbdc8e93_blog-thumb-06-p-1080.webp 1080w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692043767b164b60cbdc8e93_blog-thumb-06.webp 1320w",
  },
  {
    title: "RAAC : r\u00e9cup\u00e9rer plus vite apr\u00e8s chirurgie",
    tag: "R\u00e9cup\u00e9ration",
    img: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204347fef2a08f472e1a17_blog-thumb-04.webp",
    srcSet:
      "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204347fef2a08f472e1a17_blog-thumb-04-p-500.webp 500w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204347fef2a08f472e1a17_blog-thumb-04-p-800.webp 800w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204347fef2a08f472e1a17_blog-thumb-04-p-1080.webp 1080w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/69204347fef2a08f472e1a17_blog-thumb-04.webp 1320w",
  },
  {
    title: "Les avantages de la chirurgie mini-invasive",
    tag: "Laparoscopie",
    img: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920430d8f976c682e998bae_blog-thumb-03.webp",
    srcSet:
      "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920430d8f976c682e998bae_blog-thumb-03-p-500.webp 500w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920430d8f976c682e998bae_blog-thumb-03-p-800.webp 800w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920430d8f976c682e998bae_blog-thumb-03-p-1080.webp 1080w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/6920430d8f976c682e998bae_blog-thumb-03.webp 1320w",
  },
  {
    title: "Bilan digestif : pourquoi un d\u00e9pistage r\u00e9gulier",
    tag: "Pr\u00e9vention",
    img: "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692042f4eb1b14e84fda4e4c_blog-thumb-02.webp",
    srcSet:
      "https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692042f4eb1b14e84fda4e4c_blog-thumb-02-p-500.webp 500w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692042f4eb1b14e84fda4e4c_blog-thumb-02-p-800.webp 800w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692042f4eb1b14e84fda4e4c_blog-thumb-02-p-1080.webp 1080w, https://cdn.prod.website-files.com/691efb76a43669d5b9e04d7e/692042f4eb1b14e84fda4e4c_blog-thumb-02.webp 1320w",
  },
];

export default function ActualitesPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal>
        {/* ── Page Title ── */}
        <div className="page-title">
          <div className="w-layout-blockcontainer container w-container">
            <div className="pg-inner">
              <h1 className="main-heading reveal">Derniers Articles</h1>
              <p className="pg-title-text">
                D&eacute;couvrez les derni&egrave;res actualit&eacute;s en
                chirurgie digestive et canc&eacute;rologique de notre
                &eacute;quipe m&eacute;dicale.
              </p>
            </div>
          </div>
        </div>

        <div className="page-wrap">
          {/* ── Posts Section ── */}
          <section className="posts">
            <div className="w-layout-blockcontainer container w-container">
              <div className="w-dyn-list">
                <div role="list" className="post-list w-dyn-items">
                  {articles.map((article, i) => (
                    <div key={i} role="listitem" className="post-item w-dyn-item">
                      <a href="#" className="post-block w-inline-block">
                        <div className="post-img">
                          <img
                            src={article.img}
                            loading="lazy"
                            alt="Post Image"
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 726.625px, 939.15625px"
                            srcSet={article.srcSet}
                            className="post-image"
                          />
                        </div>
                        <div className="post-data">
                          <div className="post-tag-wrap">
                            <div className="post-tag">{article.tag}</div>
                          </div>
                          <div>{article.title}</div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </ScrollReveal>
      <Footer />
    </>
  );
}
