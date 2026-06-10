"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const EmptyTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="empty-title"
      className={cn("text-sm font-medium tracking-tight", className)}
      {...props}
    />
  )
);

EmptyTitle.displayName = "EmptyTitle";

export { EmptyTitle };
