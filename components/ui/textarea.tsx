import * as React from "react";

import { cn } from "@/utils/cn";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-32 w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-brand-ink outline-none transition placeholder:text-brand-muted focus:border-[#d4b06d]/60 focus:ring-2 focus:ring-[#d4b06d]/15",
      className
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";
