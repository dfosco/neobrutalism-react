import * as React from "react";

import { Badge } from "@/lib/registry/ui/badge";
import { Spinner } from "@/lib/registry/ui/spinner";

export default function SpinnerBadge() {
  return (
    <div className="flex items-center gap-2">
      <Badge>
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Loading
      </Badge>
    </div>
  );
}
