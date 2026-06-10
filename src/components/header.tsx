import * as React from "react";
import { Link } from "react-router";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Button, buttonVariants } from "@/lib/registry/ui/button";
import { Separator } from "@/lib/registry/ui/separator";
import { Logo, GitHubIcon } from "@/components/icons";
import { githubRepoUrl } from "@/lib/constants";

const headerLinks = [
  { title: "Docs", href: "/stickersheet" },
  { title: "Components", href: "/stickersheet" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-14 flex-row items-center justify-between gap-8 bg-background px-6 py-3">
      <NavigationMenu.Root className="max-lg:hidden">
        <NavigationMenu.List className="flex flex-row items-center gap-1">
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <Link to="/" className={buttonVariants({ variant: "ghost", size: "icon-sm" })} aria-label="Home">
                <Logo />
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          {headerLinks.map((headerLink) => (
            <NavigationMenu.Item key={headerLink.href + headerLink.title}>
              <NavigationMenu.Link asChild>
                <Link to={headerLink.href} className={buttonVariants({ variant: "ghost", size: "sm" })}>
                  {headerLink.title}
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <div className="lg:hidden">
        <Link to="/" className={buttonVariants({ variant: "ghost", size: "icon-sm" })} aria-label="Home">
          <Logo />
        </Link>
      </div>

      <div className="flex flex-row items-center gap-4">
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
      </div>
    </header>
  );
}
