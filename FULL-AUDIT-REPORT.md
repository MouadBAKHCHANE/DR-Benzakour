# SEO Full Audit — Cabinet Dr Benzakour

**Project:** `D:\Downloads\DR-Benzakour\site` (Next.js 16 + Sanity)
**Site:** https://www.cabinetdrbenzakour.ma
**Date:** 2026-04-25
**Method:** Static source audit (LLM-first). Live URL not fetched — confidence labels reflect this.

---

## Score Snapshot

| Category | Score | Rating |
|---|---|---|
| Technical SEO | 70 | Good |
| Content / E-E-A-T | 65 | Needs Improvement |
| On-Page | 75 | Good |
| Schema / Structured Data | 55 | Needs Improvement |
| Performance (CWV, code-level) | 45 | Poor |
| Image Optimization | 35 | Poor |
| AI Search Readiness (GEO) | 40 | Poor |
| **Overall** | **~58** | **Needs Improvement** |

---

## Findings (by severity)

### Critical

#### C1. No `next/image` anywhere — raw `<img>` everywhere
- **Evidence:** `grep next/image` returns only `next-env.d.ts`. Every component (`Hero.tsx`, `Doctors.tsx`, `LatestPosts.tsx`, all pages) uses raw `<img src=...>`. Examples: `app/a-propos/page.tsx:75`, `app/specialites/[slug]/page.tsx:107`, `app/actualites/[slug]/page.tsx:101`.
- **Impact:** No automatic AVIF/WebP serving, no responsive `srcset`, no width/height-based CLS prevention. LCP will suffer on all hero images. CWV is part of Page Experience.
- **Confidence:** Confirmed.
- **Fix:** Migrate to `next/image`. Configure `next.config.ts` with Sanity remote pattern:
  ```ts
  images: { remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }] }
  ```

#### C2. Hero image is bigger than it should be
- **Evidence:** `public/images/IMG_0025.jpg` is **2.1 MB** (the `.webp` next to it is 664 KB). `IMG_0024.webp` is 1.0 MB. Repo root contains `hero.png` (7.3 MB) and `contact us.png` (1.4 MB) — likely unused, but check.
- **Impact:** If JPG version is ever served, instant LCP failure. Repo bloat.
- **Confidence:** Confirmed.
- **Fix:** Delete `IMG_0025.jpg`, `hero.png`, `contact us.png` from repo. Re-encode `IMG_0024.webp` to ~150 KB target.

#### C3. `BlogPosting` JSON-LD missing required fields
- **Evidence:** `lib/jsonld.ts:126-147` `blogPostingJsonLd()` lacks `image` (Google **requires** for article rich results), `dateModified`, and `publisher.logo` (also required).
- **Impact:** Article rich results will not appear in Google. Direct ranking/CTR loss for blog content.
- **Confidence:** Confirmed.
- **Fix:** Add `image: urlForImage(post.mainImage).width(1200).height(630).url()`, `dateModified: post._updatedAt || post.publishedAt`, and `publisher.logo: { "@type": "ImageObject", url: <SITE_URL>/logo.png }`.

#### C4. `physicianJsonLd` has inverted image fallback (bug)
- **Evidence:** `lib/jsonld.ts:73`:
  ```ts
  image: settings?.seo?.ogImage ? undefined : `${SITE_URL}/favicon.png`,
  ```
  When `ogImage` *exists*, `image` is set to `undefined`. When it doesn't, falls back to the 16-px favicon (useless).
- **Impact:** Schema parsers see no image for the practice. Knowledge Panel / local pack listings won't pick up an image.
- **Confidence:** Confirmed.
- **Fix:** `image: settings?.seo?.ogImage ? urlForImage(settings.seo.ogImage).width(1200).height(630).url() : ${SITE_URL}/images/og-default.jpg`.

---

### Warning

#### W1. Heavy dependency on Webflow CDN for icons
- **Evidence:** 57 occurrences of `cdn.prod.website-files.com` across 16 files for SVG icons (`ic-arrow-dot.svg`, `ic-title.svg`, etc.).
- **Impact:** Extra DNS lookup + TLS handshake per page; if Webflow throttles or rotates, icons break. Hurts LCP and resilience.
- **Confidence:** Confirmed.
- **Fix:** Download the SVGs into `public/icons/` and reference locally. Inline the small ones.

#### W2. Fontshare stylesheet loaded render-blocking, no `preconnect`
- **Evidence:** `app/layout.tsx:72-74` — `<link rel="stylesheet" href="https://api.fontshare.com/...">` with no preconnect, no `display=swap` is set in URL but font loading is still serial.
- **Impact:** Font CSS is render-blocking. LCP delayed by ~150–300 ms on cold connections.
- **Confidence:** Confirmed.
- **Fix:** Add before the stylesheet:
  ```html
  <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
  <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
  ```
  Better: self-host Switzer via `next/font/local`.

#### W3. `MedicalProcedure` schema is bare-bones
- **Evidence:** `lib/jsonld.ts:101-109` only emits `name`, `description`, `url`.
- **Impact:** Misses Google's recommended properties (`procedureType`, `bodyLocation`, `howPerformed`, `preparation`, `followup`). Reduces medical-procedure rich-result chances.
- **Confidence:** Likely.
- **Fix:** Extend the helper with optional fields populated from Sanity.

#### W4. `FAQPage` schema on `/contact`
- **Evidence:** `app/contact/page.tsx:46-58`.
- **Impact:** Since Aug 2023 FAQ rich results are **restricted to government/health-authority** sites. A private clinic generally does not qualify, so the schema is parsed but no rich results render. Not harmful — just wasted effort. Some clinics still get partial display.
- **Confidence:** Likely.
- **Fix:** Keep if the FAQs are useful as on-page content; otherwise prioritize relocating Q&A near service pages where they help LLM/AEO. Don't expect rich results.

#### W5. `og:type` on `/a-propos` is `profile` without required fields
- **Evidence:** `app/a-propos/page.tsx:31`. OpenGraph `profile` type requires `profile:first_name` and `profile:last_name`.
- **Impact:** Malformed Open Graph; some social platforms ignore the card.
- **Confidence:** Confirmed.
- **Fix:** Change to `type: "website"` (or `article`), or supply the profile fields.

#### W6. Sitemap omits `/actualites` index and `/confidentialite`
- **Evidence:** `app/sitemap.ts` lists `a-propos`, `contact`, `specialites`, individual posts, and Sanity `legalPages`. Missing: `/actualites` index, `/confidentialite` static page (only sourced from Sanity legal docs).
- **Impact:** Two indexable pages are not discoverable via sitemap.
- **Confidence:** Confirmed.
- **Fix:** Add `{ url: ${BASE_URL}/actualites, priority: 0.7, changeFrequency: "weekly" }` and either include `/confidentialite` explicitly or migrate it to a Sanity legal page.

#### W7. Aggressive `revalidate: 10`
- **Evidence:** `lib/queries.ts:3` `REVALIDATE_OPTIONS = { next: { revalidate: 10 } }`.
- **Impact:** Every Sanity query is treated as near-live. Heavy ISR rebuild traffic + Sanity API quota burn. Doesn't affect ranking but affects TTFB and bills.
- **Confidence:** Confirmed.
- **Fix:** Use `revalidate: 3600` for content pages and on-demand revalidation via Sanity webhooks for instant updates.

#### W8. No `not-found.tsx` (custom 404)
- **Evidence:** No file matches `app/not-found.tsx` or `app/**/not-found.tsx`.
- **Impact:** Default unstyled 404 — bad crawl/UX, no internal links to recover. Search Console may flag soft-404s.
- **Confidence:** Confirmed.
- **Fix:** Add `app/not-found.tsx` with branded layout, `noindex`, and links back to `/specialites`, `/actualites`, `/contact`.

#### W9. No `manifest.webmanifest`
- **Evidence:** No reference to `manifest` in `layout.tsx`. Only favicon links.
- **Impact:** No mobile install prompt, theme color, or branded share icon. Minor SEO/PWA loss.
- **Confidence:** Confirmed.
- **Fix:** Add `app/manifest.ts` (Next 16 supports it).

#### W10. No `llms.txt` (GEO / AI search readiness)
- **Evidence:** Project has no `app/llms.txt` route.
- **Impact:** Reduced visibility in ChatGPT/Claude/Perplexity citations. AI-driven referrals are growing.
- **Confidence:** Likely.
- **Fix:** Add `public/llms.txt` summarizing the practice, services, hours, contact, and key URLs.

---

### Info / Low

- **I1.** Sitemap blog entries depend on `slug.current` — confirm Sanity always populates slugs (otherwise `undefined` URLs ship).
- **I2.** `noopener noreferrer` not enforced on external `target="_blank"` links — minor.
- **I3.** Article share buttons in `app/actualites/[slug]/page.tsx:120-122` use `href="#"` — broken UX, not SEO, but visible to users.
- **I4.** `WebSite` schema lacks `potentialAction` (sitelinks search box) — only matters if site search is implemented.
- **I5.** No `<meta name="theme-color">` — visual polish only.
- **I6.** `medicalSpecialty` strings are free-text French. Google accepts free text but Schema.org has enums (`MedicalSpecialty`).

---

## Things You're Already Doing Right

- `metadataBase`, canonical URLs, OG/Twitter tags on most routes — solid.
- `Physician` + `WebSite` JSON-LD in root layout.
- `BreadcrumbList` schema on specialty and article detail pages.
- `robots.ts` correctly blocks `/studio` and `/api/`.
- Google Search Console verification token in metadata.
- French `lang="fr"` set on `<html>`.
- `generateStaticParams` for both dynamic routes (specialty, article).
- Per-page `generateMetadata` reading Sanity SEO fields with sensible fallbacks.
- WebP images in `public/images/` (just over-sized).
- Sitemap with priorities + change frequencies.

---

## Environment Limitations

- Live URL not fetched — performance scores (LCP/INP/CLS) are inferred from code, not measured. To produce real numbers run:
  ```
  python3 <SKILL_DIR>/scripts/pagespeed.py https://www.cabinetdrbenzakour.ma --strategy mobile
  ```
- `noindex` policy on `/studio` is via `robots.ts` only; cannot verify HTTP headers without live fetch.
