"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const itemVariants = tv({
  base: "[a]:hover:bg-muted rounded-lg border text-sm group/item focus-visible:ring-ring focus-visible:ring-offset-2 flex w-full flex-wrap items-center transition-colors duration-100 outline-none focus-visible:ring [a]:transition-colors",
  variants: {
    variant: {
      default: "border-transparent",
      outline: "border-border",
      muted: "bg-muted/50 border-transparent",
    },
    size: {
      default: "gap-2.5 px-3 py-2.5",
      sm: "gap-2.5 px-3 py-2.5",
      xs: "gap-2 px-2.5 py-2 in-data-[slot=dropdown-menu-content]:p-0",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ItemSize = VariantProps<typeof itemVariants>["size"];
type ItemVariant = VariantProps<typeof itemVariants>["variant"];

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  variant?: ItemVariant;
  size?: ItemSize;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, asChild = false, variant, size, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        data-slot="item"
        data-variant={variant}
        data-size={size}
        className={cn(itemVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Item.displayName = "Item";

export { Item, itemVariants };
export type { ItemSize, ItemVariant };
