"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ ...props }, ref) => <TooltipPrimitive.Trigger ref={ref} data-slot="tooltip-trigger" {...props} />);
TooltipTrigger.displayName = "TooltipTrigger";

export default TooltipTrigger;
export { TooltipTrigger };
