import { blockContent } from "./helpers/blockContent";
import { videoEmbed } from "./helpers/videoEmbed";
import { homePage } from "./singletons/homepage";
import { aboutPage } from "./singletons/aboutPage";
import { siteSettings } from "./singletons/siteSettings";
import { specialtiesPage } from "./singletons/specialtiesPage";
import { specialty } from "./collections/specialty";
import { post } from "./collections/post";
import { legalPage } from "./collections/legalPage";

export const schemaTypes = [
  blockContent,
  videoEmbed,
  homePage,
  aboutPage,
  specialtiesPage,
  siteSettings,
  specialty,
  post,
  legalPage,
];
