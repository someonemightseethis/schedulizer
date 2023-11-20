import AppointmentCard from "./AppointmentCard";
import Navbar from "./Navbar/Navbar";
import BackToTopButton from "./BacktoTopButton";
import Ratings from "./Ratings";
import FeedbackModal from "./FeedbackModal";

function BusinessInfo() {
	return (
		<div className="">
			<Navbar />
			<div className="h-screen p-12 bg-[#FAF8ED]">
				<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-8 px-4">
					<div className="">
						<div className="lg:fixed lg:top-[120px] lg:left-14 lg:w-3/12 md:fixed md:w-5/12 space-y-6">
							<div className="bg-[#FAF8ED] p-8 rounded-lg shadow-md max-w-md w-full border-2 border-black">
								<div className="pb-2">
									<div className="flex justify-center w-full">
										<div className="relative">
											<img
												src="./images/logo.png"
												className="border-black absolute bg-[#FAF8ED] -bottom-6 -left-10 flex items-center justify-center rounded-full border-2 max-w-[80px]"
											/>
										</div>
									</div>
									<div className="pt-14 text-center">
										<div className="flex justify-center space-x-6">
											<div>
												<h4 className="text-2xl font-poppins font-bold text-black">
													Business Name
												</h4>
												<p className="text-md font-muktaVaani font-normal text-gray-600">
													Business Category / Type
												</p>
											</div>
											<div className="py-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="#6366F1"
													stroke="#6366F1"
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
												<p className="text-2xl font-poppins font-bold text-black">4.3 / 5</p>
												<p className="text-md font-muktaVaani font-normal text-gray-600">
													Rating
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-[#FAF8ED] p-8 rounded-lg shadow-md max-w-md w-full border-2 border-black">
								<p className="text-center font-muktaVaani text-lg">
									We gotta burn the rain forest, dump toxic waste, pollute the
									air, and rip up the OZONE! Cause maybe if we screw up this
									planet enough, they wont want it anymore! Theyre using our own
									satellites against us. And the clock is ticking. Yeah, but
									your scientists were so preoccupied with whether or not they
									could, they didnt stop to think if they should.
								</p>
							</div>
							<div className="px-12 py-2">
								<FeedbackModal />
							</div>
							<div className="flex justify-center items-center text-center flex-col bottom-0">
								<h4 className="text-xl font-ptSansCaption font-semibold text-black">
									Would you like to give this business a rating?
								</h4>
								<Ratings />
							</div>
						</div>
					</div>
					<div className="bg-[#FAF8ED] lg:col-span-2 pb-32 pt-[6px] mt-16">
						<div className="bg-[#FAF8ED] grid xl:grid-cols-2 lg:grid-cols-1 gap-8">
							<AppointmentCard />
							<AppointmentCard />
							<AppointmentCard />
							<AppointmentCard />
							<AppointmentCard />
							<AppointmentCard />
						</div>
					</div>
				</div>
			</div>
			<BackToTopButton />
		</div>
	);
}

export default BusinessInfo;
