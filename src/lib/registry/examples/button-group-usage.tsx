import * as React from "react";

import * as ButtonGroup from "@/lib/registry/ui/button-group";
import { Button } from "@/lib/registry/ui/button";

export default function ButtonGroupUsage() {
  return (
    <ButtonGroup.Root>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ButtonGroup.Root>
  );
}
