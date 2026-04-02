import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <div className="space-y-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                Dumbe Music Awards
              </p>
              <h1 className="font-heading text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-brand-ink sm:text-6xl lg:text-7xl">
                Honouring local sound. Building cultural legacy.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
                Dumbe Music Awards is a premium platform dedicated to recognising,
                celebrating, and elevating artists from Dumbe and surrounding
                communities.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/ceremonies"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] px-6 text-sm font-semibold text-[#17120b] transition hover:brightness-105"
                >
                  Explore Ceremonies
                </Link>
                <Link
                  href="/founder"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 text-sm font-semibold text-brand-ink transition hover:bg-white/[0.08]"
                >
                  Meet the Founder
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="space-y-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                The Purpose
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-brand-ink">
                More than an awards event
              </h2>
              <p className="text-sm leading-7 text-brand-muted">
                This platform exists to give artists recognition, visibility,
                pride, and a stronger sense of possibility. It is being built
                with long-term cultural impact in mind.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-2">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Artist Recognition",
              description:
                "Celebrating artists whose work deserves visibility and respect.",
            },
            {
              title: "Community Pride",
              description:
                "Building a platform the region can proudly believe in and support.",
            },
            {
              title: "Cultural Legacy",
              description:
                "Preserving and growing the story of local music over time.",
            },
            {
              title: "Future Opportunity",
              description:
                "Creating a stronger path for talent, partnerships, and growth.",
            },
          ].map((item) => (
            <Card className="space-y-3" key={item.title}>
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-brand-ink">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-brand-muted">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <Card className="space-y-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
              Previous Ceremonies
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-brand-ink">
              Celebrating the journey so far
            </h2>
            <p className="text-sm leading-7 text-brand-muted">
              Explore the story of previous Dumbe Music Awards ceremonies,
              relive milestones, and see how the platform has grown.
            </p>
            <Link
              href="/ceremonies"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 text-sm font-semibold text-brand-ink transition hover:bg-white/[0.08]"
            >
              View Ceremonies
            </Link>
          </Card>

          <Card className="space-y-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
              The Vision Ahead
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-brand-ink">
              A platform built for long-term impact
            </h2>
            <p className="text-sm leading-7 text-brand-muted">
              Dumbe Music Awards is growing into a credible cultural institution
              that can attract artists, audiences, sponsors, and media attention.
            </p>
            <Link
              href="/vision"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] px-6 text-sm font-semibold text-[#17120b] transition hover:brightness-105"
            >
              Explore the Vision
            </Link>
          </Card>
        </div>
      </section>
    </>
  );
}