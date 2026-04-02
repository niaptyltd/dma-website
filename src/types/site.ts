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

export type Ceremony = {
  slug: string;
  year: string;
  status: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  shortDescription?: string;
  heroImage?: string;
  theme?: string;
  overview?: string[];
  highlights?: string[];
  programme?: CeremonyProgrammeItem[];
};

export type GalleryItem = {
  title: string;
  description?: string;
  image?: string;
  year?: string;
  category?: string;
};

export type PartnerItem = {
  name: string;
  description?: string;
  logo?: string;
  website?: string;
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
};

export type SiteSettings = {
  name: string;
  shortName?: string;
  description: string;
  url?: string;
  contact?: SiteContact;
  socials?: SocialLink[];
};