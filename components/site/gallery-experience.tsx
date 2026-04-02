"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import type { GalleryItem } from "@/src/types/site";
import { cn } from "@/utils/cn";

function aspectClass(orientation?: GalleryItem["orientation"]) {
  if (orientation === "portrait") return "aspect-[4/5]";
  if (orientation === "square") return "aspect-square";
  return "aspect-[16/11]";
}

export function GalleryExperience({ items }: { items: GalleryItem[] }) {
  const [selectedCeremony, setSelectedCeremony] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const ceremonies = useMemo(() => {
    const map = new Map<string, string>();

    items.forEach((item) => {
      if (item.ceremonySlug) {
        map.set(item.ceremonySlug, item.ceremonyTitle ?? item.ceremonySlug);
      }
    });

    return [{ slug: "all", title: "All Ceremonies" }, ...Array.from(map.entries()).map(([slug, title]) => ({ slug, title }))];
  }, [items]);

  const years = useMemo(() => {
    const uniqueYears = Array.from(
      new Set(items.map((item) => item.year).filter((year): year is string => Boolean(year)))
    );

    return ["all", ...uniqueYears];
  }, [items]);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(items.map((item) => item.category).filter((category): category is string => Boolean(category)))
    );

    return ["all", ...uniqueCategories];
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCeremony =
        selectedCeremony === "all" || item.ceremonySlug === selectedCeremony;

      const matchesYear =
        selectedYear === "all" || item.year === selectedYear;

      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      return matchesCeremony && matchesYear && matchesCategory;
    });
  }, [items, selectedCeremony, selectedYear, selectedCategory]);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
            Ceremony
          </p>
          <div className="flex flex-wrap gap-3">
            {ceremonies.map((item) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => setSelectedCeremony(item.slug)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  selectedCeremony === item.slug
                    ? "border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] text-[#17120b]"
                    : "border-white/12 bg-white/[0.03] text-brand-ink hover:bg-white/[0.08]"
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
            Year
          </p>
          <div className="flex flex-wrap gap-3">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  selectedYear === year
                    ? "border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] text-[#17120b]"
                    : "border-white/12 bg-white/[0.03] text-brand-ink hover:bg-white/[0.08]"
                )}
              >
                {year === "all" ? "All Years" : year}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
            Category
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  selectedCategory === category
                    ? "border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] text-[#17120b]"
                    : "border-white/12 bg-white/[0.03] text-brand-ink hover:bg-white/[0.08]"
                )}
              >
                {category === "all" ? "All Categories" : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
          >
            <div className={cn("relative", aspectClass(item.orientation))}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            <div className="space-y-3 p-5">
              {item.title ? (
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-brand-ink">
                  {item.title}
                </h3>
              ) : null}

              <p className="text-sm leading-7 text-brand-muted">
                {item.caption}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.year ? (
                  <span className="rounded-full border border-white/12 px-3 py-1 text-xs text-brand-muted">
                    {item.year}
                  </span>
                ) : null}

                {item.category ? (
                  <span className="rounded-full border border-white/12 px-3 py-1 text-xs text-brand-muted">
                    {item.category}
                  </span>
                ) : null}

                {item.ceremonyTitle ? (
                  <span className="rounded-full border border-white/12 px-3 py-1 text-xs text-brand-muted">
                    {item.ceremonyTitle}
                  </span>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      {!filteredItems.length ? (
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 text-center">
          <p className="text-sm leading-7 text-brand-muted">
            No gallery items match the selected filters yet.
          </p>
        </div>
      ) : null}
    </div>
  );
}