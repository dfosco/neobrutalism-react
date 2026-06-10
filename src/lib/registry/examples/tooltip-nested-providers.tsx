import * as React from "react";

import * as Tooltip from "@/lib/registry/ui/tooltip";

export default function TooltipNestedProviders() {
  return <Tooltip.Provider delayDuration={0}>{null}</Tooltip.Provider>;
}
