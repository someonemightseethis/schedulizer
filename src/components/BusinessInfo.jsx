import AppointmentCard from "./AppointmentCard";
import BackToTopButton from "./BacktoTopButton";
import Ratings from "./Ratings";
import InputField from "./Form/InputField";
import Layout from "./Layout";
import Button from "./Button";
import { useEffect, useState } from "react";

function BusinessInfo() {
	const [businesses, setBusinesses] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/business/all");
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setBusinesses(data);
				console.log(data);
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};

		fetchData();
	}, []);

	return (
		<Layout className="min-h-screen">
			<div className="flex h-auto flex-col justify-center p-12">
				<div className="grid h-auto grid-cols-2 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-x-0">
					<div className="py-32">
						<div className="fixed flex h-auto flex-col items-center justify-center space-y-6">
							<div className="w-full rounded-xl bg-[#FAF8ED] py-4 shadow-xl">
								<div className="flex w-full justify-center">
									<div className="relative">
										<img
											src="./images/logo.png"
											className="absolute -bottom-8 -left-10 flex max-w-[80px] items-center justify-center rounded-full border-2 border-black bg-[#FAF8ED]"
										/>
									</div>
								</div>
								<div className="pt-12 text-center">
									<div className="flex justify-center space-x-6">
										<div>
											<h4 className="font-poppins text-xl font-bold text-black">
												Business Name
											</h4>
											<p className="font-muktaVaani text-sm font-normal text-gray-600">
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
											<p className="font-poppins text-xl font-bold text-black">
												4.3 / 5
											</p>
											<p className="font-muktaVaani text-sm font-normal text-gray-600">
												Rating
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full max-w-md rounded-xl bg-[#FAF8ED] p-8 shadow-xl">
								<p className="text-md text-center font-muktaVaani">
									We gotta burn the rain forest, dump toxic waste, pollute the
									air, and rip up the OZONE! Cause maybe if we screw up this
									planet enough, they wont want it anymore! Theyre using our own
									satellites against us. And the clock is ticking. Yeah, but
									your scientists were so preoccupied with whether or not they
									could, they didnt stop to think if they should.
								</p>
							</div>
							<div className="w-full p-4">
								<h4 className="pb-2 text-center font-ptSansCaption text-lg font-semibold text-black">
									Business Feedback
								</h4>
								<form>
									<InputField
										inputFieldType="textarea"
										inputFieldId="userBusinessFeedback"
										inputFieldPlaceholder="enter your feedback"
										isRequired={true}
										fieldType="textarea"
										cols={10}
										rows={3}
										maxLength={300}
									/>
									<div className="px-32">
										<Button buttonName="SUBMIT" buttonType="submit" />
									</div>
								</form>
							</div>
							<div className="bottom-0 flex flex-col items-center justify-center text-center">
								<h4 className="font-ptSansCaption text-lg font-semibold text-black">
									Would you like to give this business a rating?
								</h4>
								<Ratings />
							</div>
						</div>
					</div>
					<div className="py-16 lg:col-span-2">
						<div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-2">
							{businesses.map((business, index) => (
								<AppointmentCard key={index} business={business} />
							))}
						</div>
					</div>
				</div>
			</div>
			<BackToTopButton />
		</Layout>
	);
}

export default BusinessInfo;
