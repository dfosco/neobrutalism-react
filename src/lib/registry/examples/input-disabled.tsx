import * as React from "react"

import { Input } from "@/lib/registry/ui/input"

export default function InputDisabled() {
  return <Input disabled type="email" placeholder="Email" className="max-w-sm" />
}
