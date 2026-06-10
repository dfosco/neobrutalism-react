import * as React from "react";
import { FolderCodeIcon } from "lucide-react";
import * as Empty from "@/lib/registry/ui/empty";
import { Button } from "@/lib/registry/ui/button";

export default function EmptyUsage() {
  return (
    <>
      <Empty.Root>
        <Empty.Header>
          <Empty.Media variant="icon">
            <FolderCodeIcon />
          </Empty.Media>
          <Empty.Title>No data</Empty.Title>
          <Empty.Description>No data found</Empty.Description>
        </Empty.Header>
        <Empty.Content>
          <Button>Add data</Button>
        </Empty.Content>
      </Empty.Root>
    </>
  );
}
