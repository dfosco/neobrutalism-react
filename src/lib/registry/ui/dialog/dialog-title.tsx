"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export type DialogTitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogTitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    data-slot="dialog-title"
    className={cn("text-base leading-none font-medium", className)}
    {...props}
  />
));

DialogTitle.displayName = "DialogTitle";

export default DialogTitle;
