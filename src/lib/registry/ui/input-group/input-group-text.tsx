"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const InputGroupText = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "text-muted-foreground gap-2 text-sm [&_svg:not([class*='size-'])]:size-4 flex items-center [&_svg]:pointer-events-none",
        className
      )}
      {...props}
    />
  )
);

InputGroupText.displayName = "InputGroupText";

export { InputGroupText };
