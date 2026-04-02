export type ActionLink = {
  href: string;
  label: string;
};

export type StatItem = {
  label: string;
  value: string;
  description?: string;
};

export type FounderStoryItem = {
  title: string;
  description: string;
};

export type FounderProfile = {
  name: string;
  role: string;
  portrait: string;
  heroTitle: string;
  intro: string;
  quote: string;
  focusAreas: string[];
  story: FounderStoryItem[];
  motivations: FounderStoryItem[];
};

export type CeremonyProgrammeItem = {
  time: string;
  title: string;
  description: string;
};

export type CeremonyPersonItem = {
  name: string;
  role: string;
  note: string;
};

export type Ceremony = {
  slug: string;
  year: string;
  status: "upcoming" | "completed" | string;
  title: string;
  date: string;
  venue: string;
  location?: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  theme: string;
  teaser: string;
  heroLabel: string;
  ctaHref: string;
  ctaLabel: string;
  overview: string[];
  highlights: string[];
  programme: CeremonyProgrammeItem[];
  sponsors: string[];
  gallery?: string[];
  specialGuests: CeremonyPersonItem[];
  performers: CeremonyPersonItem[];
  nominees: CeremonyPersonItem[];
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  year?: string;
  category?: string;
  ceremonySlug?: string;
  title?: string;
  description?: string;
  image?: string;
};

export type PartnerItem = {
  name: string;
  description?: string;
  logo?: string;
  website?: string;
  logoMark?: string;
  summary?: string;
};

export type MediaItem = {
  title: string;
  description?: string;
  href?: string;
  date?: string;
};

export type SiteContact = {
  email: string;
  whatsapp: string;
  phone?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle?: string;
};

export type SiteSettings = {
  name: string;
  shortName?: string;
  description: string;
  url?: string;
  contact?: SiteContact;
  socials?: SocialLink[];
};