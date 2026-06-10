"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CardFooterProps = React.ComponentPropsWithoutRef<"div">;

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardFooter.displayName = "CardFooter";

export default CardFooter;
