import { useSelector } from "react-redux";
import ServiceCard from "../ServiceCRUDCard";
import { useEffect, useState } from "react";
import axios from "axios";

function ServicesCRUD() {
	const [services, setServices] = useState([]);
	const selectedBusiness = useSelector((state) => state.business.businessData);

	const businessEmail = selectedBusiness?.businessEmail;

	const handleDelete = async (id) => {
		try {
			const response = await axios.delete(`/services/${id}`, {
				method: "DELETE",
			});
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			setServices(services.filter((service) => service._id !== id));
		} catch (error) {
			console.error("Fetch error: ", error);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/services/all");
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const { data } = await response.json(); // Extract 'data' property
				setServices(data);
				// console.log(data);
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};

		fetchData();
	}, []);

	// console.log(services);
	return (
		<div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-16 px-20 pb-12">
			<h2 className="mb-4 font-bebas text-8xl font-semibold text-indigo-500 md:px-24 xl:lg:px-12">
				manage your services.
			</h2>
			{services
				.filter((service) => service.businessEmail === businessEmail)
				.map((service, index) => (
					<ServiceCard key={index} service={service} onDelete={handleDelete} />
				))}
		</div>
	);
}

export default ServicesCRUD;
