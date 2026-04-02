import Link from "next/link";

export function CtaBand({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section-space pt-8">
      <div className="container-shell">
        <div className="dark-panel grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.5fr_auto] lg:items-center lg:px-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
              Start the conversation
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{title}</h2>
            <p className="max-w-2xl text-base leading-7 text-white/70">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-brand-ink transition hover:bg-brand-paper"
              href={primaryHref}
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                href={secondaryHref}
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
