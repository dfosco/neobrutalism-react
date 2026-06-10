"use client";

import * as React from "react";
import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const buttonVariants = tv({
  base: "border focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
      destructive:
        "bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white shadow-md",
      outline:
        "bg-background hover:bg-accent hover:text-accent-foreground dark:bg-[color-mix(in_oklch,var(--input)_30%,var(--background))] dark:border-input dark:hover:bg-[color-mix(in_oklch,var(--input)_50%,var(--background))] border shadow-md",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "underline-offset-4 hover:underline",
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchorProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    disabled?: boolean;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "default", size = "default", href, disabled, children, ...props }, ref) => {
    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          data-slot="button"
          className={cn(buttonVariants({ variant, size }), className)}
          href={disabled ? undefined : href}
          aria-disabled={disabled}
          role={disabled ? "link" : undefined}
          tabIndex={disabled ? -1 : undefined}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    const { type = "button", ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        data-slot="button"
        className={cn(buttonVariants({ variant, size }), className)}
        type={type}
        disabled={disabled}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
