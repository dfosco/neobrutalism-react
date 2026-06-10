import * as React from "react";
import { ArrowUpRightIcon, FolderCodeIcon } from "lucide-react";
import { Button } from "@/lib/registry/ui/button";
import * as Empty from "@/lib/registry/ui/empty";

export default function EmptyDemo() {
  return (
    <Empty.Root>
      <Empty.Header>
        <Empty.Media variant="icon">
          <FolderCodeIcon />
        </Empty.Media>
        <Empty.Title>No Projects Yet</Empty.Title>
        <Empty.Description>
          You haven&apos;t created any projects yet. Get started by creating your first project.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <div className="flex gap-2">
          <Button>Create Project</Button>
          <Button variant="outline">Import Project</Button>
        </div>
      </Empty.Content>
      <Button href="#/" variant="link" className="text-muted-foreground" size="sm">
        Learn More <ArrowUpRightIcon className="inline" />
      </Button>
    </Empty.Root>
  );
}
