"use client";

import * as React from "react";
import { Button } from "@/lib/registry/ui/button";
import { CopyIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  source?: string;
  name?: string;
  className?: string;
  children?: React.ReactNode;
}

export function CodeBlock({ source, name, className, children }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const copyResetTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const displaySource = source?.replaceAll(
    "@/lib/registry/ui",
    "@/components/ui"
  );
  const copySource = displaySource?.replace(/^\n+/, "");
  const showCommandTopLine =
    copySource?.trimStart().startsWith("npx shadcn") ?? false;
  const renderedSource =
    showCommandTopLine && copySource ? `\n${copySource}` : copySource;

  const copyToClipboard = async (text: string) => {
    if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
      return;
    }
    await navigator.clipboard.writeText(text);
    setCopied(true);
    if (copyResetTimer.current) clearTimeout(copyResetTimer.current);
    copyResetTimer.current = setTimeout(() => setCopied(false), 2000);
  };

  React.useEffect(() => {
    return () => {
      if (copyResetTimer.current) clearTimeout(copyResetTimer.current);
    };
  }, []);

  return (
    <div
      data-slot="code"
      className={cn(
        "border relative overflow-hidden rounded-lg [&_pre]:max-h-100",
        className
      )}
    >
      {children ? (
        children
      ) : displaySource ? (
        <>
          <Button
            data-slot="copy-button"
            size="icon"
            variant="ghost"
            className="absolute inset-e-2 top-3 z-10 size-7 text-muted-foreground hover:opacity-100 focus-visible:opacity-100"
            onClick={() => copySource && copyToClipboard(copySource)}
          >
            <span className="sr-only">Copy</span>
            {copied ? <CheckIcon /> : <CopyIcon />}
          </Button>
          <figure>
            <pre className="overflow-x-auto bg-neutral-50 dark:bg-neutral-900 p-4 text-sm leading-relaxed text-neutral-900 dark:text-neutral-200">
              <code>{renderedSource}</code>
            </pre>
          </figure>
        </>
      ) : null}
    </div>
  );
}
