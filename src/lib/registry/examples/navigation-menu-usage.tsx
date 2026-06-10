import * as React from "react"

import * as NavigationMenu from "@/lib/registry/ui/navigation-menu"

export default function NavigationMenuUsage() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Item One</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.Link>Link</NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
