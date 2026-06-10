"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "@/lib/utils";
import { SelectScrollDownButton } from "./select-scroll-down-button";
import { SelectScrollUpButton } from "./select-scroll-up-button";

interface SelectContentProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  portalProps?: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Portal>;
}

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(({ className, sideOffset = 4, position = "popper", portalProps, children, ...props }, ref) => (
  <SelectPrimitive.Portal {...portalProps}>
    <SelectPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      position={position}
      data-slot="select-content"
      className={cn(
        "p-1 bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-ring min-w-36 rounded-lg shadow-md ring duration-100 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 relative isolate z-50 overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport className={cn("h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width) scroll-my-1")}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

SelectContent.displayName = SelectPrimitive.Content.displayName;

export { SelectContent };
