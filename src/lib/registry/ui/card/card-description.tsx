"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CardDescriptionProps = React.ComponentPropsWithoutRef<"p">;

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} data-slot="card-description" className={cn("text-muted-foreground text-sm", className)} {...props}>
      {children}
    </p>
  )
);

CardDescription.displayName = "CardDescription";

export default CardDescription;
