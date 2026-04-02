"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { GalleryItem } from "@/src/types/site";
import { cn } from "@/utils/cn";

function aspectClass(orientation: GalleryItem["orientation"]) {
  if (orientation === "portrait") {
    return "aspect-[4/5]";
  }

  if (orientation === "landscape") {
    return "aspect-[16/10]";
  }

  return "aspect-square";
}

export function GalleryExperience({ items }: { items: GalleryItem[] }) {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCeremony, setSelectedCeremony] = useState("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const years = useMemo(
    () => ["all", ...new Set(items.map((item) => item.year).sort((a, b) => Number(b) - Number(a)))],
    [items]
  );

  const ceremonies = useMemo(() => {
    const uniqueCeremonies = Array.from(
      new Map(items.map((item) => [item.ceremonySlug, item.ceremonyTitle])).entries()
    ).map(([slug, title]) => ({ slug, title }));

    return [{ slug: "all", title: "All Ceremonies" }, ...uniqueCeremonies];
  }, [items]);

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        const matchesYear = selectedYear === "all" || item.year === selectedYear;
        const matchesCeremony = selectedCeremony === "all" || item.ceremonySlug === selectedCeremony;
        return matchesYear && matchesCeremony;
      }),
    [items, selectedCeremony, selectedYear]
  );

  const activeIndex = activeId ? filteredItems.findIndex((item) => item.id === activeId) : -1;
  const activeItem = activeIndex >= 0 ? filteredItems[activeIndex] : null;

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (!activeItem) {
        return;
      }

      if (event.key === "Escape") {
        setActiveId(null);
      }

      if (event.key === "ArrowRight" && filteredItems[activeIndex + 1]) {
        setActiveId(filteredItems[activeIndex + 1].id);
      }

      if (event.key === "ArrowLeft" && filteredItems[activeIndex - 1]) {
        setActiveId(filteredItems[activeIndex - 1].id);
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [activeIndex, activeItem, filteredItems]);

  return (
    <div className="space-y-8">
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="luxury-card space-y-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
            Filter By Year
          </p>
          <div className="flex flex-wrap gap-3">
            {years.map((year) => (
              <button
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  selectedYear === year
                    ? "border-[#d4b06d]/70 bg-white/[0.08] text-brand-ink"
                    : "border-white/10 bg-transparent text-brand-muted hover:border-white/20 hover:text-brand-ink"
                )}
                key={year}
                onClick={() => setSelectedYear(year)}
                type="button"
              >
                {year === "all" ? "All Years" : year}
              </button>
            ))}
          </div>
        </div>

        <div className="luxury-card space-y-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
            Filter By Ceremony
          </p>
          <div className="flex flex-wrap gap-3">
            {ceremonies.map((ceremony) => (
              <button
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  selectedCeremony === ceremony.slug
                    ? "border-[#d4b06d]/70 bg-white/[0.08] text-brand-ink"
                    : "border-white/10 bg-transparent text-brand-muted hover:border-white/20 hover:text-brand-ink"
                )}
                key={ceremony.slug}
                onClick={() => setSelectedCeremony(ceremony.slug)}
                type="button"
              >
                {ceremony.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
        {filteredItems.map((item) => (
          <button
            className="group mb-6 block w-full break-inside-avoid overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] text-left shadow-[0_30px_70px_-45px_rgba(0,0,0,0.95)] transition hover:-translate-y-1"
            key={item.id}
            onClick={() => setActiveId(item.id)}
            type="button"
          >
            <div className={cn("relative overflow-hidden", aspectClass(item.orientation))}>
              <Image
                alt={item.alt}
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                src={item.src}
              />
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
                  {item.year}
                </p>
                <p className="text-xs text-brand-muted">{item.ceremonyTitle}</p>
              </div>
              <p className="text-sm leading-7 text-brand-muted">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {!filteredItems.length ? (
        <div className="luxury-card text-center">
          <p className="text-lg text-brand-ink">No gallery items match this selection yet.</p>
          <p className="mt-3 text-sm text-brand-muted">
            Adjust the filters to view the full ceremony archive.
          </p>
        </div>
      ) : null}

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/82 px-4 py-6 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="luxury-card relative w-full max-w-5xl p-4 sm:p-5"
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[55vh] overflow-hidden rounded-[1.6rem] border border-white/10 sm:h-[68vh]">
                <Image
                  alt={activeItem.alt}
                  className="object-cover"
                  fill
                  sizes="90vw"
                  src={activeItem.src}
                />
              </div>

              <div className="flex flex-col gap-4 px-1 pb-1 pt-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-2">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
                    {activeItem.ceremonyTitle}
                  </p>
                  <p className="text-sm leading-7 text-brand-muted">{activeItem.caption}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-brand-ink transition hover:bg-white/[0.06]"
                    disabled={!filteredItems[activeIndex - 1]}
                    onClick={() => filteredItems[activeIndex - 1] && setActiveId(filteredItems[activeIndex - 1].id)}
                    type="button"
                  >
                    Previous
                  </button>
                  <button
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-brand-ink transition hover:bg-white/[0.06]"
                    disabled={!filteredItems[activeIndex + 1]}
                    onClick={() => filteredItems[activeIndex + 1] && setActiveId(filteredItems[activeIndex + 1].id)}
                    type="button"
                  >
                    Next
                  </button>
                  <button
                    className="rounded-full border border-[#d4b06d]/45 px-4 py-2 text-sm text-brand-ink transition hover:bg-white/[0.06]"
                    onClick={() => setActiveId(null)}
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
