"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export type DialogProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

export default function Dialog(props: DialogProps) {
  return <DialogPrimitive.Root {...props} />;
}
