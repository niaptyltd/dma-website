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
};export type CeremonyProgrammeItem = {
  time: string;
  title: string;
  description: string;
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
  overview?: string[];
  highlights?: string[];
  programme?: CeremonyProgrammeItem[];
};