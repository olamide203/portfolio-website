import type { NextPage } from 'next';
import Header from '../components/Header';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '../components/Heading';
import Project, { ProjectProps } from '../components/Project';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiPhone, FiMail } from 'react-icons/fi';
import { IconType } from 'react-icons';
import socials from '../data/socials.json';
import Skills from '../components/Skills/Index';
import projects from '../data/projects.json';
import FooterLink from '../components/Footer/Link';

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
			<Head>
				{/* <!-- Open Graph / Facebook --> */}
				<meta property='og:type' content='website' data-rh='true' />
				<meta property='og:url' content='https://olamide.netify.live/' data-rh='true' />
				<meta property='og:title' content='Olamide Atitebi' data-rh='true' />
				<meta
					property='og:description'
					content='A full-stack software developer, passionate about open-source'
					data-rh='true'
				/>
				<meta property='og:image' content='https://olamide.netify.live/images/meta.png' data-rh='true' />

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' data-rh='true' />
				<meta property='twitter:url' content='https://olamide.netify.live' data-rh='true' />
				<meta property='twitter:title' content='Olamide Atitebi' data-rh='true' />
				<meta
					property='twitter:description'
					content='A full-stack software developer passionate about open-source'
					data-rh='true'
				/>
				<meta property='twitter:image:src' content='https://olamide.netify.live/images/meta.png' data-rh='true' />
			</Head>
			<Header />
			<div className='fixed bottom-0 z-10 hidden flex-col items-center justify-center gap-6 px-6 pb-6  text-slate-100 after:mx-auto after:h-40 after:w-px after:bg-slate-100 md:flex lg:px-12'>
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
			<div className='fixed -right-16 bottom-0 z-10 hidden max-h-fit flex-auto -translate-y-[calc(50%+136px)] rotate-90 flex-row items-center justify-center gap-6 font-mono text-slate-100 after:mx-auto after:h-40 after:w-px after:translate-x-20 after:rotate-90 after:bg-slate-100 md:flex lg:-right-10'>
				<Link href='mailto:olamideumarq@gmail.com'>
					<a className='cursor-pointer hover:text-blue-200'>olamideumarq@gmail.com</a>
				</Link>
			</div>
			<main className='mx-auto w-full max-w-screen-2xl px-10 md:px-28'>
				<section className='my-10 grid min-h-screen max-w-screen-lg content-center sm:my-0 xl:mx-20'>
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
				<section id='about' className='mb-40 xl:mx-20'>
					<Heading text='About Me' id={1}></Heading>
					<div className='grid grid-cols-1 items-start gap-16 pt-12 lg:grid-cols-1fr-auto'>
						<div className='col-start-1'>
							<p className='text-[20px] font-normal text-neutral-50'>
								Hello, my name is Olamide and I&apos;m a full-stack software developer who loves
								solving problems with code and learning about new technologies. I&apos;m passionate
								about Open source and enjoy creating and making contributions to open-source
								projects as it helps me to refine my skills and at the same time add value to the
								community while at it.
							</p>
						</div>
						<div className='grid items-center justify-center'>
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
				<section className='mb-40 xl:mx-20' id='projects'>
					<Heading text='Projects' id={3}></Heading>
					{projects.map((project: ProjectProps, index) => (
						<Project key={index} {...project}></Project>
					))}
				</section>
				<Skills />
				<section id='contact' className='mb-40 xl:mx-20'>
					<Heading text='contact me' id={4}></Heading>
					<div className='mx-auto my-12 grid gap-20 md:grid-cols-1fr-auto'>
						<div>
							<p className='text-left text-neutral-100 lg:text-xl'>
								I&apos;m currently looking for new opportunities and open to collaborations. feel
								free to reach out to me
							</p>
							<button className='my-4 inline-flex h-12 w-max cursor-pointer flex-wrap content-center items-center rounded border border-green-200 px-6 text-center text-green-200 hover:bg-blue-50'>
								<Link href='mailto:olamideumarq@gmail.com'>
									<a>Let&apos; connect</a>
								</Link>
							</button>
						</div>
						<div className='grid grid-cols-1 justify-end self-center text-end text-neutral-50 lg:text-2xl'>
							<Link href='tel:+2340961316808'>
								<a className='font-mono'>
									<FiPhone className='inline' /> +234 906 131 6808
								</a>
							</Link>
							<Link href='mailto:olamideumarq@gmail.com'>
								<a className='font-mono'>
									<FiMail className='inline' /> olamideumarq@gmail
								</a>
							</Link>
							<div className='flex flex-row items-center justify-end gap-6  py-6 text-slate-100'>
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
						</div>
					</div>
				</section>
				<footer className='mb-8'>
					<div className='grid items-center justify-center gap-3 text-center font-mono text-sm text-neutral-50'>
						<span>
							Original Design by{' '}
							<FooterLink text='brittany chiang' href='https://brittanychiang.com' />
						</span>
						<span>
							Built by <FooterLink text='olamide atitebi' href='https://olamide.netify.live' />
						</span>
					</div>
				</footer>
			</main>
		</>
	);
};

export default Home;
