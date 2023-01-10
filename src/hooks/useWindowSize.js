import { useState, useEffect } from "react";

// Small: min-width: 576px
// Medium: min-width: 768px
// Large: min-width: 992px
// XL: min-width: 1200px

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({ width: null, height: null });

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
};

export default useWindowSize;
