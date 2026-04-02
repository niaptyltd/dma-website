import Image from "next/image";
import Link from "next/link";

import { APP_NAME, APP_TAGLINE } from "@/constants/platform";
import { cn } from "@/utils/cn";

export function BrandMark({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-4", className)}>
      <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[#d4b06d]/20 bg-black/70 shadow-[0_10px_30px_-18px_rgba(212,176,109,0.45)] sm:h-16 sm:w-16">
        <Image
          src="/dma-logo.jpg"
          alt={APP_NAME}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="min-w-0">
        <p className="truncate text-2xl font-semibold tracking-[-0.03em] text-white sm:text-[2rem]">
          {APP_NAME}
        </p>
        <p className="truncate text-[0.68rem] uppercase tracking-[0.28em] text-white/55 sm:text-[0.72rem]">
          {APP_TAGLINE}
        </p>
      </div>
    </Link>
  );
}