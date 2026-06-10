import { cn } from "@/lib/utils";
import type { TocEntry } from "@/lib/utils/toc";

interface DocsTocProps {
  entries: TocEntry[];
  slug: string;
  className?: string;
}

export default function DocsToc({ entries, slug, className }: DocsTocProps) {
  if (!entries.length) return null;

  const hrefPrefix =
    slug === "index" ? "/docs" : `/docs/${slug}`;

  return (
    <div className={cn("flex flex-col gap-2 p-4 pt-0 text-sm", className)}>
      <p className="sticky top-0 h-6 bg-background text-xs text-muted-foreground">
        On This Page
      </p>
      {entries.map((item) => (
        <a
          key={item.url}
          href={`${hrefPrefix}${item.url}`}
          className="text-[0.8rem] text-muted-foreground no-underline transition-colors hover:text-foreground data-[depth=1]:ps-4 data-[depth=2]:ps-6"
          data-depth={item.depth}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}
