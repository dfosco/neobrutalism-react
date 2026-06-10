"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const SidebarInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    data-slot="sidebar-input"
    data-sidebar="input"
    className={cn(
      "border-input bg-background selection:bg-primary dark:bg-input/30 selection:text-primary-foreground ring-offset-background placeholder:text-muted-foreground flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-background h-8 w-full shadow-none",
      className
    )}
    {...props}
  />
));
SidebarInput.displayName = "SidebarInput";

export default SidebarInput;
export { SidebarInput };
