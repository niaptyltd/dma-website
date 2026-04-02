import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/site/page-hero";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Media",
  "Media updates, announcements, and press direction for Dumbe Music Awards.",
  "/media"
);

const mediaItems = [
  {
    title: "Announcements",
    description:
      "A space for official Dumbe Music Awards updates, ceremony news, and milestone announcements.",
  },
  {
    title: "Press & Publicity",
    description:
      "A dedicated place for media-related communication, interviews, and publicity opportunities.",
  },
  {
    title: "Artist News",
    description:
      "Future artist-related updates, highlights, and important platform communication will live here.",
  },
  {
    title: "Campaign Rollouts",
    description:
      "Nomination launches, submission updates, promotional campaigns, and key rollout moments can be featured here.",
  },
];

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="A space for updates, announcements, and public-facing communication."
        description="The media section of Dumbe Music Awards is designed to support official announcements, press-related communication, and future campaign rollouts."
        actions={[
          { href: "/contact", label: "Media Enquiries" },
          { href: "/ceremonies", label: "Explore Ceremonies" },
        ]}
      />

      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Media Focus"
              title="What this section will support"
            />
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {mediaItems.map((item) => (
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
                eyebrow="For Media Platforms"
                title="A central point for publicity and communication."
              />
              <p className="text-sm leading-7 text-brand-muted">
                This page will help media partners, publications, radio stations,
                digital platforms, and content creators stay informed about
                announcements and public-facing updates from Dumbe Music Awards.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="space-y-5">
              <SectionHeading
                eyebrow="For the Public"
                title="A growing archive of platform communication."
              />
              <p className="text-sm leading-7 text-brand-muted">
                As the platform grows, this section can evolve into a useful
                archive for campaign activity, ceremony updates, artist
                communication, and major moments in the Dumbe Music Awards journey.
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
                  Stay Connected
                </p>
                <h2 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink">
                  Important updates will continue to live here.
                </h2>
                <p className="text-base text-brand-muted">
                  This section is positioned to support the next phase of growth,
                  giving Dumbe Music Awards a stronger home for communication,
                  publicity, and public updates.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#d4b06d] px-6 py-3 text-sm font-semibold text-black"
                >
                  Contact the Team
                </Link>
                <Link
                  href="/gallery"
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-brand-ink"
                >
                  View Gallery
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}