import React from "react";

interface HeadingProps {
  text: string;
  id: number;
}

const Heading: React.FC<HeadingProps> = ({ id, text }) => {
  return (
    <h1 className="flex w-full items-center whitespace-nowrap text-3xl xs:text-4xl sm:text-5xl font-bold leading-tight capitalize text-neutral-100">
      <span className="relative bottom-0 my-auto mr-1.5 font-mono text-xl font-normal text-blue-200 after:contents-[' '] after:relative after:top-1 after:h-1 after:w-60 after:bg-slate-300">
        {new Intl.NumberFormat("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }).format(id)}
        .
      </span>
      {text}
      <span className="sr-only">Section</span>
    </h1>
  );
};

export default Heading;
