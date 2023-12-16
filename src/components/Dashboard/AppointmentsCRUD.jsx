import InputField from "../Form/InputField";
import Button from "../Button";
import DayPicker from "../Form/DayPicker";
import { useState, useEffect, useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import DropdownButton from "../Form/DropdownButton";

function AppointmentsCRUD() {
	const [appointmentTitle, setAppointmentTitle] = useState("");
	const [appointmentDuration, setAppointmentDuration] = useState("");
	const [appointmentPrice, setAppointmentPrice] = useState("");
	const [appointmentStartTime, setAppointmentStartTime] = useState("");
	const [appointmentEndTime, setAppointmentEndTime] = useState("");
	const [appointmentDescription, setAppointmentDescription] = useState("");
	const [durationUnit, setDurationUnit] = useState("mins");
	const [selectedDays, setSelectedDays] = useState("");

	const timing = appointmentStartTime + " " + appointmentEndTime;

	const [errors, setErrors] = useState({});
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [typedCharacters, setTypedCharacters] = useState(0);
	const typedCharactersElementRef = useRef(null);

	useEffect(() => {
		const textAreaElement = document.querySelector("#appointmentDescription");
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

		const appointmentData = {
			businessId: "60f9b4b3c9b0c4b4b8f3b0b5",
			appointmentTitle,
			appointmentDuration: `${appointmentDuration} ${durationUnit}`,
			appointmentPrice,
			timing,
			appointmentDescription,
			selectedDays, // Use the selected days here
		};

		try {
			const response = await axios.post("/appointment/add", appointmentData);
			console.log(response.data);

			// Check if the form submission was successful
			if (response.data.success) {
				setIsLoading(false);
				setIsModalOpen(true);
				// Delay navigation by 4 seconds
				setTimeout(() => {
					navigate("/schedulizer/signin");
				}, 4000);
			} else {
				setIsLoading(false);
			}
		} catch (error) {
			console.log("error data", error.response?.data);
			console.log("Form data", appointmentData);
			setIsLoading(false);
			setError(error.response.data.error);
		}
	};

	const closeModalAndNavigate = () => {
		setIsModalOpen(false);
		navigate("/schedulizer/signin");
	};

	return (
		<div className="flex items-center justify-center py-4">
			<div className="py-28">
				<h2 className="mb-12 flex items-center justify-center font-bebas text-9xl font-semibold md:px-24 xl:lg:px-52">
					Add an Appointment
				</h2>
				<form onSubmit={handleSubmit} className="">
					<div className="px-56">
						<div className="space-y-4 py-2">
							<div className="grid w-full grid-cols-6 space-x-4">
								<div className="col-span-3">
									<InputField
										inputFieldId="appointmentTitle"
										inputFieldType="text"
										inputFieldPlaceholder="appointment title"
										inputFieldHtmlFor="appointmentTitle"
										inputFieldLabelName="Appointment Title"
										isRequired={true}
										fieldType="input"
										value={appointmentTitle}
										onChange={(e) => setAppointmentTitle(e.target.value)}
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												(value) => value.trim() !== "",
												"Appointment title is required",
												"appointmentTitle"
											)
										}
									/>
								</div>
								<div className="col-span-2">
									<InputField
										inputFieldId="appointmentDuration"
										inputFieldType="text"
										inputFieldPlaceholder="appointment duration"
										inputFieldHtmlFor="appointmentDuration"
										inputFieldLabelName="Appointment Duration"
										isRequired={true}
										fieldType="input"
										value={appointmentDuration}
										onChange={(e) => setAppointmentDuration(e.target.value)}
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												(value) => !isNaN(value) && parseInt(value) > 0,
												"Appointment duration must be a positive number",
												"appointmentDuration"
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
									inputFieldId="appointmentPrice"
									inputFieldType="text"
									inputFieldPlaceholder="appointment price"
									inputFieldHtmlFor="appointmentPrice"
									inputFieldLabelName="Appointment Price"
									isRequired={true}
									fieldType="input"
									value={appointmentPrice}
									onChange={(e) => {
										const value = parseFloat(e.target.value);
										if (!isNaN(value) && value >= 0) {
											setAppointmentPrice(e.target.value);
										}
									}}
									validateOnBlur={true}
									validate={(value) =>
										validateField(
											value,
											(value) => !isNaN(value) && parseFloat(value) >= 0,
											"Appointment price must be a non-negative number",
											"appointmentPrice"
										)
									}
								/>

								<InputField
									inputFieldId="appointmentStartTime"
									inputFieldType="time"
									inputFieldPlaceholder="xx am/pm"
									inputFieldHtmlFor="appointmentStartTime"
									inputFieldLabelName="Appointment Start Time"
									isRequired={true}
									fieldType="input"
									value={appointmentStartTime}
									onChange={(e) => setAppointmentStartTime(e.target.value)}
									validateOnBlur={true}
									validate={(value) =>
										validateField(
											value,
											(value) => value.trim() !== "",
											"Appointment start time is required",
											"appointmentStartTime"
										)
									}
								/>

								<InputField
									inputFieldId="appointmentEndTime"
									inputFieldType="time"
									inputFieldPlaceholder="xx am/pm"
									inputFieldHtmlFor="appointmentEndTime"
									inputFieldLabelName="Appointment End Time"
									isRequired={true}
									fieldType="input"
									value={appointmentEndTime}
									onChange={(e) => setAppointmentEndTime(e.target.value)}
									validateOnBlur={true}
									validate={(value) =>
										validateField(
											value,
											(value) => value.trim() !== "",
											"Appointment end time is required",
											"appointmentEndTime"
										)
									}
								/>
							</div>

							<DayPicker onDaysChange={handleDaysChange} />

							<InputField
								inputFieldId="appointmentDescription"
								inputFieldType="text"
								inputFieldPlaceholder="appointment description"
								inputFieldHtmlFor="appointmentDescription"
								inputFieldLabelName="Appointment Description"
								isRequired={true}
								fieldType="textarea"
								cols={10}
								rows={5}
								maxLength={500}
								value={appointmentDescription}
								onChange={(e) => setAppointmentDescription(e.target.value)}
								validateOnBlur={true}
								validate={(value) =>
									validateField(
										value,
										(value) => value.trim() !== "",
										"Appointment description is required",
										"appointmentDescription"
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
								buttonName="ADD APPOINTMENT"
								buttonType="submit"
								disabled={isLoading || Object.keys(errors).length > 0}
							/>
						</div>
					</div>
				</form>
			</div>
			<Transition appear show={isModalOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto bg-indigo-600 pattern-texture-[#FAF8ED]/60 pattern-texture-scale-[1.5]"
					onClose={closeModalAndNavigate}>
					<div className="min-h-screen text-center">
						<Dialog.Overlay className="fixed" />
						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true">
							&#8203;
						</span>
						<Dialog.Description
							as="div"
							className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-[#FAF8ED] p-12 text-center align-middle transition-all">
							<Dialog.Title
								as="h1"
								className="leading-2 font-bebas text-5xl font-semibold text-indigo-500">
								Sign Up Successful!
							</Dialog.Title>
							<div className="mt-2">
								<p className="font-poppins text-sm text-black">
									You will be redirected to the Sign In page shortly.
								</p>
							</div>
						</Dialog.Description>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
}

export default AppointmentsCRUD;
