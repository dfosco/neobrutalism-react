"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const inputGroupAddonVariants = tv({
  base: "text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none",
  variants: {
    align: {
      "inline-start": "pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first",
      "inline-end": "pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last",
      "block-start":
        "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start",
      "block-end": "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start",
    },
  },
  defaultVariants: {
    align: "inline-start",
  },
});

type InputGroupAddonAlign = VariantProps<typeof inputGroupAddonVariants>["align"];

interface InputGroupAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: InputGroupAddonAlign;
}

const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ className, align = "inline-start", onClick, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(event) => {
        onClick?.(event);
        if ((event.target as HTMLElement).closest("button")) {
          return;
        }
        event.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      {...props}
    />
  )
);

InputGroupAddon.displayName = "InputGroupAddon";

export { InputGroupAddon, inputGroupAddonVariants };
export type { InputGroupAddonAlign };
