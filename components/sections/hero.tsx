"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { getLocalizedSite } from "@/content/site-i18n";

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const reduced = useReducedMotion();
  const { locale, t } = useI18n();
  const site = getLocalizedSite(locale);
  const words = site.tagline.split(" ");

  return (
    <section id="hero" aria-label="Introduction" className="relative flex min-h-[80vh] flex-col justify-center py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease }}
            className="text-sm uppercase tracking-widest text-muted-foreground"
          >
            {site.name}
          </motion.p>

          <h1
            className="mt-6 font-heading leading-[0.95]"
            style={{ fontSize: "var(--text-hero)" }}
          >
            {words.map((word, i) => (
              <motion.span
                key={`${locale}-${i}`}
                className="inline-block"
                initial={{ opacity: 0, y: reduced ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease }}
              >
                {word}{i < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="mt-8 max-w-xl text-lg text-muted-foreground"
            style={{ fontSize: "var(--text-lg)" }}
          >
            {site.positioning}
          </motion.p>

          <motion.a
            href="#work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1, ease }}
            className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.hero.seeWork}
            <ArrowDown size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
