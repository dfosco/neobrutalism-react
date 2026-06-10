"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const ItemHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="item-header"
      className={cn("gap-2 flex basis-full items-center justify-between", className)}
      {...props}
    />
  )
);

ItemHeader.displayName = "ItemHeader";

export { ItemHeader };
