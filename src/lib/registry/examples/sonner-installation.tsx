import * as React from "react";

import { Toaster } from "@/lib/registry/ui/sonner";

export default function SonnerInstallation({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
