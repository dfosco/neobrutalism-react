import * as React from "react";

import * as Tooltip from "@/lib/registry/ui/tooltip";

export default function TooltipUsageLayout({ children }: { children?: React.ReactNode }) {
  return <Tooltip.Provider>{children}</Tooltip.Provider>;
}
