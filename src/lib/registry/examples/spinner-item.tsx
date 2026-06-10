import * as React from "react";

import { Button } from "@/lib/registry/ui/button";
import * as Item from "@/lib/registry/ui/item";
import { Progress } from "@/lib/registry/ui/progress";
import { Spinner } from "@/lib/registry/ui/spinner";

export default function SpinnerItem() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 [--radius:1rem]">
      <Item.Root variant="outline">
        <Item.Media variant="icon">
          <Spinner />
        </Item.Media>
        <Item.Content>
          <Item.Title>Downloading...</Item.Title>
          <Item.Description>129 MB / 1000 MB</Item.Description>
        </Item.Content>
        <Item.Actions className="hidden sm:flex">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
        </Item.Actions>
        <Item.Footer>
          <Progress value={75} />
        </Item.Footer>
      </Item.Root>
    </div>
  );
}
