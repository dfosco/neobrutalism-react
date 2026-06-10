"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils";
import { NavigationMenuViewport } from "./navigation-menu-viewport";

interface NavigationMenuProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> {
  viewport?: boolean;
}

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuProps
>(({ className, viewport = true, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    data-slot="navigation-menu"
    data-viewport={viewport}
    className={cn(
      "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    {viewport ? <NavigationMenuViewport /> : null}
  </NavigationMenuPrimitive.Root>
));

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

export { NavigationMenu };
