"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils";

export type CommandListProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  CommandListProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    data-slot="command-list"
    className={cn("no-scrollbar max-h-72 scroll-py-1 outline-none overflow-x-hidden overflow-y-auto", className)}
    {...props}
  />
));

CommandList.displayName = "CommandList";

export default CommandList;
