import { client } from "./sanity";

const REVALIDATE_OPTIONS = { next: { revalidate: 3600 } }; // Revalidate hourly; pair with Sanity webhooks for instant updates

// — Homepage —

export async function getHomePage() {
  return client.fetch(`*[_type == "homePage"][0]`, {}, REVALIDATE_OPTIONS);
}

// — Settings —

export async function getSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`, {}, REVALIDATE_OPTIONS);
}

// — Spécialités —

export async function getAllSpecialties() {
  return client.fetch(`*[_type == "specialty"] | order(order asc)`, {}, REVALIDATE_OPTIONS);
}

export async function getSpecialtyBySlug(slug: string) {
  return client.fetch(
    `*[_type == "specialty" && slug.current == $slug][0]{
      _id, name, slug, tag, order,
      subtitle, cardDescription, intro,
      image, heroImage, icon,
      sections[]{
        _key, heading, content,
        list, quote, stats[]{value, label}
      },
      seoTitle, seoDescription, seoKeywords, ogImage, noIndex
    }`,
    { slug },
    REVALIDATE_OPTIONS
  );
}

// — À Propos —

export async function getAboutPage() {
  return client.fetch(`*[_type == "aboutPage"][0]`, {}, REVALIDATE_OPTIONS);
}

// — Page Spécialités —

export async function getSpecialtiesPage() {
  return client.fetch(`*[_type == "specialtiesPage"][0]`, {}, REVALIDATE_OPTIONS);
}

// — Blog —

export async function getAllBlogPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, publishedAt, mainImage, categorie, excerpt
  }`, {}, REVALIDATE_OPTIONS);
}

export async function getLatestPosts(count: number, sort: "recent" | "mostViewed") {
  const order = sort === "mostViewed" ? "views desc, publishedAt desc" : "publishedAt desc";
  return client.fetch(
    `*[_type == "post"] | order(${order})[0...$count]{
      _id, title, slug, publishedAt, mainImage, categorie
    }`,
    { count },
    REVALIDATE_OPTIONS
  );
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id, _updatedAt, title, slug, publishedAt, mainImage, categorie,
      excerpt, author, body,
      "seoTitle": seo.title,
      "seoDescription": seo.description
    }`,
    { slug },
    REVALIDATE_OPTIONS
  );
}

// — Legal —

export async function getAllLegalPages() {
  return client.fetch(`*[_type == "legalPage"] {
    _id, title, slug
  }`, {}, REVALIDATE_OPTIONS);
}
