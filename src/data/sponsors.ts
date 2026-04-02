import type { Sponsor, SponsorBenefit, SponsorTier } from "@/src/types/site";

export const sponsors: Sponsor[] = [
  {
    name: "Legacy Gold Partner",
    tier: "Founding visibility placeholder",
    summary:
      "Reserved for a flagship sponsor aligned with long-term cultural legacy and premium ceremony visibility.",
    logoMark: "LG"
  },
  {
    name: "Community Growth Partner",
    tier: "Regional development placeholder",
    summary:
      "Ideal for organisations that want to champion local talent development and community pride.",
    logoMark: "CG"
  },
  {
    name: "Media Amplification Partner",
    tier: "Storytelling placeholder",
    summary:
      "Reserved for radio, digital, or press partners that can extend ceremony reach and public awareness.",
    logoMark: "MA"
  },
  {
    name: "Ceremony Experience Partner",
    tier: "Production support placeholder",
    summary:
      "A position for brands that want to shape the event atmosphere through staging, hospitality, or guest experience.",
    logoMark: "CE"
  }
];

export const sponsorBenefits: SponsorBenefit[] = [
  {
    title: "Visible public association",
    description:
      "Partners align with a cultural platform built around recognition, pride, and credible community impact."
  },
  {
    title: "Meaningful local relevance",
    description:
      "The awards connect sponsors to artists, families, and audiences in a way that feels rooted rather than generic."
  },
  {
    title: "Story-rich activation opportunities",
    description:
      "Ceremony touchpoints, media content, and archive moments create multiple ways for partners to show up well."
  }
];

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Title Partner",
    audience: "For lead sponsors seeking maximum prominence",
    description:
      "A premium role for the brand that wants to stand closest to the Dumbe Music Awards story and future scale.",
    deliverables: [
      "Headline brand presence across ceremony materials",
      "Priority placement on the website and event visuals",
      "Reserved sponsor mention in core communications"
    ]
  },
  {
    name: "Programme Partner",
    audience: "For brands supporting ceremony delivery",
    description:
      "A strong fit for partners interested in hospitality, stage experience, guest care, or audience-facing moments.",
    deliverables: [
      "Featured placement within selected ceremony segments",
      "Recognition across partner and programme sections",
      "Opportunities for curated on-site visibility"
    ]
  },
  {
    name: "Talent Development Partner",
    audience: "For organisations focused on growth and empowerment",
    description:
      "A partnership tier that signals commitment to the people, talent, and future opportunities behind the platform.",
    deliverables: [
      "Association with artist uplift and growth messaging",
      "Recognition inside vision and impact narratives",
      "Storytelling alignment with community empowerment"
    ]
  }
];
