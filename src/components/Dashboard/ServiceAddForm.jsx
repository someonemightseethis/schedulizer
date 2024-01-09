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
	const [durationUnit, setDurationUnit] = useState("");
	const [selectedDays, setSelectedDays] = useState("");
	const { selectedBusiness } = useBusinessRegistered();
	const businessEmail = selectedBusiness?.businessEmail;
	const businessId = selectedBusiness?._id;
	const [apiError, setApiError] = useState("");

	console.log("selectedBusiness", businessEmail);

	const timing = serviceStartTime + " to " + serviceEndTime;
	const [error, setError] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [typedCharacters, setTypedCharacters] = useState(0);
	const typedCharactersElementRef = useRef(null);

	const handleOptionSelect = (value) => {
		setDurationUnit(value === "minutes" ? "mins" : "hrs");
	};

	const isAlphabetic = (value) => /^[A-Za-z\s&]+$/.test(value);
	const isNumeric = (value) => /^\d{1,2}$/.test(value);
	const isPrice = (value) => /^[0-9]{1,5}(\.[0-9]{1,2})?$/.test(value);
	const isNotEmpty = (value) => value.trim() !== "";
	const isTextDescription = (value) => value.length >= 100;

	const validateField = (
		value,
		validateFunc,
		errorMessage,
		fieldName,
		labelName
	) => {
		if (!value.trim()) {
			setError((prevErrors) => ({
				...prevErrors,
				[fieldName]: `${labelName} cannot be empty. Please fill this out.`,
			}));
		} else if (!validateFunc(value)) {
			setError((prevErrors) => ({
				...prevErrors,
				[fieldName]: errorMessage,
			}));
		} else {
			setError((prevErrors) => {
				//eslint-disable-next-line no-unused-vars
				const { [fieldName]: _, ...rest } = prevErrors;
				return rest;
			});
		}
	};

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

		if (selectedDays.length === 0) {
			setError((prevErrors) => ({
				...prevErrors,
				selectedDays: "At least one day must be selected",
			}));
			setIsLoading(false);
			return;
		}

		if (!durationUnit.trim()) {
			setError((prevErrors) => ({
				...prevErrors,
				durationUnit: "Duration unit cannot be empty. Please select a unit.",
			}));
			setIsLoading(false);
			return;
		}

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
			setApiError(error.response?.data || "An error occurred");
			console.log("error", error);
		}
	};

	return (
		<div className="flex items-center justify-center py-28">
			<div className="flex flex-col justify-center">
				<div className="md:w-full lg:w-[600px] xl:w-[800px]">
					<h2 className="mb-12 flex items-center justify-center font-bebas text-9xl font-semibold md:px-24 xl:lg:px-12">
						Add a Service.
					</h2>
					<form onSubmit={handleSubmit} className="">
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
												isAlphabetic,
												"Business name should only contain alphabets",
												"serviceTitle",
												"Service Title" // pass the label name here
											)
										}
										inputFieldError={error.serviceTitle}
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
												isNumeric,
												"Service duration must be a positive number of not more than 2 digits",
												"serviceDuration",
												"Service Duration"
											)
										}
										inputFieldError={error.serviceDuration}
									/>
								</div>
								<div className="col-span-1">
									<DropdownButton
										dropdownbuttonname="mins/hrs"
										dropdownlistLength={2}
										dropdownliname1="minutes"
										dropdownliname2="hours"
										onOptionSelect={handleOptionSelect}
										dropdownlabelname=""
										dropdownlabelhtmlfor="mins/hrs"
										dropdownError={error.durationUnit}
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
											isPrice,
											"Service price must be a non-negative integer of no more than 5 digits",
											"servicePrice",
											"Service Price"
										)
									}
									inputFieldError={error.servicePrice}
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
											isNotEmpty,
											"Service start time is required",
											"serviceStartTime",
											"Service Start Time"
										)
									}
									inputFieldError={error.serviceStartTime}
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
											isNotEmpty,
											"Service end time is required",
											"serviceEndTime",
											"Service End Time"
										)
									}
									inputFieldError={error.serviceEndTime}
								/>
							</div>

							<DayPicker onDaysChange={handleDaysChange} />
							{error.selectedDays && (
								<p className="mt-1 font-poppins text-xs text-red-500">
									{error.selectedDays}
								</p>
							)}

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
										isTextDescription,
										"Service description should be atleast 100 characters.",
										"serviceDescription",
										"Service Description"
									)
								}
								inputFieldError={error.serviceDescription}
							/>
							<div
								id="character-counter"
								className="text-right text-sm text-indigo-500 opacity-80">
								<span id="typed-characters">0</span>
								<span>/</span>
								<span id="maximum-characters">500</span>
							</div>
						</div>
						{apiError && (
							<p className="mt-1 font-poppins text-xs text-red-500">
								{apiError}
							</p>
						)}
						<div className="py-4 xs:px-16 md:px-32 xl:px-64">
							<Button
								buttonName="ADD SERVICE"
								buttonType="submit"
								disabled={isLoading}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ServicesCRUD;
