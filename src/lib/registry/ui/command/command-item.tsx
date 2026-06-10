"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CommandItemProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ className, children, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    data-slot="command-item"
    className={cn(
      "group/command-item border border-transparent data-[selected=true]:border-border data-[selected=true]:text-foreground data-[selected=true]:*:[svg]:text-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  >
    {children}
    <CheckIcon className="cn-command-item-indicator ml-auto opacity-0 group-has-[[data-slot=command-shortcut]]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" />
  </CommandPrimitive.Item>
));

CommandItem.displayName = "CommandItem";

export default CommandItem;
