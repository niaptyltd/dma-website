import Image from "next/image";
import Link from "next/link";

import { APP_NAME, APP_TAGLINE } from "@/constants/platform";
import { cn } from "@/utils/cn";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className, compact = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3 min-w-0", className)}
      aria-label={APP_NAME}
    >
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d4b06d]/20 bg-black/70 shadow-[0_10px_30px_-18px_rgba(212,176,109,0.45)] sm:h-14 sm:w-14">
        <Image
          src="/dma-logo.jpg"
          alt={APP_NAME}
          fill
          className="object-cover"
          priority
        />
      </div>

      {!compact ? (
        <div className="min-w-0">
          <p className="truncate text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
            {APP_NAME}
          </p>
          <p className="hidden truncate text-[0.62rem] uppercase tracking-[0.22em] text-white/55 sm:block">
            {APP_TAGLINE}
          </p>
        </div>
      ) : null}
    </Link>
  );
}