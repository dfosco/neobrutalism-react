import type { MDXComponents } from "mdx/types";
import { ComponentPreview } from "@/components/component-preview";
import { CodeBlock } from "@/components/code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ComponentPreview,
    CodeBlock,
    ...components,
  };
}
