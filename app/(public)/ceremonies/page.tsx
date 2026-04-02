import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/site/page-hero";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Ceremonies",
  "Explore previous and upcoming Dumbe Music Awards ceremonies.",
  "/ceremonies"
);

const ceremonies = [
  {
    slug: "2026",
    year: "2026",
    status: "Upcoming",
    title: "Dumbe Music Awards 2026",
    date: "02 August 2026",
    venue: "To Be Confirmed",
    description:
      "The upcoming ceremony continues the platform’s journey of recognising artists, strengthening visibility, and building a stronger cultural legacy.",
  },
  {
    slug: "2024",
    year: "2024",
    status: "Previous",
    title: "Dumbe Music Awards 2024",
    date: "Past Ceremony",
    venue: "Dumbe Region",
    description:
      "A milestone edition that reinforced the platform’s purpose of celebrating artists and building momentum for the future.",
  },
  {
    slug: "2023-2026",
    year: "Legacy",
    status: "Archive",
    title: "Ceremony Archive",
    date: "Previous Editions",
    venue: "Various",
    description:
      "A broader look into the journey, development, and moments that have shaped Dumbe Music Awards over time.",
  },
];

export default function CeremoniesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ceremonies"
        title="Honouring the journey, celebrating the moments, building the legacy."
        description="Explore the ceremonies that have shaped Dumbe Music Awards and discover what lies ahead for the platform."
        actions={[
          { href: "/gallery", label: "View Gallery" },
          { href: "/contact", label: "Contact the Team" },
        ]}
      />

      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Awards Journey"
              title="Past and upcoming ceremonies"
            />
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {ceremonies.map((ceremony) => (
              <Reveal key={ceremony.slug}>
                <Card className="flex h-full flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                        {ceremony.status}
                      </p>
                      <span className="rounded-full border border-white/12 px-3 py-1 text-xs text-brand-muted">
                        {ceremony.year}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl font-semibold tracking-[-0.04em] text-brand-ink">
                      {ceremony.title}
                    </h2>

                    <div className="space-y-2 text-sm text-brand-muted">
                      <p>
                        <span className="font-semibold text-brand-ink">Date:</span>{" "}
                        {ceremony.date}
                      </p>
                      <p>
                        <span className="font-semibold text-brand-ink">Venue:</span>{" "}
                        {ceremony.venue}
                      </p>
                    </div>

                    <p className="text-sm leading-7 text-brand-muted">
                      {ceremony.description}
                    </p>
                  </div>

                  <Link
                    href={`/ceremonies/${ceremony.slug}`}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 text-sm font-semibold text-brand-ink transition hover:bg-white/[0.08]"
                  >
                    View Details
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <Card className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div className="space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                  Looking Ahead
                </p>
                <h2 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink">
                  Every ceremony adds to the legacy.
                </h2>
                <p className="text-base text-brand-muted">
                  Dumbe Music Awards continues to grow through every edition,
                  carrying forward the purpose of recognising artists and building
                  a stronger cultural platform for the future.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/vision"
                  className="rounded-full bg-[#d4b06d] px-6 py-3 text-sm font-semibold text-black"
                >
                  Explore the Vision
                </Link>
                <Link
                  href="/gallery"
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-brand-ink"
                >
                  View the Gallery
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
