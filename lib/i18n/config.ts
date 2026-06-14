export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function detectLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = localStorage.getItem("locale") as Locale | null;
  if (stored && locales.includes(stored)) return stored;
  const browser = navigator.language.split("-")[0];
  return locales.includes(browser as Locale) ? (browser as Locale) : defaultLocale;
}
