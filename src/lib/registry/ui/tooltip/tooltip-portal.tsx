"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export interface TooltipPortalProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Portal> {}

const TooltipPortal = ({ ...props }: TooltipPortalProps) => <TooltipPrimitive.Portal {...props} />;
TooltipPortal.displayName = "TooltipPortal";

export default TooltipPortal;
export { TooltipPortal };
