"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  size?: "sm" | "default";
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size = "default", ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    data-slot="switch"
    data-size={size}
    className={cn(
      "data-[state=checked]:bg-primary data-[state=unchecked]:bg-transparent focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:data-[state=unchecked]:bg-transparent shrink-0 rounded-full border focus-visible:ring aria-invalid:ring data-[size=default]:h-[24px] data-[size=default]:w-[48px] data-[size=sm]:h-[20px] data-[size=sm]:w-[40px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      className="bg-background dark:bg-foreground rounded-full group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-[state=checked]:translate-x-[24px] group-data-[size=sm]/switch:data-[state=checked]:translate-x-[20px] group-data-[size=default]/switch:data-[state=unchecked]:translate-x-[4px] group-data-[size=sm]/switch:data-[state=unchecked]:translate-x-[4px] pointer-events-none block border ring-0 transition-transform rtl:data-[state=checked]:translate-x-[calc(-100%)]"
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = "Switch";

export default Switch;
export { Switch };
