"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, value, defaultValue, min = 0, orientation = "horizontal", ...props }, ref) => {
  const values = value ?? defaultValue ?? [min];

  return (
    <SliderPrimitive.Root
      ref={ref}
      data-slot="slider"
      orientation={orientation}
      className={cn(
        "data-[orientation=vertical]:min-h-40 relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      value={value}
      defaultValue={defaultValue}
      min={min}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "border bg-muted rounded-full data-[orientation=horizontal]:h-3 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-3 bg-muted relative grow overflow-hidden data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn("bg-primary absolute select-none data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")}
        />
      </SliderPrimitive.Track>
      {values.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          data-slot="slider-thumb"
          className="border-ring ring-ring/50 relative size-5 rounded-full border bg-white transition-[color,box-shadow] after:absolute after:-inset-2 hover:ring focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring focus-visible:outline-hidden active:ring block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
          aria-label={`Thumb ${index + 1}`}
        />
      ))}
    </SliderPrimitive.Root>
  );
});
Slider.displayName = "Slider";

export default Slider;
export { Slider };
