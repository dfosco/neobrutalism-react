"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, level = 3, ...props }, ref) => {
  const Heading = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <AccordionPrimitive.Header asChild>
      <Heading className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          data-slot="accordion-trigger"
          className={cn(
            "bg-primary text-primary-foreground px-3 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:after:border-ring rounded-none py-2.5 text-left text-sm font-medium hover:underline focus-visible:ring **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50",
            className
          )}
          {...props}
        >
          {children}
          <ChevronDownIcon
            data-slot="accordion-trigger-icon"
            className="cn-accordion-trigger-icon pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
          />
          <ChevronUpIcon
            data-slot="accordion-trigger-icon"
            className="cn-accordion-trigger-icon pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
          />
        </AccordionPrimitive.Trigger>
      </Heading>
    </AccordionPrimitive.Header>
  );
});

AccordionTrigger.displayName = "AccordionTrigger";

export default AccordionTrigger;
