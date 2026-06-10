import * as React from "react"

import * as Select from "@/lib/registry/ui/select"

export default function SelectUsage() {
  return (
    <Select.Root>
      <Select.Trigger className="w-[180px]" />
      <Select.Content>
        <Select.Item value="light">Light</Select.Item>
        <Select.Item value="dark">Dark</Select.Item>
        <Select.Item value="system">System</Select.Item>
      </Select.Content>
    </Select.Root>
  )
}
