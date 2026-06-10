import * as React from "react";

import { badgeVariants } from "@/lib/registry/ui/badge";

export default function BadgeLink() {
  return (
    <a href="/dashboard" className={badgeVariants({ variant: "outline" })}>Badge</a>
  );
}
