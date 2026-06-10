"use client";

import * as React from "react";

import { Textarea } from "@/lib/registry/ui/textarea";
import { cn } from "@/lib/utils";

const InputGroupTextarea = React.forwardRef<
  React.ElementRef<typeof Textarea>,
  React.ComponentPropsWithoutRef<typeof Textarea>
>(({ className, ...props }, ref) => (
  <Textarea
    ref={ref}
    data-slot="input-group-control"
    className={cn(
      "rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1 resize-none",
      className
    )}
    {...props}
  />
));

InputGroupTextarea.displayName = "InputGroupTextarea";

export { InputGroupTextarea };
