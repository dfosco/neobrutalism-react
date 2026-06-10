"use client";

import * as React from "react";
import * as Field from "@/lib/registry/ui/field";
import { Slider } from "@/lib/registry/ui/slider";

export default function FieldSlider() {
  const [value, setValue] = React.useState([200, 800]);

  return (
    <div className="w-full max-w-md">
      <Field.Field>
        <Field.Label>Price Range</Field.Label>
        <Field.Description>
          Set your budget range ($<span className="font-medium tabular-nums">{value[0]}</span> -
          <span className="font-medium tabular-nums">{value[1]}</span>).
        </Field.Description>
        <Slider
          value={value}
          onValueChange={setValue}
          max={1000}
          min={0}
          step={10}
          className="mt-2 w-full"
          aria-label="Price Range"
        />
      </Field.Field>
    </div>
  );
}
