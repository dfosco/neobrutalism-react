import * as React from "react"

import { Input } from "@/lib/registry/ui/input"
import { Label } from "@/lib/registry/ui/label"

export default function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
}
