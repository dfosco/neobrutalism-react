"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

export interface SheetPortalProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Portal> {}

const SheetPortal = ({ ...props }: SheetPortalProps) => <SheetPrimitive.Portal {...props} />;
SheetPortal.displayName = "SheetPortal";

export default SheetPortal;
export { SheetPortal };
