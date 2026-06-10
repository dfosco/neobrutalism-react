"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CommandLinkItemProps = React.ComponentPropsWithoutRef<"a">;

const CommandLinkItem = React.forwardRef<HTMLAnchorElement, CommandLinkItemProps>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      data-slot="command-item"
      className={cn(
        "aria-selected:bg-accent aria-selected:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
);

CommandLinkItem.displayName = "CommandLinkItem";

export default CommandLinkItem;
