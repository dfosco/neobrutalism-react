"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    data-slot="dropdown-menu-checkbox-item"
    className={cn(
      "group/dropdown-menu-checkbox-item focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 ps-8 pe-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  >
    <span className="pointer-events-none absolute start-2 flex size-3.5 items-center justify-center">
      <MinusIcon className="hidden size-4 group-data-[state=indeterminate]/dropdown-menu-checkbox-item:block" />
      <CheckIcon className="size-4 group-data-[state=indeterminate]/dropdown-menu-checkbox-item:hidden group-data-[state=unchecked]/dropdown-menu-checkbox-item:text-transparent" />
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));

DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

export { DropdownMenuCheckboxItem };
