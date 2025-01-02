"use client";

import { MDXRemote } from "next-mdx-remote";
import { useMDXComponents } from "@/mdx-components";
import { processMDX } from "@/components/mdx/mdx-processor";

type ClientMDXContentProps = {
  mdxContent: any; // Serialized MDX content passed from the server
};

export default function ClientMDXContent({
  mdxContent,
}: ClientMDXContentProps) {
  const components = useMDXComponents({}); // You can pass any additional components or props here

  return <MDXRemote {...mdxContent} components={components} />;
}
