import * as React from "react";

import { Button } from "@/lib/registry/ui/button";
import * as ButtonGroup from "@/lib/registry/ui/button-group";

export default function ButtonGroupSeparator() {
  return (
    <ButtonGroup.Root>
      <Button variant="secondary" size="sm">Copy</Button>
      <ButtonGroup.Separator />
      <Button variant="secondary" size="sm">Paste</Button>
    </ButtonGroup.Root>
  );
}
