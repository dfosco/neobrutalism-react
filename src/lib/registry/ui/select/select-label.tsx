"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const SelectLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="select-label"
      className={cn("text-muted-foreground px-1.5 py-1 text-xs", className)}
      {...props}
    />
  )
);

SelectLabel.displayName = "SelectLabel";

export { SelectLabel };
