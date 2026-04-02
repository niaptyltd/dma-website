import type { Metadata } from "next";

import { APP_DESCRIPTION, APP_NAME, APP_OG_IMAGE, BASE_URL } from "@/constants/platform";

type MetadataOptions = {
  image?: string;
  type?: "website" | "article";
};

export function buildMetadata(
  title: string,
  description: string = APP_DESCRIPTION,
  path = "/",
  options?: MetadataOptions
): Metadata {
  const pageTitle = title === APP_NAME ? APP_NAME : title;
  const fullTitle = title === APP_NAME ? APP_NAME : `${title} | ${APP_NAME}`;
  const imageUrl = new URL(options?.image ?? APP_OG_IMAGE, BASE_URL).toString();

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: new URL(path, BASE_URL).toString()
    },
    openGraph: {
      title: fullTitle,
      description,
      url: new URL(path, BASE_URL).toString(),
      siteName: APP_NAME,
      locale: "en_ZA",
      type: options?.type ?? "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl]
    }
  };
}
