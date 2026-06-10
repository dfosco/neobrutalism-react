"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils";

export type CommandSeparatorProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  CommandSeparatorProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    data-slot="command-separator"
    className={cn("bg-border -mx-1 h-px", className)}
    {...props}
  />
));

CommandSeparator.displayName = "CommandSeparator";

export default CommandSeparator;
