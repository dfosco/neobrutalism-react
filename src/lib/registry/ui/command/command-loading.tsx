"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";

export type CommandLoadingProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Loading>;

export default function CommandLoading(props: CommandLoadingProps) {
  return <CommandPrimitive.Loading {...props} />;
}
