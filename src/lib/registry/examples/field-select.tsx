"use client";

import * as React from "react";
import * as Field from "@/lib/registry/ui/field";
import * as Select from "@/lib/registry/ui/select";

const departments = [
  { value: "engineering", label: "Engineering" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
  { value: "sales", label: "Sales" },
  { value: "support", label: "Customer Support" },
  { value: "hr", label: "Human Resources" },
  { value: "finance", label: "Finance" },
  { value: "operations", label: "Operations" },
];

export default function FieldSelect() {
  const [department, setDepartment] = React.useState<string | undefined>(undefined);
  const departmentLabel = React.useMemo(
    () => departments.find((item) => item.value === department)?.label ?? "Choose department",
    [department]
  );

  return (
    <div className="w-full max-w-md">
      <Field.Field>
        <Field.Label htmlFor="department">Department</Field.Label>
        <Select.Root value={department} onValueChange={setDepartment}>
          <Select.Trigger id="department">{departmentLabel}</Select.Trigger>
          <Select.Content>
            {departments.map((department) => (
              <Select.Item key={department.value} value={department.value} label={department.label} />
            ))}
          </Select.Content>
        </Select.Root>
        <Field.Description>Select your department or area of work.</Field.Description>
      </Field.Field>
    </div>
  );
}
