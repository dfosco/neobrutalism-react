import * as React from "react"

import { Label } from "@/lib/registry/ui/label"
import * as RadioGroup from "@/lib/registry/ui/radio-group"

export default function RadioGroupUsage() {
  return (
    <RadioGroup.Root defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroup.Item value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroup.Item value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup.Root>
  )
}
