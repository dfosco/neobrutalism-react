import * as React from "react";
import * as Field from "@/lib/registry/ui/field";
import { Checkbox } from "@/lib/registry/ui/checkbox";

export default function FieldCheckbox() {
  return (
    <>
      <div className="w-full max-w-md">
        <Field.Group>
          <Field.Set>
            <Field.Legend variant="label">Show these items on the desktop</Field.Legend>
            <Field.Description>Select the items you want to show on the desktop.</Field.Description>
            <Field.Group className="gap-3">
              <Field.Field orientation="horizontal">
                <Checkbox id="finder-pref-9k2-hard-disks-ljj" defaultChecked />
                <Field.Label htmlFor="finder-pref-9k2-hard-disks-ljj" className="font-normal">
                  Hard disks
                </Field.Label>
              </Field.Field>
              <Field.Field orientation="horizontal">
                <Checkbox id="finder-pref-9k2-external-disks-1yg" />
                <Field.Label
                  htmlFor="finder-pref-9k2-external-disks-1yg"
                  className="font-normal"
                >
                  External disks
                </Field.Label>
              </Field.Field>
              <Field.Field orientation="horizontal">
                <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
                <Field.Label htmlFor="finder-pref-9k2-cds-dvds-fzt" className="font-normal">
                  CDs, DVDs, and iPods
                </Field.Label>
              </Field.Field>
              <Field.Field orientation="horizontal">
                <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
                <Field.Label
                  htmlFor="finder-pref-9k2-connected-servers-6l2"
                  className="font-normal"
                >
                  Connected servers
                </Field.Label>
              </Field.Field>
            </Field.Group>
          </Field.Set>
          <Field.Separator />
          <Field.Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
            <Field.Content>
              <Field.Label htmlFor="finder-pref-9k2-sync-folders-nep">
                Sync Desktop & Documents folders
              </Field.Label>
              <Field.Description>
                Your Desktop & Documents folders are being synced with iCloud Drive.
                You can access them from other devices.
              </Field.Description>
            </Field.Content>
          </Field.Field>
        </Field.Group>
      </div>
    </>
  );
}
