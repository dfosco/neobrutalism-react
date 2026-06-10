"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const FieldContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="field-content"
      className={cn("gap-0.5 group/field-content flex flex-1 flex-col leading-snug", className)}
      {...props}
    />
  )
);

FieldContent.displayName = "FieldContent";

export { FieldContent };
