"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { articles, categories } from "@/lib/articles";

function ActualitesContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("cat");
  const [selected, setSelected] = useState<string>("Tous");

  useEffect(() => {
    if (categoryParam) {
      const match = categories.find(
        (c) => c.toLowerCase() === categoryParam.toLowerCase()
      );
      setSelected(match || "Tous");
    } else {
      setSelected("Tous");
    }
  }, [categoryParam]);

  const filtered =
    selected === "Tous"
      ? articles
      : articles.filter((a) => a.tag === selected);

  return (
    <>
      <Navbar />
      <ScrollReveal>
        {/* Page Title */}
        <div className="page-title">
          <div className="container">
            <div className="pg-inner">
              <h1 className="main-heading reveal">Derniers Articles</h1>
              <p className="pg-title-text">
                Découvrez les dernières actualités en chirurgie digestive et
                cancérologique.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="container">
          <div className="article-filters">
            <button
              className={`article-filter-btn ${selected === "Tous" ? "active" : ""}`}
              onClick={() => setSelected("Tous")}
            >
              Tous
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`article-filter-btn ${selected === cat ? "active" : ""}`}
                onClick={() => setSelected(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="page-wrap">
          <section className="posts">
            <div className="container">
              <div className="post-list">
                {filtered.length === 0 ? (
                  <p className="article-empty">Aucun article dans cette catégorie.</p>
                ) : (
                  filtered.map((article) => (
                    <div key={article.slug} className="post-item">
                      <Link
                        href={`/actualites/${article.slug}`}
                        className="post-block"
                      >
                        <div className="post-img">
                          <img
                            src={article.img}
                            loading="lazy"
                            alt={article.title}
                            className="post-image"
                          />
                        </div>
                        <div className="post-data">
                          <div className="post-meta-wrap">
                            <div className="post-tag">{article.tag}</div>
                            <div className="post-date">{article.date}</div>
                          </div>
                          <h2 className="post-title">{article.title}</h2>
                        </div>
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </div>
      </ScrollReveal>
      <Footer />
    </>
  );
}

export default function ActualitesPage() {
  return (
    <Suspense fallback={null}>
      <ActualitesContent />
    </Suspense>
  );
}
