import * as React from "react";

import { PlusIcon } from "lucide-react";
import { Button } from "@/lib/registry/ui/button";
import * as ButtonGroup from "@/lib/registry/ui/button-group";

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup.Root>
      <Button variant="secondary">Button</Button>
      <ButtonGroup.Separator />
      <Button variant="secondary" size="icon">
        <PlusIcon />
      </Button>
    </ButtonGroup.Root>
  );
}
