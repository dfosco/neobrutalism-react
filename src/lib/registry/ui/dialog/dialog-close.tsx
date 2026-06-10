"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export type DialogCloseProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>;

const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  DialogCloseProps
>(({ ...props }, ref) => <DialogPrimitive.Close ref={ref} data-slot="dialog-close" {...props} />);

DialogClose.displayName = "DialogClose";

export default DialogClose;
