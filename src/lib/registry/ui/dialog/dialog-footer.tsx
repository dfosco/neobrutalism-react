"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/lib/registry/ui/button";
import { cn } from "@/lib/utils";

export type DialogFooterProps = React.ComponentPropsWithoutRef<"div"> & {
  showCloseButton?: boolean;
};

const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, children, showCloseButton = false, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="dialog-footer"
      className={cn(
        "bg-muted/50 -mx-4 -mb-4 rounded-b-xl border-t p-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton ? (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      ) : null}
    </div>
  )
);

DialogFooter.displayName = "DialogFooter";

export default DialogFooter;
