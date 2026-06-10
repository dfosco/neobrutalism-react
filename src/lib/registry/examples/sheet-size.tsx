import * as React from "react";

import * as Sheet from "@/lib/registry/ui/sheet";

export default function SheetSize() {
  return (
    <Sheet.Root>
      <Sheet.Trigger>Open</Sheet.Trigger>
      <Sheet.Content className="w-[400px] sm:w-[540px]">
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
