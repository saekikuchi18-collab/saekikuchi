import { z } from "zod/v4";
import projectsJson from "./projects.json";

export const projectCategories = [
  "Brand Launch",
  "Crisis Comms",
  "Campaign",
  "Event",
  "Media Relations",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  client: z.string(),
  category: z.enum(projectCategories),
  year: z.number().min(2000).max(2030),
  featured: z.boolean(),
  coverImage: z.string(),
  summary: z.string(),
  description: z.string(),
  results: z.array(z.string()),
  tags: z.array(z.string()),
  link: z.string().url().optional(),
});

export type Project = z.infer<typeof ProjectSchema>;

const projectsData: Project[] = projectsJson.map((p) => ({
  id: p.id,
  title: p.title,
  client: p.client,
  category: p.category as ProjectCategory,
  year: p.year,
  featured: p.featured,
  coverImage: p.coverImage,
  summary: p.summary,
  description: p.description,
  results: p.results,
  tags: p.tags,
}));

export const projects: Project[] = projectsData.map((p, i) => {
  const result = ProjectSchema.safeParse(p);
  if (!result.success) {
    throw new Error(
      `❌ Project #${i + 1} ("${p.id}") has errors:\n${result.error.issues.map((e) => `   • ${e.path.join(".")}: ${e.message}`).join("\n")}\n\nPlease fix the project data in /content/projects.json`
    );
  }
  return result.data;
});

export const featuredProjects = projects.filter((p) => p.featured);
