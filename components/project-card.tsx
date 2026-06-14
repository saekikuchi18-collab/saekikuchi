"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/content/projects";
import { getLocalizedProject, getCategoryLabel } from "@/content/projects-i18n";
import { useI18n } from "@/lib/i18n";

export function ProjectCard({ project }: { project: Project }) {
  const { locale } = useI18n();
  const localized = getLocalizedProject(locale, project.id);
  const title = localized?.title ?? project.title;
  const summary = localized?.summary ?? project.summary;
  const category = getCategoryLabel(locale, project.category);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/work/${project.id}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
          <Image
            src={project.coverImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="font-heading text-lg leading-snug group-hover:text-primary transition-colors">
            <span className="relative">
              {title}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </span>
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {summary}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
