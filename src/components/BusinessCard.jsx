import Button from "./Button";
import PropTypes from "prop-types";
import { animate } from "motion";
import { useEffect } from "react";

function BusinessCard({ business }) {
	useEffect(() => {
		animate(
			".businessDescription",
			{ scale: [0.8, 1], opacity: [0, 1] },
			{ duration: 1.5 }
		);
		animate(
			".businessNameType",
			{ x: [-10, 1], opacity: [0, 1] },
			{ duration: 1.5 }
		);
		animate(
			".businessRating",
			{ x: [10, 1], opacity: [0, 1] },
			{ duration: 1.5 }
		);
		animate(
			".appointmentButton",
			{ scale: [1.1, 1], opacity: [0, 1] },
			{ duration: 1.5 }
		);
	});

	return (
		<div className="flex items-center justify-center">
			<div className="group relative w-full break-words rounded-xl bg-[#FAF8ED] shadow-xl md:max-w-sm">
				<div className="py-2">
					<div className="flex flex-wrap justify-center">
						<div className="flex w-full justify-center">
							<div className="relative">
								<img
									src="./images/logo.png"
									className="absolute -bottom-10 -left-10 flex max-w-[80px] items-center justify-center rounded-full border-2 border-black bg-[#FAF8ED] shadow-md"
								/>
							</div>
						</div>
					</div>
					<div className="overflow-hidden pt-16 text-center">
						<div className="flex justify-center space-x-6">
							<div className="businessNameType">
								<h4 className="font-poppins text-lg font-bold text-[#18191E]">
									{business.name}
								</h4>
								<p className="font-muktaVaani text-xs font-normal text-gray-600">
									{business.workField} / {business.type}
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
							<div className="businessRating flex flex-col items-center justify-center">
								<p className="font-poppins text-xl font-bold text-[#18191E]">
									4.3 / 5
								</p>
								<p className="font-muktaVaani text-sm font-normal text-gray-600">
									Rating
								</p>
							</div>
						</div>
					</div>
					<div className="mx-6 py-6 text-center">
						<div className="flex flex-wrap justify-center">
							<div className="businessDescription w-full px-2">
								<p className="text-md mb-4 font-muktaVaani leading-relaxed text-[#18191E]">
									welcome to {business.name}. We sepecialize in all sorts of{" "}
									{business.workField} solution
								</p>
							</div>
							<div className="appointmentButton pt-2">
								<Button
									buttonName="VISIT PROFILE"
									buttonLink={`/schedulizer/businessinfo/${business._id}`}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

BusinessCard.propTypes = {
	business: PropTypes.shape({
		name: PropTypes.string,
		type: PropTypes.string,
		workField: PropTypes.string,
		_id: PropTypes.string,
	}).isRequired,
};

export default BusinessCard;
