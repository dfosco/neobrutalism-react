"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  "data-slot"?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, "data-slot": dataSlot = "input", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot={dataSlot}
        className={cn(
          "border-input bg-background selection:bg-primary dark:bg-input/30 selection:text-primary-foreground ring-offset-background placeholder:text-muted-foreground flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
