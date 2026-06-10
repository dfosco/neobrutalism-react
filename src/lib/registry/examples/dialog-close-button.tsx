import * as React from "react";
import { buttonVariants } from "@/lib/registry/ui/button";
import * as Dialog from "@/lib/registry/ui/dialog";
import { Input } from "@/lib/registry/ui/input";
import { Label } from "@/lib/registry/ui/label";

export default function DialogCloseButton() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger className={buttonVariants({ variant: "outline" })}>Share</Dialog.Trigger>
        <Dialog.Content className="sm:max-w-md">
          <Dialog.Header>
            <Dialog.Title>Share link</Dialog.Title>
            <Dialog.Description>
              Anyone who has this link will be able to view this.
            </Dialog.Description>
          </Dialog.Header>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">Link</Label>
              <Input id="link" defaultValue="https://shadcn-svelte.com/docs/installation" />
            </div>
          </div>
          <Dialog.Footer className="sm:justify-start">
            <Dialog.Close className={buttonVariants({ variant: "secondary" })}>Close</Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
