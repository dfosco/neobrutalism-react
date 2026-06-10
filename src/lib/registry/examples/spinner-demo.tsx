import * as React from "react";

import * as Item from "@/lib/registry/ui/item";
import { Spinner } from "@/lib/registry/ui/spinner";

export default function SpinnerDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
      <Item.Root variant="muted">
        <Item.Media>
          <Spinner />
        </Item.Media>
        <Item.Content>
          <Item.Title className="line-clamp-1">Processing payment...</Item.Title>
        </Item.Content>
        <Item.Content className="flex-none justify-end">
          <span className="text-sm tabular-nums">$100.00</span>
        </Item.Content>
      </Item.Root>
    </div>
  );
}
