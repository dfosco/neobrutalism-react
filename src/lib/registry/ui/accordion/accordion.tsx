"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

export type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    data-slot="accordion"
    className={cn(
      "border overflow-hidden rounded-lg cn-accordion flex w-full flex-col",
      className
    )}
    {...props}
  />
));

Accordion.displayName = "Accordion";

export default Accordion;
