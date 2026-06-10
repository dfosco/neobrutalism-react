import * as React from "react";
import * as Field from "@/lib/registry/ui/field";

export default function FieldAnatomy() {
  return (
    <>
      <Field.Field>
        <Field.Label htmlFor="input-id">Label</Field.Label>
        {/*Input, Select, Switch, etc.*/}
        <Field.Description>Optional helper text.</Field.Description>
        <Field.Error>Validation message.</Field.Error>
      </Field.Field>
    </>
  );
}
