import { defineType, defineField } from "sanity";
import { ProjectsIcon } from "@sanity/icons";
import { seoFields } from "../helpers/seoFields";

export const specialtiesPage = defineType({
  name: "specialtiesPage",
  title: "Page Spécialités",
  type: "document",
  icon: ProjectsIcon,
  groups: [
    { name: "content", title: "Contenu", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Titre de la page",
      type: "string",
      group: "content",
      initialValue: "Nos Spécialités",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Texte d'introduction (près du titre)",
      type: "text",
      group: "content",
      rows: 3,
      initialValue: "Découvrez notre expertise en chirurgie viscérale, digestive et robotique au service de votre santé.",
    }),
    ...seoFields,
  ],
  preview: {
    prepare() {
      return {
        title: "Page Spécialités",
      };
    },
  },
});
