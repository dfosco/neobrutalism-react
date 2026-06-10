import * as React from "react";

import { buttonVariants } from "@/lib/registry/ui/button";
import * as Tooltip from "@/lib/registry/ui/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className={buttonVariants({ variant: "outline" })}>Hover</Tooltip.Trigger>
        <Tooltip.Content>
          <p>Add to library</p>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
