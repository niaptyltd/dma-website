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

      <div className="flex max-w-[280px] flex-col">
  <p className="text-lg font-semibold tracking-[-0.02em] text-white sm:text-xl">
    {APP_NAME}
  </p>

  <p className="text-[0.6rem] uppercase tracking-[0.22em] text-white/50 leading-tight line-clamp-2">
    {APP_TAGLINE}
  </p>
</div>
    </Link>
  );
}