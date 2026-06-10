"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { Button } from "@/lib/registry/ui/button";
import { cn } from "@/lib/utils";

const inputGroupButtonVariants = tv({
  base: "gap-2 text-sm flex items-center shadow-none",
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
      sm: "cn-input-group-button-size-sm",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

type InputGroupButtonSize = VariantProps<typeof inputGroupButtonVariants>["size"];

interface InputGroupButtonProps extends Omit<React.ComponentPropsWithoutRef<typeof Button>, "href" | "size"> {
  size?: InputGroupButtonSize;
}

const InputGroupButton = React.forwardRef<
  HTMLButtonElement,
  InputGroupButtonProps
>(({ className, type = "button", variant = "ghost", size = "xs", ...props }, ref) => (
  <Button
    ref={ref as React.Ref<HTMLButtonElement>}
    type={type as "button" | "submit" | "reset"}
    data-size={size}
    variant={variant}
    className={cn(inputGroupButtonVariants({ size }), className)}
    {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
  />
));

InputGroupButton.displayName = "InputGroupButton";

export { InputGroupButton };
export type { InputGroupButtonSize };
