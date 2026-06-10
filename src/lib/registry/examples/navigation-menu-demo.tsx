"use client"

import * as React from "react"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import { useIsMobile } from "@/lib/registry/hooks/use-mobile"
import * as NavigationMenu from "@/lib/registry/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/lib/registry/ui/navigation-menu/navigation-menu-trigger"
import { cn } from "@/lib/utils"

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/components/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/components/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/components/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/components/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/components/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/components/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string
  href: string
  content: string
}

function ListItem({ title, content, href, className, ...props }: ListItemProps) {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <a
          href={href}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{content}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
}

export default function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu.Root viewport={isMobile}>
      <NavigationMenu.List className="flex-wrap">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Home</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenu.Link asChild className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden select-none focus:shadow-md md:p-6">
                  <a href="/">
                    <div className="mt-4 mb-2 text-lg font-medium">shadcn-svelte</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <ListItem
                href="/docs"
                title="Introduction"
                content="Re-usable components built using Bits UI and Tailwind CSS."
              />
              <ListItem
                href="/docs/installation"
                title="Installation"
                content="How to install dependencies and structure your app."
              />
              <ListItem
                href="/docs/components/typography"
                title="Typography"
                content="Styles for headings, paragraphs, lists...etc"
              />
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="grid w-[300px] gap-2 p-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component, index) => (
                <ListItem
                  key={index}
                  href={component.href}
                  title={component.title}
                  content={component.description}
                />
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <a href="/docs" className={navigationMenuTriggerStyle()}>
              Docs
            </a>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="hidden md:block">
          <NavigationMenu.Trigger>List</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="grid w-[300px] gap-4 p-2">
              <li>
                <NavigationMenu.Link href="##">
                  <div className="font-medium">Components</div>
                  <div className="text-muted-foreground">
                    Browse all components in the library.
                  </div>
                </NavigationMenu.Link>
                <NavigationMenu.Link href="##">
                  <div className="font-medium">Documentation</div>
                  <div className="text-muted-foreground">Learn how to use the library.</div>
                </NavigationMenu.Link>
                <NavigationMenu.Link href="##">
                  <div className="font-medium">Blog</div>
                  <div className="text-muted-foreground">Read our latest blog posts.</div>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="hidden md:block">
          <NavigationMenu.Trigger>Simple</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="grid w-[200px] gap-4 p-2">
              <li>
                <NavigationMenu.Link href="##">Components</NavigationMenu.Link>
                <NavigationMenu.Link href="##">Documentation</NavigationMenu.Link>
                <NavigationMenu.Link href="##">Blocks</NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="hidden md:block">
          <NavigationMenu.Trigger>With Icon</NavigationMenu.Trigger>

          <NavigationMenu.Content>
            <ul className="grid w-[200px] gap-4 p-2">
              <li>
                <NavigationMenu.Link href="##" className="flex-row items-center gap-2">
                  <CircleHelpIcon />
                  Backlog
                </NavigationMenu.Link>

                <NavigationMenu.Link href="##" className="flex-row items-center gap-2">
                  <CircleIcon />
                  To Do
                </NavigationMenu.Link>

                <NavigationMenu.Link href="##" className="flex-row items-center gap-2">
                  <CircleCheckIcon />
                  Done
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
