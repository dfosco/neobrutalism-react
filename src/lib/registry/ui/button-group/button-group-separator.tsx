"use client";

import * as React from "react";
import { Separator } from "@/lib/registry/ui/separator";
import { cn } from "@/lib/utils";

export type ButtonGroupSeparatorProps = React.ComponentPropsWithoutRef<typeof Separator>;

const ButtonGroupSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  ButtonGroupSeparatorProps
>(({ className, orientation = "vertical", ...props }, ref) => (
  <Separator
    ref={ref}
    data-slot="button-group-separator"
    orientation={orientation}
    className={cn(
      "bg-input relative self-stretch data-[orientation=horizontal]:mx-px data-[orientation=horizontal]:w-auto data-[orientation=vertical]:my-px data-[orientation=vertical]:h-auto",
      className
    )}
    {...props}
  />
));

ButtonGroupSeparator.displayName = "ButtonGroupSeparator";

export default ButtonGroupSeparator;
