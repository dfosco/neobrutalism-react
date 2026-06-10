import * as React from "react";
import { CalculatorIcon, CalendarIcon, CreditCardIcon, SettingsIcon, SmileIcon, UserIcon } from "lucide-react";
import * as Command from "@/lib/registry/ui/command";

export default function CommandDemo() {
  return (
    <>
      <Command.Root className="rounded-lg border shadow-md md:min-w-[450px]">
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Suggestions">
            <Command.Item>
              <CalendarIcon />
              <span>Calendar</span>
            </Command.Item>
            <Command.Item>
              <SmileIcon />
              <span>Search Emoji</span>
            </Command.Item>
            <Command.Item disabled>
              <CalculatorIcon />
              <span>Calculator</span>
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Settings">
            <Command.Item>
              <UserIcon />
              <span>Profile</span>
              <Command.Shortcut>⌘P</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <CreditCardIcon />
              <span>Billing</span>
              <Command.Shortcut>⌘B</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <SettingsIcon />
              <span>Settings</span>
              <Command.Shortcut>⌘S</Command.Shortcut>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Root>
    </>
  );
}
