import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { articles } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <ScrollReveal>
        <article className="article-page-wrap">
          <div className="article-hero-bg">
            <div className="container">
              <div className="article-hero-grid reveal">
                <div className="article-hero-content">
                  <div className="article-category-tag">{article.tag.toUpperCase()}</div>
                  <h1 className="article-title">{article.title.toUpperCase()}</h1>
                  <p className="article-excerpt">{article.excerpt}</p>
                </div>
                <div className="article-hero-img-wrap">
                  <img src={article.img} alt={article.title} loading="eager" className="article-main-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="article-body-layout">
              <aside className="article-social-sidebar reveal">
                <div className="sidebar-sticky">
                  <div className="publish-info">
                    <span className="share-label">PUBLISHED</span>
                    <div className="article-publish-date">{article.date}</div>
                  </div>
                  
                  <div className="share-block" style={{ marginTop: '40px' }}>
                    <span className="share-label">SHARE</span>
                    <div className="share-links">
                      <a href="#" className="share-link-circle">FB</a>
                      <a href="#" className="share-link-circle">X</a>
                      <a href="#" className="share-link-circle">LI</a>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="article-main-body reveal">
                <div className="article-content-rich">
                  {article.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                
                <div className="article-footer-cta">
                  <div className="cta-inner">
                    <h3>Besoin d&rsquo;une consultation ?</h3>
                    <p>Prenez rendez-vous directement avec le Dr. Benzakour pour un diagnostic précis.</p>
                    <Link href="/contact" className="primary-button small">
                      <div className="primary-text">Prendre Rendez-vous</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="article-related-section">
              <div className="container">
                <div className="section-header align-between">
                  <h2 className="related-title">Articles similaires</h2>
                  <Link href="/actualites" className="view-all-link">Voir tout</Link>
                </div>
                <div className="related-post-grid">
                  {related.map((a) => (
                    <div key={a.slug} className="related-post-card">
                      <Link href={`/actualites/${a.slug}`} className="post-card-link">
                        <div className="post-card-img">
                          <img src={a.img} loading="lazy" alt={a.title} />
                        </div>
                        <div className="post-card-info">
                          <div className="post-card-meta">
                            <span className="post-tag-simple">{a.tag.toUpperCase()}</span>
                            <span className="post-dot"></span>
                            <span className="post-date-simple">{a.date}</span>
                          </div>
                          <h3 className="post-card-title">{a.title}</h3>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </article>
      </ScrollReveal>
      <Footer />
    </>
  );
}
