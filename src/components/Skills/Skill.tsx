import React from 'react';
import Image from 'next/image';

export interface SkillProps {
	name: string;
	link: string;
	imageURL: string;
}

const Skill: React.FC<SkillProps> = ({ name, link, imageURL }) => {
	return (
		<div className='flex aspect-square w-full items-center justify-center rounded bg-neutral-700 p-4'>
			<a
				href={link}
				target='_blank'
				rel='noreferrer'
				className='flex flex-col items-center justify-center gap-2'
			>
				<Image
					src={imageURL}
					alt='typescript'
					width='50'
					height='50'
					quality={100}
					layout='fixed'
					className='rounded'
				></Image>
				<span className='text-xs capitalize text-neutral-50'>{name}</span>
			</a>
		</div>
	);
};

export default Skill;
