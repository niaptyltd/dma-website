import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/site/page-hero";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Partners",
  "Discover partnership and sponsorship opportunities with Dumbe Music Awards.",
  "/partners"
);

const partnershipAreas = [
  {
    title: "Brand Visibility",
    description:
      "Position your brand alongside a growing cultural platform with strong local relevance and community connection.",
  },
  {
    title: "Youth & Community Impact",
    description:
      "Support an initiative that uplifts artists, inspires young creatives, and contributes to regional pride.",
  },
  {
    title: "Cultural Alignment",
    description:
      "Partner with a platform rooted in music, identity, talent recognition, and long-term cultural development.",
  },
  {
    title: "Shared Growth",
    description:
      "Build meaningful collaborations that create value for both the Dumbe Music Awards platform and its partners.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners & Sponsors"
        title="Partner with a platform built for visibility, impact, and cultural relevance."
        description="Dumbe Music Awards offers meaningful opportunities for brands, organisations, and institutions to align with talent, culture, and community pride through strategic partnership."
        actions={[
          { href: "/contact", label: "Become a Partner" },
          { href: "/about", label: "Learn More" },
        ]}
      />

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Card className="space-y-5">
              <SectionHeading
                eyebrow="Why Partner"
                title="A platform with cultural value and growing relevance."
              />
              <p className="text-sm leading-7 text-brand-muted">
                Dumbe Music Awards is more than an event. It is a growing platform
                that celebrates talent, creates visibility, and strengthens belief
                in the creative potential of the region. This creates meaningful
                opportunities for partners who want to align with impact,
                aspiration, and local cultural relevance.
              </p>
              <p className="text-sm leading-7 text-brand-muted">
                Through partnership, brands and organisations can become part of a
                story that honours artists while building a stronger future for
                the creative community.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="space-y-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                Partnership Value
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-brand-ink">
                Visibility with purpose
              </h2>
              <p className="text-sm leading-7 text-brand-muted">
                Partnering with Dumbe Music Awards gives your organisation a
                chance to align with culture, youth, community pride, and the
                long-term development of local talent.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-2">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Partnership Areas"
              title="What partners can align with"
            />
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {partnershipAreas.map((item) => (
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
        <div className="container-shell">
          <Reveal>
            <Card className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div className="space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                  Let’s Collaborate
                </p>
                <h2 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink">
                  Strong platforms grow through aligned support.
                </h2>
                <p className="text-base text-brand-muted">
                  Dumbe Music Awards welcomes conversations with sponsors,
                  strategic partners, institutions, and brands that want to be
                  part of something meaningful and culturally significant.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#d4b06d] px-6 py-3 text-sm font-semibold text-black"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/vision"
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-brand-ink"
                >
                  Explore the Vision
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}