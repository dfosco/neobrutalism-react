"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const EmptyHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="empty-header"
      className={cn("gap-2 flex max-w-sm flex-col items-center", className)}
      {...props}
    />
  )
);

EmptyHeader.displayName = "EmptyHeader";

export { EmptyHeader };
