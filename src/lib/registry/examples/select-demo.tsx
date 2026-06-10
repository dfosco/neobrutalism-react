"use client"

import * as React from "react"

import * as Select from "@/lib/registry/ui/select"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

export default function SelectDemo() {
  const [value, setValue] = React.useState("")

  const triggerContent = React.useMemo(
    () => fruits.find((fruit) => fruit.value === value)?.label ?? "Select a fruit",
    [value]
  )

  return (
    <Select.Root name="favoriteFruit" value={value} onValueChange={setValue}>
      <Select.Trigger className="w-[180px]">{triggerContent}</Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          {fruits.map((fruit) => (
            <Select.Item
              key={fruit.value}
              value={fruit.value}
              label={fruit.label}
              disabled={fruit.value === "grapes"}
            >
              {fruit.label}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}
