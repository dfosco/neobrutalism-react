"use client";

import * as React from "react";

import * as Sheet from "@/lib/registry/ui/sheet";
import { cn } from "@/lib/utils";
import { SIDEBAR_WIDTH_MOBILE } from "./constants";
import { useSidebar } from "./sidebar-context";

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const sidebar = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          ref={ref}
          className={cn(
            "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
            className
          )}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (sidebar.isMobile) {
      return (
        <Sheet.Root open={sidebar.openMobile} onOpenChange={sidebar.setOpenMobile}>
          <Sheet.Content
            data-sidebar="sidebar"
            data-slot="sidebar"
            data-mobile="true"
            className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
            style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE } as React.CSSProperties}
            side={side}
          >
            <Sheet.Header className="sr-only">
              <Sheet.Title>Sidebar</Sheet.Title>
              <Sheet.Description>Displays the mobile sidebar.</Sheet.Description>
            </Sheet.Header>
            <div ref={ref} className="flex h-full w-full flex-col" {...props}>
              {children}
            </div>
          </Sheet.Content>
        </Sheet.Root>
      );
    }

    return (
      <div
        ref={ref}
        className="text-sidebar-foreground group peer hidden md:block"
        data-state={sidebar.state}
        data-collapsible={sidebar.state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
        data-slot="sidebar"
      >
        <div
          data-slot="sidebar-gap"
          className={cn(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )}
        />
        <div
          data-slot="sidebar-container"
          className={cn(
            "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
            side === "left"
              ? "start-0 group-data-[collapsible=offcanvas]:start-[calc(var(--sidebar-width)*-1)]"
              : "end-0 group-data-[collapsible=offcanvas]:end-[calc(var(--sidebar-width)*-1)]",
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-e group-data-[side=right]:border-s",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            data-slot="sidebar-inner"
            className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-md"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);
Sidebar.displayName = "Sidebar";

export default Sidebar;
export { Sidebar };
