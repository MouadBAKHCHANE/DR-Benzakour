import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getAllBlogPosts, getPostBySlug } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Article non trouvé" };

  return {
    title: post.seoTitle || `${post.title} | Actualités Dr. Benzakour`,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.mainImage ? [urlForImage(post.mainImage).url()] : [],
    }
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((p: any) => ({ slug: p.slug?.current }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getPostBySlug(slug);
  if (!article) notFound();

  const allPosts = await getAllBlogPosts();
  const related = allPosts.filter((a: any) => a.slug?.current !== slug).slice(0, 3);

  const publishDate = new Date(article.publishedAt).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const jsonLd = [
    blogPostingJsonLd(article),
    breadcrumbJsonLd([
      { name: "Accueil", url: "https://www.cabinetdrbenzakour.ma" },
      { name: "Actualités", url: "https://www.cabinetdrbenzakour.ma/actualites" },
      { name: article.title, url: `https://www.cabinetdrbenzakour.ma/actualites/${slug}` },
    ])
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ScrollReveal>
        <article className="article-page-wrap">
          <div className="article-hero-bg">
            <div className="container">
              <div className="article-hero-grid reveal">
                <div className="article-hero-content">
                  <div className="article-category-tag">{article.categorie?.toUpperCase() || "ARTICLE"}</div>
                  <h1 className="article-title">{article.title.toUpperCase()}</h1>
                  <p className="article-excerpt">{article.excerpt}</p>
                </div>
                <div className="article-hero-img-wrap">
                  {article.mainImage && (
                    <img src={urlForImage(article.mainImage).url()} alt={article.title} loading="eager" className="article-main-img" />
                  )}
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
                    <div className="article-publish-date">{publishDate}</div>
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
                  {article.body ? (
                    <PortableText value={article.body} />
                  ) : (
                    <p>Aucun contenu disponible pour cet article.</p>
                  )}
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
                  {related.map((a: any) => (
                    <div key={a.slug?.current} className="related-post-card">
                      <Link href={`/actualites/${a.slug?.current}`} className="post-card-link">
                        <div className="post-card-img">
                          <img src={a.mainImage ? urlForImage(a.mainImage).url() : "/images/placeholder.webp"} loading="lazy" alt={a.title} />
                        </div>
                        <div className="post-card-info">
                          <div className="post-card-meta">
                            <span className="post-tag-simple">{a.categorie?.toUpperCase() || "ARTICLE"}</span>
                            <span className="post-dot"></span>
                            <span className="post-date-simple">
                              {new Date(a.publishedAt).toLocaleDateString('fr-FR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
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
