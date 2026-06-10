import * as React from "react";

import { CircleFadingArrowUpIcon } from "lucide-react";
import { Button } from "@/lib/registry/ui/button";

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon" aria-label="Submit">
      <CircleFadingArrowUpIcon />
    </Button>
  );
}
