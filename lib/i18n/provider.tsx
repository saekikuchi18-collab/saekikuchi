"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Locale } from "./config";
import { defaultLocale, detectLocale } from "./config";
import { getDictionary } from "./dictionaries";
import type { Dictionary } from "./dictionaries/en";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue>({
  locale: defaultLocale,
  setLocale: () => {},
  t: getDictionary(defaultLocale),
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(detectLocale());
    setMounted(true);
    document.documentElement.setAttribute("data-framer-hydrated", "");
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    document.documentElement.lang = l;
  }, []);

  useEffect(() => {
    if (mounted) document.documentElement.lang = locale;
  }, [locale, mounted]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: getDictionary(locale) }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
