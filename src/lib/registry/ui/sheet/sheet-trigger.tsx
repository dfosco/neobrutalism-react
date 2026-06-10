"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

const SheetTrigger = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Trigger>
>(({ ...props }, ref) => <SheetPrimitive.Trigger ref={ref} data-slot="sheet-trigger" {...props} />);
SheetTrigger.displayName = "SheetTrigger";

export default SheetTrigger;
export { SheetTrigger };
