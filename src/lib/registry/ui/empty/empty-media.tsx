"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const emptyMediaVariants = tv({
  base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type EmptyMediaVariant = VariantProps<typeof emptyMediaVariants>["variant"];

interface EmptyMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: EmptyMediaVariant;
}

const EmptyMedia = React.forwardRef<HTMLDivElement, EmptyMediaProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant }), className)}
      {...props}
    />
  )
);

EmptyMedia.displayName = "EmptyMedia";

export { EmptyMedia, emptyMediaVariants };
export type { EmptyMediaVariant };
