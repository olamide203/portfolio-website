import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
	const getMatches = (query: string): boolean => {
		// prevent ssr issues
		if (typeof window !== 'undefined') {
			return window.matchMedia(query).matches;
		}
		return false;
	};

	const [matches, setMatches] = useState<boolean>(getMatches(query));

	useEffect(() => {
		const handleChange = () => {
			setMatches(getMatches(query));
		};
		const media = window.matchMedia(query);

		// Trigger the callback on mount
		handleChange();

		// Add the listener
		media.addEventListener('change', handleChange);

		// Remove the listener on unmount
		return () => media.removeEventListener('change', handleChange);
	}, [query]);

	return matches;
};

export default useMediaQuery;
