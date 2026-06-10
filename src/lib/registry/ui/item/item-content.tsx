"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const ItemContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="item-content"
      className={cn(
        "gap-1 group-data-[size=xs]/item:gap-0 flex flex-1 flex-col [&+[data-slot=item-content]]:flex-none",
        className
      )}
      {...props}
    />
  )
);

ItemContent.displayName = "ItemContent";

export { ItemContent };
