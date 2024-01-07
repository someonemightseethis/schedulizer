import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
	const [isLoading, setIsLoading] = useState(true);
	const [storedValue, setStoredValue] = useState(initialValue);

	useEffect(() => {
		setIsLoading(true);
		try {
			const item = window.localStorage.getItem(key);
			if (item) {
				// Check if the item is a string
				if (item[0] !== "{" && item[0] !== "[") {
					setStoredValue(item);
				} else {
					// If not a string, parse it as JSON
					setStoredValue(JSON.parse(item));
				}
			}
		} catch (error) {
			console.warn(`Error reading localStorage key “${key}”:`, error);
		}
		setIsLoading(false);
	}, [key]);

	const setValue = (value) => {
		setIsLoading(true);
		try {
			const newValue = value instanceof Function ? value(storedValue) : value;
			setStoredValue(newValue);

			// If newValue is a string, save it as is
			if (typeof newValue === "string") {
				window.localStorage.setItem(key, newValue);
			} else {
				// If not a string, save it as JSON
				window.localStorage.setItem(key, JSON.stringify(newValue));
			}
		} catch (error) {
			console.warn(`Error setting localStorage key “${key}”:`, error);
		}
		setIsLoading(false);
	};

	return [storedValue, setValue, isLoading];
}

export default useLocalStorage;
