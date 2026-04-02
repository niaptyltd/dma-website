import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import type { ActionLink, StatItem } from "@/src/types/site";
import { cn } from "@/utils/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  stats,
  imageSrc,
  imageAlt,
  panel,
  className
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ActionLink[];
  stats?: StatItem[];
  imageSrc?: string;
  imageAlt?: string;
  panel?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-28 sm:pt-32", className)}>
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(212,176,109,0.24),_transparent_58%)]" />
      <div className="container-shell relative">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal className="space-y-7">
            <div className="inline-flex rounded-full border border-[#d4b06d]/30 bg-white/[0.03] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
              {eyebrow}
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl font-heading text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-brand-ink sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-brand-muted sm:text-lg">
                {description}
              </p>
            </div>

            {actions?.length ? (
              <div className="flex flex-col gap-3 sm:flex-row">
                {actions.map((action, index) => (
                  <Link
                    className={
                      index === 0
                        ? "inline-flex min-h-12 items-center justify-center rounded-full border border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] px-6 text-sm font-semibold text-[#17120b] transition hover:brightness-105"
                        : "inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 text-sm font-semibold text-brand-ink transition hover:bg-white/[0.08]"
                    }
                    href={action.href}
                    key={action.href}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            ) : null}

            {stats?.length ? (
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div className="luxury-card px-5 py-4" key={`${stat.label}-${stat.value}`}>
                    <p className="text-2xl font-semibold tracking-[-0.04em] text-brand-ink">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-brand-ink">{stat.label}</p>
                    {stat.description ? (
                      <p className="mt-2 text-xs leading-6 text-brand-muted">
                        {stat.description}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </Reveal>

          <Reveal delay={0.1}>
            {panel ? (
              panel
            ) : imageSrc ? (
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(212,176,109,0.18),rgba(12,10,8,0.96)_55%)] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.95)]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(212,176,109,0.08),rgba(0,0,0,0.18))]" />
                <div className="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] p-6 sm:p-8">
                  <div className="relative h-full w-full">
                    <Image
                      alt={imageAlt ?? title}
                      className="object-contain object-bottom"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      src={imageSrc}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="luxury-card flex min-h-[22rem] items-end overflow-hidden p-8">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
                    Dumbe Music Awards
                  </p>
                  <p className="max-w-md text-lg leading-8 text-brand-muted">
                    A platform shaped for artists, partners, media, and a region that deserves to honour its own excellence well.
                  </p>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}