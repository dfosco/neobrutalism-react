"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Command, { type CommandProps } from "./command";
import * as Dialog from "@/lib/registry/ui/dialog";
import { cn } from "@/lib/utils";

export type CommandDialogProps = Omit<
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>,
  "children"
> &
  Omit<CommandProps, "children"> & {
    portalProps?: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Portal>;
    children: React.ReactNode;
    title?: string;
    description?: string;
    showCloseButton?: boolean;
    className?: string;
  };

export default function CommandDialog({
  open,
  defaultOpen,
  onOpenChange,
  modal,
  value,
  onValueChange,
  filter,
  shouldFilter,
  loop,
  disablePointerSelection,
  vimBindings,
  label,
  children,
  title = "Command Palette",
  description = "Search for a command to run...",
  showCloseButton = false,
  portalProps,
  className,
  ...props
}: CommandDialogProps) {
  return (
    <Dialog.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={modal}>
      <Dialog.Header className="sr-only">
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>
      </Dialog.Header>
      <Dialog.Content
        className={cn("rounded-xl! top-1/3 translate-y-0 overflow-hidden p-0", className)}
        showCloseButton={showCloseButton}
        portalProps={portalProps}
      >
        <Command
          value={value}
          onValueChange={onValueChange}
          filter={filter}
          shouldFilter={shouldFilter}
          loop={loop}
          disablePointerSelection={disablePointerSelection}
          vimBindings={vimBindings}
          label={label}
          {...props}
        >
          {children}
        </Command>
      </Dialog.Content>
    </Dialog.Root>
  );
}
