import * as React from "react";
import { PlusIcon } from "lucide-react";
import * as Empty from "@/lib/registry/ui/empty";
import { Button } from "@/lib/registry/ui/button";
import * as Avatar from "@/lib/registry/ui/avatar";

export default function EmptyAvatarGroup() {
  return (
    <>
      <Empty.Root className="flex-none border">
        <Empty.Header>
          <Empty.Media>
            <Avatar.Group className="grayscale">
              <Avatar.Root>
                <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                <Avatar.Fallback>CN</Avatar.Fallback>
              </Avatar.Root>
              <Avatar.Root>
                <Avatar.Image
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <Avatar.Fallback>LR</Avatar.Fallback>
              </Avatar.Root>
              <Avatar.Root>
                <Avatar.Image
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <Avatar.Fallback>ER</Avatar.Fallback>
              </Avatar.Root>
            </Avatar.Group>
          </Empty.Media>
          <Empty.Title>No Team Members</Empty.Title>
          <Empty.Description>Invite your team to collaborate on this project.</Empty.Description>
        </Empty.Header>
        <Empty.Content>
          <Button size="sm">
            <PlusIcon />
            Invite Members
          </Button>
        </Empty.Content>
      </Empty.Root>
    </>
  );
}
