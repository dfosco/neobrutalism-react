"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils";

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute start-0 top-full isolate z-50 flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      data-slot="navigation-menu-viewport"
      className={cn(
        "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow-md md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      {...props}
    />
  </div>
));

NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

export { NavigationMenuViewport };
