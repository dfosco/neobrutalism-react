import * as React from "react";

import { GitBranchIcon } from "lucide-react";
import { Button } from "@/lib/registry/ui/button";

export default function ButtonWithIcon() {
  return (
    <Button variant="outline" size="sm">
      <GitBranchIcon /> New Branch
    </Button>
  );
}
