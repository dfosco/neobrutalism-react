import * as React from "react";
import * as Field from "@/lib/registry/ui/field";
import { Button } from "@/lib/registry/ui/button";
import { Input } from "@/lib/registry/ui/input";
import { Textarea } from "@/lib/registry/ui/textarea";

export default function FieldResponsiveLayout() {
  return (
    <>
      <div className="w-full max-w-4xl">
        <form>
          <Field.Set>
            <Field.Legend>Profile</Field.Legend>
            <Field.Description>Fill in your profile information.</Field.Description>
            <Field.Separator />
            <Field.Group>
              <Field.Field orientation="responsive">
                <Field.Content>
                  <Field.Label htmlFor="name">Name</Field.Label>
                  <Field.Description>
                    Provide your full name for identification
                  </Field.Description>
                </Field.Content>
                <Input id="name" placeholder="Evil Rabbit" required />
              </Field.Field>
              <Field.Separator />
              <Field.Field orientation="responsive">
                <Field.Content>
                  <Field.Label htmlFor="message">Message</Field.Label>
                  <Field.Description>
                    You can write your message here. Keep it short, preferably under 100
                    characters.
                  </Field.Description>
                </Field.Content>
                <Textarea
                  id="message"
                  placeholder="Hello, world!"
                  required
                  className="min-h-[100px] resize-none sm:min-w-[300px]"
                />
              </Field.Field>
              <Field.Separator />
              <Field.Field orientation="responsive">
                <Button type="submit">Submit</Button>
                <Button type="button" variant="outline">Cancel</Button>
              </Field.Field>
            </Field.Group>
          </Field.Set>
        </form>
      </div>
    </>
  );
}
