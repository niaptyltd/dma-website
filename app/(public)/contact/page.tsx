import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/site/page-hero";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Contact",
  "Get in touch with Dumbe Music Awards for sponsorship, artist, media, and general enquiries.",
  "/contact"
);

const whatsappNumber = "27793266276";
const emailAddress = "dumbemusic@gmail.com";

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent(
    "Hello Dumbe Music Awards, I would like to enquire about the platform."
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s connect and build something meaningful."
        description="Whether you are an artist, sponsor, media platform, or supporter, Dumbe Music Awards welcomes meaningful conversations that can help grow the platform and its impact."
        actions={[
          { href: `mailto:${emailAddress}`, label: "Email Us" },
          {
            href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
            label: "WhatsApp Us",
          },
        ]}
      />

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Card className="space-y-6">
              <SectionHeading
                eyebrow="Get In Touch"
                title="We welcome artists, partners, media, and general enquiries."
              />

              <div className="space-y-5">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                    Email
                  </p>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="mt-2 inline-block text-lg font-semibold text-brand-ink underline-offset-4 hover:underline"
                  >
                    {emailAddress}
                  </a>
                </div>

                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                    WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-lg font-semibold text-brand-ink underline-offset-4 hover:underline"
                  >
                    079 326 6276
                  </a>
                </div>

                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                    Enquiries
                  </p>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">
                    Sponsorships, partnerships, artist opportunities, media
                    engagement, event enquiries, and general communication.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="space-y-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                Contact Categories
              </p>

              <div className="space-y-4">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="text-lg font-semibold text-brand-ink">
                    Sponsorship & Partnerships
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">
                    For brands, organisations, and institutions interested in
                    aligning with Dumbe Music Awards.
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="text-lg font-semibold text-brand-ink">
                    Artist Enquiries
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">
                    For artists seeking information related to ceremonies,
                    opportunities, and future participation.
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="text-lg font-semibold text-brand-ink">
                    Media & Publicity
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">
                    For interviews, media coverage, announcements, and publicity
                    opportunities.
                  </p>
                </div>
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
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
                  Let’s Build Together
                </p>
                <h2 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-ink">
                  Every strong platform grows through meaningful connections.
                </h2>
                <p className="text-base text-brand-muted">
                  If you believe in talent, culture, community impact, and the
                  future of local music, Dumbe Music Awards would love to hear
                  from you.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href={`mailto:${emailAddress}`}
                  className="rounded-full bg-[#d4b06d] px-6 py-3 text-sm font-semibold text-black"
                >
                  Send an Email
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-brand-ink"
                >
                  Start a WhatsApp Chat
                </a>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}