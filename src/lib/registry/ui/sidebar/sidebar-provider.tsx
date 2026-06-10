"use client";

import * as React from "react";

import * as Tooltip from "@/lib/registry/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  SIDEBAR_COOKIE_MAX_AGE,
  SIDEBAR_COOKIE_NAME,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_ICON,
} from "./constants";
import { SidebarContext } from "./sidebar-context";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { SIDEBAR_KEYBOARD_SHORTCUT } from "./constants";

export interface SidebarProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const SidebarProvider = React.forwardRef<HTMLDivElement, SidebarProviderProps>(
  ({ defaultOpen = true, open: openProp, onOpenChange, className, style, children, ...props }, ref) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);

    const open = openProp ?? uncontrolledOpen;

    const setOpen = React.useCallback(
      (value: boolean) => {
        if (openProp === undefined) {
          setUncontrolledOpen(value);
        }

        onOpenChange?.(value);
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [onOpenChange, openProp]
    );

    const toggleSidebar = React.useCallback(() => {
      if (isMobile) {
        setOpenMobile((value) => !value);
        return;
      }

      setOpen(!open);
    }, [isMobile, open, setOpen]);

    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          if (isMobile) {
            setOpenMobile((value) => !value);
            return;
          }
          setOpen(!open);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMobile, open, setOpen]);

    const contextValue = React.useMemo(
      () => ({
        state: open ? ("expanded" as const) : ("collapsed" as const),
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
      }),
      [isMobile, open, openMobile, setOpen, toggleSidebar]
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <Tooltip.Provider delayDuration={0}>
          <div
            ref={ref}
            data-slot="sidebar-wrapper"
            style={{
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties}
            className={cn(
              "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
              className
            )}
            {...props}
          >
            {children}
          </div>
        </Tooltip.Provider>
      </SidebarContext.Provider>
    );
  }
);
SidebarProvider.displayName = "SidebarProvider";

export default SidebarProvider;
export { SidebarProvider };
