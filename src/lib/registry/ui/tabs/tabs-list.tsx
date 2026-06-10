"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    data-slot="tabs-list"
    className={cn("border inline-flex h-12 w-full items-center justify-center rounded-lg p-1.5", className)}
    {...props}
  />
));
TabsList.displayName = "TabsList";

export default TabsList;
export { TabsList };
