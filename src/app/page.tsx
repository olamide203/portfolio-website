import Hero from "@/components/hero/hero";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Heading from "../components/Heading";
import Project, { ProjectProps } from "../components/Project";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { IconType } from "react-icons";
import socials from "../data/socials.json";
import Skill, { SkillProps } from "../components/Skill";
import skills from "../data/skills.json";
import projects from "../data/projects.json";
import FooterLink from "../components/Footer/Link";

interface Icons {
  [key: string]: IconType | undefined;
}
const icons: Icons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  instagram: FiInstagram,
};

const Home = () => {
  return (
    <>
      <Header />
      <div className="fixed bottom-0 z-10 hidden flex-col items-center justify-center gap-6 px-6 pb-6  text-slate-100 after:mx-auto after:h-40 after:w-px after:bg-slate-100 md:flex lg:px-12">
        {socials.map((social) => {
          const Icon = icons[social.name];
          return (
            Icon && (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                key={social.name}
              >
                {
                  <Icon className="h-6 w-6 hover:scale-105 hover:text-blue-200" />
                }
              </a>
            )
          );
        })}
      </div>
      <div className="fixed -right-16 bottom-0 z-10 hidden max-h-fit flex-auto -translate-y-[calc(50%+136px)] rotate-90 flex-row items-center justify-center gap-6 font-mono text-slate-100 after:mx-auto after:h-40 after:w-px after:translate-x-20 after:rotate-90 after:bg-slate-100 md:flex lg:-right-10">
        <Link
          href="mailto:olamideumarq@gmail.com"
          className="cursor-pointer hover:text-blue-200"
        >
          olamideumarq@gmail.com
        </Link>
      </div>
      <main className="mx-auto w-full max-w-screen-2xl px-10 md:px-28">
        <Hero />
        <section id="about" className="mb-40 xl:mx-20">
          <Heading text="About Me" id={1}></Heading>
          <div className="grid grid-cols-1 items-start gap-16 pt-12 lg:grid-cols-1fr-auto">
            <div className="col-start-1 rounded sm:p-10">
              <p className="text-xl font-normal text-neutral-50 md:text-[22px]">
                I&apos;m a full-stack software developer who loves solving
                problems with code and learning about new technologies. I&apos;m
                passionate about Open source and enjoy creating and making
                contributions to open-source projects as it helps me to refine
                my skills and at the same time add value to the community while
                at it.
              </p>
            </div>
            <div className="grid items-center justify-center">
              <div className="relative aspect-square w-max before:absolute before:aspect-square before:w-full before:translate-x-4 before:translate-y-4 before:border-r-[20px] before:border-b-[20px] before:border-neutral-500">
                <Image
                  src="/images/headshot.png"
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
        <section className="mb-40 xl:mx-20" id="projects">
          <Heading text="Projects" id={2}></Heading>
          {projects.map((project: ProjectProps, index) => (
            <Project key={index} {...project}></Project>
          ))}
        </section>
        <section className="mb-40 grid grid-cols-1 gap-12 xl:mx-20">
          <Heading text="Skills" id={3}></Heading>
          <div className="grid grid-cols-auto-fit-skills gap-3">
            {skills.map((skill: SkillProps, id) => (
              <Skill {...skill} key={id} />
            ))}
          </div>
        </section>
        <section id="contact" className="mb-40 xl:mx-20">
          <Heading text="contact me" id={4}></Heading>
          <div className="mx-auto my-12 grid gap-20 md:grid-cols-1fr-auto">
            <div>
              <p className="text-left text-neutral-100 lg:text-xl">
                I&apos;m currently looking for new opportunities and open to
                collaborations. feel free to reach out to me
              </p>
              <button className="my-4 inline-flex h-12 w-max cursor-pointer flex-wrap content-center items-center rounded border border-green-200 px-6 text-center text-green-200 hover:bg-blue-50">
                <Link href="mailto:olamideumarq@gmail.com">
                  Let&apos;s connect
                </Link>
              </button>
            </div>
            <div className="grid grid-cols-1 justify-end self-center text-end text-neutral-50 lg:text-2xl">
              <Link href="tel:+2340961316808" className="font-mono">
                <FiPhone className="inline" /> +234 906 131 6808
              </Link>
              <Link href="mailto:olamideumarq@gmail.com" className="font-mono">
                <FiMail className="inline" /> olamideumarq@gmail
              </Link>
              <div className="flex flex-row items-center justify-end gap-6  py-6 text-slate-100">
                {socials.map((social) => {
                  const Icon = icons[social.name];
                  return (
                    Icon && (
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        key={social.name}
                      >
                        {
                          <Icon className="h-6 w-6 hover:scale-105 hover:text-blue-200" />
                        }
                      </a>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <footer className="mb-8">
          <div className="grid items-center justify-center gap-3 text-center font-mono text-sm text-neutral-50">
            <span>
              Original Design by{" "}
              <FooterLink
                text="brittany chiang"
                href="https://brittanychiang.com"
              />
            </span>
            <span>
              Built by{" "}
              <FooterLink
                text="olamide atitebi"
                href="https://olamide.netify.live"
              />
            </span>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
