"use client";

import { useEffect, useRef } from "react";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/lib/sanity";

const IC_ARROW_DOT = "https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg";

interface Panel {
  _type: string;
  _key: string;
  title?: string;
  description?: any;
  showButton?: boolean;
  centered?: boolean;
  stats?: { value: string; label: string }[];
  list?: string[];
  image?: any;
  caption?: string;
}

export function HorizontalScroll({ panels }: { panels: Panel[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const isMobile = () => window.innerWidth <= 991;

    const update = () => {
      if (isMobile()) {
        section.style.height = "auto";
        content.style.transform = "none";
        return;
      }
      const contentWidth = content.scrollWidth;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const sectionHeight = contentWidth - viewportWidth + viewportHeight;
      section.style.height = `${sectionHeight}px`;
    };

    const handleScroll = () => {
      if (isMobile()) return;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollable = sectionHeight - viewportHeight;
      if (scrollable <= 0) return;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / scrollable);
      const maxTranslate = content.scrollWidth - window.innerWidth;
      content.style.transform = `translate3d(${-progress * maxTranslate}px, 0px, 0px)`;
    };

    update();
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => { update(); handleScroll(); });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!panels || panels.length === 0) return null;

  return (
    <section className="hscroll-section" ref={sectionRef}>
      <div className="hscroll-sticky">
        <div className="hscroll-content" ref={contentRef}>
          {panels.map((panel, idx) => {
            if (panel._type === "textPanel") {
              return (
                <div key={panel._key || idx} className={`hscroll-panel hscroll-text-panel ${panel.centered ? 'hscroll-center-panel' : ''}`}>
                  {panel.centered ? (
                    <h3 className="purpose-small-heading">{panel.title}</h3>
                  ) : (
                    <div className="purpose-title">{panel.title}</div>
                  )}

                  <div className="single-text" style={{ textAlign: panel.centered ? "center" : "left" }}>
                    <PortableText value={panel.description} />
                  </div>

                  {panel.stats && panel.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="purpose-stat">
                      <div className="purpose-heading">{stat.value}</div>
                      <p className="single-text">{stat.label}</p>
                    </div>
                  ))}

                  {panel.list && panel.list.length > 0 && (
                    <ul className="purpose-list" style={{ marginTop: 10 }}>
                      {panel.list.map((item, lIdx) => (
                        <li key={lIdx} className="purpose-item">{item}</li>
                      ))}
                    </ul>
                  )}

                  {panel.showButton && (
                    <button type="button" data-appointment className="primary-button" style={{ alignSelf: panel.centered ? "center" : "flex-start", marginTop: 20 }}>
                      <div className="arrow-wrap _01">
                        <img src={IC_ARROW_DOT} alt="Arrow" />
                      </div>
                      <div className="primary-text">
                        <div>Prendre Rendez-vous</div>
                      </div>
                      <div className="arrow-wrap _02">
                        <img src={IC_ARROW_DOT} alt="Arrow" />
                      </div>
                    </button>
                  )}
                </div>
              );
            } else if (panel._type === "imagePanel") {
              return (
                <div key={panel._key || idx} className="hscroll-panel hscroll-img-panel">
                  {panel.image && (
                    <img src={urlForImage(panel.image).url()} alt={panel.caption || "Image"} />
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
