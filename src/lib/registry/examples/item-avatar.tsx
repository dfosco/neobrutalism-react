import * as React from "react"
import { PlusIcon } from "lucide-react"

import * as Avatar from "@/lib/registry/ui/avatar"
import { Button } from "@/lib/registry/ui/button"
import * as Item from "@/lib/registry/ui/item"

export default function ItemAvatar() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item.Root variant="outline">
        <Item.Media>
          <Avatar.Root className="size-10">
            <Avatar.Image src="https://github.com/evilrabbit.png" />
            <Avatar.Fallback>ER</Avatar.Fallback>
          </Avatar.Root>
        </Item.Media>
        <Item.Content>
          <Item.Title>Evil Rabbit</Item.Title>
          <Item.Description>Last seen 5 months ago</Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button size="icon" variant="outline" className="rounded-full" aria-label="Invite">
            <PlusIcon />
          </Button>
        </Item.Actions>
      </Item.Root>
      <Item.Root variant="outline">
        <Item.Media>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar.Root className="hidden sm:flex">
              <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root className="hidden sm:flex">
              <Avatar.Image src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <Avatar.Fallback>LR</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root>
              <Avatar.Image src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <Avatar.Fallback>ER</Avatar.Fallback>
            </Avatar.Root>
          </div>
        </Item.Media>
        <Item.Content>
          <Item.Title>No Team Members</Item.Title>
          <Item.Description>Invite your team to collaborate on this project.</Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button size="sm" variant="outline">Invite</Button>
        </Item.Actions>
      </Item.Root>
    </div>
  )
}
