import type { MetadataRoute } from "next";

import { BASE_URL } from "@/constants/platform";
import { ceremonies } from "@/src/data/ceremonies";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPages = [
    "",
    "/about",
    "/founder",
    "/ceremonies",
    "/gallery",
    "/vision",
    "/contact",
    "/partners",
    "/media"
  ];

  const staticEntries = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified
  }));

  const ceremonyEntries = ceremonies.map((ceremony) => ({
    url: `${BASE_URL}/ceremonies/${ceremony.slug}`,
    lastModified: new Date(ceremony.date)
  }));

  return [...staticEntries, ...ceremonyEntries];
}
