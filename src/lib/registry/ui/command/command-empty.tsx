"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils";

export type CommandEmptyProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  CommandEmptyProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    data-slot="command-empty"
    className={cn("py-6 text-center text-sm", className)}
    {...props}
  />
));

CommandEmpty.displayName = "CommandEmpty";

export default CommandEmpty;
