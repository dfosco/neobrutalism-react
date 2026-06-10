"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const FieldTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="field-label"
      className={cn(
        "gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50 flex w-fit items-center leading-snug",
        className
      )}
      {...props}
    />
  )
);

FieldTitle.displayName = "FieldTitle";

export { FieldTitle };
