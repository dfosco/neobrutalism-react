"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Button, buttonVariants } from "@/lib/registry/ui/button";
import { Separator } from "@/lib/registry/ui/separator";
import { headerLinks, type SidebarNavGroup } from "@/lib/utils/navigation";
import CommandMenu from "@/components/command-menu";
import { githubRepoUrl } from "@/lib/constants";
import { Logo, GitHubIcon, ModeSwitcherIcon } from "@/components/icons";
import { SunIcon, MoonIcon, MonitorIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentLink } from "@/lib/utils/navigation";

interface HeaderProps {
  sidebarNavLinks: SidebarNavGroup[];
  componentLinks: ComponentLink[];
}

export default function Header({ sidebarNavLinks, componentLinks }: HeaderProps) {
  const { setTheme, theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const mobileNavLinks = [
    {
      title: "Menu",
      links: [
        { title: "Home", href: "/" },
        ...headerLinks,
      ],
    },
    ...sidebarNavLinks,
  ];

  return (
    <header className="sticky top-0 z-50 flex h-14 flex-row items-center justify-between gap-8 bg-background px-6 py-3">
      <PopoverPrimitive.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <PopoverPrimitive.Trigger
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "gap-2.5! py-0! px-2! lg:hidden"
          )}
        >
          <div className="flex h-8 flex-row items-center">
            <div className="relative size-4">
              <span
                className={cn(
                  "absolute inset-s-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
                  mobileMenuOpen ? "top-[0.4rem] -rotate-45" : "top-1"
                )}
              />
              <span
                className={cn(
                  "absolute inset-s-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
                  mobileMenuOpen ? "top-[0.4rem] rotate-45" : "top-2.5"
                )}
              />
            </div>
            <span className="sr-only">Toggle Menu</span>
          </div>
          <span className="flex items-center text-lg font-medium">Menu</span>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Content
          className="no-scrollbar h-[var(--radix-popover-content-available-height)] w-[var(--radix-popover-content-available-width)] overflow-y-auto rounded-none border-none bg-background/90 p-0 shadow-none backdrop-blur"
          align="start"
          side="bottom"
        >
          <div className="flex flex-col gap-8 overflow-auto p-6">
            {mobileNavLinks.map((navGroup) => (
              <div key={navGroup.title} className="flex flex-col gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  {navGroup.title}
                </span>
                <div className="flex flex-col gap-3">
                  {navGroup.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-2xl font-medium active:opacity-60"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>

      <NavigationMenu.Root className="max-lg:hidden">
        <NavigationMenu.List className="flex flex-row items-center gap-1">
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <Button variant="ghost" size="icon-sm" href="/" aria-label="Home">
                <Logo />
              </Button>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          {headerLinks.map((headerLink) => (
            <NavigationMenu.Item key={headerLink.href}>
              <NavigationMenu.Link asChild>
                <Button variant="ghost" size="sm" href={headerLink.href}>
                  {headerLink.title}
                </Button>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <div className="flex flex-row items-center gap-4">
        <div className="hidden md:flex md:w-auto md:flex-none">
          <CommandMenu componentLinks={componentLinks} />
        </div>
        <Separator className="h-4" orientation="vertical" />
        <Button
          variant="ghost"
          size="icon-sm"
          href={githubRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
        >
          <GitHubIcon />
        </Button>
        <Separator className="h-4" orientation="vertical" />
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className={buttonVariants({ variant: "ghost", size: "icon-sm" })}>
            <ModeSwitcherIcon />
            <span className="sr-only">Toggle theme</span>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            align="end"
            className="min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
          >
            <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
              <DropdownMenu.RadioItem
                value="light"
                className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground"
              >
                Light
                <span className="ml-auto">
                  <SunIcon className="size-4" />
                </span>
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem
                value="dark"
                className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground"
              >
                Dark
                <span className="ml-auto">
                  <MoonIcon className="size-4" />
                </span>
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem
                value="system"
                className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground"
              >
                System
                <span className="ml-auto">
                  <MonitorIcon className="size-4" />
                </span>
              </DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </header>
  );
}
