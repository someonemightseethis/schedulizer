import { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";
import { jwtDecode } from "jwt-decode";

function useBusinessRegistered() {
	const [isBusinessRegistered, setIsBusinessRegistered] = useState(false);
	const [token, , isTokenLoading] = useLocalStorage("token", "");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!isTokenLoading && token) {
					const response = await axios.get("/business/all");

					if (response.data) {
						console.log("Token:", token);
						const decodedToken = jwtDecode(token);
						console.log("Decoded Token:", decodedToken);
						const userEmail = decodedToken.userEmail;

						console.log("Decoded Token:", decodedToken);
						console.log("User Email:", userEmail);

						// Filter the businesses that match the user's email
						const matchingBusinesses = response.data.filter((business) => {
							console.log("Business User Email:", business.userEmail);
							return business.userEmail === userEmail;
						});

						console.log("Matching Businesses:", matchingBusinesses);

						setIsBusinessRegistered(matchingBusinesses.length > 0);
					}
				}
			} catch (error) {
				console.log("Failed to fetch businesses:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [token, isTokenLoading]);

	return { isBusinessRegistered, isLoading };
}

export default useBusinessRegistered;
