import * as React from "react";
import * as Empty from "@/lib/registry/ui/empty";
import { Button } from "@/lib/registry/ui/button";
import * as Avatar from "@/lib/registry/ui/avatar";

export default function EmptyAvatar() {
  return (
    <>
      <Empty.Root>
        <Empty.Header>
          <Empty.Media variant="default">
            <Avatar.Root className="size-12">
              <Avatar.Image src="https://github.com/shadcn.png" className="grayscale" />
              <Avatar.Fallback>LR</Avatar.Fallback>
            </Avatar.Root>
          </Empty.Media>
          <Empty.Title>User Offline</Empty.Title>
          <Empty.Description>
            This user is currently offline. You can leave a message to notify them or
            try again later.
          </Empty.Description>
        </Empty.Header>
        <Empty.Content>
          <Button size="sm">Leave Message</Button>
        </Empty.Content>
      </Empty.Root>
    </>
  );
}
