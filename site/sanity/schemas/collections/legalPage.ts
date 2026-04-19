import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const legalPage = defineType({
  name: "legalPage",
  title: "Pages Légales",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titre de la page",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastUpdated",
      title: "Dernière mise à jour",
      type: "date",
    }),
    defineField({
      name: "seoTitle",
      title: "Titre SEO",
      type: "string",
      description: "Titre affiché dans les résultats Google",
    }),
    defineField({
      name: "content",
      title: "Contenu",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
