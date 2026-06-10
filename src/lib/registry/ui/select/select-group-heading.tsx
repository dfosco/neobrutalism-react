"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "@/lib/utils";

const SelectGroupHeading = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    data-slot="select-group-heading"
    className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
    {...props}
  />
));

SelectGroupHeading.displayName = SelectPrimitive.Label.displayName;

export { SelectGroupHeading };
