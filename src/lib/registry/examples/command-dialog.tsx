"use client";

import * as React from "react";
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";
import * as Command from "@/lib/registry/ui/command";

export default function CommandDialog() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "j" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <>
      <p className="text-muted-foreground text-sm">
        Press
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <Command.Dialog open={open} onOpenChange={setOpen}>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Suggestions">
            <Command.Item>
              <CalendarIcon className="me-2 size-4" />
              <span>Calendar</span>
            </Command.Item>
            <Command.Item>
              <SmileIcon className="me-2 size-4" />
              <span>Search Emoji</span>
            </Command.Item>
            <Command.Item>
              <CalculatorIcon className="me-2 size-4" />
              <span>Calculator</span>
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Settings">
            <Command.Item>
              <UserIcon className="me-2 size-4" />
              <span>Profile</span>
              <Command.Shortcut>⌘P</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <CreditCardIcon className="me-2 size-4" />
              <span>Billing</span>
              <Command.Shortcut>⌘B</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <SettingsIcon className="me-2 size-4" />
              <span>Settings</span>
              <Command.Shortcut>⌘S</Command.Shortcut>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}
