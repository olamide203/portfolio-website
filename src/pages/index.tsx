import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { IconType } from 'react-icons';
import socials from '../data/socials.json';

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
			<div className='fixed bottom-0 z-10 flex flex-col items-center justify-center gap-6 pl-12 pb-6 text-slate-100 after:mx-auto after:h-40 after:w-px after:bg-slate-100'>
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
			<div className='fixed -right-8 bottom-0 z-10 flex max-h-fit flex-auto -translate-y-[calc(50%+136px)] rotate-90 flex-row items-center justify-center gap-6 font-mono text-slate-100 after:mx-auto after:h-40 after:w-px after:translate-x-20 after:rotate-90 after:bg-slate-100'>
				<Link href='mailto:olamideumarq@gmail.com'>
					<a className='cursor-pointer hover:text-blue-200'>olamideumarq@gmail.com</a>
				</Link>
			</div>
			<main className='mx-auto w-full max-w-screen-2xl px-40'>
				<section className='mx-20 grid min-h-screen max-w-screen-lg content-center items-start'>
					<span className='my-4 font-mono text-blue-400'>Hi there, I&apos;m</span>
					<h2 className='text-7xl font-semibold text-slate-50'>Olamide Atitebi.</h2>
					<h3 className='my-4 text-5xl font-semibold text-slate-100'>
						A full-stack Developer, <br /> Passionate about open source.
					</h3>
					<button className='my-4 inline-flex h-12 w-max cursor-pointer flex-wrap content-center items-center rounded border border-green-200 px-6 text-center text-green-200 hover:bg-blue-50'>
						<Link href='/'>
							<a className='font-mono capitalize antialiased'>Download Résumé</a>
						</Link>
					</button>
				</section>
				<section id='about' className='mx-20 mb-40 grid grid-cols-1fr-auto gap-16'>
					<h4 className='flex w-full items-center whitespace-nowrap text-2xl font-semibold text-neutral-100 before:relative before:bottom-0 before:mr-2.5 before:font-mono before:text-xl before:font-normal before:text-blue-400 before:content-["01."] after:relative after:ml-6 after:h-px after:w-60 after:bg-neutral-100 after:text-neutral-100'>
						About Me
					</h4>
					<div className='col-start-1'>
						<p className='text-[20px] font-normal text-neutral-50'>
							Hello, my name is Olamide and I&apos;m a self-taught full-stack software developer who
							loves solving problems with code and learning about new technologies. I&apos;m
							passionate about Open source and enjoy creating and making contributions to
							open-source projects as it helps me to refine my skills and at the same time add value
							to the community while at it.
						</p>
					</div>
					<div className=''>
						<div className='relative aspect-square w-full cursor-pointer shadow before:absolute before:inset-0 before:block before:aspect-square before:w-full before:rotate-12 before:rounded before:border before:border-blue-400 after:absolute after:top-0 after:-z-10 after:block after:aspect-square after:w-full after:rotate-6 after:rounded after:border after:border-blue-400 before:hover:rotate-45 before:hover:scale-105 before:hover:duration-300 after:hover:rotate-12 after:hover:scale-105 after:hover:bg-contain after:hover:duration-300'>
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
			</main>
		</>
	);
};

export default Home;
