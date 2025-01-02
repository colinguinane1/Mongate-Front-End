// mdx-processor.ts (or similar)

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrism from "rehype-prism-plus";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";

export const processMDX = async (content: string) => {
  const result = await unified()
    .use(remarkParse) // Parse Markdown
    .use(remarkRehype) // Convert Markdown to HTML (via rehype)
    .use(rehypeRaw) // Parse raw HTML content (optional, depending on your needs)
    .use(rehypePrism) // Apply PrismJS syntax highlighting
    .use(rehypeStringify) // Convert HTML back to a string
    .process(content);

  return result.toString();
};
