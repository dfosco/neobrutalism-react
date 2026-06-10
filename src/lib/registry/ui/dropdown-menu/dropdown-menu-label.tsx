"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface DropdownMenuLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
}

const DropdownMenuLabel = React.forwardRef<HTMLDivElement, DropdownMenuLabelProps>(
  ({ className, inset, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("px-2 py-1.5 text-sm font-semibold data-[inset]:ps-8", className)}
      {...props}
    />
  )
);

DropdownMenuLabel.displayName = "DropdownMenuLabel";

export { DropdownMenuLabel };
