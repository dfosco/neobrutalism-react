"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

export type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    data-slot="avatar-image"
    className={cn("rounded-full aspect-square size-full object-cover", className)}
    {...props}
  />
));

AvatarImage.displayName = "AvatarImage";

export default AvatarImage;
