import React from "react";
import Link from "next/link";

export interface NavItemProps {
  text: string;
  link: string;
  id: number;
}

const NavItem: React.FC<NavItemProps> = ({ text, link, id }) => {
  return (
    <li>
      <Link
        href={link}
        className="flex flex-col items-center justify-center gap-2 sm:flex-row"
      >
        <span
          aria-hidden="true"
          className=" text-blue-200 sm:hidden md:inline-block"
        >
          {new Intl.NumberFormat("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          }).format(id)}
          .
        </span>
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
