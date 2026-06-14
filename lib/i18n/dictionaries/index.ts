import type { Locale } from "../config";
import type { Dictionary } from "./en";
import en from "./en";
import ja from "./ja";

const dictionaries: Record<Locale, Dictionary> = { en, ja };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
