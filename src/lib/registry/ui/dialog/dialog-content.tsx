"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import DialogPortal from "./dialog-portal";
import * as Dialog from "./index";
import { Button } from "@/lib/registry/ui/button";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  portalProps?: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Portal>;
  showCloseButton?: boolean;
};

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, portalProps, children, showCloseButton = true, ...props }, ref) => (
  <DialogPortal {...portalProps}>
    <Dialog.Overlay />
    <DialogPrimitive.Content
      ref={ref}
      data-slot="dialog-content"
      className={cn(
        "border shadow-2xl bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 grid max-w-[calc(100%-2rem)] gap-4 rounded-xl p-4 text-sm duration-100 sm:max-w-sm fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton ? (
        <DialogPrimitive.Close asChild>
          <Button data-slot="dialog-close" variant="ghost" className="absolute top-2 right-2" size="icon-sm">
            <XIcon />
            <span className="sr-only">Close</span>
          </Button>
        </DialogPrimitive.Close>
      ) : null}
    </DialogPrimitive.Content>
  </DialogPortal>
));

DialogContent.displayName = "DialogContent";

export default DialogContent;
