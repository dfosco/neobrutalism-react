"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

const PopoverClose = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>
>((props, ref) => <PopoverPrimitive.Close ref={ref} data-slot="popover-close" {...props} />);

PopoverClose.displayName = PopoverPrimitive.Close.displayName;

export { PopoverClose };
