import InputField from "../form/InputField";
import Button from "../Button";
import DayPicker from "../form/DayPicker";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import DropdownButton from "../form/DropdownButton";
import useBusinessRegistered from "../../hooks/useBusinessRegistered";

function ServicesCRUD() {
	const [serviceTitle, setServiceTitle] = useState("");
	const [serviceDuration, setServiceDuration] = useState("");
	const [servicePrice, setServicePrice] = useState("");
	const [serviceStartTime, setServiceStartTime] = useState("");
	const [serviceEndTime, setServiceEndTime] = useState("");
	const [serviceDescription, setServiceDescription] = useState("");
	const [durationUnit, setDurationUnit] = useState("mins");
	const [selectedDays, setSelectedDays] = useState("");
	const { selectedBusiness } = useBusinessRegistered();
	const businessEmail = selectedBusiness?.businessEmail;
	const businessId = selectedBusiness?._id;

	console.log("selectedBusiness", businessEmail);

	const timing = serviceStartTime + " " + serviceEndTime;

	const [errors, setErrors] = useState({});
	const [error, setError] = useState("");

	const [isLoading, setIsLoading] = useState(false);

	const [typedCharacters, setTypedCharacters] = useState(0);
	const typedCharactersElementRef = useRef(null);

	useEffect(() => {
		const textAreaElement = document.querySelector("#serviceDescription");
		typedCharactersElementRef.current =
			document.querySelector("#typed-characters");

		const updateCharacterCount = () => {
			setTypedCharacters(textAreaElement.value.length);
		};

		textAreaElement.addEventListener("input", updateCharacterCount);

		return () => {
			textAreaElement.removeEventListener("input", updateCharacterCount);
		};
	}, []);

	useEffect(() => {
		if (typedCharactersElementRef.current) {
			typedCharactersElementRef.current.textContent = typedCharacters;
		}
	}, [typedCharacters]);

	const handleDaysChange = (selectedDays) => {
		setSelectedDays(selectedDays);
	};

	const validateField = (value, validateFunc, errorMessage, fieldName) => {
		if (!validateFunc(value)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				[fieldName]: errorMessage,
			}));
		} else {
			setErrors((prevErrors) => {
				//eslint-disable-next-line no-unused-vars
				const { [fieldName]: _, ...rest } = prevErrors;
				return rest;
			});
		}
	};

	const handleSubmit = async (event) => {
		setIsLoading(true);
		event.preventDefault();

		const serviceData = {
			businessId,
			serviceTitle,
			serviceDuration: `${serviceDuration} ${durationUnit}`,
			servicePrice,
			timing,
			serviceDescription,
			selectedDays,
			businessEmail,
		};

		try {
			const response = await axios.post("/services/add", serviceData);
			console.log(response.data);

			// Check if the form submission was successful
			if (response.data.success) {
				setIsLoading(false);
			} else {
				setIsLoading(false);
			}
		} catch (error) {
			console.log("error data", error.response?.data);
			console.log("Form data", serviceData);
			setIsLoading(false);
			setError(error.response.data.error);
			console.log("error", error);
		}
	};

	return (
		<div className="flex items-center justify-center py-4">
			<div className="py-28">
				<h2 className="mb-12 flex items-center justify-center font-bebas text-9xl font-semibold md:px-24 xl:lg:px-52">
					Add a Service.
				</h2>
				<form onSubmit={handleSubmit} className="">
					<div className="px-56">
						<div className="space-y-4 py-2">
							<div className="grid w-full grid-cols-6 space-x-4">
								<div className="col-span-3">
									<InputField
										inputFieldId="serviceTitle"
										inputFieldType="text"
										inputFieldPlaceholder="service title"
										inputFieldHtmlFor="serviceTitle"
										inputFieldLabelName="Service Title"
										isRequired={true}
										fieldType="input"
										value={serviceTitle}
										onChange={(e) => setServiceTitle(e.target.value)}
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												(value) => value.trim() !== "",
												"Service title is required",
												"serviceTitle"
											)
										}
									/>
								</div>
								<div className="col-span-2">
									<InputField
										inputFieldId="serviceDuration"
										inputFieldType="text"
										inputFieldPlaceholder="service duration"
										inputFieldHtmlFor="serviceDuration"
										inputFieldLabelName="Service Duration"
										isRequired={true}
										fieldType="input"
										value={serviceDuration}
										onChange={(e) => setServiceDuration(e.target.value)}
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												(value) => !isNaN(value) && parseInt(value) > 0,
												"Service duration must be a positive number",
												"serviceDuration"
											)
										}
									/>
								</div>
								<div className="col-span-1">
									<DropdownButton
										dropdownbuttonname="minutes/hours"
										dropdownlistLength={2}
										dropdownliname1="minutes"
										dropdownliname2="hours"
										onOptionSelect={(value) =>
											setDurationUnit(value === "minutes" ? "mins" : "hrs")
										}
									/>
								</div>
							</div>

							<div className="grid w-full grid-cols-3 gap-4">
								<InputField
									inputFieldId="servicePrice"
									inputFieldType="text"
									inputFieldPlaceholder="service price"
									inputFieldHtmlFor="servicePrice"
									inputFieldLabelName="Service Price"
									isRequired={true}
									fieldType="input"
									value={servicePrice}
									onChange={(e) => {
										const value = parseFloat(e.target.value);
										if (!isNaN(value) && value >= 0) {
											setServicePrice(e.target.value);
										}
									}}
									validateOnBlur={true}
									validate={(value) =>
										validateField(
											value,
											(value) => !isNaN(value) && parseFloat(value) >= 0,
											"Service price must be a non-negative number",
											"servicePrice"
										)
									}
								/>

								<InputField
									inputFieldId="serviceStartTime"
									inputFieldType="time"
									inputFieldPlaceholder="xx am/pm"
									inputFieldHtmlFor="serviceStartTime"
									inputFieldLabelName="Service Start Time"
									isRequired={true}
									fieldType="input"
									value={serviceStartTime}
									onChange={(e) => setServiceStartTime(e.target.value)}
									validateOnBlur={true}
									validate={(value) =>
										validateField(
											value,
											(value) => value.trim() !== "",
											"Service start time is required",
											"serviceStartTime"
										)
									}
								/>

								<InputField
									inputFieldId="serviceEndTime"
									inputFieldType="time"
									inputFieldPlaceholder="xx am/pm"
									inputFieldHtmlFor="serviceEndTime"
									inputFieldLabelName="Service End Time"
									isRequired={true}
									fieldType="input"
									value={serviceEndTime}
									onChange={(e) => setServiceEndTime(e.target.value)}
									validateOnBlur={true}
									validate={(value) =>
										validateField(
											value,
											(value) => value.trim() !== "",
											"Service end time is required",
											"serviceEndTime"
										)
									}
								/>
							</div>

							<DayPicker onDaysChange={handleDaysChange} />

							<InputField
								inputFieldId="serviceDescription"
								inputFieldType="text"
								inputFieldPlaceholder="service description"
								inputFieldHtmlFor="serviceDescription"
								inputFieldLabelName="Service Description"
								isRequired={true}
								fieldType="textarea"
								cols={10}
								rows={5}
								maxLength={500}
								value={serviceDescription}
								onChange={(e) => setServiceDescription(e.target.value)}
								validateOnBlur={true}
								validate={(value) =>
									validateField(
										value,
										(value) => value.trim() !== "",
										"Service description is required",
										"serviceDescription"
									)
								}
							/>
							<div
								id="character-counter"
								className="text-right text-sm text-indigo-500 opacity-80">
								<span id="typed-characters">0</span>
								<span>/</span>
								<span id="maximum-characters">500</span>
							</div>
						</div>
						{error && (
							<p className="mt-1 text-center text-sm text-red-500">{error}</p>
						)}
						<div className="py-4 xs:px-16 md:px-32 xl:px-64">
							<Button
								buttonName="ADD SERVICE"
								buttonType="submit"
								disabled={isLoading || Object.keys(errors).length > 0}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ServicesCRUD;
