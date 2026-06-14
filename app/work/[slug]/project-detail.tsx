"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { getLocalizedProject, getCategoryLabel } from "@/content/projects-i18n";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { MarkdownContent } from "@/components/markdown-content";
import { ResultsCallout } from "@/components/results-callout";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import { useI18n } from "@/lib/i18n";

export function ProjectDetail({ project }: { project: Project | null }) {
  const { locale, t } = useI18n();

  if (!project) {
    return (
      <>
        <SiteHeader />
        <main className="flex min-h-[60vh] items-center justify-center pt-32">
          <p>{t.project.notFound}</p>
        </main>
        <Footer />
      </>
    );
  }

  const localized = getLocalizedProject(locale, project.id);
  const title = localized?.title ?? project.title;
  const description = localized?.description ?? project.description;
  const results = localized?.results ?? project.results;
  const category = getCategoryLabel(locale, project.category);

  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <article className="mx-auto max-w-4xl px-6">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft size={14} />
              {t.project.backToArchive}
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <header className="mt-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <Badge variant="secondary">{category}</Badge>
              </div>
              <h1
                className="mt-4 font-heading"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                {title}
              </h1>
            </header>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl bg-muted">
              <Image
                src={project.coverImage}
                alt={title}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12">
              <MarkdownContent content={description} />
            </div>
          </Reveal>

          {results.length > 0 && (
            <Reveal delay={0.4}>
              <div className="mt-12">
                <ResultsCallout results={results} />
              </div>
            </Reveal>
          )}

          {project.link && (
            <Reveal delay={0.5}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-primary underline underline-offset-4 hover:text-foreground"
              >
                {t.project.viewCoverage}
                <ArrowUpRight size={16} />
              </a>
            </Reveal>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
