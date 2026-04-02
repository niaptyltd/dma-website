"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/site/brand-mark";
import { publicNavigation } from "@/constants/navigation";
import { APP_NAME, APP_TAGLINE } from "@/constants/platform";
import { cn } from "@/utils/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const solid = scrolled || pathname !== "/" || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-500",
        solid ? "border-b border-white/10 bg-[#070707]/88 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="container-shell flex min-h-20 items-center justify-between gap-4 py-3">
        <Link className="flex min-w-0 items-center gap-3" href="/">
          <BrandMark compact />
          <div className="min-w-0">
            <p className="truncate text-base font-semibold tracking-[-0.03em] text-brand-ink">
              {APP_NAME}
            </p>
            <p className="truncate text-xs uppercase tracking-[0.2em] text-brand-muted">
              {APP_TAGLINE}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {publicNavigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));

            return (
              <Link
                className={cn(
                  "text-sm font-medium transition",
                  active ? "text-brand-ink" : "text-brand-muted hover:text-brand-ink"
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 px-5 text-sm font-semibold text-brand-ink transition hover:bg-white/[0.06]"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] px-5 text-sm font-semibold text-[#17120b] transition hover:brightness-105"
            href="/ceremonies/2026"
          >
            Upcoming Ceremony
          </Link>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] text-brand-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="overflow-hidden border-t border-white/10 bg-[#070707]/95 lg:hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            <div className="container-shell flex flex-col gap-3 py-4">
              {publicNavigation.map((item) => (
                <Link
                  className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-brand-ink transition hover:border-white/10 hover:bg-white/[0.04]"
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="rounded-2xl border border-white/12 px-4 py-3 text-center text-sm font-semibold text-brand-ink"
                href="/contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Link
                className="rounded-2xl border border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] px-4 py-3 text-center text-sm font-semibold text-[#17120b]"
                href="/ceremonies/2026"
                onClick={() => setOpen(false)}
              >
                Upcoming Ceremony
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
