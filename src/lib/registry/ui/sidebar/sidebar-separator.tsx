"use client";

import * as React from "react";

import { Separator } from "@/lib/registry/ui/separator";
import { cn } from "@/lib/utils";

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    data-slot="sidebar-separator"
    data-sidebar="separator"
    className={cn("bg-sidebar-border", className)}
    {...props}
  />
));
SidebarSeparator.displayName = "SidebarSeparator";

export default SidebarSeparator;
export { SidebarSeparator };
