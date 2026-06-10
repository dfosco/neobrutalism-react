"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";
import { TooltipPortal } from "./tooltip-portal";

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  arrowClasses?: string;
  portalProps?: Omit<React.ComponentPropsWithoutRef<typeof TooltipPortal>, "children">;
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 0, side = "top", children, arrowClasses, portalProps, ...props }, ref) => (
  <TooltipPortal {...portalProps}>
    <TooltipPrimitive.Content
      ref={ref}
      data-slot="tooltip-content"
      sideOffset={sideOffset}
      side={side}
      className={cn(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-end-2 data-[side=right]:slide-in-from-start-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      )}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow asChild>
        <div
          className={cn(
            "bg-foreground z-50 size-2.5 rotate-45 rounded-[2px]",
            "data-[side=top]:translate-x-1/2 data-[side=top]:translate-y-[calc(-50%_+_2px)]",
            "data-[side=bottom]:-translate-x-1/2 data-[side=bottom]:-translate-y-[calc(-50%_+_1px)]",
            "data-[side=right]:translate-x-[calc(50%_+_2px)] data-[side=right]:translate-y-1/2",
            "data-[side=left]:-translate-y-[calc(50%_-_3px)]",
            arrowClasses
          )}
        />
      </TooltipPrimitive.Arrow>
    </TooltipPrimitive.Content>
  </TooltipPortal>
));
TooltipContent.displayName = "TooltipContent";

export default TooltipContent;
export { TooltipContent };
