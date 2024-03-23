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
		<Layout>
			<div className="flex h-auto flex-col justify-center px-32 py-12">
				<h1 className="flex justify-center py-16 font-bebas text-8xl font-semibold tracking-wide text-indigo-500">
					BUSINESS INFO.
				</h1>
				<div className="flex items-center justify-center space-x-6">
					<div className="flex items-center justify-center space-x-12 break-words rounded-2xl bg-[#FAF8ED] p-8 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
						<div className="flex flex-col items-center justify-center space-y-4">
							<img
								className="h-20 w-20 rounded-full border-2 border-black"
								src="/images/logo.png"
							/>
							<div className="flex flex-col items-center justify-center">
								<div className="font-poppins text-base font-semibold text-black">
									{business.businessName}
								</div>
								<div className="flex justify-between space-x-6">
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
						<div className="w-96 self-stretch text-center font-muktaVaani text-sm font-normal text-black">
							{business.businessName} is a prominent{" "}
							{business.businessWorkField}
							nestled in the heart of {business.businessCity}. With a commitment
							to skincare excellence, our team of seasoned professionals
							utilizes cutting-edge treatments to address a myriad of
							dermatological concerns. From rejuvenating facials to advanced
							laser therapies, we cater to diverse skin needs. Committed to
							client satisfaction, our clinic blends medical expertise with a
							soothing ambiance, ensuring a holistic approach to skincare.
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
				<div className="py-12">
					<h1 className="flex justify-center py-16 font-bebas text-8xl font-semibold tracking-wide text-indigo-500">
						SERVICES.
					</h1>
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
