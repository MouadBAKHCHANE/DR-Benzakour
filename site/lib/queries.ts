import { client } from "./sanity";

// — Homepage —

export async function getHomePage() {
  return client.fetch(`*[_type == "homePage"][0]`);
}

// — Settings —

export async function getSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}

// — Spécialités —

export async function getAllSpecialties() {
  return client.fetch(`*[_type == "specialty"] | order(order asc)`);
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
    { slug }
  );
}

// — À Propos —

export async function getAboutPage() {
  return client.fetch(`*[_type == "aboutPage"][0]`);
}

// — Page Spécialités —

export async function getSpecialtiesPage() {
  return client.fetch(`*[_type == "specialtiesPage"][0]`);
}

// — Blog —

export async function getAllBlogPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, publishedAt, mainImage, categorie, excerpt
  }`);
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id, title, slug, publishedAt, mainImage, categorie,
      excerpt, author, body,
      "seoTitle": seo.title,
      "seoDescription": seo.description
    }`,
    { slug }
  );
}

// — Legal —

export async function getAllLegalPages() {
  return client.fetch(`*[_type == "legalPage"] {
    _id, title, slug
  }`);
}

