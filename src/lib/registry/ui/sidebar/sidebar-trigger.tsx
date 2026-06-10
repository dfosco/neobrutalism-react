"use client";

import * as React from "react";
import { PanelLeftIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onClick, type = "button", ...props }, ref) => {
  const sidebar = useSidebar();

  return (
    <button
      ref={ref}
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      type={type}
      className={cn(
        "border focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-accent hover:text-accent-foreground size-7",
        className
      )}
      onClick={(event) => {
        onClick?.(event);
        sidebar.toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

export default SidebarTrigger;
export { SidebarTrigger };
