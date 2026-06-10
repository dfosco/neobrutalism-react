"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CardHeaderProps = React.ComponentPropsWithoutRef<"div">;

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

CardHeader.displayName = "CardHeader";

export default CardHeader;
