import Heading from "./Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "./reveal";
import { RichText } from "./typography/block";
import { experiences } from "@/data/experience";
import { Tag } from "@/components/tag";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="pt-24 mb-40 xl:mx-20">
      <Heading text="Experience" id={2} />
      <div className="flex flex-col items-start gap-16 py-2 text-white max-w-screen-sm">
        <Accordion
          type="single"
          collapsible
          className="w-full font-inter self-start justify-start h-full"
        >
          {experiences.map((item, id) => (
            <AccordionItem value={`${id}`} key={id}>
              <Reveal className="w-fit">
                <AccordionTrigger>
                  <div className="grid items-start text-start">
                    <h3 className="text-lg lg:text-xl text-start leading-none">
                      {item.jobTitle} @{" "}
                      <a
                        href={item.companyURL}
                        target="_blank"
                        className="underline decoration-[#F4A261]"
                      >
                        {item.company}
                      </a>
                    </h3>
                    <span className="leading-1">
                      {new Date(item.startDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                      {" - "}
                      {item.isCurrentJob
                        ? "Present"
                        : new Date(item.endDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                          })}
                    </span>
                  </div>
                </AccordionTrigger>
              </Reveal>

              <AccordionContent className="pl-7">
                <RichText content={item.achievements} />
                <div className="flex gap-2 flex-wrap max-w-sm">
                  {item.technologies.map((tech, index) => (
                    <Tag text={tech} key={index} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
