"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const SidebarInset = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <main
      ref={ref}
      data-slot="sidebar-inset"
      className={cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ms-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-md md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ms-2",
        className
      )}
      {...props}
    />
  )
);
SidebarInset.displayName = "SidebarInset";

export default SidebarInset;
export { SidebarInset };
