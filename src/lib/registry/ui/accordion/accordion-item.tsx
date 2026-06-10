"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

export type AccordionItemProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    data-slot="accordion-item"
    className={cn("not-last:border-b", className)}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;
