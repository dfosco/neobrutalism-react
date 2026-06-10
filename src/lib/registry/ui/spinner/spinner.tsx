"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {}

const Spinner = ({
  className,
  role = "status",
  "aria-label": ariaLabel = "Loading",
  ...props
}: SpinnerProps) => {
  return (
    <Loader2
      role={role}
      aria-label={ariaLabel}
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
};
Spinner.displayName = "Spinner";

export default Spinner;
export { Spinner };
