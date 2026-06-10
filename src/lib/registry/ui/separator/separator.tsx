"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

export type SeparatorProps = React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
  "data-slot"?: string;
};

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({ className, "data-slot": dataSlot = "separator", ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    data-slot={dataSlot}
    className={cn(
      "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:min-h-full data-[orientation=vertical]:w-px",
      className
    )}
    {...props}
  />
));

Separator.displayName = "Separator";

export default Separator;
