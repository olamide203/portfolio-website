import React from 'react';
import { useState, useEffect } from 'react';
import { IoFlash } from 'react-icons/io5';
import NavList from './NavList';
const Header: React.FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const toggleNav = () => {
		setIsVisible(prev => !prev);
	};
	const closeNav = () => {
		setIsVisible(false);
	};
	return (
		<header className='fixed top-0 z-40 grid h-20 w-full grid-cols-auto-1fr items-center justify-between gap-4 border-b border-b-neutral-700 bg-neutral-800 px-12 text-neutral-100'>
			<div className='aspect-square rounded-3xl border-2 border-blue-200 p-2'>
				<IoFlash className='text-2xl text-blue-200' />
			</div>
			<button
				aria-controls='navigation'
				aria-expanded={isVisible}
				className='absolute right-12 z-50 grid aspect-square w-8 items-center justify-center sm:hidden'
				onClick={toggleNav}
			>
				<span className='sr-only'>Menu</span>
				<div className='h-1 w-8 rounded bg-blue-200' aria-hidden='true'></div>
				<div className='h-1 w-8 rounded bg-blue-200' aria-hidden='true'></div>
			</button>
			<NavList isVisible={isVisible} closeNav={closeNav} />
		</header>
	);
};

export default Header;
