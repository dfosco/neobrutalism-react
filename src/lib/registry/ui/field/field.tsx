"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const fieldVariants = tv({
  base: "data-[invalid=true]:text-destructive gap-2 group/field flex w-full",
  variants: {
    orientation: {
      vertical: "cn-field-orientation-vertical flex-col [&>*]:w-full [&>.sr-only]:w-auto",
      horizontal:
        "cn-field-orientation-horizontal flex-row items-center has-[>[data-slot=field-content]]:items-start [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      responsive:
        "cn-field-orientation-responsive flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:has-[>[data-slot=field-content]]:items-start [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

type FieldOrientation = VariantProps<typeof fieldVariants>["orientation"];

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: FieldOrientation;
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation = "vertical", ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
);

Field.displayName = "Field";

export { Field, fieldVariants };
export type { FieldOrientation };
