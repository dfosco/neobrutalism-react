"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export type DialogTriggerProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>;

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  DialogTriggerProps
>(({ ...props }, ref) => <DialogPrimitive.Trigger ref={ref} data-slot="dialog-trigger" {...props} />);

DialogTrigger.displayName = "DialogTrigger";

export default DialogTrigger;
