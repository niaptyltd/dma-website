import * as React from "react";

import { cn } from "@/utils/cn";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "h-12 w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 text-sm text-brand-ink outline-none transition focus:border-[#d4b06d]/60 focus:ring-2 focus:ring-[#d4b06d]/15",
      className
    )}
    {...props}
  >
    {children}
  </select>
));

Select.displayName = "Select";
