import { BlockContent } from "@/components/typography/block";

interface Experience {
  jobTitle: string;
  company: string;
  companyURL: string;
  startDate: string;
  endDate: string;
  isCurrentJob?: boolean;
  achievements: BlockContent;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    jobTitle: "Full-Stack Software Developer",
    companyURL: "https://www.sqe.io",
    company: "SQE",
    startDate: "2022-11-01:00:00:00.000Z",
    endDate: "",
    isCurrentJob: true,
    technologies: [
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "FastAPI",
      "Sanity",
      "PostgreSQL",
    ],
    achievements: [
      {
        type: "bullet_list",
        content: [
          {
            type: "list_item",
            content: [
              {
                type: "text",
                text: "Developed and maintained company's customer-facing website using ",
              },
              {
                type: "text",
                text: "React",
                marks: [{ type: "bold" }],
              },
              {
                type: "text",
                text: ", enhancing online presence and user experience.",
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "text",
                text: "Implemented a comprehensive news and learning center functionality, integrating it with a content management system for efficient content updates.",
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "text",
                text: "Engineered core backend infrastructure, including robust ",
              },
              {
                type: "text",
                text: "REST",
                marks: [{ type: "bold" }],
              },

              {
                type: "text",
                text: " and ",
              },
              {
                type: "text",
                text: "WebSocket",
                marks: [{ type: "bold" }],
              },

              {
                type: "text",
                text: " APIs with FastAPI to power the core security platform.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    jobTitle: "Software Engineering Intern / Technical Instructor",
    companyURL: "https://www.alusofttechnologies.com",
    company: "Alusoft",
    startDate: "2022-04-01:00:00:00.000Z",
    endDate: "2022-10-01:00:00:00.000Z",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Node",
      "React",
      "Express",
      "HTML",
      "CSS",
    ],
    achievements: [
      {
        type: "bullet_list",
        content: [
          {
            type: "list_item",
            content: [
              {
                type: "text",
                text: "Instructed 50+ trainees in comprehensive web development technologies, including ",
              },
              {
                type: "text",
                text: "JavaScript",
                marks: [{ type: "bold" }],
              },
              {
                type: "text",
                text: ", ",
              },
              {
                type: "text",
                text: "Node.js",
                marks: [{ type: "bold" }],
              },
              {
                type: "text",
                text: ", ",
              },
              {
                type: "text",
                text: "React",
                marks: [{ type: "bold" }],
              },
              {
                type: "text",
                text: ", ",
              },
              {
                type: "text",
                text: "HTML",
                marks: [{ type: "bold" }],
              },

              {
                type: "text",
                text: ", and ",
              },
              {
                type: "text",
                text: "CSS.",
                marks: [{ type: "bold" }],
              },
              {
                type: "text",
                text: ".",
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "text",
                text: "Introduced and trained students in industry-standard tools such as ",
              },
              {
                type: "text",
                text: "Git",
                marks: [{ type: "bold" }],
              },
              {
                type: "text",
                text: " and ",
              },
              {
                type: "text",
                text: "GitHub",
                marks: [{ type: "bold" }],
              },
              {
                type: "text",
                text: ", enhancing their job readiness for tech careers.",
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "text",
                text: "Facilitated hands-on learning experiences, improving trainees' technical proficiency and practical skills through building of advanced projects",
              },
            ],
          },
        ],
      },
    ],
  },
];
