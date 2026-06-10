"use client";

import * as React from "react";
import * as Command from "@/lib/registry/ui/command";

export default function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <Command.Dialog open={open} onOpenChange={setOpen}>
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Suggestions">
          <Command.Item>Calendar</Command.Item>
          <Command.Item>Search Emoji</Command.Item>
          <Command.Item>Calculator</Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
