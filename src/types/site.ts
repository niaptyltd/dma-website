export type CeremonyStatus = "upcoming" | "completed";

export interface NavigationItem {
  href: string;
  label: string;
}

export interface ActionLink {
  href: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface SiteHighlight {
  title: string;
  description: string;
  metric: string;
  href: string;
}

export interface ContactDetails {
  email: string;
  whatsappDisplay: string;
  whatsappLink: string;
  founder: string;
  location: string;
  responseTime: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  note: string;
  href?: string;
}

export interface AboutStoryBlock {
  title: string;
  body: string[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface VisionPillar {
  title: string;
  description: string;
}

export interface FounderProfile {
  name: string;
  role: string;
  portrait: string;
  heroTitle: string;
  intro: string;
  quote: string;
  story: string[];
  motivations: string[];
  leadershipStatement: string;
  focusAreas: string[];
}

export interface Sponsor {
  name: string;
  tier: string;
  summary: string;
  logoMark: string;
  website?: string;
}

export interface SponsorBenefit {
  title: string;
  description: string;
}

export interface SponsorTier {
  name: string;
  audience: string;
  description: string;
  deliverables: string[];
}

export interface CeremonyProgrammeItem {
  time: string;
  title: string;
  description: string;
}

export interface CeremonyPerson {
  name: string;
  role: string;
  note: string;
}

export interface Ceremony {
  slug: string;
  year: string;
  title: string;
  date: string;
  venue: string;
  location: string;
  theme: string;
  status: CeremonyStatus;
  heroLabel: string;
  shortDescription: string;
  teaser: string;
  heroImage: string;
  overview: string[];
  highlights: string[];
  programme: CeremonyProgrammeItem[];
  specialGuests: CeremonyPerson[];
  performers: CeremonyPerson[];
  nominees: CeremonyPerson[];
  sponsors: string[];
  galleryIds: string[];
  stats: StatItem[];
  ctaLabel: string;
  ctaHref: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  year: string;
  ceremonySlug: string;
  ceremonyTitle: string;
  orientation: "portrait" | "landscape" | "square";
}

export interface MediaEntry {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  body: string;
}
