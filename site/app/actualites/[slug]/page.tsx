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
        <article className="article-page">
          <div className="container">
            <div className="article-header reveal">
              <Link href="/actualites" className="article-back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                Retour aux articles
              </Link>
              <div className="article-meta">
                <Link
                  href={`/actualites?cat=${encodeURIComponent(article.tag)}`}
                  className="article-tag"
                >
                  {article.tag}
                </Link>
                <span className="article-date">{article.date}</span>
              </div>
              <h1 className="article-title">{article.title}</h1>
              <p className="article-excerpt">{article.excerpt}</p>
            </div>

            <div className="article-hero reveal">
              <img src={article.img} alt={article.title} loading="eager" />
            </div>

            <div className="article-body reveal">
              {article.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {related.length > 0 && (
            <div className="container">
              <div className="article-related">
                <h2 className="article-related-title">Articles similaires</h2>
                <div className="post-list">
                  {related.map((a) => (
                    <div key={a.slug} className="post-item">
                      <Link href={`/actualites/${a.slug}`} className="post-block">
                        <div className="post-img">
                          <img src={a.img} loading="lazy" alt={a.title} className="post-image" />
                        </div>
                        <div className="post-data">
                          <div className="post-meta-wrap">
                            <div className="post-tag">{a.tag}</div>
                            <div className="post-date">{a.date}</div>
                          </div>
                          <h3 className="post-title">{a.title}</h3>
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
