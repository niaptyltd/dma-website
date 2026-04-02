import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/site/page-hero";
import { StructuredData } from "@/components/site/structured-data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { APP_NAME, BASE_URL } from "@/constants/platform";
import { getCeremonyBySlug, getGalleryImagesForCeremony, getSponsorsByName } from "@/lib/content";
import { formatDisplayDate } from "@/lib/format";
import { buildMetadata } from "@/lib/metadata";
import { ceremonies } from "@/src/data/ceremonies";

export async function generateStaticParams() {
  return ceremonies.map((ceremony) => ({ slug: ceremony.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ceremony = getCeremonyBySlug(slug);

  if (!ceremony) {
    return buildMetadata("Ceremony not found", "This ceremony page could not be found.", `/ceremonies/${slug}`);
  }

  return buildMetadata(
    ceremony.title,
    ceremony.shortDescription,
    `/ceremonies/${ceremony.slug}`,
    { type: "article", image: ceremony.heroImage }
  );
}

function PeopleBlock({
  title,
  items
}: {
  title: string;
  items: { name: string; role: string; note: string }[];
}) {
  return (
    <Card className="space-y-5">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">{title}</p>
      <div className="grid gap-4">
        {items.map((item) => (
          <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4" key={`${title}-${item.name}`}>
            <h3 className="text-lg font-semibold tracking-[-0.03em] text-brand-ink">{item.name}</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-brand-muted">{item.role}</p>
            <p className="mt-3 text-sm leading-7 text-brand-muted">{item.note}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default async function CeremonyDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ceremony = getCeremonyBySlug(slug);

  if (!ceremony) {
    notFound();
  }

  const galleryItems = getGalleryImagesForCeremony(ceremony.slug);
  const ceremonySponsors = getSponsorsByName(ceremony.sponsors);

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: ceremony.title,
          startDate: ceremony.date,
          description: ceremony.shortDescription,
          image: `${BASE_URL}${ceremony.heroImage}`,
          eventStatus:
            ceremony.status === "upcoming"
              ? "https://schema.org/EventScheduled"
              : "https://schema.org/EventCompleted",
          location: {
            "@type": "Place",
            name: ceremony.venue,
            address: ceremony.location
          },
          organizer: {
            "@type": "Organization",
            name: APP_NAME
          }
        }}
      />

      <PageHero
        actions={[
          { href: ceremony.ctaHref, label: ceremony.ctaLabel },
          { href: "/gallery", label: "View Gallery" }
        ]}
        description={ceremony.teaser}
        eyebrow={ceremony.heroLabel}
        panel={
          <Card className="space-y-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
              Ceremony Overview
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-muted">Date</p>
                <p className="mt-2 text-sm text-brand-ink">{formatDisplayDate(ceremony.date)}</p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-muted">Venue</p>
                <p className="mt-2 text-sm text-brand-ink">{ceremony.venue}</p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-muted">Theme</p>
                <p className="mt-2 text-sm text-brand-ink">{ceremony.theme}</p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-muted">Status</p>
                <p className="mt-2 text-sm text-brand-ink">
                  {ceremony.status === "upcoming" ? "Upcoming" : "Completed"}
                </p>
              </div>
            </div>
          </Card>
        }
        title={ceremony.title}
      />

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Card className="space-y-5">
              <SectionHeading
                eyebrow="Ceremony Story"
                title="A closer look at the ceremony's purpose and atmosphere."
                description={ceremony.shortDescription}
              />
              <div className="space-y-4">
                {ceremony.overview.map((paragraph: string) => (
                  <p className="text-sm leading-7 text-brand-muted" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="space-y-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
                Ceremony Highlights
              </p>
              <div className="grid gap-4">
                {ceremony.highlights.map((item: string) => (
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4" key={item}>
                    <p className="text-sm leading-7 text-brand-muted">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-2">
        <div className="container-shell space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Programme Summary"
              title="A ceremony flow designed to feel organised, memorable, and elevated."
              description="Every detail page supports a full programme structure so the archive can remain useful as the platform becomes more robust."
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {ceremony.programme.map((item: { time: string; title: string; description: string }, index: number) => (
              <Reveal delay={index * 0.08} key={`${item.time}-${item.title}`}>
                <Card className="space-y-3">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
                    {item.time}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-brand-ink">{item.title}</h3>
                  <p className="text-sm leading-7 text-brand-muted">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-6 xl:grid-cols-3">
          <Reveal>
            <PeopleBlock items={ceremony.specialGuests} title="Special Guests" />
          </Reveal>
          <Reveal delay={0.08}>
            <PeopleBlock items={ceremony.performers} title="Performers" />
          </Reveal>
          <Reveal delay={0.16}>
            <PeopleBlock items={ceremony.nominees} title="Nominees" />
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-2">
        <div className="container-shell space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="Visual moments connected to this ceremony."
              description="Every ceremony detail page can host its own image set, ready to scale from placeholders to full photographic archives."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item, index) => (
              <Reveal delay={index * 0.06} key={item.id}>
                <Card className="overflow-hidden p-0">
                  <div className="relative aspect-[16/11]">
                    <Image
                      alt={item.alt}
                      className="object-cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      src={item.src}
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-7 text-brand-muted">{item.caption}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Card className="space-y-5">
              <SectionHeading
                eyebrow="Sponsors and Partners"
                title="Partner visibility connected to the ceremony."
                description="This area is ready for real sponsor identities, recognition blocks, and collaboration stories as the platform expands."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {ceremonySponsors.map((sponsor) => (
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4" key={sponsor.name}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4b06d]/25 bg-white/[0.03] text-sm font-semibold tracking-[0.24em] text-[#d4b06d]">
                      {sponsor.logoMark}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-brand-ink">{sponsor.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-brand-muted">{sponsor.summary}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="space-y-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
                Call To Action
              </p>
              <h2 className="font-heading text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-brand-ink">
                Want to support, attend, or build around this ceremony?
              </h2>
              <p className="text-sm leading-7 text-brand-muted">
                Each ceremony page is prepared to support future ticketing, nominations, sponsorships, public campaign moments, and richer media coverage.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] px-6 text-sm font-semibold text-[#17120b] transition hover:brightness-105"
                  href={ceremony.ctaHref}
                >
                  {ceremony.ctaLabel}
                </Link>
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 text-sm font-semibold text-brand-ink transition hover:bg-white/[0.08]"
                  href="/contact"
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
