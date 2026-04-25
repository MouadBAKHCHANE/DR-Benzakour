import { defineType, defineField } from "sanity";
import { HomeIcon } from "@sanity/icons";
import { seoFields } from "../helpers/seoFields";

export const homePage = defineType({
  name: "homePage",
  title: "Page d'accueil",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "ourStory", title: "À Propos (Section)" },
    { name: "services", title: "Spécialités (Section)" },
    { name: "credentials", title: "Parcours / Formation" },
    { name: "trust", title: "Confiance / Engagement" },
    { name: "latestPosts", title: "Derniers Articles" },
    { name: "appointment", title: "Rendez-vous" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // --- HERO ---
    defineField({
      name: "heroTitle",
      title: "Titre Hero",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroDescription",
      title: "Description Hero",
      type: "text",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "heroImage",
      title: "Image Hero",
      type: "image",
      group: "hero",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroMarquee",
      title: "Marquee (Services défilants)",
      type: "array",
      of: [{ type: "string" }],
      group: "hero",
    }),

    // --- OUR STORY ---
    defineField({
      name: "storyTagline",
      title: "Tagline (Petit titre)",
      type: "string",
      group: "ourStory",
    }),
    defineField({
      name: "storyHeading",
      title: "Titre de la section",
      type: "string",
      group: "ourStory",
    }),
    defineField({
      name: "storyText",
      title: "Texte de la section",
      type: "text",
      rows: 4,
      group: "ourStory",
    }),
    defineField({
      name: "storyImages",
      title: "Images (4 attendues)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      group: "ourStory",
    }),

    // --- SERVICES ---
    defineField({
      name: "servicesTagline",
      title: "Tagline",
      type: "string",
      group: "services",
    }),
    defineField({
      name: "servicesHeading",
      title: "Titre de la section",
      type: "string",
      group: "services",
    }),
    defineField({
      name: "servicesList",
      title: "Liste des services",
      type: "array",
      group: "services",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Titre", type: "string" },
            { name: "tag", title: "Tag", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 3 },
            { name: "icon", title: "Icône", type: "image" },
            { name: "link", title: "Lien (Slug)", type: "string", description: "ex: chirurgie-digestive-viscerale" },
          ],
        },
      ],
    }),

    // --- CREDENTIALS ---
    defineField({
      name: "credentialsTagline",
      title: "Tagline",
      type: "string",
      group: "credentials",
    }),
    defineField({
      name: "credentialsHeading",
      title: "Titre de la section",
      type: "string",
      group: "credentials",
    }),
    defineField({
      name: "credentialsList",
      title: "Liste des diplômes / parcours",
      group: "credentials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label court (ex: Doctorat)", type: "string" },
            { name: "title", title: "Titre (ex: Médecine)", type: "string" },
            { name: "description", title: "Description longue", type: "string" },
            { name: "institution", title: "Institution", type: "string" },
          ],
        },
      ],
    }),

    // --- TRUST ---
    defineField({
      name: "trustImage",
      title: "Image de la section",
      type: "image",
      group: "trust",
    }),
    defineField({
      name: "trustDescription",
      title: "Description",
      type: "text",
      rows: 3,
      group: "trust",
    }),
    defineField({
      name: "trustHighlight",
      title: "Texte en évidence",
      type: "text",
      rows: 2,
      group: "trust",
    }),
    defineField({
      name: "trustMarquee",
      title: "Marquee (Engagements)",
      type: "array",
      of: [{ type: "string" }],
      group: "trust",
    }),
    defineField({
      name: "commitments",
      title: "Nos 5 Engagements",
      type: "array",
      group: "trust",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "Numéro (ex: 01)", type: "string" },
            { name: "label", title: "Label", type: "string" },
            { name: "icon", title: "Icône", type: "image" },
          ],
        },
      ],
    }),

    // --- LATEST POSTS ---
    defineField({
      name: "latestPostsEnabled",
      title: "Afficher la section",
      type: "boolean",
      group: "latestPosts",
      initialValue: true,
    }),
    defineField({
      name: "latestPostsTagline",
      title: "Tagline",
      type: "string",
      group: "latestPosts",
      initialValue: "Actualités",
    }),
    defineField({
      name: "latestPostsHeading",
      title: "Titre de la section",
      type: "string",
      group: "latestPosts",
      initialValue: "Derniers Articles",
    }),
    defineField({
      name: "latestPostsCount",
      title: "Nombre d'articles à afficher",
      type: "number",
      group: "latestPosts",
      initialValue: 3,
      validation: (Rule) => Rule.min(1).max(12).integer(),
    }),
    defineField({
      name: "latestPostsSort",
      title: "Trier par",
      type: "string",
      group: "latestPosts",
      initialValue: "recent",
      options: {
        list: [
          { title: "Plus récents", value: "recent" },
          { title: "Plus vus", value: "mostViewed" },
        ],
        layout: "radio",
      },
    }),

    // --- APPOINTMENT ---
    defineField({
      name: "appointmentTagline",
      title: "Tagline",
      type: "string",
      group: "appointment",
    }),
    defineField({
      name: "appointmentTitle",
      title: "Titre",
      type: "string",
      group: "appointment",
    }),
    defineField({
      name: "appointmentDescription",
      title: "Description",
      type: "text",
      rows: 3,
      group: "appointment",
    }),

    // --- SEO ---
    ...seoFields,
  ],
});
