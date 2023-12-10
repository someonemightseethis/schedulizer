import Button from "./Button";

function BusinessCard() {
	return (
		<div className="flex items-center justify-center">
			<div className="group relative mb-6 mt-6 w-full break-words rounded-xl border-2 border-black bg-[#FAF8ED] shadow-lg md:max-w-sm">
				<div className="pb-6">
					<div className="flex flex-wrap justify-center">
						<div className="flex w-full justify-center">
							<div className="relative">
								<img
									src="./images/logo.png"
									className="absolute -bottom-12 -left-10 flex max-w-[80px] items-center justify-center rounded-full border-2 border-black bg-[#FAF8ED]"
								/>
							</div>
						</div>
					</div>
					<div className="pt-16 text-center">
						<div className="flex justify-center space-x-6">
							<div>
								<h4 className="font-poppins text-xl font-bold text-black">
									Business Name
								</h4>
								<p className="text-sm font-muktaVaani font-normal text-gray-600">
									Business Category / Type
								</p>
							</div>
							<div className="py-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									stroke="black"
									className="current-fill h-4 w-4"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
									/>
								</svg>
							</div>
							<div className="flex flex-col items-center justify-center">
								<p className="font-poppins text-xl font-bold text-black">
									4.3 / 5
								</p>
								<p className="text-sm font-muktaVaani font-normal text-gray-600">
									Rating
								</p>
							</div>
						</div>
					</div>
					<div className="mx-6 mt-6 border-t border-indigo-500 pt-6 text-center">
						<div className="flex flex-wrap justify-center">
							<div className="w-full px-2">
								<p className="mb-4 font-muktaVaani text-md leading-relaxed text-black">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
									turpis orci, maximus sed purus a, cursus scelerisque purus.
									Morbi molestie, odio at sagittis rhoncus, felis massa iaculis
									mi, quis molestie erat ipsum vel risus.
								</p>
							</div>
							<div className="py-4">
								<Button
									buttonName="KNOW MORE / BOOK AN APPOINTMENT"
									buttonLink="/schedulizer/businessinfo"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BusinessCard;
