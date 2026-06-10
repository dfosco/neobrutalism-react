"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollAreaScrollbar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>
>(({ className, orientation = "vertical", children, ...props }, ref) => (
  <ScrollAreaPrimitive.Scrollbar
    ref={ref}
    data-slot="scroll-area-scrollbar"
    orientation={orientation}
    className={cn(
      "flex touch-none p-px transition-colors select-none",
      orientation === "vertical" && "h-full w-2.5 border-s border-s-transparent",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
      className
    )}
    {...props}
  >
    {children}
    <ScrollAreaPrimitive.Thumb
      data-slot="scroll-area-thumb"
      className="bg-border relative flex-1 rounded-full"
    />
  </ScrollAreaPrimitive.Scrollbar>
));

ScrollAreaScrollbar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

export { ScrollAreaScrollbar };
