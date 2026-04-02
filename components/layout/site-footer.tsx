import Link from "next/link";

import { BrandMark } from "@/components/site/brand-mark";
import { APP_NAME, APP_TAGLINE } from "@/constants/platform";
import { contactDetails, footerLinks, siteConfig, socialLinks } from "@/src/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#050505] text-white">
      <div className="container-shell grid gap-12 py-12 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <BrandMark compact />
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.03em]">{APP_NAME}</h3>
              <p className="text-xs uppercase tracking-[0.18em] text-white/55">{APP_TAGLINE}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/65">
            {siteConfig.footerStatement}
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Quick links</h4>
          <div className="grid gap-3">
            {footerLinks.map((item) => (
              <Link className="text-sm text-white/72 transition hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Contact</h4>
          <div className="grid gap-3 text-sm text-white/72">
            <p className="text-white">{contactDetails.founder}</p>
            <a className="transition hover:text-white" href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </a>
            <a className="transition hover:text-white" href={`tel:${contactDetails.whatsappDisplay}`}>
              {contactDetails.whatsappDisplay}
            </a>
            <a className="transition hover:text-white" href={contactDetails.whatsappLink}>
              WhatsApp
            </a>
            <p>{contactDetails.location}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Socials</h4>
          <div className="grid gap-3">
            {socialLinks.map((item) => (
              <div key={item.label}>
                <p className="text-sm text-white">{item.label}</p>
                <p className="text-sm text-white/65">{item.handle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-shell flex flex-col gap-3 border-t border-white/10 py-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Dumbe Music Awards. All rights reserved.</p>
        <p>Built to honour local talent with credibility, elegance, and long-term intent.</p>
      </div>
    </footer>
  );
}
