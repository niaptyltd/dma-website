"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/site/brand-mark";
import { publicNavigation } from "@/constants/navigation";
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
      <div className="container-shell flex min-h-20 items-center justify-between gap-3 py-3">
        <div className="min-w-0 flex-1">
          <BrandMark />
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {publicNavigation.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition",
                  active ? "text-brand-ink" : "text-brand-muted hover:text-brand-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 px-5 text-sm font-semibold text-brand-ink transition hover:bg-white/[0.06]"
          >
            Contact
          </Link>
          <Link
            href="/ceremonies/2026"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] px-5 text-sm font-semibold text-[#17120b] transition hover:brightness-105"
          >
            Upcoming Ceremony
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] text-brand-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#070707]/95 lg:hidden"
          >
            <div className="container-shell flex flex-col gap-3 py-4">
              {publicNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-brand-ink transition hover:border-white/10 hover:bg-white/[0.04]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/12 px-4 py-3 text-center text-sm font-semibold text-brand-ink"
              >
                Contact
              </Link>

              <Link
                href="/ceremonies/2026"
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] px-4 py-3 text-center text-sm font-semibold text-[#17120b]"
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