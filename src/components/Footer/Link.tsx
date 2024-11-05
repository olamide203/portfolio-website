import React from "react";
import Link from "next/link";

interface LinkProps {
  text: string;
  href: string;
}
const FooterLink: React.FC<LinkProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="relative whitespace-nowrap capitalize text-blue-500 before:absolute before:bottom-0 before:h-px before:w-1/3 before:bg-blue-500 before:duration-300 before:hover:w-full"
    >
      {text}
    </Link>
  );
};

export default FooterLink;
