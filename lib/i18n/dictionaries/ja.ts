import type { Dictionary } from "./en";

const ja: Dictionary = {
  nav: {
    about: "私について",
    services: "サービス",
    work: "実績",
    archive: "アーカイブ",
    contact: "お問い合わせ",
  },
  hero: {
    seeWork: "実績を見る",
  },
  about: {
    heading: "私について",
  },
  services: {
    heading: "サービス",
    subheading: "ブランドライフサイクルのあらゆる段階における戦略的コミュニケーション",
  },
  work: {
    heading: "厳選された実績",
    subheading: "最近のプロジェクト",
    viewAll: "すべて見る",
    viewAllProjects: "すべてのプロジェクトを見る",
  },
  archive: {
    heading: "アーカイブ",
    title: "全プロジェクト",
    all: "すべて",
  },
  contact: {
    heading: "お問い合わせ",
    title: "伝えるべきストーリーがありますか？",
    titleLine2: "一緒に届けましょう。",
  },
  project: {
    backToArchive: "アーカイブに戻る",
    viewCoverage: "掲載記事を見る",
    notFound: "プロジェクトが見つかりません。",
  },
  footer: {
    rights: "無断転載禁止",
  },
  language: {
    en: "English",
    ja: "日本語",
  },
} as const;

export default ja;
