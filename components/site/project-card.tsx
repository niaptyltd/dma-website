import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { ProjectEntry } from "@/lib/site";

export function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card className="group h-full overflow-hidden p-0 transition duration-300 hover:-translate-y-1">
        <div className="relative h-56 overflow-hidden">
          <Image
            alt={project.gallery[0]?.alt ?? project.title}
            className="object-cover transition duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            src={project.heroImage}
          />
        </div>
        <div className="space-y-4 p-6">
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-muted">
            <span>{project.status}</span>
            <span>{project.category}</span>
          </div>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-ink">{project.title}</h3>
          <p className="text-sm leading-7 text-brand-muted">{project.summary}</p>
          <div className="flex items-center justify-between text-sm text-brand-muted">
            <span>{project.location}</span>
            <span className="text-brand-ink">View case study</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
