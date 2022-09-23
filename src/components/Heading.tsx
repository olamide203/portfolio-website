import React from 'react';
import { styled } from '../../stitches.config';

const StyledHeading = styled('h1', {
	display: 'flex',
	width: '100%',
	alignItems: 'center',
	whiteSpace: 'nowrap',
	fontSize: 'clamp(26px, 5vw, 32px)',
	fontWeight: 'bold',
	lineHeight: '1.1',
	textTransform: 'capitalize',
	color: '#FAFAFA',
	'&::after': {
		content: "''",
		position: 'relative',
		top: '-4px',
		marginLeft: '16px',
		height: '1px',
		width: '240px',
		backgroundColor: '#8892B0',
	},
});

interface HeadingProps {
	text: string;
	id: number;
}

const Heading: React.FC<HeadingProps> = ({ id, text }) => {
	return (
		<StyledHeading>
			<span className='aria-hidden relative bottom-0 my-auto mr-1.5 font-mono text-xl font-normal text-blue-200'>
				{new Intl.NumberFormat('en-US', {
					minimumIntegerDigits: 2,
					useGrouping: false,
				}).format(id)}
				.
			</span>
			{text}
			<span className='sr-only'>Section</span>
		</StyledHeading>
	);
};

export default Heading;
