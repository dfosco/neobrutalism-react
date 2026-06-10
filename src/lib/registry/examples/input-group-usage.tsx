import * as React from "react"
import { SearchIcon } from "lucide-react"

import * as InputGroup from "@/lib/registry/ui/input-group"

export default function InputGroupUsage() {
  return (
    <InputGroup.Root>
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon>
        <SearchIcon />
      </InputGroup.Addon>
      <InputGroup.Addon align="inline-end">
        <InputGroup.Button>Search</InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup.Root>
  )
}
