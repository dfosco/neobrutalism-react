"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils";

const CommandRoot = (CommandPrimitive as typeof CommandPrimitive & {
  Root?: typeof CommandPrimitive;
}).Root ?? CommandPrimitive;

export type CommandProps = React.ComponentPropsWithoutRef<typeof CommandRoot>;

const Command = React.forwardRef<React.ElementRef<typeof CommandRoot>, CommandProps>(
  ({ className, ...props }, ref) => (
    <CommandRoot
      ref={ref}
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground rounded-xl! p-1 flex size-full flex-col overflow-hidden",
        className
      )}
      {...props}
    />
  )
);

Command.displayName = "Command";

export default Command;
