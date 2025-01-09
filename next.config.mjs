import rehypePrettyCode from "rehype-pretty-code";
import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Any other Next.js config you need
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: {
    dark: "github-dark-dimmed",
    light: "one-light",
  },
  keepBackground: false,
  
};

// Use next-mdx with the options for rehypePrettyCode
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [rehypePrettyCode, options] // Correctly pass options to rehypePrettyCode
    ],
  },
});

// Export merged configuration
export default withMDX(nextConfig);
