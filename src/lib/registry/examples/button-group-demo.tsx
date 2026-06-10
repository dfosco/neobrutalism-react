"use client";

import * as React from "react";
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react";

import { Button } from "@/lib/registry/ui/button";
import * as ButtonGroup from "@/lib/registry/ui/button-group";
import * as DropdownMenu from "@/lib/registry/ui/dropdown-menu";

export default function ButtonGroupDemo() {
  const [label, setLabel] = React.useState("personal");

  return (
    <ButtonGroup.Root>
      <ButtonGroup.Root className="hidden sm:flex">
        <Button variant="outline" size="icon-sm" aria-label="Go Back">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <Button size="sm" variant="outline">Archive</Button>
        <Button size="sm" variant="outline">Report</Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <Button size="sm" variant="outline">Snooze</Button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button variant="outline" size="icon-sm" aria-label="More Options">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end" className="w-52">
            <DropdownMenu.Group>
              <DropdownMenu.Item>
                <MailCheckIcon />
                Mark as Read
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ArchiveIcon />
                Archive
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item>
                <ClockIcon />
                Snooze
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <CalendarPlusIcon />
                Add to Calendar
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ListFilterIcon />
                Add to List
              </DropdownMenu.Item>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>
                  <TagIcon />
                  Label As...
                </DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.RadioGroup value={label} onValueChange={setLabel}>
                    <DropdownMenu.RadioItem value="personal">Personal</DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem value="work">Work</DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem value="other">Other</DropdownMenu.RadioItem>
                  </DropdownMenu.RadioGroup>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item className="text-destructive focus:text-destructive">
                <Trash2Icon />
                Trash
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </ButtonGroup.Root>
    </ButtonGroup.Root>
  );
}
