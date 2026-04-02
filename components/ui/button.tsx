import * as React from "react";

import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "border border-[#d4b06d]/60 bg-[linear-gradient(135deg,#f6dfb2,#c99547)] text-[#17120b] shadow-[0_18px_45px_-20px_rgba(201,149,71,0.55)] hover:brightness-105 focus-visible:outline-[#d4b06d]",
  secondary:
    "border border-white/12 bg-white/[0.04] text-brand-ink hover:bg-white/[0.09] focus-visible:outline-[#d4b06d]",
  ghost: "bg-transparent text-brand-ink hover:bg-white/[0.06] focus-visible:outline-[#d4b06d]",
  outline:
    "border border-[#d4b06d]/35 bg-transparent text-brand-ink hover:border-[#d4b06d]/70 hover:bg-white/[0.04] focus-visible:outline-[#d4b06d]",
  danger: "bg-rose-600 text-white hover:bg-rose-700 focus-visible:outline-rose-600"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", fullWidth, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
          buttonVariants[variant],
          fullWidth && "w-full",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
