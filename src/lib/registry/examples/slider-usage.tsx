"use client";

import * as React from "react";

import { Slider } from "@/lib/registry/ui/slider";

export default function SliderUsage() {
  const [value, setValue] = React.useState(33);

  return <Slider value={[value]} onValueChange={(values) => setValue(values[0] ?? 0)} max={100} step={1} />;
}
