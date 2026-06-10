import * as React from "react";
import * as Field from "@/lib/registry/ui/field";
import { Textarea } from "@/lib/registry/ui/textarea";

export default function FieldTextarea() {
  return (
    <>
      <div className="w-full max-w-md">
        <Field.Set>
          <Field.Group>
            <Field.Field>
              <Field.Label htmlFor="feedback">Feedback</Field.Label>
              <Textarea id="feedback" placeholder="Your feedback helps us improve..." rows={4} />
              <Field.Description>Share your thoughts about our service.</Field.Description>
            </Field.Field>
          </Field.Group>
        </Field.Set>
      </div>
    </>
  );
}
