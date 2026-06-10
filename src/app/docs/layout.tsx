import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";
import { getComponentLinks } from "@/lib/utils/navigation.server";
import { buildSidebarNavLinks } from "@/lib/utils/navigation";
import * as Sidebar from "@/lib/registry/ui/sidebar";
import Link from "next/link";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const componentLinks = await getComponentLinks();
  const sidebarNavLinks = buildSidebarNavLinks(componentLinks);

  return (
    <Sidebar.Provider className="px-2">
      <Sidebar.Root
        className="sticky top-14.25 z-30 h-[calc(100svh-7.5rem)] shrink-0 overscroll-none bg-transparent max-md:hidden xl:h-[calc(100svh-10rem)]"
        collapsible="none"
      >
        <Sidebar.Content className="no-scrollbar overflow-x-hidden px-2">
          <div className="sticky -top-1 z-10 h-8 shrink-0 bg-linear-to-b from-background via-background/80 to-background/50 blur-xs" />
          {sidebarNavLinks.map((group) => (
            <Sidebar.Group key={group.title}>
              <Sidebar.GroupLabel className="font-medium text-muted-foreground">
                {group.title}
              </Sidebar.GroupLabel>
              <Sidebar.GroupContent>
                <Sidebar.Menu>
                  {group.links.map((link) => (
                    <Sidebar.MenuItem key={link.href}>
                      <Sidebar.MenuButton
                        className="h-7.5 w-fit text-[0.8rem] font-medium"
                        asChild
                      >
                        <Link href={link.href}>{link.title}</Link>
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                  ))}
                </Sidebar.Menu>
              </Sidebar.GroupContent>
            </Sidebar.Group>
          ))}
          <div className="sticky -bottom-1 z-10 h-16 shrink-0 bg-linear-to-t from-background via-background/80 to-background/50 blur-xs" />
        </Sidebar.Content>
      </Sidebar.Root>
      {children}
    </Sidebar.Provider>
  );
}
