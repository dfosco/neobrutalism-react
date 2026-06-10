"use client"

import * as React from "react"

import { Progress } from "@/lib/registry/ui/progress"

export default function ProgressDemo() {
  const [value, setValue] = React.useState(13)

  React.useEffect(() => {
    const timer = window.setTimeout(() => setValue(66), 500)
    return () => window.clearTimeout(timer)
  }, [])

  return <Progress value={value} max={100} className="w-[60%]" />
}
