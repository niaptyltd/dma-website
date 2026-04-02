import { cn } from "@/utils/cn";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("luxury-card p-5 sm:p-6 lg:p-7", className)} {...props}>
      {children}
    </div>
  );
}
