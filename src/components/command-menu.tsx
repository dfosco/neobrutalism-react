"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Button } from "@/lib/registry/ui/button";
import { CornerDownLeftIcon } from "lucide-react";
import type { ComponentLink } from "@/lib/utils/navigation";
import { cn } from "@/lib/utils";

interface CommandMenuProps {
  componentLinks: ComponentLink[];
}

export default function CommandMenu({ componentLinks }: CommandMenuProps) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="ghost"
          className="bg-muted relative h-8 w-full justify-start pl-3 font-medium shadow-none sm:pr-12 md:w-48 lg:w-56 xl:w-64"
        >
          <span className="hidden lg:inline-flex">Search components...</span>
          <span className="inline-flex lg:hidden">Search...</span>
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            "fixed top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
            "w-full max-w-lg rounded-xl border bg-background p-2 pb-11 shadow-lg",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          )}
        >
          <Dialog.Title className="sr-only">Search components...</Dialog.Title>
          <Dialog.Description className="sr-only">
            Search for a component to navigate to...
          </Dialog.Description>
          <CommandPrimitive className="rounded-none bg-transparent">
            <CommandPrimitive.Input
              placeholder="Search components..."
              className="flex h-10 w-full rounded-md bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
            <CommandPrimitive.List
              tabIndex={-1}
              className="no-scrollbar min-h-80 scroll-pt-2 scroll-pb-1.5 overflow-y-auto"
            >
              <CommandPrimitive.Empty className="py-12 text-center text-sm text-muted-foreground">
                No results found.
              </CommandPrimitive.Empty>
              <CommandPrimitive.Group
                heading="Components"
                className="[&_[cmdk-group-heading]]:scroll-mt-16 [&_[cmdk-group-heading]]:p-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
              >
                {componentLinks.map((link) => (
                  <CommandPrimitive.Item
                    key={link.title}
                    className="flex h-9 cursor-default select-none items-center gap-2 rounded-md border border-transparent px-3 font-medium text-sm outline-none data-[selected=true]:border-input data-[selected=true]:bg-input/50"
                    value={link.title}
                    onSelect={() => {
                      setOpen(false);
                      if (link.href) router.push(link.href);
                    }}
                  >
                    <div className="aspect-square size-4 rounded-full border border-dashed border-muted-foreground" />
                    {link.title}
                  </CommandPrimitive.Item>
                ))}
              </CommandPrimitive.Group>
            </CommandPrimitive.List>
          </CommandPrimitive>
          <div className="absolute inset-x-0 bottom-0 z-20 flex h-10 items-center gap-2 rounded-b-xl border-t px-4 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="pointer-events-none inline-flex h-5 w-5 items-center justify-center rounded-sm border bg-muted font-sans text-xs font-medium text-muted-foreground select-none">
                <CornerDownLeftIcon className="size-3" />
              </div>
              Go to Page
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
