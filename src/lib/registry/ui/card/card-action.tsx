"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CardActionProps = React.ComponentPropsWithoutRef<"div">;

const CardAction = React.forwardRef<HTMLDivElement, CardActionProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardAction.displayName = "CardAction";

export default CardAction;
