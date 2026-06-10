"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  )
);
SidebarGroupContent.displayName = "SidebarGroupContent";

export default SidebarGroupContent;
export { SidebarGroupContent };
