import { TextNode } from "./text";
import { LinkNode } from "./inline";
import { renderContent } from "./block";
import { ReactNode } from "react";

export interface Heading {
  type: "heading";
  attrs: {
    level: 1 | 2 | 3 | 4;
    alignment: "left" | "center" | "right" | "justify";
  };
  content: (TextNode | LinkNode)[];
}

const headingStyles = {
  1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  4: "scroll-m-20 text-xl font-semibold tracking-tight",
};

const levelTag = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
} as const;

interface TypographyHeadingProps extends Heading {
  children: ReactNode;
}

export function TypographyHeading({ attrs, children }: TypographyHeadingProps) {
  const HeadingTag = levelTag[attrs.level];
  return (
    <HeadingTag className={headingStyles[attrs.level]}>{children}</HeadingTag>
  );
}
