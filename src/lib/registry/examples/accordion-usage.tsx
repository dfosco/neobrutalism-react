import * as React from "react";

import * as Accordion from "@/lib/registry/ui/accordion";

export default function AccordionUsage() {
  return (
    <Accordion.Root type="single">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
