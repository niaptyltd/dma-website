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