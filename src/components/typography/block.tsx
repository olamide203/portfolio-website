import { TypographyLink, LinkNode } from "./link";
import { TypographyImage, ImageNode } from "./image";
import { Text, TextNode } from "./text";
import { Heading, TypographyHeading } from "./heading";

export type BlockContent = (
  | LinkNode
  | ImageNode
  | TextNode
  | BlockNode
  | ListNode
)[];

interface ListNode {
  type: "bullet_list" | "ordered_list";
  attrs?: {
    tight: boolean;
    start?: number;
  };
  content: BlockNode[];
}

export interface BlockText {
  type: "paragraph" | "blockquote" | "list_item";
  attrs?: {
    alignment: "left" | "center" | "right" | "justify";
  };
  content: BlockContent;
}

export type BlockNode = BlockText | Heading;

const blockTextStyles = {
  paragraph: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  list_item: "",
  bullet_list: "my-6 ml-6 list-disc [&>li]:mt-2",
  ordered_list: "my-6 ml-6 list-disc [&>li]:mt-2",
};

const blockTextTag = {
  paragraph: "p",
  blockquote: "blockquote",
  list_item: "li",
  bullet_list: "ul",
  ordered_list: "ol",
} as const;

export interface RichTextProps {
  content: BlockContent;
}

export const RichText = ({ content }: RichTextProps) => {
  return content.map((node, index) => {
    switch (node.type) {
      case "link":
        return <TypographyLink {...node} key={index} />;
      case "text":
        return <Text {...node} key={index} />;
      case "image":
        return <TypographyImage {...node} key={index} />;
      case "heading":
        return (
          <TypographyHeading {...node}>
            <RichText content={node.content} />
          </TypographyHeading>
        );
      case "bullet_list":
      case "ordered_list":
      case "paragraph":
      case "blockquote":
      case "list_item":
        const TextTag = blockTextTag[node.type];
        return (
          <TextTag className={blockTextStyles[node.type]}>
            <RichText content={node.content} />
          </TextTag>
        );
      default:
        return;
    }
  });
};
