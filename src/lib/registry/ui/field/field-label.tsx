"use client";

import * as React from "react";

import { Label } from "@/lib/registry/ui/label";
import { cn } from "@/lib/utils";

const FieldLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
  <Label
    ref={ref}
    data-slot="field-label"
    className={cn(
      "has-data-checked:bg-primary/5 has-data-checked:border-primary dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5 group/field-label peer/field-label flex w-fit leading-snug",
      "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
      className
    )}
    {...props}
  />
));

FieldLabel.displayName = "FieldLabel";

export { FieldLabel };
