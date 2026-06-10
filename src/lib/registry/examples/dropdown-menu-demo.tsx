import * as React from "react";
import { Button } from "@/lib/registry/ui/button";
import * as DropdownMenu from "@/lib/registry/ui/dropdown-menu";

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56" align="start">
        <DropdownMenu.Label>My Account</DropdownMenu.Label>
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            Profile
            <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            Billing
            <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            Settings
            <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            Keyboard shortcuts
            <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>Team</DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>Invite users</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Email</DropdownMenu.Item>
              <DropdownMenu.Item>Message</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>More...</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
          <DropdownMenu.Item>
            New Team
            <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>GitHub</DropdownMenu.Item>
        <DropdownMenu.Item>Support</DropdownMenu.Item>
        <DropdownMenu.Item disabled>API</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          Log out
          <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
