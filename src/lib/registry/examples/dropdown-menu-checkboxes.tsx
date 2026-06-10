"use client";

import * as React from "react";
import { Button } from "@/lib/registry/ui/button";
import * as DropdownMenu from "@/lib/registry/ui/dropdown-menu";

export default function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Group>
          <DropdownMenu.Label>Appearance</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.CheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            Status Bar
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
            disabled
          >
            Activity Bar
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
            Panel
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
