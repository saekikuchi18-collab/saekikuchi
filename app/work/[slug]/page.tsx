import { projects } from "@/content/projects";
import { ProjectDetail } from "./project-detail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  return <ProjectDetail project={project ?? null} />;
}
