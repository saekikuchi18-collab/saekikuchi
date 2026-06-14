import type { Locale } from "@/lib/i18n";
import type { ProjectCategory } from "./projects";
import projectsJson from "./projects.json";

type LocalizedProject = {
  title: string;
  summary: string;
  description: string;
  results: string[];
};

const projectContent: Record<Locale, Record<string, LocalizedProject>> = {
  en: Object.fromEntries(
    projectsJson.map((p) => [
      p.id,
      { title: p.title, summary: p.summary, description: p.description, results: p.results },
    ])
  ),
  ja: Object.fromEntries(
    projectsJson.map((p) => [
      p.id,
      {
        title: p.title_ja,
        summary: p.summary_ja,
        description: p.description_ja,
        results: p.results_ja,
      },
    ])
  ),
};

export const categoryLabels: Record<Locale, Record<ProjectCategory, string>> = {
  en: {
    "Brand Launch": "Brand Launch",
    "Crisis Comms": "Crisis Comms",
    Campaign: "Campaign",
    Event: "Event",
    "Media Relations": "Media Relations",
  },
  ja: {
    "Brand Launch": "ブランドローンチ",
    "Crisis Comms": "クライシスコミュニケーション",
    Campaign: "キャンペーン",
    Event: "イベント",
    "Media Relations": "メディアリレーションズ",
  },
};

export function getLocalizedProject(locale: Locale, id: string) {
  return projectContent[locale]?.[id];
}

export function getCategoryLabel(locale: Locale, category: ProjectCategory) {
  return categoryLabels[locale][category];
}
