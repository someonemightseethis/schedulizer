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
		<div
			className={`filters fixed left-0 z-10 flex w-full justify-between space-x-4 border-y-2 border-indigo-500 bg-[#FAF8ED] px-20 py-2 font-ptSansCaption text-xs font-normal sm:space-x-2 md:my-1 md:space-x-1 xl:my-[52px] transition-all duration-500 ease-in-out ${
				showFilters ? "opacity-100" : "opacity-0"
			}`}>
			{/* <div className="relative inline-flex h-10 w-96 flex-col items-start justify-start">
					<div className="h-10 w-96 border-b-2 border-t-2 border-black bg-orange-50" />
					<div className="inline-flex h-4 items-start justify-end gap-10">
						<div className="font-['PT Sans Caption'] w-14 text-center text-xs font-normal text-black">
							IT / TECH
						</div>
						<div className="font-['PT Sans Caption'] text-center text-xs font-normal text-black">
							Cosmetic
						</div>
						<div className="font-['PT Sans Caption'] w-14 text-center text-xs font-normal text-black">
							Fitness
						</div>
						<div className="font-['PT Sans Caption'] text-center text-xs font-normal text-black">
							Consulting
						</div>
						<div className="font-['PT Sans Caption'] w-14 text-center text-xs font-normal text-black">
							Finance
						</div>
						<div className="font-['PT Sans Caption'] text-center text-xs font-normal text-black">
							Education
						</div>
						<div className="font-['PT Sans Caption'] text-center text-xs font-normal text-black">
							Government
						</div>
						<div className="font-['PT Sans Caption'] w-14 text-center text-xs font-normal text-black">
							Medical
						</div>
						<div className="font-['PT Sans Caption'] w-14 text-center text-xs font-normal text-black">
							Music
						</div>
						<div className="font-['PT Sans Caption'] w-14 text-center text-xs font-normal text-black">
							Art
						</div>
						<div className="font-['PT Sans Caption'] w-14 text-center text-xs font-normal text-black">
							Clothing
						</div>
						<div className="font-['PT Sans Caption'] w-14 text-center text-xs font-normal text-black">
							Auto
						</div>
						<div className="font-['PT Sans Caption'] text-center text-xs font-normal text-black">
							Psychology
						</div>
						<div className="font-['PT Sans Caption'] w-14 text-center text-xs font-normal text-black">
							Business
						</div>
					</div>
				</div> */}
			<a
				href="#"
				className="hover:font-medium hover:underline hover:underline-offset-4">
				IT / Tech
			</a>
			<a
				href="#"
				className="hover:font-medium hover:underline hover:underline-offset-4">
				Cosmetic
			</a>
			<a
				href="#"
				className="hover:font-medium hover:underline hover:underline-offset-4">
				Fitness
			</a>
			<a
				href="#"
				className="hover:font-medium hover:underline hover:underline-offset-4">
				Consulting
			</a>
			<a
				href="#"
				className="hidden hover:font-medium hover:underline hover:underline-offset-4 sm:inline">
				Finance
			</a>
			<a
				href="#"
				className="hidden hover:font-medium hover:underline hover:underline-offset-4 sm:inline">
				Education
			</a>
			<a
				href="#"
				className="hidden hover:font-medium hover:underline hover:underline-offset-4 sm:inline">
				Government
			</a>
			<a
				href="#"
				className="hidden hover:font-medium hover:underline hover:underline-offset-4 md:inline">
				Medical
			</a>
			<a
				href="#"
				className="hidden hover:font-medium hover:underline hover:underline-offset-4 md:inline">
				Music
			</a>
			<a
				href="#"
				className="hidden hover:font-medium hover:underline hover:underline-offset-4 md:inline">
				Art
			</a>
			<a
				href="#"
				className="hidden hover:font-medium hover:underline hover:underline-offset-4 md:inline">
				Clothing
			</a>
			<a
				href="#"
				className="hidden hover:font-medium hover:underline hover:underline-offset-4 md:inline">
				Auto
			</a>
			<a
				href="#"
				className="hidden hover:font-medium hover:underline hover:underline-offset-4 md:inline">
				Psychology
			</a>
			<a
				href="#"
				className="hidden hover:font-medium hover:underline hover:underline-offset-4 md:inline">
				Business
			</a>
		</div>
	);
}

export default Filters;
