import * as React from "react";

import { Label } from "@/lib/registry/ui/label";
import { Switch } from "@/lib/registry/ui/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
