import * as React from "react";
import { ArrowUpIcon } from "lucide-react";

import * as InputGroup from "@/lib/registry/ui/input-group";
import { Spinner } from "@/lib/registry/ui/spinner";

export default function SpinnerInputGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup.Root>
        <InputGroup.Input placeholder="Send a message..." disabled />
        <InputGroup.Addon align="inline-end">
          <Spinner />
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Textarea placeholder="Send a message..." disabled />
        <InputGroup.Addon align="block-end">
          <Spinner /> Validating...
          <InputGroup.Button className="ms-auto" variant="default">
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>
  );
}
