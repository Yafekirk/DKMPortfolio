"use client";

import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatMessageContentProps = {
  content: string;
  className?: string;
};

export function ChatMessageContent({
  content,
  className,
}: ChatMessageContentProps) {
  return (
    <div
      className={cn(
        "prose-chat text-[0.925rem] leading-relaxed break-words",
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent-secondary"
            >
              {children}
            </a>
          ),
          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
          ul: ({ children }) => (
            <ul className="mb-2 list-disc space-y-1 pl-4 last:mb-0">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-2 list-decimal space-y-1 pl-4 last:mb-0">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          code: ({ children, className: codeClassName }) => {
            const isBlock = Boolean(codeClassName);
            if (isBlock) {
              return (
                <code className="my-2 block overflow-x-auto rounded-lg bg-background-secondary px-3 py-2 font-mono text-xs">
                  {children}
                </code>
              );
            }
            return (
              <code className="rounded bg-background-secondary px-1.5 py-0.5 font-mono text-[0.8em]">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
