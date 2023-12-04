import AppointmentCard from "./AppointmentCard";
import Navbar from "./Navbar/Navbar";
import BackToTopButton from "./BacktoTopButton";
import Ratings from "./Ratings";
import FeedbackModal from "./FeedbackModal";

function BusinessInfo() {
	return (
		<div className="">
			<Navbar />
			<div className="h-screen bg-[#FAF8ED] p-6">
				<div className="grid h-screen grid-cols-1 bg-[#FAF8ED] px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
					<div className="">
						<div className="h-screen space-y-6 bg-[#FAF8ED] md:fixed md:w-5/12 lg:fixed lg:left-14 lg:top-[150px] lg:w-3/12">
							<div className="w-full max-w-md rounded-lg border-2 border-black p-8 shadow-md">
								<div className="flex w-full justify-center">
									<div className="relative">
										<img
											src="./images/logo.png"
											className="absolute -bottom-6 -left-10 flex max-w-[80px] items-center justify-center rounded-full border-2 border-black bg-[#FAF8ED]"
										/>
									</div>
								</div>
								<div className="pt-14 text-center">
									<div className="flex justify-center space-x-6">
										<div>
											<h4 className="font-poppins text-2xl font-bold text-black">
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
											<p className="font-poppins text-2xl font-bold text-black">
												4.3 / 5
											</p>
											<p className="text-md font-muktaVaani font-normal text-gray-600">
												Rating
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full max-w-md rounded-lg border-2 border-black bg-[#FAF8ED] p-8 shadow-md">
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
							<div className="bottom-0 flex flex-col items-center justify-center text-center">
								<h4 className="font-ptSansCaption text-xl font-semibold text-black">
									Would you like to give this business a rating?
								</h4>
								<Ratings />
							</div>
						</div>
					</div>
					<div className="mt-16 bg-[#FAF8ED] pb-32 pt-[24px] lg:col-span-2">
						<div className="grid gap-8 bg-[#FAF8ED] lg:grid-cols-1 xl:grid-cols-2">
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
