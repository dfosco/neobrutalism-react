"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonGroupTextProps = React.ComponentPropsWithoutRef<"div">;

const ButtonGroupText = React.forwardRef<HTMLDivElement, ButtonGroupTextProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="button-group-text"
      className={cn(
        "bg-muted gap-2 rounded-lg border px-2.5 text-sm font-medium [&_svg:not([class*='size-'])]:size-4 flex items-center [&_svg]:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

ButtonGroupText.displayName = "ButtonGroupText";

export default ButtonGroupText;
