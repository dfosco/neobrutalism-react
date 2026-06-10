"use client";

import * as React from "react";

import { Separator } from "@/lib/registry/ui/separator";
import { cn } from "@/lib/utils";

const ItemSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    data-slot="item-separator"
    orientation="horizontal"
    className={cn("my-2", className)}
    {...props}
  />
));

ItemSeparator.displayName = "ItemSeparator";

export { ItemSeparator };
