"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const SheetHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
);
SheetHeader.displayName = "SheetHeader";

export default SheetHeader;
export { SheetHeader };
