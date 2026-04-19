import { defineType, defineField } from "sanity";
import { ActivityIcon } from "@sanity/icons";
import { seoFields } from "../helpers/seoFields";

export const specialty = defineType({
  name: "specialty",
  title: "Spécialité",
  type: "document",
  icon: ActivityIcon,
  groups: [
    { name: "card", title: "Carte", default: true },
    { name: "sections", title: "Sections de Contenu (Flexible)" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // — Carte (affiché sur la homepage & page spécialités) —
    defineField({
      name: "name",
      title: "Nom de la spécialité",
      type: "string",
      group: "card",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      group: "card",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag / Label court",
      type: "string",
      group: "card",
      description: "Ex: Digestive, Oncologie, Mini-Invasive, CHIP",
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
      group: "card",
    }),
    defineField({
      name: "subtitle",
      title: "Sous-titre",
      type: "text",
      rows: 3,
      group: "card",
    }),
    defineField({
      name: "cardDescription",
      title: "Description carte",
      type: "text",
      rows: 3,
      group: "card",
      description: "Texte court affiché sur la carte de la spécialité",
    }),
    defineField({
      name: "intro",
      title: "Description courte",
      type: "text",
      rows: 3,
      group: "card",
    }),
    defineField({
      name: "icon",
      title: "Icône (emoji ou nom)",
      type: "string",
      group: "card",
    }),
    defineField({
      name: "image",
      title: "Image de la carte",
      type: "image",
      group: "card",
      options: { hotspot: true },
    }),

    // — Sections de Contenu Flexible —
    defineField({
      name: "sections",
      title: "Sections de Contenu",
      type: "array",
      group: "sections",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Titre de la section", type: "string" }),
            defineField({ name: "content", title: "Texte", type: "text", rows: 4 }),
            defineField({
              name: "list",
              title: "Liste à puces",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({ name: "quote", title: "Citation", type: "text", rows: 2 }),
            defineField({
              name: "stats",
              title: "Statistiques",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "value", title: "Valeur", type: "string" }),
                    defineField({ name: "label", title: "Label", type: "string" }),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: { title: "heading", subtitle: "content" },
          },
        },
      ],
    }),

    // — SEO —
    ...seoFields,
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "tag", media: "image" },
  },
});
