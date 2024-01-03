import { useState } from "react";

function useLocalStorage(key, initialValue) {
	const readValue = () => {
		if (typeof window === "undefined") {
			return initialValue;
		}

		try {
			const item = window.localStorage.getItem(key);
			if (!item) {
				return initialValue;
			}

			// Check if the item is a string
			if (item[0] !== "{" && item[0] !== "[") {
				return item;
			}

			// If not a string, parse it as JSON
			return JSON.parse(item);
		} catch (error) {
			console.warn(`Error reading localStorage key “${key}”:`, error);
			return initialValue;
		}
	};

	const [storedValue, setStoredValue] = useState(readValue);

	const setValue = (value) => {
		if (typeof window === "undefined") {
			console.warn(
				`Tried setting localStorage key “${key}” even though environment is not a client`
			);
		}

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
	};

	return [storedValue, setValue];
}

export default useLocalStorage;
