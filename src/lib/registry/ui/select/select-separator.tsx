"use client";

import * as React from "react";

import { Separator } from "@/lib/registry/ui/separator";
import { cn } from "@/lib/utils";

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    data-slot="select-separator"
    className={cn("bg-border -mx-1 my-1 h-px pointer-events-none", className)}
    {...props}
  />
));

SelectSeparator.displayName = "SelectSeparator";

export { SelectSeparator };
