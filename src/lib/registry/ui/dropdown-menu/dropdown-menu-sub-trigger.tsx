"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface DropdownMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
  inset?: boolean;
}

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ className, inset, children, asChild, ...props }, ref) => {
  const classes = cn(
    "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:ps-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    className
  );

  if (asChild) {
    return (
      <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        asChild
        data-slot="dropdown-menu-sub-trigger"
        data-inset={inset}
        className={classes}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.SubTrigger>
    );
  }

  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={classes}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ms-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
});

DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

export { DropdownMenuSubTrigger };
