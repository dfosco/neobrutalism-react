"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const ItemTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="item-title"
      className={cn(
        "gap-2 text-sm leading-snug font-medium underline-offset-4 line-clamp-1 flex w-fit items-center",
        className
      )}
      {...props}
    />
  )
);

ItemTitle.displayName = "ItemTitle";

export { ItemTitle };
