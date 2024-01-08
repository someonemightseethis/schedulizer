import { useEffect, useState } from "react";
import BackToTopButton from "./BacktoTopButton";
import Filters from "./Filters";
import Layout from "./Layout";
import ServiceCard from "./ServiceCard";

function Services() {
	const [services, setServices] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/services/all");
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const { data } = await response.json(); // Extract 'data' property
				setServices(data);
				console.log(data);
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};

		fetchData();
	}, []);

	return (
		<Layout>
			<Filters />
			<div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-16 px-20 pb-12 pt-48">
				{services.map((service, index) => (
					<ServiceCard key={index} service={service} />
				))}
			</div>
			<BackToTopButton />
		</Layout>
	);
}

export default Services;
