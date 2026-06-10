"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface DropdownMenuGroupHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
}

const DropdownMenuGroupHeading = React.forwardRef<HTMLDivElement, DropdownMenuGroupHeadingProps>(
  ({ className, inset, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="dropdown-menu-group-heading"
      data-inset={inset}
      className={cn("px-2 py-1.5 text-sm font-semibold data-[inset]:ps-8", className)}
      {...props}
    />
  )
);

DropdownMenuGroupHeading.displayName = "DropdownMenuGroupHeading";

export { DropdownMenuGroupHeading };
