"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type AvatarGroupCountProps = React.ComponentPropsWithoutRef<"div">;

const AvatarGroupCount = React.forwardRef<HTMLDivElement, AvatarGroupCountProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="avatar-group-count"
      className={cn(
        "bg-muted text-muted-foreground size-8 rounded-full text-sm group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 ring-background relative flex shrink-0 items-center justify-center ring",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

AvatarGroupCount.displayName = "AvatarGroupCount";

export default AvatarGroupCount;
