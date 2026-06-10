"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const FieldGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="field-group"
      className={cn(
        "gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col",
        className
      )}
      {...props}
    />
  )
);

FieldGroup.displayName = "FieldGroup";

export { FieldGroup };
