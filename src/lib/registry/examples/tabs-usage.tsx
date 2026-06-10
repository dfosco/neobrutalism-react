import * as React from "react";

import * as Tabs from "@/lib/registry/ui/tabs";

export default function TabsUsage() {
  return (
    <Tabs.Root defaultValue="account" className="w-[400px]">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">Make changes to your account here.</Tabs.Content>
      <Tabs.Content value="password">Change your password here.</Tabs.Content>
    </Tabs.Root>
  );
}
