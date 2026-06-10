import * as React from "react";

import * as Sheet from "@/lib/registry/ui/sheet";

export default function SheetUsage() {
  return (
    <Sheet.Root>
      <Sheet.Trigger>Open</Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Are you absolutely sure?</Sheet.Title>
          <Sheet.Description>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </Sheet.Description>
        </Sheet.Header>
      </Sheet.Content>
    </Sheet.Root>
  );
}
