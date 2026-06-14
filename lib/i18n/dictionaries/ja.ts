import type { Dictionary } from "./en";
import ui from "@/content/ui.json";

const ja: Dictionary = {
  nav: {
    about: ui.nav_about_ja,
    services: ui.nav_services_ja,
    work: ui.nav_work_ja,
    archive: ui.nav_archive_ja,
    contact: ui.nav_contact_ja,
  },
  hero: {
    seeWork: ui.hero_seeWork_ja,
  },
  about: {
    heading: ui.about_heading_ja,
  },
  services: {
    heading: ui.services_heading_ja,
    subheading: ui.services_subheading_ja,
  },
  work: {
    heading: ui.work_heading_ja,
    subheading: ui.work_subheading_ja,
    viewAll: ui.work_viewAll_ja,
    viewAllProjects: ui.work_viewAllProjects_ja,
  },
  archive: {
    heading: ui.archive_heading_ja,
    title: ui.archive_title_ja,
    all: ui.archive_all_ja,
  },
  contact: {
    heading: ui.contact_heading_ja,
    title: ui.contact_title_ja,
    titleLine2: ui.contact_titleLine2_ja,
  },
  project: {
    backToArchive: ui.project_backToArchive_ja,
    viewCoverage: ui.project_viewCoverage_ja,
    notFound: ui.project_notFound_ja,
  },
  footer: {
    rights: ui.footer_rights_ja,
  },
  language: {
    en: "English",
    ja: "日本語",
  },
} as const;

export default ja;
