import { ceremonies } from "@/src/data/ceremonies";
import { galleryImages } from "@/src/data/gallery";
import { sponsors } from "@/src/data/sponsors";

export const upcomingCeremonies = ceremonies.filter((ceremony) => ceremony.status === "upcoming");
export const pastCeremonies = ceremonies.filter((ceremony) => ceremony.status === "completed");

export function getCeremonyBySlug(slug: string) {
  return ceremonies.find((ceremony) => ceremony.slug === slug);
}

export function getGalleryImagesForCeremony(slug: string) {
  return galleryImages.filter((image) => image.ceremonySlug === slug);
}

export function getSponsorsByName(names: string[]) {
  return sponsors.filter((sponsor) => names.includes(sponsor.name));
}

export const galleryPreview = galleryImages.slice(0, 6);
export const featuredPastCeremonies = pastCeremonies.slice(0, 2);
