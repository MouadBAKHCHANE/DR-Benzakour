import { defineField } from "sanity";

export const seoFields = [
  defineField({
    name: "seoTitle",
    title: "Titre SEO",
    type: "string",
    group: "seo",
    validation: (Rule) => Rule.max(60).warning("60 caractères max pour un bon affichage Google"),
    description: "Remplace le titre dans les résultats Google (max 60 car.)",
  }),
  defineField({
    name: "seoDescription",
    title: "Meta Description",
    type: "text",
    rows: 3,
    group: "seo",
    validation: (Rule) => Rule.max(160).warning("160 caractères max pour un bon affichage Google"),
    description: "Description affichée dans les résultats de recherche",
  }),
  defineField({
    name: "seoKeywords",
    title: "Mots-clés SEO",
    type: "array",
    of: [{ type: "string" }],
    options: { layout: "tags" },
    group: "seo",
  }),
  defineField({
    name: "ogImage",
    title: "Image de partage (OG Image)",
    type: "image",
    group: "seo",
    description: "Image affichée sur Facebook, LinkedIn, WhatsApp (1200×630 recommandé)",
    options: { hotspot: true },
  }),
  defineField({
    name: "noIndex",
    title: "Masquer des moteurs de recherche",
    type: "boolean",
    group: "seo",
    initialValue: false,
  }),
];
