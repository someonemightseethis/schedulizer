import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

function BackToTopButton() {
	const [isVisible, setIsVisible] = useState(false);
	const timeoutRef = useRef(null);

	const toggleVisibility = () => {
		const scrolledFromTop = window.scrollY > 500;
		setIsVisible(scrolledFromTop);

		// Clear the existing timeout if there is one
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		// Set a new timeout to hide the button after 4 seconds
		if (scrolledFromTop) {
			timeoutRef.current = setTimeout(() => {
				setIsVisible(false);
			}, 4000);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	const springs = useSpring({
		from: { opacity: 0, transform: "translate3d(0, 30px, 0)" },
		to: {
			opacity: isVisible ? 1 : 0,
			transform: `translate3d(0, ${isVisible ? 0 : 30}px, 0)`,
		},
	});

	return (
		<animated.div style={springs} className="fixed bottom-4 right-4">
			<button
				onClick={scrollToTop}
				className="flex flex-col items-center justify-between rounded-full bg-indigo-500 px-4 py-2 font-jaldi text-xs text-[#FAF8ED] opacity-90 transition-colors duration-200 hover:bg-indigo-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="white"
					height="1.25em"
					viewBox="0 0 448 512">
					<path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
				</svg>
				BACK TO TOP
			</button>
		</animated.div>
	);
}

export default BackToTopButton;
