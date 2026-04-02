import { cn } from "@/utils/cn";

export function BrandMark({
  className,
  compact = false
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,224,173,0.32),_transparent_52%),linear-gradient(180deg,rgba(31,25,17,0.98),rgba(10,10,10,1))] text-brand-ink shadow-[0_24px_70px_-36px_rgba(0,0,0,0.95)]",
        compact ? "h-11 w-11" : "h-14 w-14",
        className
      )}
    >
      <div className="absolute inset-[1px] rounded-[1.25rem] border border-white/5" />
      <span
        className={cn(
          "relative font-heading font-semibold uppercase tracking-[0.24em] text-brand-ink",
          compact ? "text-[0.62rem]" : "text-[0.78rem]"
        )}
      >
        DMA
      </span>
    </div>
  );
}
