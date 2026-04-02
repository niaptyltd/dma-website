import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/site/page-hero";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Gallery",
  "Explore moments, memories, and highlights from Dumbe Music Awards.",
  "/gallery"
);

const galleryItems = [
  {
    title: "Stage Moments",
    description:
      "Capturing the energy, emotion, and pride that define Dumbe Music Awards ceremonies.",
  },
  {
    title: "Artist Highlights",
    description:
      "Showcasing the performers, nominees, and talent that give the platform its heartbeat.",
  },
  {
    title: "Audience Experience",
    description:
      "A reflection of the community support and atmosphere surrounding the awards.",
  },
  {
    title: "Award Recognition",
    description:
      "Celebrating the moments where artists are honoured and recognised on stage.",
  },
  {
    title: "Behind the Scenes",
    description:
      "A glimpse into the work, preparation, and movement that bring the event to life.",
  },
  {
    title: "Legacy in Motion",
    description:
      "A visual story of how the Dumbe Music Awards platform continues to grow over time.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments that reflect the spirit of Dumbe Music Awards."
        description="Explore visual highlights from the platform’s journey, from stage presence and artist recognition to the atmosphere that makes each ceremony memorable."
        actions={[
          { href: "/ceremonies", label: "View Ceremonies" },
          { href: "/contact", label: "Contact the Team" },
        ]}
      />

      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery Highlights"
              title="A visual glimpse into the journey"
            />
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item) => (
              <Reveal key={item.title}>
                <Card className="space-y-4">
                  <div className="aspect-[4/3] rounded-[1.5rem] border border-white/10 bg-white/[0.04]" />
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
            <Card className="space-y-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                Growing Archive
              </p>
              <h2 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink">
                The gallery will continue to grow with every ceremony.
              </h2>
              <p className="text-base text-brand-muted">
                As Dumbe Music Awards evolves, this gallery will serve as a
                visual archive of the platform’s milestones, atmosphere, and
                cultural impact.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}