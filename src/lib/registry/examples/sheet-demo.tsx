import * as React from "react";

import { Button, buttonVariants } from "@/lib/registry/ui/button";
import { Input } from "@/lib/registry/ui/input";
import { Label } from "@/lib/registry/ui/label";
import * as Sheet from "@/lib/registry/ui/sheet";

export default function SheetDemo() {
  return (
    <Sheet.Root>
      <Sheet.Trigger className={buttonVariants({ variant: "outline" })}>Open</Sheet.Trigger>
      <Sheet.Content side="right">
        <Sheet.Header>
          <Sheet.Title>Edit profile</Sheet.Title>
          <Sheet.Description>
            Make changes to your profile here. Click save when you&apos;re done.
          </Sheet.Description>
        </Sheet.Header>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="name" className="text-end">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="username" className="text-end">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
        </div>
        <Sheet.Footer>
          <Button type="submit">Save changes</Button>
          <Sheet.Close className={buttonVariants({ variant: "outline" })}>Close</Sheet.Close>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Root>
  );
}
