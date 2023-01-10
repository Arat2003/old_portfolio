import { useEffect } from "react";

// thanks https://blog.logrocket.com/detect-click-outside-react-component-how-to/#:~:text=Detecting%20an%20outside%20click%20of,outside%20of%20the%20tooltip%20component.
const useOutsideClick = (ref, callback) => {
	useEffect(() => {
		const handleClick = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				callback();
			}
		};

		document.addEventListener("touchstart", handleClick, true);
		// document.addEventListener("mousedown", handleClick, true);
		const cleanUp = () => {
			document.removeEventListener("touchstart", handleClick, true);
			document.removeEventListener("mousedown", handleClick, true);
		};

		return cleanUp;
	}, [ref, callback]);

	return ref;
};

export default useOutsideClick;
