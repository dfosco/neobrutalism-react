import * as React from "react";
import * as Field from "@/lib/registry/ui/field";
import { Input } from "@/lib/registry/ui/input";

export default function FieldValidationAndErrors() {
  return (
    <>
      <Field.Field data-invalid>
        <Field.Label htmlFor="email">Email</Field.Label>
        <Input id="email" type="email" aria-invalid />
        <Field.Error>Enter a valid email address.</Field.Error>
      </Field.Field>
    </>
  );
}
