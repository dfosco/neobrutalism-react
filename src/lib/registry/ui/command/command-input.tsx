"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CommandInputProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>;

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  CommandInputProps
>(({ className, ...props }, ref) => {
  const inputRef = React.useRef<React.ElementRef<typeof CommandPrimitive.Input>>(null);

  React.useImperativeHandle(ref, () => inputRef.current as React.ElementRef<typeof CommandPrimitive.Input>);

  return (
    <div data-slot="command-input-wrapper" className="p-1 pb-0">
      <div
        data-slot="input-group"
        role="group"
        className={cn(
          "group/input-group border-input dark:bg-input/30 ring-offset-background has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-offset-2 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-8 rounded-lg border transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring has-[[data-slot][aria-invalid=true]]:ring has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto",
          "h-8! rounded-lg! shadow-none! *:data-[slot=input-group-addon]:pl-2!"
        )}
      >
        <CommandPrimitive.Input
          ref={inputRef}
          data-slot="input-group-control"
          className={cn(
            "border-input bg-background selection:bg-primary dark:bg-input/30 selection:text-primary-foreground ring-offset-background placeholder:text-muted-foreground flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            "rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1",
            "w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
        <div
          role="group"
          data-slot="input-group-addon"
          data-align="inline-start"
          className="text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("button")) {
              return;
            }
            inputRef.current?.focus();
          }}
        >
          <SearchIcon className="size-4 shrink-0 opacity-50" />
        </div>
      </div>
    </div>
  );
});

CommandInput.displayName = "CommandInput";

export default CommandInput;
