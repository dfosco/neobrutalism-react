"use client";

import * as React from "react";

import { Input } from "@/lib/registry/ui/input";
import { cn } from "@/lib/utils";

const InputGroupInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentPropsWithoutRef<typeof Input>
>(({ className, ...props }, ref) => (
  <Input
    ref={ref}
    data-slot="input-group-control"
    className={cn(
      "rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1",
      className
    )}
    {...props}
  />
));

InputGroupInput.displayName = "InputGroupInput";

export { InputGroupInput };
