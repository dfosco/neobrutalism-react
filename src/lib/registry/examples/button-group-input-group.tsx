"use client";

import * as React from "react";
import { AudioLinesIcon, PlusIcon } from "lucide-react";

import { Button } from "@/lib/registry/ui/button";
import * as ButtonGroup from "@/lib/registry/ui/button-group";
import * as InputGroup from "@/lib/registry/ui/input-group";
import * as Tooltip from "@/lib/registry/ui/tooltip";

export default function ButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false);

  return (
    <ButtonGroup.Root className="[--radius:9999rem]">
      <ButtonGroup.Root>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root className="flex-1">
        <InputGroup.Root>
          <InputGroup.Input
            placeholder={voiceEnabled ? "Record and send audio..." : "Send a message..."}
            disabled={voiceEnabled}
          />
          <InputGroup.Addon align="inline-end">
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <InputGroup.Button
                  onClick={() => setVoiceEnabled((voiceEnabled) => !voiceEnabled)}
                  size="icon-xs"
                  data-active={voiceEnabled}
                  className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                  aria-pressed={voiceEnabled}
                >
                  <AudioLinesIcon />
                </InputGroup.Button>
              </Tooltip.Trigger>
              <Tooltip.Content>Voice Mode</Tooltip.Content>
            </Tooltip.Root>
          </InputGroup.Addon>
        </InputGroup.Root>
      </ButtonGroup.Root>
    </ButtonGroup.Root>
  );
}
