"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/content/projects";
import { ProjectGrid } from "@/components/project-grid";
import { Reveal } from "@/components/animations";
import { useI18n } from "@/lib/i18n";

export function WorkSection() {
  const { t } = useI18n();

  return (
    <section id="work" aria-label="Selected work" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                {t.work.heading}
              </p>
              <h2
                className="mt-4 font-heading"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                {t.work.subheading}
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              {t.work.viewAll}
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12">
          <ProjectGrid projects={featuredProjects} />
        </div>
        <Reveal className="mt-8 sm:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.work.viewAllProjects}
            <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
