import { cn } from "@/utils/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4b06d]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold leading-[0.96] tracking-[-0.04em] text-brand-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-muted sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
