import { RichText } from "./typography/block";
import { BlockContent } from "./typography/block";
import Heading from "./Heading";
import Image from "next/image";

const data: BlockContent = [
  {
    type: "paragraph",
    attrs: {
      alignment: "left",
    },
    content: [
      {
        type: "text",
        text: "I am a ",
      },
      {
        type: "text",
        text: "detail-oriented",
        marks: [{ type: "bold" }],
      },
      {
        type: "text",
        text: " Software Engineer with over 2 years of professional experience building feature-rich web applications with intuitive and engaging user interfaes",
      },

      {
        type: "text",
        text: ". I'm passionate about building reliable and scalable software to solve real-world problems. ",
      },
      {
        type: "text",
        text: "Driven by the desire for a deep understanding of how systems function at their core, I excel at writing clean, efficient code to tackle complex problems.",
      },
    ],
  },
  {
    type: "paragraph",
    attrs: {
      alignment: "left",
    },
    content: [
      {
        type: "text",
        text: "These days, I enjoy learning about ",
      },
      {
        type: "text",
        text: "low-level programming languages",
        marks: [{ type: "bold" }],
      },
      {
        type: "text",
        text: ", ",
      },
      {
        type: "text",
        text: "data structures and algorithms",
        marks: [{ type: "bold" }],
      },
      {
        type: "text",
        text: ", ",
      },

      {
        type: "text",
        text: "and ",
      },
      {
        type: "text",
        text: "AI/ML. ",
        marks: [{ type: "bold" }],
      },
    ],
  },
  {
    type: "paragraph",
    attrs: {
      alignment: "left",
    },
    content: [
      {
        type: "text",
        text: "When I'm not building awesome projects, I enjoy customizing my workspace (I use Arch Linux and Neovim btw 😉) to maximize my productivity.",
      },
    ],
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="mb-40 xl:mx-20">
      <Heading text="About Me" id={1}></Heading>
      <div className="grid grid-cols-1 items-start gap-16 py-2 lg:grid-cols-1fr-auto">
        <div className="col-start-1 rounded sm:p-10 text-white">
          <RichText content={data} />
        </div>
        <div className="grid items-center justify-center my-auto">
          <div className="relative aspect-square w-max before:absolute before:aspect-square before:w-full before:translate-x-4 before:translate-y-6  before:bg-neutral-500 bg-[#555D50] before:-z-10">
            <Image
              src="/images/olamide.png"
              width={300}
              height={300}
              quality={100}
              alt="pic"
              className="shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
