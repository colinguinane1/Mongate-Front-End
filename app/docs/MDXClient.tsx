"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents } from "@/mdx-components";

type ClientMDXContentProps = {
  mdxContent: MDXRemoteSerializeResult; // Serialized MDX content passed from the server
};

export default function ClientMDXContent({
  mdxContent,
}: ClientMDXContentProps) {
  const components = useMDXComponents({}); // You can pass any additional components or props here

  return <MDXRemote {...mdxContent} components={components} />;
}
