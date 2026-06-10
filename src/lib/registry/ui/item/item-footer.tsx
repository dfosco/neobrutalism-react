"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const ItemFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="item-footer"
      className={cn("gap-2 flex basis-full items-center justify-between", className)}
      {...props}
    />
  )
);

ItemFooter.displayName = "ItemFooter";

export { ItemFooter };
