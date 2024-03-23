import { useEffect, useState } from "react";
import BackToTopButton from "./BacktoTopButton";
import BusinessCard from "./BusinessCard";
import Filters from "./Filters";
import Layout from "./Layout";

function Businesses() {
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
				// console.log(data);
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};

		fetchData();
	}, []);

	return (
		<Layout>
			<Filters />
			<div className="px-20 pb-12 pt-20">
				<h1 className="flex justify-center py-16 font-bebas text-6xl font-semibold tracking-wide text-indigo-500">
					BUSINESSES.
				</h1>
				<div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-16">
					{businesses.map((business, index) => (
						<BusinessCard key={index} business={business} />
					))}
				</div>
			</div>
			<BackToTopButton />
		</Layout>
	);
}

export default Businesses;
