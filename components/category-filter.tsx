"use client";

import { Button } from "@/components/ui/button";
import { projectCategories, type ProjectCategory } from "@/content/projects";
import { getCategoryLabel } from "@/content/projects-i18n";
import { useI18n } from "@/lib/i18n";

export function CategoryFilter({
  active,
  onChange,
}: {
  active: ProjectCategory | null;
  onChange: (cat: ProjectCategory | null) => void;
}) {
  const { locale, t } = useI18n();

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      <Button
        variant={active === null ? "default" : "outline"}
        size="sm"
        onClick={() => onChange(null)}
        className="rounded-full"
      >
        {t.archive.all}
      </Button>
      {projectCategories.map((cat) => (
        <Button
          key={cat}
          variant={active === cat ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(cat)}
          className="rounded-full"
        >
          {getCategoryLabel(locale, cat)}
        </Button>
      ))}
    </div>
  );
}
