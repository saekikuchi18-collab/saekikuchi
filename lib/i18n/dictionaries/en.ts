import ui from "@/content/ui.json";

const en = {
  nav: {
    about: ui.nav_about,
    services: ui.nav_services,
    work: ui.nav_work,
    archive: ui.nav_archive,
    contact: ui.nav_contact,
  },
  hero: {
    seeWork: ui.hero_seeWork,
  },
  about: {
    heading: ui.about_heading,
  },
  services: {
    heading: ui.services_heading,
    subheading: ui.services_subheading,
  },
  work: {
    heading: ui.work_heading,
    subheading: ui.work_subheading,
    viewAll: ui.work_viewAll,
    viewAllProjects: ui.work_viewAllProjects,
  },
  archive: {
    heading: ui.archive_heading,
    title: ui.archive_title,
    all: ui.archive_all,
  },
  contact: {
    heading: ui.contact_heading,
    title: ui.contact_title,
    titleLine2: ui.contact_titleLine2,
  },
  project: {
    backToArchive: ui.project_backToArchive,
    viewCoverage: ui.project_viewCoverage,
    notFound: ui.project_notFound,
  },
  footer: {
    rights: ui.footer_rights,
  },
  language: {
    en: "English",
    ja: "日本語",
  },
};

export type Dictionary = typeof en;
export default en;
