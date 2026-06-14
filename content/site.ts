import siteData from "./site.json";

export const siteConfig = {
  name: siteData.name,
  tagline: siteData.tagline,
  positioning: siteData.positioning,
  bio: siteData.bio,
  personalDetail: siteData.personalDetail,
  email: siteData.email,
  socials: {
    linkedin: siteData.linkedin,
    instagram: siteData.instagram,
  },
  services: siteData.services.map((s) => ({
    title: s.title,
    description: s.description,
  })),
} as const;

export type SiteConfig = typeof siteConfig;
