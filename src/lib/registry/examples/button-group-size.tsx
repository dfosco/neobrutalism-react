import * as React from "react";

import { PlusIcon } from "lucide-react";
import { Button } from "@/lib/registry/ui/button";
import * as ButtonGroup from "@/lib/registry/ui/button-group";

export default function ButtonGroupSize() {
  return (
    <div className="flex flex-col items-start gap-8">
      <ButtonGroup.Root>
        <Button variant="outline" size="sm">Small</Button>
        <Button variant="outline" size="sm">Button</Button>
        <Button variant="outline" size="sm">Group</Button>
        <Button variant="outline" size="icon-sm">
          <PlusIcon />
        </Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Group</Button>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <Button variant="outline" size="lg">Large</Button>
        <Button variant="outline" size="lg">Button</Button>
        <Button variant="outline" size="lg">Group</Button>
        <Button variant="outline" size="icon-lg">
          <PlusIcon />
        </Button>
      </ButtonGroup.Root>
    </div>
  );
}
