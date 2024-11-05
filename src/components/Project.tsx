import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  repolink: string;
  id: number;
}

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <div className="grid grid-cols-12 items-start py-12">
      <div
        className={`relative grid-cols-1 grid-rows-1 h-[350px] w-full self-center md:col-span-7 row-start-1 ${
          props.id % 2 === 1 ? "md:col-start-1" : "md:col-start-6"
        }`}
      >
        <div className="absolute inset-0 z-3 h-full w-full bg-neutral-900 mix-blend-screen" />
        <Image
          src={props.image}
          alt="project"
          fill
          className="rounded opacity-5 transition-all duration-500 md:opacity-100 object-cover object-center"
          quality={100}
        />
      </div>
      <div
        className={`col-span-12 self-center rounded-md bg-neutral-600 p-6 z-10 text-start md:col-span-6 md:bg-neutral-700 row-start-1 ${
          props.id % 2 === 0 ? "md:col-start-1" : "md:col-start-7"
        }`}
      >
        <h3 className="text-3xl font-semibold capitalize text-neutral-100">
          {props.title}
        </h3>
        <p className="text-lg text-neutral-100">{props.description}</p>
        <div className="mt-4 flex items-center gap-2">
          {props.tech.map((tech, index) => (
            <span
              className="rounded-2xl bg-blue-400 px-3 pt-1 capitalize text-neutral-50"
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4">
          <Link
            href={props.repolink}
            className="text-2xl text-neutral-50 hover:text-blue-400"
          >
            <FiGithub />
          </Link>
          <Link
            href={props.link}
            className="text-2xl text-neutral-50 hover:text-blue-400"
          >
            <FiExternalLink />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
