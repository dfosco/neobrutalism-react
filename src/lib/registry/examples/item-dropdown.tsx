import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import * as Avatar from "@/lib/registry/ui/avatar"
import { Button } from "@/lib/registry/ui/button"
import * as DropdownMenu from "@/lib/registry/ui/dropdown-menu"
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

export default function ItemDropdown() {
  return (
    <div className="flex min-h-64 w-full max-w-md flex-col items-center gap-6">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant="outline" size="sm" className="w-fit">
            Select <ChevronDownIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="w-72 [--radius:0.65rem]" align="end">
          {people.map((person) => (
            <DropdownMenu.Item className="p-0" key={person.username}>
              <Item.Root size="sm" className="w-full p-2">
                <Item.Media>
                  <Avatar.Root className="size-8">
                    <Avatar.Image src={person.avatar} className="grayscale" />
                    <Avatar.Fallback>{person.username.charAt(0)}</Avatar.Fallback>
                  </Avatar.Root>
                </Item.Media>
                <Item.Content className="gap-0.5">
                  <Item.Title>{person.username}</Item.Title>
                  <Item.Description>{person.email}</Item.Description>
                </Item.Content>
              </Item.Root>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}
