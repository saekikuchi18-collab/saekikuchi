"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { ProjectGrid } from "@/components/project-grid";
import { CategoryFilter } from "@/components/category-filter";
import { Reveal } from "@/components/animations";
import { projects, type ProjectCategory } from "@/content/projects";
import { useI18n } from "@/lib/i18n";

export default function WorkPage() {
  const [filter, setFilter] = useState<ProjectCategory | null>(null);
  const filtered = filter ? projects.filter((p) => p.category === filter) : projects;
  const { t } = useI18n();

  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              {t.archive.heading}
            </p>
            <h1
              className="mt-4 font-heading"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              {t.archive.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <CategoryFilter active={filter} onChange={setFilter} />
            </div>
          </Reveal>
          <div className="mt-12">
            <ProjectGrid projects={filtered} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
