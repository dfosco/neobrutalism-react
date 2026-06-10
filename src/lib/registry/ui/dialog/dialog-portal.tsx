"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export type DialogPortalProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Portal>;

export default function DialogPortal(props: DialogPortalProps) {
  return <DialogPrimitive.Portal {...props} />;
}
