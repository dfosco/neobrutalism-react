"use client";

import * as React from "react";
import * as Field from "@/lib/registry/ui/field";
import * as RadioGroup from "@/lib/registry/ui/radio-group";

export default function FieldChoiceCard() {
  const [computeEnvironment, setComputeEnvironment] = React.useState("kubernetes");

  return (
    <div className="w-full max-w-md">
      <Field.Group>
        <Field.Set>
          <Field.Label htmlFor="compute-environment-p8w">Compute Environment</Field.Label>
          <Field.Description>Select the compute environment for your cluster.</Field.Description>
          <RadioGroup.Root value={computeEnvironment} onValueChange={setComputeEnvironment}>
            <Field.Label htmlFor="kubernetes-r2h">
              <Field.Field orientation="horizontal">
                <Field.Content>
                  <Field.Title>Kubernetes</Field.Title>
                  <Field.Description>Run GPU workloads on a K8s configured cluster.</Field.Description>
                </Field.Content>
                <RadioGroup.Item value="kubernetes" id="kubernetes-r2h" />
              </Field.Field>
            </Field.Label>
            <Field.Label htmlFor="vm-z4k">
              <Field.Field orientation="horizontal">
                <Field.Content>
                  <Field.Title>Virtual Machine</Field.Title>
                  <Field.Description>
                    Access a VM configured cluster to run GPU workloads.
                  </Field.Description>
                </Field.Content>
                <RadioGroup.Item value="vm" id="vm-z4k" />
              </Field.Field>
            </Field.Label>
          </RadioGroup.Root>
        </Field.Set>
      </Field.Group>
    </div>
  );
}
