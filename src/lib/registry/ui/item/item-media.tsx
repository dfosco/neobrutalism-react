"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const itemMediaVariants = tv({
  base: "gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start flex shrink-0 items-center justify-center [&_svg]:pointer-events-none",
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "[&_svg:not([class*='size-'])]:size-4",
      image: "size-10 overflow-hidden rounded-sm group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type ItemMediaVariant = VariantProps<typeof itemMediaVariants>["variant"];

interface ItemMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ItemMediaVariant;
}

const ItemMedia = React.forwardRef<HTMLDivElement, ItemMediaProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant }), className)}
      {...props}
    />
  )
);

ItemMedia.displayName = "ItemMedia";

export { ItemMedia, itemMediaVariants };
export type { ItemMediaVariant };
