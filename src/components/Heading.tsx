import React from 'react';

interface HeadingProps {
	text: string;
	id: number;
}

const Heading: React.FC<HeadingProps> = ({ id, text }) => {
	return (
		<h4 className='flex w-full items-center whitespace-nowrap text-[clamp(26px,5vw,32px)] font-bold leading-[1.1] text-neutral-100 after:relative after:-top-1 after:ml-4 after:h-px after:w-60 after:bg-slate-100'>
			<span className='aria-hidden relative bottom-1 my-auto mr-1.5 font-mono text-xl font-normal text-blue-200'>
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
