"use client";

import * as React from "react";

interface DropdownMenuCheckboxGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string[];
  onValueChange?: (value: string[]) => void;
}

const DropdownMenuCheckboxGroup = React.forwardRef<HTMLDivElement, DropdownMenuCheckboxGroupProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} role="group" data-slot="dropdown-menu-checkbox-group" {...props}>
      {children}
    </div>
  )
);

DropdownMenuCheckboxGroup.displayName = "DropdownMenuCheckboxGroup";

export { DropdownMenuCheckboxGroup };
