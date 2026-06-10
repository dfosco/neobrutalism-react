"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CardContentProps = React.ComponentPropsWithoutRef<"div">;

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} data-slot="card-content" className={cn("px-6", className)} {...props}>
      {children}
    </div>
  )
);

CardContent.displayName = "CardContent";

export default CardContent;
