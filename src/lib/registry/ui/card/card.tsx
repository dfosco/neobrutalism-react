"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CardProps = React.ComponentPropsWithoutRef<"div">;

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card"
    className={cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-md", className)}
    {...props}
  >
    {children}
  </div>
));

Card.displayName = "Card";

export default Card;
