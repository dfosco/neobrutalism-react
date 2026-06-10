import * as React from "react";
import * as Field from "@/lib/registry/ui/field";
import { Checkbox } from "@/lib/registry/ui/checkbox";

export default function FieldFieldGroup() {
  return (
    <>
      <div className="w-full max-w-md">
        <Field.Group>
          <Field.Set>
            <Field.Label>Responses</Field.Label>
            <Field.Description>
              Get notified when ChatGPT responds to requests that take time, like research or
              image generation.
            </Field.Description>
            <Field.Group data-slot="checkbox-group">
              <Field.Field orientation="horizontal">
                <Checkbox id="push" defaultChecked disabled />
                <Field.Label htmlFor="push" className="font-normal">Push notifications</Field.Label>
              </Field.Field>
            </Field.Group>
          </Field.Set>
          <Field.Separator />
          <Field.Set>
            <Field.Label>Tasks</Field.Label>
            <Field.Description>
              Get notified when tasks you've created have updates. <a href="#/">Manage tasks</a>
            </Field.Description>
            <Field.Group data-slot="checkbox-group">
              <Field.Field orientation="horizontal">
                <Checkbox id="push-tasks" />
                <Field.Label htmlFor="push-tasks" className="font-normal">
                  Push notifications
                </Field.Label>
              </Field.Field>
              <Field.Field orientation="horizontal">
                <Checkbox id="email-tasks" />
                <Field.Label htmlFor="email-tasks" className="font-normal">
                  Email notifications
                </Field.Label>
              </Field.Field>
            </Field.Group>
          </Field.Set>
        </Field.Group>
      </div>
    </>
  );
}
