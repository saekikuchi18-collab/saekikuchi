import type { Locale } from "@/lib/i18n";
import siteData from "./site.json";

type LocalizedSite = {
  name: string;
  tagline: string;
  positioning: string;
  bio: string;
  personalDetail: string;
  services: { title: string; description: string }[];
};

const siteContent: Record<Locale, LocalizedSite> = {
  en: {
    name: siteData.name,
    tagline: siteData.tagline,
    positioning: siteData.positioning,
    bio: siteData.bio,
    personalDetail: siteData.personalDetail,
    services: siteData.services.map((s) => ({ title: s.title, description: s.description })),
  },
  ja: {
    name: siteData.name_ja,
    tagline: siteData.tagline_ja,
    positioning: siteData.positioning_ja,
    bio: siteData.bio_ja,
    personalDetail: siteData.personalDetail_ja,
    services: siteData.services.map((s) => ({ title: s.title_ja, description: s.description_ja })),
  },
};

export function getLocalizedSite(locale: Locale) {
  return siteContent[locale];
}
