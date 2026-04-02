"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { ProjectEntry } from "@/lib/site";
import { cn } from "@/utils/cn";

export function ProjectFilterGrid({
  categories,
  projects
}: {
  categories: string[];
  projects: ProjectEntry[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              activeCategory === category
                ? "border-black bg-black text-white"
                : "border-black/10 bg-white text-brand-ink hover:border-black/30"
            )}
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <Card className="text-center">
          <p className="text-sm text-brand-muted">
            No projects match this category yet. Try another filter.
          </p>
        </Card>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug}>
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
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-ink">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-7 text-brand-muted">{project.summary}</p>
                  <div className="flex items-center justify-between text-sm text-brand-muted">
                    <span>{project.location}</span>
                    <span className="text-brand-ink">View case study</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
