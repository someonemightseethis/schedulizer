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
				const { data } = await response.json();
				setBusinesses(data);
			} catch (error) {
				console.error("Fetch error for businesses: ", error);
			}
		};

		fetchServices();
		fetchBusinesses();
	}, []);

	return (
		<Layout>
			<Filters />
			<div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-16 px-20 pb-12 pt-48">
				{services.map((service, index) => {
					const business =
						businesses &&
						businesses.find(
							(business) => business._id === service.business_id[0]
						);
					if (business) {
						console.log("business name:", business.name);
						return (
							<ServiceCard
								key={index}
								service={service}
								businessName={business.name}
							/>
						);
					}
				})}
			</div>
			<BackToTopButton />
		</Layout>
	);
}

export default Services;
