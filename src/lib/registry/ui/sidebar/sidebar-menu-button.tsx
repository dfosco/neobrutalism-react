"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";

import * as Tooltip from "@/lib/registry/ui/tooltip";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";

export const sidebarMenuButtonVariants = tv({
  base: "peer/menu-button ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-clip rounded-md p-2 text-start text-sm outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pe-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  variants: {
    variant: {
      default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      outline:
        "bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_var(--sidebar-border)] hover:shadow-[0_0_0_1px_var(--sidebar-accent)]",
    },
    size: {
      default: "h-8 text-sm",
      sm: "h-7 text-xs",
      lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type SidebarMenuButtonVariant = VariantProps<typeof sidebarMenuButtonVariants>["variant"];
export type SidebarMenuButtonSize = VariantProps<typeof sidebarMenuButtonVariants>["size"];

export interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  isActive?: boolean;
  variant?: SidebarMenuButtonVariant;
  size?: SidebarMenuButtonSize;
  tooltipContent?: React.ReactNode;
  tooltipContentProps?: Omit<React.ComponentPropsWithoutRef<typeof Tooltip.Content>, "children">;
}

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    {
      className,
      children,
      asChild = false,
      variant = "default",
      size = "default",
      isActive = false,
      tooltipContent,
      tooltipContentProps,
      type = "button",
      ...props
    },
    ref
  ) => {
    const sidebar = useSidebar();
    const Comp = asChild ? Slot : "button";

    const button = (
      <Comp
        ref={ref}
        data-slot="sidebar-menu-button"
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...({ type: asChild ? undefined : type } as Record<string, unknown>)}
        {...props}
      >
        {children}
      </Comp>
    );

    if (!tooltipContent) {
      return button;
    }

    return (
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{button}</Tooltip.Trigger>
        <Tooltip.Content
          side="right"
          align="center"
          hidden={sidebar.state !== "collapsed" || sidebar.isMobile}
          {...tooltipContentProps}
        >
          {tooltipContent}
        </Tooltip.Content>
      </Tooltip.Root>
    );
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";

export default SidebarMenuButton;
export { SidebarMenuButton };
