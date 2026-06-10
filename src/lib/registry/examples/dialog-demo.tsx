import * as React from "react";
import { Button, buttonVariants } from "@/lib/registry/ui/button";
import * as Dialog from "@/lib/registry/ui/dialog";
import { Input } from "@/lib/registry/ui/input";
import { Label } from "@/lib/registry/ui/label";

export default function DialogDemo() {
  return (
    <>
      <Dialog.Root>
        <form>
          <Dialog.Trigger type="button" className={buttonVariants({ variant: "outline" })}>
            Open Dialog
          </Dialog.Trigger>
          <Dialog.Content className="sm:max-w-[425px]">
            <Dialog.Header>
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description>
                Make changes to your profile here. Click save when you&apos;re done.
              </Dialog.Description>
            </Dialog.Header>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input id="username-1" name="username" defaultValue="@peduarte" />
              </div>
            </div>
            <Dialog.Footer>
              <Dialog.Close type="button" className={buttonVariants({ variant: "outline" })}>
                Cancel
              </Dialog.Close>
              <Button type="submit">Save changes</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </form>
      </Dialog.Root>
    </>
  );
}
