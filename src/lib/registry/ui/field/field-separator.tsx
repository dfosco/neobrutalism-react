"use client";

import * as React from "react";

import { Separator } from "@/lib/registry/ui/separator";
import { cn } from "@/lib/utils";

const FieldSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const hasContent = children != null;

    return (
      <div
        ref={ref}
        data-slot="field-separator"
        data-content={hasContent}
        className={cn(
          "-my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2 relative",
          className
        )}
        {...props}
      >
        <Separator className="absolute inset-0 top-1/2" />
        {children ? (
          <span
            className="text-muted-foreground px-2 bg-background relative mx-auto block w-fit"
            data-slot="field-separator-content"
          >
            {children}
          </span>
        ) : null}
      </div>
    );
  }
);

FieldSeparator.displayName = "FieldSeparator";

export { FieldSeparator };
