import * as React from "react";

import * as Avatar from "@/lib/registry/ui/avatar";

export default function AvatarUsage() {
  return (
    <Avatar.Root>
      <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root>
  );
}
