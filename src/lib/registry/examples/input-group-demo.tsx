import * as React from "react"
import {
  ArrowUpIcon,
  CheckIcon,
  InfoIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react"

import * as DropdownMenu from "@/lib/registry/ui/dropdown-menu"
import * as InputGroup from "@/lib/registry/ui/input-group"
import { Separator } from "@/lib/registry/ui/separator"
import * as Tooltip from "@/lib/registry/ui/tooltip"

export default function InputGroupDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup.Root>
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <SearchIcon />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">12 results</InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="example.com" className="!ps-1" />
        <InputGroup.Addon>
          <InputGroup.Text>https://</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <InputGroup.Button className="rounded-full" size="icon-xs">
                <InfoIcon />
              </InputGroup.Button>
            </Tooltip.Trigger>
            <Tooltip.Content>This is content in a tooltip.</Tooltip.Content>
          </Tooltip.Root>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Textarea placeholder="Ask, Search or Chat..." />
        <InputGroup.Addon align="block-end">
          <InputGroup.Button variant="outline" className="rounded-full" size="icon-xs">
            <PlusIcon />
          </InputGroup.Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <InputGroup.Button variant="ghost">Auto</InputGroup.Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content side="top" align="start" className="[--radius:0.95rem]">
              <DropdownMenu.Item>Auto</DropdownMenu.Item>
              <DropdownMenu.Item>Agent</DropdownMenu.Item>
              <DropdownMenu.Item>Manual</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <InputGroup.Text className="ms-auto">52% used</InputGroup.Text>
          <Separator orientation="vertical" className="!h-4" />
          <InputGroup.Button variant="default" className="rounded-full" size="icon-xs">
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="@shadcn" />
        <InputGroup.Addon align="inline-end">
          <div className="bg-primary text-primary-foreground flex size-4 items-center justify-center rounded-full">
            <CheckIcon className="size-3" />
          </div>
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>
  )
}
