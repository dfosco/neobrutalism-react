"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const ItemDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      data-slot="item-description"
      className={cn(
        "text-muted-foreground text-left text-sm leading-normal group-data-[size=xs]/item:text-xs [&>a:hover]:text-primary line-clamp-2 font-normal [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
);

ItemDescription.displayName = "ItemDescription";

export { ItemDescription };
