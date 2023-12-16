import { useState, useEffect, useRef } from "react";

function Filters() {
	const [showFilters, setShowFilters] = useState(true);
	const scrollPosition = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPosition = window.pageYOffset;
			setShowFilters(currentScrollPosition <= scrollPosition.current);
			scrollPosition.current = currentScrollPosition;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		showFilters && (
			<div className="fixed left-0 z-10 flex w-full justify-between space-x-4 border-y-2 border-black bg-[#FAF8ED] px-20 py-2 font-ptSansCaption text-sm font-normal sm:space-x-2 md:my-1 md:space-x-1 xl:my-16">
				<a
					href="#"
					className="hover:font-medium hover:underline hover:underline-offset-4">
					IT
				</a>
				<a
					href="#"
					className="hover:font-medium hover:underline hover:underline-offset-4">
					Health Care
				</a>
				<a
					href="#"
					className="hover:font-medium hover:underline hover:underline-offset-4">
					Self Care
				</a>
				<a
					href="#"
					className="hover:font-medium hover:underline hover:underline-offset-4">
					Fitness
				</a>
				<a
					href="#"
					className="hidden hover:font-medium hover:underline hover:underline-offset-4 sm:inline">
					Education
				</a>
				<a
					href="#"
					className="hidden hover:font-medium hover:underline hover:underline-offset-4 sm:inline">
					Therapist
				</a>
				<a
					href="#"
					className="hidden hover:font-medium hover:underline hover:underline-offset-4 sm:inline">
					Consultancy
				</a>
				{/* <a
					href="#"
					className="hidden hover:font-medium hover:underline hover:underline-offset-4 md:inline">
					Filter 8
				</a>
				<a
					href="#"
					className="hidden hover:font-medium hover:underline hover:underline-offset-4 md:inline">
					Filter 9
				</a>
				<a
					href="#"
					className="hidden hover:font-medium hover:underline hover:underline-offset-4 md:inline">
					Filter 10
				</a> */}
			</div>
		)
	);
}

export default Filters;
