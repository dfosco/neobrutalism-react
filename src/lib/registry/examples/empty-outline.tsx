import * as React from "react";
import { CloudIcon } from "lucide-react";
import * as Empty from "@/lib/registry/ui/empty";
import { Button } from "@/lib/registry/ui/button";

export default function EmptyOutline() {
  return (
    <>
      <Empty.Root className="border border-dashed">
        <Empty.Header>
          <Empty.Media variant="icon">
            <CloudIcon />
          </Empty.Media>
          <Empty.Title>Cloud Storage Empty</Empty.Title>
          <Empty.Description>
            Upload files to your cloud storage to access them anywhere.
          </Empty.Description>
        </Empty.Header>
        <Empty.Content>
          <Button variant="outline" size="sm">Upload Files</Button>
        </Empty.Content>
      </Empty.Root>
    </>
  );
}
