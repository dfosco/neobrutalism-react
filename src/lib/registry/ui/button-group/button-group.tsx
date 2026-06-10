"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const buttonGroupVariants = tv({
  base: "[&>input]:shadow-md [&>[data-slot=select-trigger]]:shadow-md has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md flex w-fit items-stretch [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  variants: {
    orientation: {
      horizontal:
        "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-md! [&>[data-slot]]:rounded-r-none [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0",
      vertical:
        "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-md! flex-col [&>[data-slot]]:rounded-b-none [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export type ButtonGroupOrientation = VariantProps<typeof buttonGroupVariants>["orientation"];
export type ButtonGroupProps = React.ComponentPropsWithoutRef<"div"> & {
  orientation?: ButtonGroupOrientation;
};

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, children, orientation = "horizontal", ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    >
      {children}
    </div>
  )
);

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
