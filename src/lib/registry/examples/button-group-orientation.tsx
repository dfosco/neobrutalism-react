import * as React from "react";

import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/lib/registry/ui/button";
import * as ButtonGroup from "@/lib/registry/ui/button-group";

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup.Root
      orientation="vertical"
      aria-label="Media controls"
      className="h-fit"
    >
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <MinusIcon />
      </Button>
    </ButtonGroup.Root>
  );
}
