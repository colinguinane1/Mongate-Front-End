import CustomAlert from "./components/mdx/alert";
import Code from "./components/mdx/custom-code";
import { ExternalLink } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import { Table } from "./components/ui/table";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Alert: CustomAlert,
    code: (props) => <Code {...props} />,
    h1: (props) => <h1 className="text-4xl font-black " {...props} />,
    h2: (props) => <h2 className="text-3xl font-bold" {...props} />,
    h3: (props) => <h3 className="text-2xl font-semibold" {...props} />,
    h4: (props) => <h4 className="text-xl font-medium" {...props} />,
    h5: (props) => <h5 className="text-lg font-normal" {...props} />,
    h6: (props) => <h6 className="text-base font-light" {...props} />,
    p: (props) => <p className="mb-4" {...props} />,
    li: (props) => <li className="pb-1" {...props} />,
    ul: (props) => <ul className="list-disc pl-6" {...props} />,
    ol: (props) => <ol className="list-decimal pl-6" {...props} />,
    hr: (props) => <hr className="mt-4" {...props} />,
    blockquote: (props) => (
      <blockquote
        style={{ paddingBottom: 0 }}
        className="border-l-4 pl-2"
        {...props}
      />
    ),
    Table: (props) => <Table {...props} />,
    a: (props) => (
      <span className="inline-flex items-center gap-1 text-primary underline underline-offset-3">
        <a target="__blank" className="" {...props} />
        <ExternalLink size={12} />
      </span>
    ),
  };
}
