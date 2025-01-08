"use client";

import { Check, Clipboard } from "lucide-react";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Code = (props: any, className: any) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    if (codeRef.current) {
      const codeText = codeRef.current.innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      });
    }
  };

  return (
    <div
      className={cn("relative rounded-md  border bg-card/50 h-fit", className)}
    >
      {/* Code block with copy button */}
      <div className="flex absolute right-2 top-[5px] justify-between items-center">
        <button
          className="relative w-[2.25rem] h-[2.25rem] border bg-transparent backdrop-blur-lg flex items-center justify-center  rounded-md"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
          <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
          <Clipboard
            className={`h-4 w-4 transition-all duration-300 ${
              copied ? "scale-0" : "scale-100"
            }`}
          />
          <Check
            className={`absolute inset-0 text-primary m-auto h-4 w-4 transition-all duration-300 ${
              copied ? "scale-100" : "scale-0"
            }`}
          />
        </button>
      </div>

      {/* Styled pre block for code snippets */}
      <pre
        ref={codeRef}
        className={`${
          props.className || ""
        } border-none h-fit p-4 overflow-auto`}
      >
        <code className="whitespace-pre">{props.children}</code>
      </pre>
    </div>
  );
};

export default Code;
