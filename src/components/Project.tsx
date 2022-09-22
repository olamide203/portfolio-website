import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from '../../stitches.config';

export interface ProjectProps {
	title: string;
	description: string;
	tech: string[];
	link: string;
	image: string;
	repolink: string;
	id: number;
}

const StyledProjectImage = styled('div', {
	position: 'relative',
	gridColumn: '1 / -1',
	gridRow: '1 / 2',
	height: '350px',
	width: '100%',
	'&::before': {
		content: '""',
		position: 'absolute',
		inset: '0',
		zIndex: 3,
		height: '100%',
		width: '100%',
		backgroundColor: '#121415',
		mixBlendMode: 'screen',
	},
	variants: {
		position: {
			left: {
				'@md': {
					gridColumn: '1 / 8',
				},
			},
			right: {
				'@md': {
					gridColumn: '6 / -1',
				},
			},
		},
	},
	defaultVariants: {
		position: 'left',
	},
});

const StyledProject = styled('div', {
	gridColumn: '1 / -1',
	gridRow: '1 / 2',
	alignSelf: 'center',
	borderRadius: '10px',
	padding: '1.5rem',
	zIndex: 10,
	textAlign: 'start',
	'@md': {
		backgroundColor: '#1E1E1E',
	},

	variants: {
		position: {
			left: {
				'@md': {
					gridColumn: '1 / 7',
				},
			},
			right: {
				'@md': {
					gridColumn: '7 / -1',
				},
			},
		},
	},
	defaultVariants: {
		position: 'right',
	},
});

import { FiGithub, FiExternalLink } from 'react-icons/fi';
const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
	return (
		<div className='grid grid-cols-12 items-start pt-12'>
			<StyledProjectImage position={props.id % 2 == 1 ? 'left' : 'right'}>
				<Image
					src={props.image}
					alt='hyoka'
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					className='rounded opacity-5 transition-all duration-500 md:opacity-100'
					quality={100}
				></Image>
			</StyledProjectImage>
			<StyledProject position={props.id % 2 == 0 ? 'left' : 'right'}>
				<h3 className='text-3xl font-semibold text-neutral-100'>{props.title}</h3>
				<p className='text-lg text-neutral-100'>{props.description}</p>
				<div className='mt-4 flex items-center gap-4'>
					{props.tech.map((tech, index) => (
						<span className='rounded-2xl bg-blue-400 px-3 pt-1 text-neutral-50' key={index}>
							{tech}
						</span>
					))}
				</div>
				<div className='mt-4 flex items-center gap-4'>
					<Link href={props.repolink}>
						<a className='text-2xl text-neutral-50 hover:text-blue-400'>
							<FiGithub></FiGithub>
						</a>
					</Link>
					<Link href={props.link}>
						<a className='text-2xl text-neutral-50 hover:text-blue-400'>
							<FiExternalLink></FiExternalLink>
						</a>
					</Link>
				</div>
			</StyledProject>
		</div>
	);
};

export default Project;
