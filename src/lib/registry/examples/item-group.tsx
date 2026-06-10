import * as React from "react"
import { PlusIcon } from "lucide-react"

import * as Avatar from "@/lib/registry/ui/avatar"
import { Button } from "@/lib/registry/ui/button"
import * as Item from "@/lib/registry/ui/item"

const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com",
  },
  {
    username: "maxleiter",
    avatar: "https://github.com/maxleiter.png",
    email: "maxleiter@vercel.com",
  },
  {
    username: "evilrabbit",
    avatar: "https://github.com/evilrabbit.png",
    email: "evilrabbit@vercel.com",
  },
]

export default function ItemGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item.Group>
        {people.map((person, index) => (
          <React.Fragment key={person.username}>
            <Item.Root>
              <Item.Media>
                <Avatar.Root>
                  <Avatar.Image src={person.avatar} className="grayscale" />
                  <Avatar.Fallback>{person.username.charAt(0)}</Avatar.Fallback>
                </Avatar.Root>
              </Item.Media>
              <Item.Content className="gap-1">
                <Item.Title>{person.username}</Item.Title>
                <Item.Description>{person.email}</Item.Description>
              </Item.Content>
              <Item.Actions>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <PlusIcon />
                </Button>
              </Item.Actions>
            </Item.Root>
            {index !== people.length - 1 && <Item.Separator />}
          </React.Fragment>
        ))}
      </Item.Group>
    </div>
  )
}
