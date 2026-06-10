import path from "path";
import fs from "fs";
import matter from "gray-matter";
import type { ComponentLink } from "./navigation";

const DOCS_COMPONENTS_DIR = path.join(
  process.cwd(),
  "src/lib/content/docs/components"
);

/**
 * Server-only function that reads component metadata from markdown files.
 */
export async function getComponentLinks(): Promise<ComponentLink[]> {
  if (!fs.existsSync(DOCS_COMPONENTS_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(DOCS_COMPONENTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const components: ComponentLink[] = [];

  for (const file of files) {
    const filePath = path.join(DOCS_COMPONENTS_DIR, file);
    const source = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(source);
    const slug = file.replace(/\.(mdx?|md)$/, "");
    if (data.title) {
      components.push({
        title: data.title as string,
        href: `/docs/components/${slug}`,
      });
    }
  }

  return components.sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * Get all doc slugs for static generation.
 */
export function getAllDocSlugs(): string[][] {
  const docsDir = path.join(process.cwd(), "src/lib/content/docs");

  if (!fs.existsSync(docsDir)) {
    return [];
  }

  const slugs: string[][] = [];

  function walk(dir: string, prefix: string[]) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath, [...prefix, entry]);
      } else if (entry.endsWith(".mdx") || entry.endsWith(".md")) {
        const slug = entry.replace(/\.(mdx?|md)$/, "");
        if (slug === "index") {
          slugs.push(prefix);
        } else {
          slugs.push([...prefix, slug]);
        }
      }
    }
  }

  walk(docsDir, []);
  return slugs;
}
