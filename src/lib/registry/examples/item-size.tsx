import * as React from "react"
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/lib/registry/ui/button"
import * as Item from "@/lib/registry/ui/item"

export default function ItemSize() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item.Root variant="outline">
        <Item.Content>
          <Item.Title>Basic Item</Item.Title>
          <Item.Description>A simple item with title and description.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button variant="outline" size="sm">Action</Button>
        </Item.Actions>
      </Item.Root>
      <Item.Root variant="outline" size="sm" asChild>
        <a href="#/">
          <Item.Media>
            <BadgeCheckIcon className="size-5" />
          </Item.Media>
          <Item.Content>
            <Item.Title>Your profile has been verified.</Item.Title>
          </Item.Content>
          <Item.Actions>
            <ChevronRightIcon className="size-4" />
          </Item.Actions>
        </a>
      </Item.Root>
    </div>
  )
}
