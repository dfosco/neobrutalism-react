import * as React from "react";
import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react";

import { Button } from "@/lib/registry/ui/button";
import * as ButtonGroup from "@/lib/registry/ui/button-group";
import * as DropdownMenu from "@/lib/registry/ui/dropdown-menu";

export default function ButtonGroupDropdownMenu() {
  return (
    <ButtonGroup.Root>
      <Button variant="outline">Follow</Button>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant="outline" className="ps-2!">
            <ChevronDownIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end" className="[--radius:1rem]">
          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <VolumeOffIcon />
              Mute Conversation
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <CheckIcon />
              Mark as Read
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <AlertTriangleIcon />
              Report Conversation
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <UserRoundXIcon />
              Block User
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <ShareIcon />
              Share Conversation
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <CopyIcon />
              Copy Conversation
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item variant="destructive">
              <TrashIcon />
              Delete Conversation
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </ButtonGroup.Root>
  );
}
