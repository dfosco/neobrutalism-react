"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CardTitleProps = React.ComponentPropsWithoutRef<"div">;

const CardTitle = React.forwardRef<HTMLDivElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} data-slot="card-title" className={cn("leading-none font-semibold", className)} {...props}>
      {children}
    </div>
  )
);

CardTitle.displayName = "CardTitle";

export default CardTitle;
