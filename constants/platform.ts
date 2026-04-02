import { socialLinks, siteConfig } from "@/src/data/site";

export const APP_NAME = siteConfig.name;
export const APP_TAGLINE = siteConfig.tagline;
export const APP_DESCRIPTION = siteConfig.description;
export const APP_KEYWORDS = [
  "Dumbe Music Awards",
  "Dumbe awards ceremony",
  "KwaZulu-Natal music awards",
  "local artist recognition South Africa",
  "community music platform",
  "Dumbe cultural events"
] as const;
export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const APP_OG_IMAGE = "/opengraph-image";

export const SOCIAL_LINKS = socialLinks;
