import { useEffect, useState } from "react";
import BackToTopButton from "./BacktoTopButton";
import BusinessCard from "./BusinessCard";
import Filters from "./Filters";
import Layout from "./Layout";

function Services() {
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
		<Layout>
			<Filters />
			<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 px-20 pb-12 pt-36">
				{businesses.map((business, index) => (
					<BusinessCard key={index} business={business} />
				))}
			</div>
			<BackToTopButton />
		</Layout>
	);
}

export default Services;
