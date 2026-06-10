import * as React from "react";

import { buttonVariants } from "@/lib/registry/ui/button";

export default function ButtonHrefHelper() {
  return (
    <a href="/dashboard" className={buttonVariants({ variant: "outline" })}>
      Dashboard
    </a>
  );
}
