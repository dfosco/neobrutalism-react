import * as React from "react";

import * as Tooltip from "@/lib/registry/ui/tooltip";

export default function TooltipUsage() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger>Hover</Tooltip.Trigger>
      <Tooltip.Content>
        <p>Add to library</p>
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
