import { useState, useEffect } from "react";

function BackToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
        const scrolledFromTop = window.scrollY > 500;
      
        setIsVisible(scrolledFromTop);
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

	return (
		<div className="fixed bottom-8 right-8">
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="flex justify-between items-center"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="1.25em"
						viewBox="0 0 448 512"
					>
						<path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
					</svg>
					&emsp; Back to Top
				</button>
			)}
		</div>
	);
}

export default BackToTopButton;