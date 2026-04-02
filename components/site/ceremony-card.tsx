import Image from "next/image";
import Link from "next/link";

import type { Ceremony } from "@/src/types/site";

export function CeremonyCard({
  ceremony,
  featured = false
}: {
  ceremony: Ceremony;
  featured?: boolean;
}) {
  return (
    <article className="group luxury-card overflow-hidden p-0">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          alt={ceremony.title}
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={ceremony.heroImage}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0)_0%,rgba(7,7,7,0.82)_100%)]" />
        <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/12 bg-black/45 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#f1d39d] backdrop-blur">
          {ceremony.status === "upcoming" ? "Upcoming" : "Completed"}
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/65">
              {ceremony.theme}
            </p>
            <h3 className={featured ? "mt-2 text-3xl font-semibold tracking-[-0.04em] text-white" : "mt-2 text-2xl font-semibold tracking-[-0.04em] text-white"}>
              {ceremony.title}
            </h3>
          </div>
          <p className="hidden text-4xl font-heading tracking-[-0.06em] text-white/60 sm:block">
            {ceremony.year}
          </p>
        </div>
      </div>

      <div className="space-y-6 p-6 sm:p-7">
        <p className="text-sm leading-7 text-brand-muted">{ceremony.teaser}</p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
              Date
            </p>
            <p className="mt-2 text-sm text-brand-ink">
              {new Intl.DateTimeFormat("en-ZA", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              }).format(new Date(ceremony.date))}
            </p>
          </div>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
              Venue
            </p>
            <p className="mt-2 text-sm text-brand-ink">{ceremony.venue}</p>
          </div>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
              Theme
            </p>
            <p className="mt-2 text-sm text-brand-ink">{ceremony.theme}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-brand-muted">{ceremony.shortDescription}</p>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-5 text-sm font-semibold text-brand-ink transition hover:bg-white/[0.09]"
            href={`/ceremonies/${ceremony.slug}`}
          >
            View Ceremony
          </Link>
        </div>
      </div>
    </article>
  );
}
