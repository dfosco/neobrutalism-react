"use client";

import * as React from "react";

import { Skeleton } from "@/lib/registry/ui/skeleton";
import { cn } from "@/lib/utils";

export interface SidebarMenuSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  showIcon?: boolean;
}

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  SidebarMenuSkeletonProps
>(({ className, showIcon = false, children, ...props }, ref) => {
  const [width, setWidth] = React.useState("70%");

  React.useEffect(() => {
    setWidth(`${Math.floor(Math.random() * 40) + 50}%`);
  }, []);

  return (
    <div
      ref={ref}
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon ? <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" /> : null}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={{ "--skeleton-width": width } as React.CSSProperties}
      />
      {children}
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

export default SidebarMenuSkeleton;
export { SidebarMenuSkeleton };
