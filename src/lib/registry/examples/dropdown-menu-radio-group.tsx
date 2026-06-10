"use client";

import * as React from "react";
import { Button } from "@/lib/registry/ui/button";
import * as DropdownMenu from "@/lib/registry/ui/dropdown-menu";

export default function DropdownMenuRadioGroup() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Group>
          <DropdownMenu.Label>Panel Position</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.RadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenu.RadioItem value="top">Top</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="bottom">Bottom</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="right">Right</DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
