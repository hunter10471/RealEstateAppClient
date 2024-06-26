import { useEffect, useState } from "react";

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<{
		width?: number;
		height?: number;
	}>({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
};

export default useWindowSize;
