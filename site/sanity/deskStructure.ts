import type { StructureBuilder } from "sanity/structure";
import { HomeIcon, UserIcon, CaseIcon, CogIcon, DocumentsIcon, DocumentIcon, ProjectsIcon } from "@sanity/icons";

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Cabinet Dr Benzakour")
    .items([
      S.listItem()
        .title("Page d'accueil")
        .icon(HomeIcon)
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("Page À Propos")
        .icon(UserIcon)
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.divider(),
      S.listItem()
        .title("Spécialités")
        .icon(CaseIcon)
        .child(
          S.list()
            .title("Gestion des Spécialités")
            .items([
              S.listItem()
                .title("Configuration Page")
                .icon(CogIcon)
                .child(S.document().schemaType("specialtiesPage").documentId("specialtiesPage")),
              S.listItem()
                .title("Liste des Spécialités")
                .icon(ProjectsIcon)
                .child(
                  S.documentTypeList("specialty")
                    .title("Toutes les spécialités")
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                ),
            ])
        ),
      S.listItem()
        .title("Actualités")
        .icon(DocumentsIcon)
        .schemaType("post")
        .child(S.documentTypeList("post").title("Actualités")),
      S.listItem()
        .title("Pages Légales")
        .icon(DocumentIcon)
        .schemaType("legalPage")
        .child(S.documentTypeList("legalPage").title("Pages Légales")),
      S.divider(),
      S.listItem()
        .title("Paramètres du site")
        .icon(CogIcon)
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
    ]);
