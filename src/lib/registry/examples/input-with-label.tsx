import * as React from "react"

import { Input } from "@/lib/registry/ui/input"
import { Label } from "@/lib/registry/ui/label"

export default function InputWithLabel() {
  const id = React.useId()

  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <Label htmlFor={`email-${id}`}>Email</Label>
      <Input type="email" id={`email-${id}`} placeholder="Email" />
    </div>
  )
}
