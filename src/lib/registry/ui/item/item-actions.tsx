"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const ItemActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-slot="item-actions" className={cn("gap-2 flex items-center", className)} {...props} />
  )
);

ItemActions.displayName = "ItemActions";

export { ItemActions };
