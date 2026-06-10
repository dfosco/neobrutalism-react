"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const ItemGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="list"
      data-slot="item-group"
      className={cn(
        "gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2 group/item-group flex w-full flex-col",
        className
      )}
      {...props}
    />
  )
);

ItemGroup.displayName = "ItemGroup";

export { ItemGroup };
