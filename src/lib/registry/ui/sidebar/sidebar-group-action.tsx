"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

export interface SidebarGroupActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  SidebarGroupActionProps
>(({ className, asChild = false, type = "button", ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute end-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring [&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...({ type: asChild ? undefined : type } as Record<string, unknown>)}
      {...props}
    />
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";

export default SidebarGroupAction;
export { SidebarGroupAction };
