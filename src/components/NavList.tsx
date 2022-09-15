import React, { useEffect } from 'react';
import NavItem from './NavItem';
import useMediaQuery from '../hooks/useMediaQuery';
import { NavItemProps } from './NavItem';
import { motion, useSpring, useTransform } from 'framer-motion';
import items from '../data/navItems.json';

export interface NavListProps {
	isVisible: boolean;
	closeNav: () => void;
}
const NavList: React.FC<NavListProps> = ({ isVisible, closeNav }) => {
	const x = useSpring(0, { stiffness: 300, damping: 30 });
	const y = useTransform(x, [0, 100], ['0%', '100%']);
	const matches = useMediaQuery('(min-width: 640px)');
	useEffect(() => {
		if (matches) {
			x.set(0);
			return closeNav();
		}
		isVisible ? x.set(0) : x.set(100);
	}, [isVisible, x, matches, closeNav]);
	return (
		<nav>
			<motion.ul
				style={{ x: y }}
				id='navigation'
				className='fixed top-0 left-1/3 right-0 bottom-0 z-40 flex list-none flex-col items-center gap-6 bg-neutral-800 py-[min(30vh_,_100px)] font-mono text-lg sm:static sm:flex-row sm:justify-end sm:bg-neutral-900 sm:p-4 sm:text-sm'
			>
				{items.map((item: NavItemProps) => (
					<NavItem key={item.id} {...item} />
				))}
				<button className='rounded border border-blue-200 py-2 px-4 text-blue-200 hover:bg-blue-50'>
					Resume
				</button>
			</motion.ul>
		</nav>
	);
};

export default NavList;
