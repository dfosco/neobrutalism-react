"use client";

import * as React from "react";
import * as Field from "@/lib/registry/ui/field";
import * as RadioGroup from "@/lib/registry/ui/radio-group";

export default function FieldRadio() {
  const [plan, setPlan] = React.useState("monthly");

  return (
    <div className="w-full max-w-md">
      <Field.Set>
        <Field.Label>Subscription Plan</Field.Label>
        <Field.Description>Yearly and lifetime plans offer significant savings.</Field.Description>
        <RadioGroup.Root value={plan} onValueChange={setPlan}>
          <Field.Field orientation="horizontal">
            <RadioGroup.Item value="monthly" id="plan-monthly" />
            <Field.Label htmlFor="plan-monthly" className="font-normal">
              Monthly ($9.99/month)
            </Field.Label>
          </Field.Field>
          <Field.Field orientation="horizontal">
            <RadioGroup.Item value="yearly" id="plan-yearly" />
            <Field.Label htmlFor="plan-yearly" className="font-normal">
              Yearly ($99.99/year)
            </Field.Label>
          </Field.Field>
          <Field.Field orientation="horizontal">
            <RadioGroup.Item value="lifetime" id="plan-lifetime" />
            <Field.Label htmlFor="plan-lifetime" className="font-normal">
              Lifetime ($299.99)
            </Field.Label>
          </Field.Field>
        </RadioGroup.Root>
      </Field.Set>
    </div>
  );
}
