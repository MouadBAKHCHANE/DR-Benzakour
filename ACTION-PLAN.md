# SEO Action Plan — Cabinet Dr Benzakour

Prioritized by impact × effort. Tackle Phase 1 first.

## Phase 1 — Quick wins (1–2 days, high impact)

1. **Fix `physicianJsonLd` image bug** — `lib/jsonld.ts:73`. Invert the ternary so `image` is set when `ogImage` exists.
2. **Add `image`, `dateModified`, `publisher.logo` to `blogPostingJsonLd`** — required for Google article rich results.
3. **Add `/actualites` to `sitemap.ts`**, plus `/confidentialite` if it stays as a static page.
4. **Change `/a-propos` `og:type` from `profile` to `website`** (or supply `profile:first_name`/`last_name`).
5. **Add `<link rel="preconnect">` for Fontshare** in `app/layout.tsx` head, before the stylesheet.
6. **Delete repo-root junk** — `hero.png` (7.3 MB), `contact us.png` (1.4 MB), `IMG_0025.jpg` (2.1 MB) under `public/images/`.
7. **Lower `revalidate` from 10 → 3600** in `lib/queries.ts`. Pair with Sanity webhook + `revalidatePath` for instant updates.

## Phase 2 — Performance (3–5 days, highest CWV impact)

8. **Migrate to `next/image`** — at minimum on Hero, Doctors, Services, LatestPosts, About hero, Specialty hero, Article hero. Configure `next.config.ts`:
   ```ts
   images: { remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }] }
   ```
   On the LCP image add `priority` (drops `loading="eager"` and adds `fetchPriority="high"`).
9. **Self-host or remove Webflow CDN icons** — copy used SVGs to `public/icons/`, replace 57 references.
10. **Self-host Switzer font** via `next/font/local` (drop the Fontshare stylesheet entirely).
11. **Re-encode large WebP** — target ≤200 KB for hero, ≤120 KB for cards.

## Phase 3 — Schema & content depth (1 week)

12. **Extend `medicalServiceJsonLd`** with `procedureType`, `bodyLocation`, `howPerformed`, `preparation`, `followup` from Sanity fields (add to schema if missing).
13. **Add a `Person` schema for Dr. Benzakour** on `/a-propos` (E-E-A-T: credentials, alumniOf, affiliations, sameAs to ORCID/PubMed/LinkedIn).
14. **Reconsider FAQPage schema** — keep the on-page FAQ for content/AEO value, but expect no rich results. Optionally remove the JSON-LD wrapper.
15. **Add `BreadcrumbList` schema to `/a-propos`, `/contact`, `/confidentialite`** (currently only on detail pages).

## Phase 4 — Coverage & polish

16. **Add `app/not-found.tsx`** with branded 404, internal links, `noindex`.
17. **Add `app/manifest.ts`** (web manifest, theme color, icons).
18. **Add `public/llms.txt`** summarizing practice, services, contact — improves citation in ChatGPT/Claude/Perplexity.
19. **Fix dummy share links** in `app/actualites/[slug]/page.tsx:120-122` (`href="#"`) — wire to real share URLs or remove.
20. **Add security headers** via `next.config.ts` `headers()`: `Strict-Transport-Security`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Content-Type-Options: nosniff`, `Permissions-Policy`.

## Phase 5 — Measurement

21. **Run live audits after Phase 1+2**:
    - PageSpeed Insights mobile — target LCP < 2.5 s, INP < 200 ms, CLS < 0.1.
    - Google Rich Results Test on home, a specialty, and an article.
    - Search Console → Coverage → confirm `/actualites` and all specialties indexed.

## Out of scope but worth noting

- No analytics beyond Google verification. Consider GA4 + Search Console linking.
- No `hreflang` (site is fr-only). Only relevant if you ship Arabic.
- No internal-linking strategy from blog → specialty pages — currently a missed authority-flow opportunity.
