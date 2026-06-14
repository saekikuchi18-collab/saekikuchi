"use client";

import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Reveal } from "@/components/animations";
import { useI18n } from "@/lib/i18n";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
};

export function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" aria-label="Contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            {t.contact.heading}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="mt-4 font-heading leading-tight"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            {t.contact.title}
            <br />
            {t.contact.titleLine2}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-flex items-center gap-2 text-lg text-primary underline underline-offset-4 transition-colors hover:text-foreground"
          >
            {siteConfig.email}
            <ArrowUpRight size={18} />
          </a>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex gap-4">
            {Object.entries(siteConfig.socials).map(([name, url]) => {
              const Icon = socialIcons[name];
              return (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium capitalize transition-colors hover:bg-foreground hover:text-background"
                >
                  {Icon && <Icon size={18} />}
                  {name}
                  <ArrowUpRight size={14} />
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
