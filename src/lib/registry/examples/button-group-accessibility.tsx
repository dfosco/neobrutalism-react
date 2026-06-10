import * as React from "react";

import * as ButtonGroup from "@/lib/registry/ui/button-group";
import { Button } from "@/lib/registry/ui/button";

export default function ButtonGroupAccessibility() {
  return (
    <ButtonGroup.Root aria-label="Button group">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ButtonGroup.Root>
  );
}
