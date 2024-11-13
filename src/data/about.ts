import { BlockContent } from "@/components/typography/block";

export const aboutMe: BlockContent = [
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
