import { RichText } from "./typography/block";
import Heading from "./Heading";
import Image from "next/image";
import { aboutMe } from "@/data/about";

export const AboutSection = () => {
  return (
    <section id="about" className="pt-24 mb-40 xl:mx-20">
      <Heading text="About Me" id={1}></Heading>
      <div className="grid grid-cols-1 items-start gap-16 py-2 lg:grid-cols-1fr-auto">
        <div className="col-start-1 rounded sm:p-10 text-white">
          <RichText content={aboutMe} />
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
