import ServicesCard from "../ServicesCRUDCard";
import { useEffect, useState } from "react";
import useBusinessRegistered from "../../hooks/useBusinessRegistered";
import axios from "axios";

function ServicesCRUD() {
	const [services, setServices] = useState([]);
	const { selectedBusiness } = useBusinessRegistered();
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
				console.log(data);
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};

		fetchData();
	}, []);

	console.log(services);
	return (
		<div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-16 px-20">
			{services
				.filter((service) => service.businessEmail === businessEmail)
				.map((service, index) => (
					<ServicesCard key={index} service={service} onDelete={handleDelete} />
				))}
		</div>
	);
}

export default ServicesCRUD;
