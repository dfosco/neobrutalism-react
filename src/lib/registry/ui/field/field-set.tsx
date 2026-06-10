"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const FieldSet = React.forwardRef<HTMLFieldSetElement, React.FieldsetHTMLAttributes<HTMLFieldSetElement>>(
  ({ className, ...props }, ref) => (
    <fieldset
      ref={ref}
      data-slot="field-set"
      className={cn(
        "gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 flex flex-col",
        className
      )}
      {...props}
    />
  )
);

FieldSet.displayName = "FieldSet";

export { FieldSet };
