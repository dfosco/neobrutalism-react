"use client";

import * as React from "react";
import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const badgeVariants = tv({
  base: "border focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring [&>svg]:pointer-events-none [&>svg]:size-3",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
      destructive:
        "bg-destructive [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70 text-white",
      outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

type BadgeBaseProps = {
  variant?: BadgeVariant;
  className?: string;
  children?: React.ReactNode;
};

type BadgeAnchorProps = BadgeBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type BadgeSpanProps = BadgeBaseProps & React.HTMLAttributes<HTMLSpanElement> & {
  href?: undefined;
};

export type BadgeProps = BadgeAnchorProps | BadgeSpanProps;

const Badge = React.forwardRef<HTMLAnchorElement | HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", href, ...props }, ref) => {
    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          data-slot="badge"
          href={href}
          className={cn(badgeVariants({ variant }), className)}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        data-slot="badge"
        className={cn(badgeVariants({ variant }), className)}
        {...(props as React.HTMLAttributes<HTMLSpanElement>)}
      />
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
