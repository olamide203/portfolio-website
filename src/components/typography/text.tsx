import { ReactNode } from "react";

type MarkType =
  | "bold"
  | "italic"
  | "underline"
  | "strike"
  | "code"
  | "highlight";

interface Mark {
  type: MarkType;
  attrs?: Record<string, any>;
}

export interface TextNode {
  type: "text";
  text: string;
  marks?: Mark[];
}

export function Text({ text, marks }: TextNode) {
  let content = text;

  if (marks && marks.length > 0) {
    return marks.reduce((content: ReactNode, mark) => {
      switch (mark.type) {
        case "bold":
          return <strong>{content}</strong>;
        case "italic":
          return <em>{content}</em>;
        case "underline":
          return <u>{content}</u>;
        case "strike":
          return <s>{content}</s>;
        case "code":
          return (
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {content}
            </code>
          );
        case "highlight":
          return <mark className="bg-sky-500">{content}</mark>;
        default:
          return content;
      }
    }, content);
  }

  return content;
}
