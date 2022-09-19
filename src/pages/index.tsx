import type { NextPage } from 'next';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '../components/Heading';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { IconType } from 'react-icons';
import socials from '../data/socials.json';
import Skills from '../components/Skills/Index';

interface Icons {
	[key: string]: IconType | undefined;
}
const icons: Icons = {
	github: FiGithub,
	linkedin: FiLinkedin,
	twitter: FiTwitter,
	instagram: FiInstagram,
};

const Home: NextPage = () => {
	return (
		<>
			<Header></Header>
			<div className='fixed bottom-0 z-10 hidden flex-col items-center justify-center gap-6 pl-12 pb-6 text-slate-100 after:mx-auto after:h-40 after:w-px after:bg-slate-100 md:flex'>
				{socials.map(social => {
					const Icon = icons[social.name];
					return (
						Icon && (
							<a href={social.link} target='_blank' rel='noreferrer' key={social.name}>
								{<Icon className='h-6 w-6 hover:scale-105 hover:text-blue-200' />}
							</a>
						)
					);
				})}
			</div>
			<div className='fixed -right-8 bottom-0 z-10 hidden max-h-fit flex-auto -translate-y-[calc(50%+136px)] rotate-90 flex-row items-center justify-center gap-6 font-mono text-slate-100 after:mx-auto after:h-40 after:w-px after:translate-x-20 after:rotate-90 after:bg-slate-100 md:flex'>
				<Link href='mailto:olamideumarq@gmail.com'>
					<a className='cursor-pointer hover:text-blue-200'>olamideumarq@gmail.com</a>
				</Link>
			</div>
			<main className='mx-auto w-full max-w-screen-2xl px-10 md:px-40'>
				<section className='my-10 grid min-h-screen max-w-screen-lg content-start items-start sm:my-0 sm:content-center xl:mx-20'>
					<span className='my-4 font-mono text-blue-400'>Hi there, I&apos;m</span>
					<h2 className='text-[clamp(40px,8vw,80px)] font-semibold text-slate-50'>
						Olamide Atitebi.
					</h2>
					<h3 className='my-4 text-3xl font-semibold text-slate-100 sm:text-4xl md:text-5xl'>
						A full-stack Developer, <br /> Passionate about open source.
					</h3>
					<button className='my-4 inline-flex h-12 w-max cursor-pointer flex-wrap content-center items-center rounded border border-green-200 px-6 text-center text-green-200 hover:bg-blue-50'>
						<Link href='/'>
							<a className='font-mono capitalize antialiased'>Download Résumé</a>
						</Link>
					</button>
				</section>
				<section
					id='about'
					className='mb-40 grid grid-cols-1 gap-16 lg:grid-cols-1fr-auto xl:mx-20'
				>
					<Heading text='About Me' id={1}></Heading>
					<div className='col-start-1'>
						<p className='text-[20px] font-normal text-neutral-50'>
							Hello, my name is Olamide and I&apos;m a full-stack software developer who loves
							solving problems with code and learning about new technologies. I&apos;m passionate
							about Open source and enjoy creating and making contributions to open-source projects
							as it helps me to refine my skills and at the same time add value to the community
							while at it.
						</p>
					</div>
					<div className='grid items-center justify-center'>
						<div className='relative aspect-square w-[300px] cursor-pointer shadow'>
							<Image
								src='/images/headshot.png'
								width={300}
								height={300}
								quality={100}
								alt='pic'
								layout='fixed'
								className='rounded'
							></Image>
						</div>
					</div>
				</section>
				<Skills />
			</main>
		</>
	);
};

export default Home;
