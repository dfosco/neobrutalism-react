import * as React from "react";
import * as Field from "@/lib/registry/ui/field";
import { Input } from "@/lib/registry/ui/input";

export default function FieldFieldset() {
  return (
    <>
      <div className="w-full max-w-md space-y-6">
        <Field.Set>
          <Field.Legend>Address Information</Field.Legend>
          <Field.Description>We need your address to deliver your order.</Field.Description>
          <Field.Group>
            <Field.Field>
              <Field.Label htmlFor="street">Street Address</Field.Label>
              <Input id="street" type="text" placeholder="123 Main St" />
            </Field.Field>
            <div className="grid grid-cols-2 gap-4">
              <Field.Field>
                <Field.Label htmlFor="city">City</Field.Label>
                <Input id="city" type="text" placeholder="New York" />
              </Field.Field>
              <Field.Field>
                <Field.Label htmlFor="zip">Postal Code</Field.Label>
                <Input id="zip" type="text" placeholder="90502" />
              </Field.Field>
            </div>
          </Field.Group>
        </Field.Set>
      </div>
    </>
  );
}
