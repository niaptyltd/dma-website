import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/site/page-hero";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { founderProfile } from "@/src/data/founder";

export const metadata = buildMetadata(
  "Founder",
  "Meet Bhekithmba Ngubane, the founder behind Dumbe Music Awards and the vision driving its cultural legacy.",
  "/founder"
);

export default function FounderPage() {
  return (
    <>
      <PageHero
        actions={[
          { href: "/vision", label: "See The Vision" },
          { href: "/contact", label: "Get In Touch" },
        ]}
        description={founderProfile.intro}
        eyebrow="Founder"
        imageAlt={founderProfile.name}
        imageSrc={founderProfile.portrait}
        title={founderProfile.heroTitle}
      />

      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <Card className="space-y-6">
              <SectionHeading
                eyebrow="Founder Story"
                title="Building an institution, not just hosting an event."
              />

              {founderProfile.story.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-semibold text-brand-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-2">
        <div className="container-shell">
          <Reveal>
            <Card className="space-y-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
                Leadership Statement
              </p>
              <blockquote className="font-heading text-3xl italic leading-[1.15] tracking-[-0.04em] text-brand-ink">
                "{founderProfile.quote}"
              </blockquote>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="space-y-5">
              <SectionHeading
                eyebrow="Why He Started It"
                title="Recognition, dignity, and opportunity."
              />

              <div className="grid gap-4">
                {founderProfile.motivations.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4"
                  >
                    <h3 className="text-sm font-semibold text-brand-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="space-y-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
                Leadership Focus
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {founderProfile.focusAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <h3 className="text-lg font-semibold text-brand-ink">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <Card className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div className="space-y-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
                  A Movement, Not A Moment
                </p>

                <h2 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink">
                  This is bigger than an event.
                </h2>

                <p className="text-base text-brand-muted">
                  Dumbe Music Awards is being built as a long-term platform that
                  elevates artists, builds culture, and creates opportunity.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/vision"
                  className="rounded-full bg-[#d4b06d] px-6 py-3 text-sm font-semibold text-black"
                >
                  Explore The Vision
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-brand-ink"
                >
                  Contact The Team
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}