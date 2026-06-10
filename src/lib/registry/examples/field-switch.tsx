import * as React from "react";
import * as Field from "@/lib/registry/ui/field";
import { Switch } from "@/lib/registry/ui/switch";

export default function FieldSwitch() {
  return (
    <>
      <div className="w-full max-w-md">
        <Field.Field orientation="horizontal">
          <Field.Content>
            <Field.Label htmlFor="2fa">Multi-factor authentication</Field.Label>
            <Field.Description>
              Enable multi-factor authentication. If you do not have a two-factor device, you can
              use a one-time code sent to your email.
            </Field.Description>
          </Field.Content>
          <Switch id="2fa" />
        </Field.Field>
      </div>
    </>
  );
}
