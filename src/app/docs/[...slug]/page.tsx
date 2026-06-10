import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { getComponentLinks } from "@/lib/utils/navigation.server";
import { buildSidebarNavLinks, findNeighbors } from "@/lib/utils/navigation";
import { Badge } from "@/lib/registry/ui/badge";
import { Button } from "@/lib/registry/ui/button";
import DocsToc from "@/components/docs-toc";
import ComponentsList from "@/components/components-list";
import { githubRepoUrl } from "@/lib/constants";
import { generateToc } from "@/lib/utils/toc";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon, CodeIcon } from "lucide-react";
import DocsContent from "@/components/docs-content";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateStaticParams() {
  const docsDir = path.join(process.cwd(), "src/lib/content/docs");
  if (!fs.existsSync(docsDir)) return [];

  const slugs: { slug: string[] }[] = [];

  function walk(dir: string, prefix: string[]) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath, [...prefix, entry]);
      } else if (entry.endsWith(".mdx") || entry.endsWith(".md")) {
        const slug = entry.replace(/\.(mdx?|md)$/, "");
        slugs.push({ slug: slug === "index" ? prefix : [...prefix, slug] });
      }
    }
  }

  walk(docsDir, []);
  return slugs;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const slugPath = slug?.join("/") ?? "";
  const filePath = resolveDocPath(slugPath);
  if (!filePath) return {};

  const source = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(source);
  return {
    title: data.title ? `${data.title} - Neobrutalism` : "Neobrutalism",
    description: data.description,
  };
}

function resolveDocPath(slug: string): string | null {
  const docsDir = path.join(process.cwd(), "src/lib/content/docs");
  const base = slug || "index";
  const extensions = [".mdx", ".md"];
  for (const ext of extensions) {
    const p = path.join(docsDir, `${base}${ext}`);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

export default async function DocsPage({ params }: Props) {
  const { slug } = await params;
  const slugPath = slug?.join("/") ?? "";
  const filePath = resolveDocPath(slugPath);

  if (!filePath) notFound();

  const source = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(source);

  const { entries: toc } = generateToc(source);

  const componentLinks = await getComponentLinks();
  const sidebarNavLinks = buildSidebarNavLinks(componentLinks);
  const currentPath = `/docs/${slugPath || ""}`.replace(/\/$/, "") || "/docs";
  const neighbors = findNeighbors(currentPath, sidebarNavLinks);

  const isComponentPage = slugPath.startsWith("components/");

  return (
    <div className="flex min-w-0 flex-row-reverse items-stretch pt-4 text-[1.05rem] sm:text-[15px] xl:w-full">
      <div className="sticky top-14.25 z-30 ms-auto hidden h-[calc(100svh-1.5rem)] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex xl:h-[calc(100svh-4rem)]">
        {toc.length > 0 && (
          <div className="no-scrollbar overflow-y-auto px-8 pt-4">
            <DocsToc entries={toc} slug={slugPath || "index"} />
            <div className="h-12" />
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-2xl min-w-0 flex-1 flex-col px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between pb-2">
                <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
                  {data.title}
                </h1>
                <div className="fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t border-border/50 bg-background/80 px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
                  {neighbors.previous && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="ms-auto size-8 shadow-none md:size-7"
                      href={neighbors.previous.href}
                    >
                      <ArrowLeftIcon />
                      <span className="sr-only">Previous</span>
                    </Button>
                  )}
                  {neighbors.next && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="size-8 shadow-none md:size-7"
                      href={neighbors.next.href}
                    >
                      <span className="sr-only">Next</span>
                      <ArrowRightIcon />
                    </Button>
                  )}
                </div>
              </div>
              {data.description && (
                <p className="text-[1.05rem] text-balance text-muted-foreground sm:text-base">
                  {data.description}
                </p>
              )}
            </div>
            {isComponentPage && (
              <div className="flex items-center space-x-2 pt-4">
                <Badge
                  href={`https://ui.shadcn.com/docs/components/${slugPath.replace("components/", "")}`}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View shadcn/ui docs
                  <ArrowUpRightIcon />
                </Badge>
                <Badge
                  href={`${githubRepoUrl}/tree/main/src/lib/registry/ui/${slugPath.replace("components/", "")}`}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Component source
                  <CodeIcon />
                </Badge>
              </div>
            )}
          </div>
          <div className={`${slugPath !== "components" ? "prose-docs" : ""} mt-8 w-full flex-1`}>
            <DocsContent filePath={filePath} />
            {slugPath === "components" && (
              <ComponentsList componentLinks={componentLinks} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
