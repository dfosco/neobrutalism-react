import * as React from "react"
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react"

import * as Item from "@/lib/registry/ui/item"

export default function ItemLink() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item.Root asChild>
        <a href="#/">
          <Item.Content>
            <Item.Title>Visit our documentation</Item.Title>
            <Item.Description>
              Learn how to get started with our components.
            </Item.Description>
          </Item.Content>
          <Item.Actions>
            <ChevronRightIcon className="size-4" />
          </Item.Actions>
        </a>
      </Item.Root>
      <Item.Root variant="outline" asChild>
        <a href="#/" target="_blank" rel="noopener noreferrer">
          <Item.Content>
            <Item.Title>External resource</Item.Title>
            <Item.Description>
              Opens in a new tab with security attributes.
            </Item.Description>
          </Item.Content>
          <Item.Actions>
            <ExternalLinkIcon className="size-4" />
          </Item.Actions>
        </a>
      </Item.Root>
    </div>
  )
}
