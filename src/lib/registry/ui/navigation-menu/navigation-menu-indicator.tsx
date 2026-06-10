"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils";

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    data-slot="navigation-menu-indicator"
    className={cn(
      "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
      className
    )}
    {...props}
  >
    <div className="bg-border rounded-ts-sm relative top-[60%] h-2 w-2 rotate-45 shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));

NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export { NavigationMenuIndicator };
