import { blockContent } from "./helpers/blockContent";
import { homePage } from "./singletons/homepage";
import { aboutPage } from "./singletons/aboutPage";
import { siteSettings } from "./singletons/siteSettings";
import { specialtiesPage } from "./singletons/specialtiesPage";
import { specialty } from "./collections/specialty";
import { post } from "./collections/post";
import { legalPage } from "./collections/legalPage";

export const schemaTypes = [
  blockContent,
  homePage,
  aboutPage,
  specialtiesPage,
  siteSettings,
  specialty,
  post,
  legalPage,
];
