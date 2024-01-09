import ServiceCard from "./ServiceCard";
import BackToTopButton from "./BacktoTopButton";
// import Ratings from "./Ratings";
// import InputField from "./form/InputField";
import Layout from "./Layout";
// import Button from "./Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BusinessInfo() {
	const { businessId } = useParams();
	console.log("businessId: ", businessId);
	const [business, setBusiness] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [services, setServices] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(`/business/${businessId}`);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setBusiness(data);

				const servicesResponse = await fetch("/services/all");
				if (!servicesResponse.ok) {
					throw new Error(`HTTP error! status: ${servicesResponse.status}`);
				}
				const servicesData = await servicesResponse.json();
				console.log("Business email: ", data.businessEmail);
				servicesData.data.forEach((service) => {
					console.log("Service business email: ", service.businessEmail);
				});

				const matchingServices = servicesData.data.filter(
					(service) => service.businessEmail === data.businessEmail
				);
				console.log("matching services:", matchingServices);
				setServices(matchingServices);
			} catch (error) {
				console.error("Fetch error: ", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData(businessId);
	}, [businessId]);

	console.log("isLoading: ", isLoading);
	console.log("business: ", business);

	return (
		<Layout className="min-h-screen">
			<div className="flex h-auto flex-col justify-center px-32 py-32">
				<div className="flex items-center justify-center space-x-6">
					<div className="flex flex-col items-center justify-center px-32">
						<div className="">
							<div className="flex w-full justify-center">
								<div className="">
									<img
										src="/images/logo.png"
										className="flex w-[80px] items-center justify-center rounded-full border-2 border-black bg-[#FAF8ED]"
									/>
								</div>
							</div>
							<div className="px-6 pt-12 text-center">
								<div className="flex justify-center space-x-6">
									<div>
										<h4 className="font-poppins text-xl font-bold text-black">
											{business.name}
										</h4>
										<p className="font-muktaVaani text-sm font-normal text-gray-600">
											{business.type} / {business.workField}
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
								<p className="text-md py-6 text-center font-muktaVaani">
									We gotta burn the rain forest, dump toxic waste, pollute the
									air, and rip up the OZONE! Cause maybe if we screw up this
									planet enough, they wont want it anymore! Theyre using our own
									satellites against us. And the clock is ticking. Yeah, but
									your scientists were so preoccupied with whether or not they
									could, they didnt stop to think if they should.
								</p>
							</div>
						</div>
					</div>
					{/* <div className="w-full p-4">
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
					</div> */}
				</div>
				<div className="py-16">
					<h2 className="mb-20 flex justify-center font-bebas text-9xl font-semibold">
						Services.
					</h2>
					<div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-16 px-12">
						{services &&
							services.map((service, index) => (
								<ServiceCard
									key={index}
									service={service}
									businessName={business.businessName}
								/>
							))}
					</div>
				</div>
			</div>
			<BackToTopButton />
		</Layout>
	);
}

export default BusinessInfo;
