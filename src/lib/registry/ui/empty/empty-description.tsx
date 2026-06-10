"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const EmptyDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="empty-description"
      className={cn(
        "text-sm/relaxed text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
);

EmptyDescription.displayName = "EmptyDescription";

export { EmptyDescription };
