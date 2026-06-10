import * as React from "react";

import * as Sidebar from "@/lib/registry/ui/sidebar";

export default function SidebarDemo() {
  return (
    <Sidebar.Provider>
      <Sidebar.Root>
        <Sidebar.Header />
        <Sidebar.Content>
          <Sidebar.Group />
          <Sidebar.Group />
        </Sidebar.Content>
        <Sidebar.Footer />
      </Sidebar.Root>
      <main>
        <Sidebar.Trigger />
      </main>
    </Sidebar.Provider>
  );
}
