import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "identity",  title: "Identité",      default: true },
    { name: "contact",   title: "Coordonnées" },
    { name: "hours",     title: "Horaires" },
    { name: "social",    title: "Réseaux sociaux" },
    { name: "seo",       title: "SEO" },
    { name: "marketing", title: "Marketing" },
  ],
  fields: [

    // ── Identité ──────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Nom du cabinet",
      type: "string",
      group: "identity",
      initialValue: "Cabinet Dr Benzakour Mohammed Amal",
    }),
    defineField({
      name: "legalCompanyName",
      title: "Raison sociale",
      type: "string",
      group: "identity",
    }),
    defineField({
      name: "tagline",
      title: "Accroche (tagline)",
      type: "string",
      group: "identity",
      description: "Courte phrase affichée sous le nom du médecin",
    }),
    defineField({
      name: "siteDescription",
      title: "Description du site",
      type: "text",
      rows: 3,
      group: "identity",
    }),
    defineField({
      name: "logo",
      title: "Logo du site",
      type: "image",
      options: { hotspot: true },
      group: "identity",
    }),
    defineField({
      name: "mainCtaLabel",
      title: "Label bouton principal",
      type: "string",
      group: "identity",
      description: "Texte du bouton CTA (ex: Prendre Rendez-vous)",
    }),
    defineField({
      name: "appointmentText",
      title: "Texte rendez-vous",
      type: "string",
      group: "identity",
      description: "Ex: Sur rendez-vous",
    }),

    // ── Coordonnées ───────────────────────────────────────────
    defineField({
      name: "phoneFixe",
      title: "Téléphone fixe",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "phoneMobile",
      title: "Téléphone mobile",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "phone",
      title: "Téléphone affiché (combiné)",
      type: "string",
      group: "contact",
      description: "Numéro combiné affiché sur le site (ex: 05 22 89 44 19 / 07 67 49 49 16)",
    }),
    defineField({
      name: "email",
      title: "Email de contact",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "address",
      title: "Adresse physique",
      type: "object",
      group: "contact",
      fields: [
        defineField({ name: "street",  title: "Rue / Bâtiment", type: "text", rows: 2 }),
        defineField({ name: "city",    title: "Ville",          type: "string" }),
        defineField({ name: "country", title: "Pays",           type: "string" }),
      ],
    }),
    defineField({
      name: "googleMapsUrl",
      title: "Lien Google Maps (directions)",
      type: "url",
      group: "contact",
    }),
    defineField({
      name: "googleMapsEmbedQuery",
      title: "Google Maps Embed Query",
      type: "string",
      group: "contact",
      description: "Requête pour l'iframe (ex: Uptown+Business+Center+CFC+Casablanca)",
    }),

    // ── Horaires ──────────────────────────────────────────────
    defineField({
      name: "consultationDays",
      title: "Jours de consultation",
      type: "string",
      group: "hours",
      description: "Ex: Lundi au Vendredi, Samedi Matin",
    }),
    defineField({
      name: "openingHours",
      title: "Heures d'ouverture",
      type: "string",
      group: "hours",
      description: "Ex: 09h00 – 18h00",
    }),

    // ── Réseaux sociaux ───────────────────────────────────────
    defineField({
      name: "instagramUrl",
      title: "Instagram",
      type: "url",
      group: "social",
    }),
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "url",
      group: "social",
    }),
    defineField({
      name: "twitter",
      title: "Twitter / X",
      type: "url",
      group: "social",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
      group: "social",
    }),
    defineField({
      name: "youtube",
      title: "YouTube",
      type: "url",
      group: "social",
    }),

    // ── SEO ───────────────────────────────────────────────────
    defineField({
      name: "seo",
      title: "SEO Global",
      type: "object",
      group: "seo",
      fields: [
        defineField({ name: "metaTitle", title: "Meta Title par défaut",        type: "string" }),
        defineField({ name: "metaDesc",  title: "Meta Description par défaut",  type: "text", rows: 3 }),
        defineField({ name: "ogImage",   title: "Image de partage (OG Image)",  type: "image" }),
      ],
    }),

    // ── Marketing ─────────────────────────────────────────────
    defineField({
      name: "marketing",
      title: "Marketing & Analytics",
      type: "object",
      group: "marketing",
      fields: [
        defineField({ name: "pixelId",           title: "Meta Pixel ID",                    type: "string" }),
        defineField({ name: "googleAnalyticsId", title: "Google Analytics Measurement ID",  type: "string" }),
        defineField({ name: "headerCodes",       title: "Codes Header personnalisés",        type: "text", rows: 5,
          description: "Scripts à injecter dans le <head> (ex: Tag Manager, Pixel)" }),
      ],
    }),
  ],
});
