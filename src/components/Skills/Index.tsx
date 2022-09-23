import React from 'react';
import Skill, { SkillProps } from './Skill';
import skills from '../../data/skills.json';
import Heading from '../Heading';

const Skills: React.FC = () => {
	return (
		<section className='mb-40 grid grid-cols-1 gap-12 xl:mx-20'>
			<Heading text='Skills' id={2}></Heading>
			<div className='grid grid-cols-auto-fit-skills gap-3'>
				{skills.map((skill: SkillProps, id) => (
					<Skill {...skill} key={id} />
				))}
			</div>
		</section>
	);
};

export default Skills;
