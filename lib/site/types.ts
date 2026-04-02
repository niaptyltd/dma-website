export type ServiceIconKey =
  | "calendar"
  | "briefcase"
  | "users"
  | "mic"
  | "sparkles"
  | "radio"
  | "palette"
  | "speaker"
  | "megaphone"
  | "star";

export type ProjectStatus = "Past" | "Current" | "Upcoming";
export type EventStatus = "Upcoming" | "Past";
export type ContactMethod = "Email" | "Phone call" | "WhatsApp";

export interface NavigationItem {
  href: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface FounderProfile {
  name: string;
  role: string;
  bio: string;
}

export interface PartnerLogoItem {
  name: string;
  category: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  icon: ServiceIconKey;
  shortIntro: string;
  summary: string;
  benefits: string[];
  deliverables: string[];
  featured: boolean;
}

export interface MediaItem {
  src: string;
  alt: string;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface ProjectEntry {
  slug: string;
  title: string;
  status: ProjectStatus;
  category: string;
  location: string;
  timeline: string;
  summary: string;
  heroImage: string;
  services: string[];
  challenge: string;
  response: string;
  outcome: string;
  metrics: MetricItem[];
  partners: string[];
  gallery: MediaItem[];
}

export interface EventEntry {
  slug: string;
  title: string;
  status: EventStatus;
  category: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  ticketStatus: string;
  summary: string;
  heroImage: string;
  tags: string[];
  overview: string[];
  highlights: string[];
  gallery: MediaItem[];
  enquiryLabel: string;
}

export interface TestimonialEntry {
  quote: string;
  name: string;
  role: string;
  organisation: string;
}

export interface FAQEntry {
  question: string;
  answer: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  heroImage: string;
  featured: boolean;
  sections: BlogSection[];
}
