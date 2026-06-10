"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface FieldLegendProps extends React.HTMLAttributes<HTMLLegendElement> {
  variant?: "legend" | "label";
}

const FieldLegend = React.forwardRef<HTMLLegendElement, FieldLegendProps>(
  ({ className, variant = "legend", ...props }, ref) => (
    <legend
      ref={ref}
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base",
        className
      )}
      {...props}
    />
  )
);

FieldLegend.displayName = "FieldLegend";

export { FieldLegend };
