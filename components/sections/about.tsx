"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { getLocalizedSite } from "@/content/site-i18n";
import { Reveal } from "@/components/animations";
import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  const { locale, t } = useI18n();
  const site = getLocalizedSite(locale);
  const paragraphs = site.bio.split("\n\n");

  return (
    <section id="about" aria-label="About" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div className="space-y-6">
            <Reveal>
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/projects/profile-pic.jpeg"
                  alt={site.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                {t.about.heading}
              </p>
            </Reveal>
          </div>
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "var(--text-lg)" }}>
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <Separator className="my-8" />
              <p className="text-sm italic text-muted-foreground">
                {site.personalDetail}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
