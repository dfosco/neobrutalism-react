"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const SheetFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
);
SheetFooter.displayName = "SheetFooter";

export default SheetFooter;
export { SheetFooter };
