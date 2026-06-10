"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type AvatarGroupProps = React.ComponentPropsWithoutRef<"div">;

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="avatar-group"
      className={cn(
        "cn-avatar-group *:data-[slot=avatar]:ring-background group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

AvatarGroup.displayName = "AvatarGroup";

export default AvatarGroup;
