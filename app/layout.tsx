import type { Metadata } from "next";
import Script from "next/script";

import { AppProviders } from "@/components/providers/app-providers";
import { APP_DESCRIPTION, APP_KEYWORDS, APP_NAME, APP_OG_IMAGE, BASE_URL } from "@/constants/platform";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`
  },
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  keywords: [...APP_KEYWORDS],
  category: "events and entertainment",
  metadataBase: new URL(BASE_URL),
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: BASE_URL
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
      { url: "/icon", type: "image/png", sizes: "192x192" }
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    shortcut: ["/icon"]
  },
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "black-translucent"
  },
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    locale: "en_ZA",
    type: "website",
    url: BASE_URL,
    images: [
      {
        url: APP_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: APP_NAME
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [APP_OG_IMAGE]
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en-ZA">
      <body className="font-body antialiased">
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
