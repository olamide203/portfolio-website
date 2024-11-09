import Link from "next/link";
import { TextNode, Text } from "./text";

export interface LinkNode {
  type: "link";
  attrs: {
    href: string;
  };
  content: TextNode[];
}

export const TypographyLink = ({ attrs, content }: LinkNode) => {
  return (
    <Link href={attrs.href} className="underline">
      {content.map((node, index) => (
        <Text
          text={node.text}
          type={node.type}
          marks={node.marks}
          key={index}
        />
      ))}
    </Link>
  );
};
