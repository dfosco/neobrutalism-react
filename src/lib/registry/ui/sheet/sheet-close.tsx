"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

const SheetClose = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Close>
>(({ ...props }, ref) => <SheetPrimitive.Close ref={ref} data-slot="sheet-close" {...props} />);
SheetClose.displayName = "SheetClose";

export default SheetClose;
export { SheetClose };
