"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

export type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
  size?: "default" | "sm" | "lg";
  loadingStatus?: "idle" | "loading" | "loaded" | "error";
};

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size = "default", loadingStatus: _loadingStatus, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    data-slot="avatar"
    data-size={size}
    className={cn(
      "size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten",
      className
    )}
    {...props}
  />
));

Avatar.displayName = "Avatar";

export default Avatar;
