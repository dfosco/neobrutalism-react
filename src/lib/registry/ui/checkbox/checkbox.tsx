"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, checked, defaultChecked, onCheckedChange, ...props }, ref) => {
  const [internalChecked, setInternalChecked] = React.useState<CheckboxPrimitive.CheckedState>(
    defaultChecked ?? false
  );
  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot="checkbox"
      className={cn(
        "border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border transition-shadow outline-none focus-visible:ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={(value) => {
        if (!isControlled) {
          setInternalChecked(value);
        }
        onCheckedChange?.(value);
      }}
      {...props}
    >
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className="text-current transition-none">
        {currentChecked === "indeterminate" ? (
          <MinusIcon className="size-3.5" />
        ) : currentChecked ? (
          <CheckIcon className="size-3.5" />
        ) : null}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
