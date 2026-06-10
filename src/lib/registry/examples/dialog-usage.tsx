import * as React from "react";
import * as Dialog from "@/lib/registry/ui/dialog";

export default function DialogUsage() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Are you absolutely sure?</Dialog.Title>
            <Dialog.Description>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </Dialog.Description>
          </Dialog.Header>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
