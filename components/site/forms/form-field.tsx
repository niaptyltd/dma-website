import { cn } from "@/utils/cn";

export function FormField({
  label,
  htmlFor,
  description,
  error,
  children
}: {
  label: string;
  htmlFor: string;
  description?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2" htmlFor={htmlFor}>
      <span className="text-sm font-semibold text-brand-ink">{label}</span>
      {description ? <span className="text-xs leading-6 text-brand-muted">{description}</span> : null}
      {children}
      <span
        className={cn(
          "min-h-5 text-xs",
          error ? "text-rose-700" : "text-transparent"
        )}
      >
        {error ?? "ok"}
      </span>
    </label>
  );
}
