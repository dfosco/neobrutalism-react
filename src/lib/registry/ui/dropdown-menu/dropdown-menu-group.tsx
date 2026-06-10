"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const DropdownMenuGroup = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>
>((props, ref) => <DropdownMenuPrimitive.Group ref={ref} data-slot="dropdown-menu-group" {...props} />);

DropdownMenuGroup.displayName = DropdownMenuPrimitive.Group.displayName;

export { DropdownMenuGroup };
