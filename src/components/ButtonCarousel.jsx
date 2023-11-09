import { useRef } from "react";

function ButtonCarousel() {
	const sliderRef = useRef(null);

	const handlePrevClick = () => {
		sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
	};

	const handleNextClick = () => {
		sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
	};

	return (
		<div className="relative">
			<div className="overflow-hidden">
				<div className="flex space-x-4" ref={sliderRef}>
        <div className="flex-none">
						<button className="flex justify-center items-center px-4 md:px-4 md:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200">
							Add Your Business
						</button>
					</div>
          <div className="flex-none">
						<button className="flex justify-center items-center px-4 md:px-4 md:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200">
							Add Your Business
						</button>
					</div>
          <div className="flex-none">
						<button className="flex justify-center items-center px-4 md:px-4 md:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200">
							Add Your Business
						</button>
					</div>
          <div className="flex-none">
						<button className="flex justify-center items-center px-4 md:px-4 md:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200">
							Add Your Business
						</button>
					</div>
          <div className="flex-none">
						<button className="flex justify-center items-center px-4 md:px-4 md:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200">
							Add Your Business
						</button>
					</div>
          <div className="flex-none">
						<button className="flex justify-center items-center px-4 md:px-4 md:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200">
							Add Your Business
						</button>
					</div>
					<div className="flex-none">
						<button className="flex justify-center items-center px-4 md:px-4 md:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200">
							Add Your Business
						</button>
					</div>
					<div className="flex-none">
						<button className="flex justify-center items-center px-4 md:px-4 md:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200">
							Add Your Business
						</button>
					</div>
					<div className="flex-none">
						<button className="flex justify-center items-center px-4 md:px-4 md:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200">
							Add Your Business
						</button>
					</div>
					<div className="flex-none">
						<button className="flex justify-center items-center px-4 md:px-4 md:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200">
							Add Your Business
						</button>
					</div>
					<div className="flex-none">
						<button className="flex justify-center items-center px-4 md:px-4 md:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200">
							Add Your Business
						</button>
					</div>
				</div>
			</div>
			<button className="prev-button" onClick={handlePrevClick}>
				Previous
			</button>
			<button className="next-button" onClick={handleNextClick}>
				Next
			</button>
		</div>
	);
}

export default ButtonCarousel;
