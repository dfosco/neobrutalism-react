import * as React from "react";

import { SearchIcon } from "lucide-react";
import { Button } from "@/lib/registry/ui/button";
import * as ButtonGroup from "@/lib/registry/ui/button-group";
import { Input } from "@/lib/registry/ui/input";

export default function ButtonGroupInput() {
  return (
    <ButtonGroup.Root>
      <Input placeholder="SearchIcon..." />
      <Button variant="outline" size="icon" aria-label="SearchIcon">
        <SearchIcon />
      </Button>
    </ButtonGroup.Root>
  );
}
