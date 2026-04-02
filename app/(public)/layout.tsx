import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { contactDetails } from "@/src/data/site";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-24 sm:pb-24">{children}</main>
      <Link
        aria-label="Chat with Dumbe Music Awards on WhatsApp"
        className="fixed bottom-4 right-4 z-40 inline-flex min-h-12 items-center justify-center rounded-full border border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] px-5 text-sm font-semibold text-[#17120b] shadow-[0_18px_40px_-20px_rgba(201,149,71,0.65)] transition hover:brightness-105 sm:bottom-6 sm:right-6"
        href={contactDetails.whatsappLink}
      >
        WhatsApp
      </Link>
      <SiteFooter />
    </>
  );
}
