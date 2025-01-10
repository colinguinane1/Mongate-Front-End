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
      className={cn(
        "relative rounded-md dark:bg-card/20 bg-foreground/95 p-2 overflow-y-auto max-h-[350px]",
        className
      )}
    >
      <div className="flex absolute right-2 top-[5px] justify-between items-center">
        <button
          type="button"
          className="text-gray-300 bg-transparent border rounded-md backdrop-blur-md p-2 hover:text-input"
          onClick={handleCopy}
        >
          <Clipboard
            color={"white"}
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
        } border-none h-fit text-sm overflow-auto`}
      >
        {/* Render the code without applying inline code styles */}
        <code className="whitespace-pre">{props.children}</code>
      </pre>
    </div>
  );
};

export default Code;
