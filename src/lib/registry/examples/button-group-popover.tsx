import * as React from "react";
import { BotIcon, ChevronDownIcon } from "lucide-react";

import { Button } from "@/lib/registry/ui/button";
import * as ButtonGroup from "@/lib/registry/ui/button-group";
import * as Popover from "@/lib/registry/ui/popover";
import { Separator } from "@/lib/registry/ui/separator";
import { Textarea } from "@/lib/registry/ui/textarea";

export default function ButtonGroupPopover() {
  return (
    <ButtonGroup.Root>
      <Button variant="outline" size="sm">
        <BotIcon />
        Copilot
      </Button>
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button variant="outline" size="icon-sm" aria-label="Open Popover">
            <ChevronDownIcon />
          </Button>
        </Popover.Trigger>
        <Popover.Content align="end" className="rounded-xl p-0 text-sm">
          <div className="px-4 py-3">
            <div className="text-sm font-medium">Agent Tasks</div>
          </div>
          <Separator />
          <div className="p-4 text-sm *:[p:not(:last-child)]:mb-2">
            <Textarea
              placeholder="Describe your task in natural language."
              className="mb-4 resize-none"
            />
            <p className="font-medium">Start a new task with Copilot</p>
            <p className="text-muted-foreground">
              Describe your task in natural language. Copilot will work in the background and
              open a pull request for your review.
            </p>
          </div>
        </Popover.Content>
      </Popover.Root>
    </ButtonGroup.Root>
  );
}
