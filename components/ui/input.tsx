import * as React from "react";

import { cn } from "@/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-12 w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 text-sm text-brand-ink outline-none transition placeholder:text-brand-muted focus:border-[#d4b06d]/60 focus:ring-2 focus:ring-[#d4b06d]/15",
      className
    )}
    {...props}
  />
));

Input.displayName = "Input";
