"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type DialogHeaderProps = React.ComponentPropsWithoutRef<"div">;

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} data-slot="dialog-header" className={cn("gap-2 flex flex-col", className)} {...props}>
      {children}
    </div>
  )
);

DialogHeader.displayName = "DialogHeader";

export default DialogHeader;
