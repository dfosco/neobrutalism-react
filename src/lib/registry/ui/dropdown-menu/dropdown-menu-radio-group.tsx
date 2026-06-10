"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const DropdownMenuRadioGroup = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioGroup>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioGroup>
>((props, ref) => (
  <DropdownMenuPrimitive.RadioGroup ref={ref} data-slot="dropdown-menu-radio-group" {...props} />
));

DropdownMenuRadioGroup.displayName = DropdownMenuPrimitive.RadioGroup.displayName;

export { DropdownMenuRadioGroup };
