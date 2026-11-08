"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { sanityImageUrl, hotspotPosition } from "@/lib/sanity";

// Reads ?cat= from the URL and syncs it to the filter state. Isolated in its
// own component so the Suspense boundary required by useSearchParams only
// covers this (renders nothing) instead of the whole page.
function CategoryParamSync({
  categories,
  onChange,
}: {
  categories: string[];
  onChange: (cat: string) => void;
}) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("cat");

  useEffect(() => {
    if (categoryParam) {
      const match = categories.find(
        (c) => c.toLowerCase() === categoryParam.toLowerCase()
      );
      onChange(match || "Tous");
    } else {
      onChange("Tous");
    }
  }, [categoryParam, categories, onChange]);

  return null;
}

export function ActualitesPageClient({ posts }: { posts: any[] }) {
  const categories = useMemo(
    () =>
      Array.from(
        new Set(posts.map((p) => p.categorie).filter(Boolean))
      ) as string[],
    [posts]
  );
  const [selected, setSelected] = useState<string>("Tous");

  const filtered =
    selected === "Tous"
      ? posts
      : posts.filter((a) => a.categorie === selected);

  return (
    <>
      <Suspense fallback={null}>
        <CategoryParamSync categories={categories} onChange={setSelected} />
      </Suspense>
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
                    <div key={article.slug?.current} className="post-item">
                      <Link
                        href={`/actualites/${article.slug?.current}`}
                        className="post-block"
                      >
                        <div className="post-img">
                          <img
                            src={article.mainImage ? sanityImageUrl(article.mainImage, 900) : "/images/placeholder.webp"}
                            loading="lazy"
                            alt={article.title}
                            className="post-image"
                            style={{ objectPosition: hotspotPosition(article.mainImage) }}
                          />
                        </div>
                        <div className="post-data">
                          <div className="post-meta-wrap">
                            <div className="post-tag">{article.categorie || "Article"}</div>
                            <div className="post-date">
                              {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </div>
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
    </>
  );
}
