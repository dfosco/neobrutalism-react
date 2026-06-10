"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  )
);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

export default SidebarMenuSubItem;
export { SidebarMenuSubItem };
