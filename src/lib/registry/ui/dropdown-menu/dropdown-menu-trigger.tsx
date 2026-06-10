"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>((props, ref) => <DropdownMenuPrimitive.Trigger ref={ref} data-slot="dropdown-menu-trigger" {...props} />);

DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

export { DropdownMenuTrigger };
