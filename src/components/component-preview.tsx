"use client";

import * as React from "react";
import { CodeBlock } from "@/components/code-block";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "center" | "start" | "end";
  name: string;
  children?: React.ReactNode;
}

export function ComponentPreview({
  className,
  align = "center",
  name,
  children,
  ...props
}: ComponentPreviewProps) {
  return (
    <div
      className={cn(
        "no-prose-docs group relative mt-4 mb-12 flex flex-col overflow-hidden rounded-lg border",
        className
      )}
      {...props}
    >
      <div>
        <div data-slot="preview" className="preview flex justify-center">
          <div
            data-align={align}
            className="preview flex min-h-[450px] w-full justify-center border-b p-10 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start"
          >
            {children ?? (
              <p className="text-sm text-muted-foreground">
                Component{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  {name}
                </code>{" "}
                not found in registry.
              </p>
            )}
          </div>
        </div>
        <CodeBlock className="rounded-none border-0" name={name} />
      </div>
    </div>
  );
}
