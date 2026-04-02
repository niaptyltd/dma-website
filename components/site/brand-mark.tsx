import Image from "next/image";
import Link from "next/link";

import { APP_NAME, APP_TAGLINE } from "@/constants/platform";
import { cn } from "@/utils/cn";

export function BrandMark({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <div className="relative h-12 w-[140px] overflow-hidden rounded-xl">
        <Image
          src="/dma-logo.jpg"
          alt={APP_NAME}
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="hidden min-w-0 sm:block">
        <p className="truncate text-lg font-semibold tracking-[-0.03em] text-white">
          {APP_NAME}
        </p>
        <p className="truncate text-[0.68rem] uppercase tracking-[0.28em] text-white/55">
          {APP_TAGLINE}
        </p>
      </div>
    </Link>
  );
}