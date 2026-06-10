"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";
import { SheetOverlay } from "./sheet-overlay";
import { SheetPortal } from "./sheet-portal";

export const sheetVariants = tv({
  base: "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-md transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  variants: {
    side: {
      top: "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
      bottom:
        "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
      left: "data-[state=closed]:slide-out-to-start data-[state=open]:slide-in-from-start inset-y-0 start-0 h-full w-3/4 border-e sm:max-w-sm",
      right:
        "data-[state=closed]:slide-out-to-end data-[state=open]:slide-in-from-end inset-y-0 end-0 h-full w-3/4 border-s sm:max-w-sm",
    },
  },
  defaultVariants: {
    side: "right",
  },
});

export type SheetSide = VariantProps<typeof sheetVariants>["side"];

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  portalProps?: Omit<React.ComponentPropsWithoutRef<typeof SheetPortal>, "children">;
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ className, children, side = "right", portalProps, ...props }, ref) => (
  <SheetPortal {...portalProps}>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      data-slot="sheet-content"
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close asChild>
        <button
          type="button"
          className="ring-offset-background focus-visible:ring-ring focus-visible:ring-offset-2 absolute end-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus-visible:ring focus-visible:ring-offset focus-visible:outline-hidden disabled:pointer-events-none"
        >
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </button>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = "SheetContent";

export default SheetContent;
export { SheetContent };
