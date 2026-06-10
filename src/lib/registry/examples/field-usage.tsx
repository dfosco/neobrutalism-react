import * as React from "react";
import * as Field from "@/lib/registry/ui/field";
import { Input } from "@/lib/registry/ui/input";
import { Switch } from "@/lib/registry/ui/switch";

export default function FieldUsage() {
  return (
    <>
      <Field.Set>
        <Field.Legend>Profile</Field.Legend>
        <Field.Description>This appears on invoices and emails.</Field.Description>
        <Field.Group>
          <Field.Field>
            <Field.Label htmlFor="name">Full name</Field.Label>
            <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
            <Field.Description>This appears on invoices and emails.</Field.Description>
          </Field.Field>
          <Field.Field>
            <Field.Label htmlFor="username">Username</Field.Label>
            <Input id="username" autoComplete="off" aria-invalid />
            <Field.Error>Choose another username.</Field.Error>
          </Field.Field>
          <Field.Field orientation="horizontal">
            <Switch id="newsletter" />
            <Field.Label htmlFor="newsletter">Subscribe to the newsletter</Field.Label>
          </Field.Field>
        </Field.Group>
      </Field.Set>
    </>
  );
}
