"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

export type AccordionContentProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    data-slot="accordion-content"
    className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up text-sm overflow-hidden"
    {...props}
  >
    <div
      className={cn(
        "p-3 border-t [&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4",
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = "AccordionContent";

export default AccordionContent;
