"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils";

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    data-slot="navigation-menu-item"
    className={cn("relative", className)}
    {...props}
  />
));

NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName;

export { NavigationMenuItem };
