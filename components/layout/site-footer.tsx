import Link from "next/link";

import { BrandMark } from "@/components/site/brand-mark";
import { publicNavigation } from "@/constants/navigation";

const socials = [
  { label: "Instagram", handle: "@dumbemusicawards", href: "#" },
  { label: "Facebook", handle: "Dumbe Music Awards", href: "#" },
  { label: "TikTok", handle: "@dumbemusicawards", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]">
        <div className="space-y-6">
          <BrandMark />
          <p className="max-w-md text-base leading-8 text-white/72">
            Dumbe Music Awards is more than an event. It is a platform for recognition,
            aspiration, and long-term cultural impact across Dumbe and the communities around it.
          </p>
        </div>

        <div className="space-y-5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
            Quick Links
          </p>
          <div className="flex flex-col gap-4">
            {publicNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-white transition hover:text-[#d4b06d]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
            Contact
          </p>
          <div className="space-y-4 text-base text-white/88">
            <p>Bhekithmba Ngubane</p>
            <p>dumbemusic@gmail.com</p>
            <p>0793266276</p>
            <p>WhatsApp</p>
            <p>Dumbe region, KwaZulu-Natal, South Africa</p>
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d4b06d]">
            Socials
          </p>
          <div className="space-y-5">
            {socials.map((item) => (
              <div key={item.label}>
                <p className="text-base text-white">{item.label}</p>
                <p className="text-base text-white/65">{item.handle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}