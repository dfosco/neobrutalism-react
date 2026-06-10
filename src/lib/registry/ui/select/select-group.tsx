"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "@/lib/utils";

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Group
    ref={ref}
    data-slot="select-group"
    className={cn("scroll-my-1 p-1", className)}
    {...props}
  />
));

SelectGroup.displayName = SelectPrimitive.Group.displayName;

export { SelectGroup };
