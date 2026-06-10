"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CommandShortcutProps = React.ComponentPropsWithoutRef<"span">;

const CommandShortcut = React.forwardRef<HTMLSpanElement, CommandShortcutProps>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground group-data-selected/command-item:text-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
);

CommandShortcut.displayName = "CommandShortcut";

export default CommandShortcut;
