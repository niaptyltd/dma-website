import type { MetadataRoute } from "next";

import { APP_DESCRIPTION, APP_NAME } from "@/constants/platform";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: "DMA",
    description: APP_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#070707",
    theme_color: "#070707",
    icons: [
      {
        src: "/icon",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
