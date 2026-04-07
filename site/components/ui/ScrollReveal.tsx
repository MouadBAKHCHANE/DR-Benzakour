"use client";

import { useEffect } from "react";

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Auto-tag headings, paragraphs, list items, links — only if not already tagged
    const autoTagSelectors = [
      "h1", "h2", "h3", "h4", "h5", "h6",
      "p",
      ".sub-title",
      ".section-heading",
      ".section-title",
      ".body-small",
      "blockquote",
    ];
    autoTagSelectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        if (!el.classList.contains("reveal") && !el.closest(".no-reveal")) {
          el.classList.add("reveal", "reveal-auto");
        }
      });
    });

    const els = document.querySelectorAll(
      ".reveal, .reveal-img-right, .reveal-img-left, .reveal-slide-left, .reveal-slide-right, .reveal-up, .reveal-zoom"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));

    // Re-observe newly added elements (in case of route changes / hydration)
    const mo = new MutationObserver(() => {
      document
        .querySelectorAll(".reveal:not(.visible)")
        .forEach((el) => observer.observe(el));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return <>{children}</>;
}
