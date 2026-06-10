"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";
import { ScrollAreaScrollbar } from "./scroll-area-scrollbar";

interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  orientation?: "vertical" | "horizontal" | "both";
  scrollbarXClasses?: string;
  scrollbarYClasses?: string;
  viewportRef?: React.Ref<HTMLDivElement>;
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(
  (
    {
      className,
      orientation = "vertical",
      scrollbarXClasses = "",
      scrollbarYClasses = "",
      viewportRef,
      children,
      ...props
    },
    ref
  ) => (
    <ScrollAreaPrimitive.Root ref={ref} data-slot="scroll-area" className={cn("relative", className)} {...props}>
      <ScrollAreaPrimitive.Viewport
        ref={viewportRef}
        data-slot="scroll-area-viewport"
        className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      {orientation === "vertical" || orientation === "both" ? (
        <ScrollAreaScrollbar orientation="vertical" className={scrollbarYClasses} />
      ) : null}
      {orientation === "horizontal" || orientation === "both" ? (
        <ScrollAreaScrollbar orientation="horizontal" className={scrollbarXClasses} />
      ) : null}
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
);

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export { ScrollArea };
