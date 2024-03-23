import Button from "./Button";
import PropTypes from "prop-types";
import { animate } from "motion";
import { useEffect } from "react";

function BusinessCard({ business }) {
	useEffect(() => {
		animate(
			".businessDescription",
			{ opacity: [-1, 1], scale: [0.9, 1] },
			{ duration: 1.5 }
		);
		animate(
			".businessDetails",
			{ x: [-30, 1], opacity: [0, 1] },
			{ duration: 1.5 }
		);
	});

	return (
		<div className="flex items-center justify-center">
			{/* <div className="group relative w-full break-words rounded-xl bg-[#FAF8ED] shadow-xl md:max-w-sm">
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
									{business.businessName}
								</h4>
								<p className="font-muktaVaani text-xs font-normal text-gray-600">
									{business.businessWorkField} / {business.businessType}
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
									welcome to {business.businessName}. We sepecialize in all
									sorts of {business.businessWorkField} solution
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
			</div> */}

			<div className="group inline-flex flex-col items-center justify-center gap-5 break-words rounded-2xl bg-[#FAF8ED] p-8 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] md:max-w-sm">
				<div className="flex flex-col items-center justify-center gap-7">
					<div className="inline-flex items-center justify-between gap-8">
						<img
							className="h-12 w-12 rounded-full border-2 border-black"
							src="./images/logo.png"
						/>
						<div className="flex flex-col justify-start">
							<div className="font-poppins text-base font-semibold text-black">
								{business.businessName}
							</div>
							<div className="businessDetails inline-flex items-center justify-center gap-2.5">
								<div className="font-muktaVaani text-xs text-black">
									{business.businessWorkField}
								</div>
								<div className="font-muktaVaani text-xs text-black">
									{business.businessCity}
								</div>
								<div className="font-muktaVaani text-xs text-black">
									Rating: 4.5 / 5
								</div>
							</div>
						</div>
					</div>
					<div className="businessDescription text-center font-muktaVaani text-sm font-normal text-black">
						This is the description for {business.businessName}. They are a{" "}
						{business.businessWorkField} business in the city of{" "}
						{business.businessCity}. Visit their profile to get to know the
						amazing services they provide or go on over to the services page and
						take a look at their services.
					</div>
					<div className="">
						<Button
							buttonName="VISIT PROFILE"
							buttonLink={`/schedulizer/businessinfo/${business._id}`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

BusinessCard.propTypes = {
	business: PropTypes.shape({
		businessName: PropTypes.string,
		businessType: PropTypes.string,
		businessWorkField: PropTypes.string,
		businessCity: PropTypes.string,
		_id: PropTypes.string,
	}).isRequired,
};

export default BusinessCard;
