"use client";

import * as React from "react";

import { Slider } from "@/lib/registry/ui/slider";

export default function SliderDemo() {
  const [value, setValue] = React.useState(50);

  return (
    <Slider
      value={[value]}
      onValueChange={(values) => setValue(values[0] ?? 0)}
      max={100}
      step={1}
      className="max-w-[70%]"
    />
  );
}
