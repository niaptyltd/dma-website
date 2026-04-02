import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/site/page-hero";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "About",
  "Learn the story, purpose, and long-term vision behind Dumbe Music Awards.",
  "/about"
);

const pillars = [
  {
    title: "Recognition",
    description:
      "To honour artists whose work deserves to be seen, valued, and celebrated properly.",
  },
  {
    title: "Visibility",
    description:
      "To give local talent a stronger platform that opens doors to new audiences and opportunities.",
  },
  {
    title: "Community Pride",
    description:
      "To build an institution the region can proudly support as part of its cultural identity.",
  },
  {
    title: "Legacy",
    description:
      "To preserve the musical story of Dumbe while shaping a stronger future for the next generation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Dumbe Music Awards"
        title="A platform created to honour talent, inspire belief, and build cultural legacy."
        description="Dumbe Music Awards exists to recognise and elevate artists from Dumbe and surrounding communities while creating a platform rooted in pride, visibility, and long-term impact."
        actions={[
          { href: "/founder", label: "Meet the Founder" },
          { href: "/vision", label: "Explore the Vision" },
        ]}
      />

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Card className="space-y-5">
              <SectionHeading
                eyebrow="The Backstory"
                title="Why Dumbe Music Awards was created"
              />
              <p className="text-sm leading-7 text-brand-muted">
                In many communities, talented artists work for years without the
                recognition, structure, or platforms they deserve. Dumbe Music
                Awards was created to change that reality by building a credible
                space where local talent can be celebrated with dignity and
                seriousness.
              </p>
              <p className="text-sm leading-7 text-brand-muted">
                More than an annual event, the platform is designed to uplift
                artists, inspire young creatives, and strengthen belief in the
                creative potential of the region. It is about changing the way
                local talent is seen and valued.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="space-y-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                What It Represents
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-brand-ink">
                More than trophies. More than one night.
              </h2>
              <p className="text-sm leading-7 text-brand-muted">
                Dumbe Music Awards represents recognition, aspiration, cultural
                pride, and the belief that local artists deserve strong platforms
                that can grow with them over time.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-2">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Core Pillars"
              title="What the platform is built on"
            />
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((item) => (
              <Reveal key={item.title}>
                <Card className="space-y-4">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-brand-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-brand-muted">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="space-y-5">
              <SectionHeading
                eyebrow="Mission"
                title="To recognise and elevate local music talent with purpose and credibility."
              />
              <p className="text-sm leading-7 text-brand-muted">
                The mission of Dumbe Music Awards is to create a respected
                platform that celebrates artists, encourages excellence, and
                opens greater visibility for talent within Dumbe and beyond.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="space-y-5">
              <SectionHeading
                eyebrow="Vision"
                title="To grow into a recognised cultural institution with lasting impact."
              />
              <p className="text-sm leading-7 text-brand-muted">
                The vision is to build Dumbe Music Awards into a long-term
                platform that attracts artists, audiences, partners, and support
                while preserving and advancing the musical story of the region.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <Card className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div className="space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                  The Journey Ahead
                </p>
                <h2 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink">
                  Building a stronger future for local talent
                </h2>
                <p className="text-base text-brand-muted">
                  Dumbe Music Awards is growing with intention — not only to host
                  memorable ceremonies, but to become a trusted platform that
                  contributes to artistic growth, visibility, and long-term
                  cultural pride.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/ceremonies"
                  className="rounded-full bg-[#d4b06d] px-6 py-3 text-sm font-semibold text-black"
                >
                  Explore Ceremonies
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-brand-ink"
                >
                  Contact the Team
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}