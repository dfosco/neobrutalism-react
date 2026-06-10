"use client";

import * as React from "react";

import { useIsMobile } from "@/lib/hooks/use-mobile";
import { SIDEBAR_KEYBOARD_SHORTCUT } from "./constants";

export type SidebarContextValue = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (value: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (value: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider");
  return context;
}

export { SidebarContext };
