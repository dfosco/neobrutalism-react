"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const DropdownMenuShortcut = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      data-slot="dropdown-menu-shortcut"
      className={cn("text-muted-foreground ms-auto text-xs tracking-widest", className)}
      {...props}
    />
  )
);

DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export { DropdownMenuShortcut };
