import Link from "next/link";
import HeroSVG from "./svg";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 items-center justify-center lg:min-h-screen lg:my-0  max-w-screen-2xl gap-10 my-32">
      <div className="my-10 grid content-center sm:my-0 lg:col-span-7">
        <span className="my-4 font-mono text-blue-400">Hi there, I&apos;m</span>
        <h2 className="text-[clamp(40px,5vw,80px)] font-semibold text-slate-50">
          Olamide Atitebi.
        </h2>
        <h3 className="my-4 text-3xl font-semibold text-slate-100 sm:text-4xl md:text-5xl">
          A Software Engineer
        </h3>
        <button className="my-4 inline-flex h-12 w-max cursor-pointer flex-wrap content-center items-center rounded border border-green-200 px-6 text-center text-green-200 hover:bg-blue-50">
          <Link href="/resume.pdf" className="font-mono capitalize antialiased">
            Download Résumé
          </Link>
        </button>
      </div>
      <div className="lg:col-span-5">
        <HeroSVG />
      </div>
    </section>
  );
}
