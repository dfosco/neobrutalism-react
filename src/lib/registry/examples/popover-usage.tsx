import * as React from "react"

import * as Popover from "@/lib/registry/ui/popover"

export default function PopoverUsage() {
  return (
    <Popover.Root>
      <Popover.Trigger>Open</Popover.Trigger>
      <Popover.Content>Place content for the popover here.</Popover.Content>
    </Popover.Root>
  )
}
