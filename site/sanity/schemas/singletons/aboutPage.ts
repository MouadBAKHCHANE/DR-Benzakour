import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";
import { seoFields } from "../helpers/seoFields";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "Page À Propos",
  type: "document",
  icon: UserIcon,
  groups: [
    { name: "hero", title: "1. Profil & Hero", default: true },
    { name: "history", title: "2. Notre Histoire" },
    { name: "details", title: "3. Détails & Philosophie" },
    { name: "purpose", title: "4. Nos Engagements (Scroll)" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // --- 1. Hero ---
    defineField({
      name: "heroImage",
      title: "Photo de profil",
      type: "image",
      group: "hero",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroBadge",
      title: "Badge / Spécialités",
      type: "string",
      group: "hero",
      description: "Ex: Chirurgie Viscérale, Digestive & Robotique",
    }),
    defineField({
      name: "heroHeading",
      title: "Nom complet",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroIntro",
      title: "Introduction",
      type: "text",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "heroBlocks",
      title: "Blocs de texte (sous l'intro)",
      type: "array",
      group: "hero",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titre", type: "string" }),
            defineField({ name: "content", title: "Contenu", type: "text", rows: 4 }),
          ],
        },
      ],
    }),

    // --- 2. Notre Histoire ---
    defineField({
      name: "historySubtitle",
      title: "Sur-titre",
      type: "string",
      group: "history",
      initialValue: "Notre Histoire",
    }),
    defineField({
      name: "historyHeading",
      title: "Titre principal",
      type: "string",
      group: "history",
    }),
    defineField({
      name: "historyItems",
      title: "Icônes de services",
      type: "array",
      group: "history",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icône (SVG)", type: "image" }),
            defineField({ name: "label", title: "Libellé", type: "string" }),
          ],
          preview: { select: { title: "label", media: "icon" } },
        },
      ],
    }),

    // --- 3. Détails & Philosophie ---
    defineField({
      name: "detailBlocks",
      title: "Blocs de détails",
      type: "array",
      group: "details",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Titre du bloc", type: "string" }),
            defineField({ name: "subheading", title: "Sous-titre (optionnel)", type: "string" }),
            defineField({ 
              name: "content", 
              title: "Contenu", 
              type: "array", 
              of: [{ type: "block" }] 
            }),
            defineField({
              name: "quote",
              title: "Citation (optionnelle)",
              type: "text",
              rows: 2,
            }),
          ],
        },
      ],
    }),

    // --- 4. Nos Engagements (Horizontal Scroll) ---
    defineField({
      name: "purposePanels",
      title: "Panneaux du scroll horizontal",
      type: "array",
      group: "purpose",
      of: [
        {
          name: "textPanel",
          title: "Panneau de texte",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titre", type: "string" }),
            defineField({ 
              name: "description", 
              title: "Contenu Riche", 
              type: "array", 
              of: [{ type: "block" }] 
            }),
            defineField({
              name: "showButton",
              title: "Afficher le bouton de rendez-vous",
              type: "boolean",
              initialValue: false
            }),
            defineField({
              name: "centered",
              title: "Centrer le contenu",
              type: "boolean",
              initialValue: false
            }),
            defineField({
              name: "stats",
              title: "Statistiques",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "value", title: "Valeur (ex: 30+)", type: "string" }),
                    defineField({ name: "label", title: "Label", type: "string" }),
                  ],
                },
              ],
            }),
            defineField({
              name: "list",
              title: "Liste à puces",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        },
        {
          name: "imagePanel",
          title: "Panneau d'image",
          type: "object",
          fields: [
            defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
            defineField({ name: "caption", title: "Légende", type: "string" }),
          ],
        },
      ],
    }),

    // --- SEO ---
    ...seoFields,
  ],
  preview: {
    prepare() {
      return { title: "Page À Propos" };
    },
  },
});
