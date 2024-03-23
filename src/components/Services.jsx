import { useState, useEffect } from "react";
import Layout from "./Layout";
import Filters from "./Filters";
import ServiceCard from "./ServiceCard";
import BackToTopButton from "./BacktoTopButton";

function Services() {
	const [services, setServices] = useState([]);
	const [businesses, setBusinesses] = useState([]);

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await fetch("/services/all");
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const { data } = await response.json();
				console.log("services data:", data);
				setServices(data);
			} catch (error) {
				console.error("Fetch error for services: ", error);
			}
		};

		const fetchBusinesses = async () => {
			try {
				const response = await fetch("/business/all");
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setBusinesses(data);
				// console.log(data);
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};

		fetchServices();
		fetchBusinesses();
	}, []);

	return (
		<Layout>
			<Filters />
			<div className="px-20 pb-12 pt-20">
				<h1 className="flex justify-center py-16 font-bebas text-6xl font-semibold tracking-wide text-indigo-500">
					SERVICES.
				</h1>
				<div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-16">
					{services.map((service, index) => {
						console.log(
							"service.business_id[0]:",
							String(service.business_id[0])
						);
						console.log("businesses:", businesses);
						const business =
							businesses &&
							businesses.find(
								(business) => business._id === String(service.business_id[0])
							);
						console.log("business:", business);
						if (business) {
							console.log("business name:", business.businessName);
							return (
								<ServiceCard
									key={index}
									service={service}
									businessName={business.businessName}
									businessId={business._id}
								/>
							);
						}
					})}
				</div>
			</div>
			<BackToTopButton />
		</Layout>
	);
}

export default Services;
