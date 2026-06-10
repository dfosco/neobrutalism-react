"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils";

export type CommandGroupProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & {
  heading?: string;
};

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  CommandGroupProps
>(({ className, heading, value, ...props }, ref) => {
  const id = React.useId();

  return (
    <CommandPrimitive.Group
      ref={ref}
      data-slot="command-group"
      className={cn(
        "text-foreground **:[[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium",
        className
      )}
      heading={heading}
      value={value ?? heading ?? `----${id}`}
      {...props}
    />
  );
});

CommandGroup.displayName = "CommandGroup";

export default CommandGroup;
