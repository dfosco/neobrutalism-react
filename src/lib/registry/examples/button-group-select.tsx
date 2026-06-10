"use client";

import * as React from "react";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/lib/registry/ui/button";
import * as ButtonGroup from "@/lib/registry/ui/button-group";
import { Input } from "@/lib/registry/ui/input";
import * as Select from "@/lib/registry/ui/select";

const CURRENCIES = [
  {
    value: "$",
    label: "US Dollar",
  },
  {
    value: "€",
    label: "Euro",
  },
  {
    value: "£",
    label: "British Pound",
  },
];

export default function ButtonGroupSelect() {
  const [currency, setCurrency] = React.useState("$");

  return (
    <ButtonGroup.Root>
      <ButtonGroup.Root>
        <Select.Root value={currency} onValueChange={setCurrency}>
          <Select.Trigger className="h-9! font-mono">{currency}</Select.Trigger>
          <Select.Content className="min-w-24">
            {CURRENCIES.map((currencyOption) => (
              <Select.Item key={currencyOption.value} value={currencyOption.value}>
                {currencyOption.value}
                <span className="text-muted-foreground">{currencyOption.label}</span>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
        <Input placeholder="10.00" pattern="[0-9]*" />
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <Button aria-label="Send" size="icon" variant="outline">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup.Root>
    </ButtonGroup.Root>
  );
}
