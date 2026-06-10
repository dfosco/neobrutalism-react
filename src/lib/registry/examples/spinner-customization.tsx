import * as React from "react";
import { LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export default function SpinnerCustomization({
  className,
  ...props
}: React.ComponentProps<typeof LoaderIcon>) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}
