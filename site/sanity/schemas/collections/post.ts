import { defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

export const post = defineType({
  name: "post",
  title: "Actualités / Blog",
  type: "document",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Auteur",
      type: "string",
      initialValue: "Dr Benzakour Mohammed Amal",
    }),
    defineField({
      name: "mainImage",
      title: "Image principale",
      type: "image",
      options: { hotspot: true },
      description:
        "Cliquez sur l'icône crayon de l'image pour recadrer et placer le point focal : il restera visible sur tous les formats du site.",
    }),
    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      initialValue: (new Date()).toISOString(),
    }),
    defineField({
      name: "excerpt",
      title: "Extrait",
      type: "text",
      rows: 3,
      description: "Petit résumé pour la liste des articles",
    }),
    defineField({
      name: "categorie",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Chirurgie Digestive", value: "Chirurgie Digestive" },
          { title: "Cancérologie", value: "Cancérologie" },
          { title: "Innovation", value: "Innovation" },
          { title: "Récupération", value: "Récupération" },
        ],
      },
      initialValue: "Chirurgie Digestive",
    }),
    defineField({
      name: "views",
      title: "Nombre de vues",
      type: "number",
      initialValue: 0,
      description: "Utilisé pour le tri 'Plus vus' sur la page d'accueil",
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: "body",
      title: "Contenu",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          title: "Image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Texte alternatif (SEO)", type: "string" }),
            defineField({ name: "caption", title: "Légende", type: "string" }),
          ],
        },
        { type: "videoEmbed" },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Meta Title", type: "string" }),
        defineField({ name: "description", title: "Meta Description", type: "text", rows: 3 }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `par ${author}` };
    },
  },
});
