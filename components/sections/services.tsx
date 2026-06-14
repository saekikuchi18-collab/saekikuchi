"use client";

import { useI18n } from "@/lib/i18n";
import { getLocalizedSite } from "@/content/site-i18n";
import { Reveal } from "@/components/animations";

export function ServicesSection() {
  const { locale, t } = useI18n();
  const site = getLocalizedSite(locale);

  return (
    <section id="services" aria-label="Services" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            {t.services.heading}
          </p>
          <h2
            className="mt-4 max-w-lg font-heading"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            {t.services.subheading}
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-20">
          {site.services.map((service, i) => (
            <Reveal
              key={i}
              delay={i * 0.1}
              className={i % 2 === 1 ? "md:mt-24" : ""}
            >
              <div className="border-l-2 border-primary/30 pl-6">
                <span className="text-xs text-muted-foreground tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-xl">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
