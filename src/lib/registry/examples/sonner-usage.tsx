"use client";

import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/lib/registry/ui/button";

export default function SonnerUsage() {
  return <Button onClick={() => toast("Hello world")}>Show toast</Button>;
}
