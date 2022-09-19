import React from 'react';

interface HeadingProps {
	text: string;
	id: number;
}

const Heading: React.FC<HeadingProps> = ({ id, text }) => {
	return (
		<h4 className='flex w-full items-center whitespace-nowrap text-xl font-semibold text-neutral-100 after:relative after:bottom-0 after:ml-4 after:h-px after:w-60 after:bg-slate-100'>
			<span className='aria-hidden mr-1.5 font-mono text-xl font-normal text-blue-200'>
				{new Intl.NumberFormat('en-US', {
					minimumIntegerDigits: 2,
					useGrouping: false,
				}).format(id)}
				.
			</span>
			{text}
			<span className='sr-only'>Section</span>
		</h4>
	);
};

export default Heading;
