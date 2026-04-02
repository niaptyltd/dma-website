import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/site/page-hero";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Vision",
  "Explore the long-term vision behind Dumbe Music Awards and its future cultural impact.",
  "/vision"
);

const visionPoints = [
  {
    title: "A Recognised Cultural Institution",
    description:
      "To grow Dumbe Music Awards into a respected platform known for celebrating talent with credibility, consistency, and purpose.",
  },
  {
    title: "A Stronger Platform for Artists",
    description:
      "To create greater visibility and opportunity for artists from Dumbe and surrounding communities through recognition and exposure.",
  },
  {
    title: "Regional Cultural Pride",
    description:
      "To strengthen pride in local music and build a platform the community can see as part of its identity.",
  },
  {
    title: "Long-Term Opportunity",
    description:
      "To attract aligned partners, audiences, and support that can help the platform grow sustainably over time.",
  },
];

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="The Vision"
        title="Building more than an event. Building a lasting platform."
        description="The long-term vision of Dumbe Music Awards is to become a respected institution that celebrates artists properly, builds belief in local talent, and contributes to a stronger creative future for the region."
        actions={[
          { href: "/about", label: "About the Awards" },
          { href: "/contact", label: "Contact the Team" },
        ]}
      />

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Card className="space-y-5">
              <SectionHeading
                eyebrow="Long-Term Direction"
                title="A platform designed for continuity, growth, and credibility."
              />
              <p className="text-sm leading-7 text-brand-muted">
                Dumbe Music Awards is being built with the intention to outgrow
                the limits of a once-off event. The vision is to establish a
                platform that can keep recognising artists, attract aligned
                support, and contribute meaningfully to the region’s cultural
                story year after year.
              </p>
              <p className="text-sm leading-7 text-brand-muted">
                This means creating something that not only celebrates talent,
                but also strengthens belief, opens doors, and gives artists a
                stronger sense of possibility through visibility and recognition.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="space-y-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                Why It Matters
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-brand-ink">
                When communities believe in their own talent, everything changes.
              </h2>
              <p className="text-sm leading-7 text-brand-muted">
                A stronger platform for music creates confidence for artists,
                pride for communities, and a more compelling story for partners,
                sponsors, and audiences who want to align with meaningful impact.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-2">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Vision Priorities"
              title="What the future is being built around"
            />
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {visionPoints.map((item) => (
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
                eyebrow="For Artists"
                title="A stronger sense of visibility and belief"
              />
              <p className="text-sm leading-7 text-brand-muted">
                The vision includes creating a platform where artists feel seen,
                respected, and inspired to grow their craft with greater
                confidence because their talent has a place to be recognised.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="space-y-5">
              <SectionHeading
                eyebrow="For Partners"
                title="A meaningful platform worth aligning with"
              />
              <p className="text-sm leading-7 text-brand-muted">
                As the platform grows, it creates opportunities for partners and
                sponsors to align with culture, youth, community pride, and
                long-term impact in a credible and visible way.
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
                  The Future
                </p>
                <h2 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink">
                  Dumbe Music Awards is being built to last.
                </h2>
                <p className="text-base text-brand-muted">
                  The goal is to create a platform that artists can aspire to,
                  communities can proudly support, and partners can confidently
                  invest in as part of a broader cultural future.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/founder"
                  className="rounded-full bg-[#d4b06d] px-6 py-3 text-sm font-semibold text-black"
                >
                  Meet the Founder
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