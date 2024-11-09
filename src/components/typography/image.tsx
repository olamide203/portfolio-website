import Image from "next/image";

export interface ImageNode {
  type: "image";
  attrs: {
    src: string;
    alt: string;
  };
}

export const TypographyImage = ({ attrs }: ImageNode) => {
  return <Image src={attrs.src} alt={attrs.alt} className="" />;
};
