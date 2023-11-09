import Button from "./Button";

function BusinessCard() {
	return (
		<div className="flex items-center justify-center">
			<div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-lg md:max-w-sm rounded-xl">
				<div className="pb-6">
					<div className="flex flex-wrap justify-center">
						<div className="flex justify-center w-full">
							<div className="relative">
								<img
									src="https://source.unsplash.com/jmURdhtm7Ng/120x120"
									className="border-black absolute -bottom-14 -left-10 flex items-center justify-center rounded-full border-2 max-w-[80px]"
								/>
							</div>
						</div>
					</div>
					<div className="pt-20 text-center">
						<div className="flex justify-center space-x-6">
							<div>
								<h4 className="text-xl font-bold text-black">Business Name</h4>
								<p className="text-sm font-normal text-gray-600">
									Business Category / Type
								</p>
							</div>
							<div className="py-4">
                        <svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								stroke="black"
								className="w-4 h-4 current-fill"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
								/>
							</svg>
                        </div>
							<div className="flex flex-col items-center justify-center">
								<p className="text-xl font-bold text-black">4.3 / 5</p>
								<p className="text-sm font-normal text-gray-600">Rating</p>
							</div>
						</div>
					</div>
					<div className="pt-6 mx-6 mt-6 text-center border-t border-indigo-500">
						<div className="flex flex-wrap justify-center">
							<div className="w-full px-6">
								<p className="mb-4 font-light leading-relaxed text-gray-600">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
									turpis orci, maximus sed purus a, cursus scelerisque purus.
									Morbi molestie, odio at sagittis rhoncus, felis massa iaculis
									mi, quis molestie erat ipsum vel risus.
								</p>
							</div>
							<Button buttonname="know more / book an appointment" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BusinessCard;
