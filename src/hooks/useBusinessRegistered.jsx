import { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";
import { jwtDecode } from "jwt-decode";

function useBusinessRegistered() {
	const [isBusinessRegistered, setIsBusinessRegistered] = useState(false);
	const [userBusinesses, setUserBusinesses] = useState([]);
	const [token, , isTokenLoading] = useLocalStorage("token", "");
	const [isLoading, setIsLoading] = useState(true);
	const [selectedBusiness, setSelectedBusiness] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!isTokenLoading && token) {
					const response = await axios.get("/business/all");

					if (response.data) {
						const decodedToken = jwtDecode(token);
						const userEmail = decodedToken.userEmail;

						console.log("Decoded Token:", decodedToken);
						console.log("API Response:", response.data);

						// Filter businesses based on the user's email
						const matchingBusinesses = response.data.filter(
							(business) => business.userEmail === userEmail
						);

						console.log("Matching Businesses:", matchingBusinesses);

						// Select the first matching business (if any)
						const selected =
							matchingBusinesses.length > 0 ? matchingBusinesses[0] : null;

						setIsBusinessRegistered(!!selected);
						setUserBusinesses(matchingBusinesses);
						setSelectedBusiness(selected);
					}
				}
			} catch (error) {
				console.log("Failed to fetch businesses:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [isTokenLoading, token]);

	return { isBusinessRegistered, isLoading, userBusinesses, selectedBusiness };
}

export default useBusinessRegistered;
