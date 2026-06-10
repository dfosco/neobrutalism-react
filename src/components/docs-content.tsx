import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../mdx-components";

interface DocsContentProps {
  filePath: string;
}

export default async function DocsContent({ filePath }: DocsContentProps) {
  const source = fs.readFileSync(filePath, "utf-8");
  const components = useMDXComponents({});

  return <MDXRemote source={source} components={components} />;
}
