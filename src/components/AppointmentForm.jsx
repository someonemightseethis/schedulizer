import Layout from "./Layout";
// import { Datepicker } from "flowbite-react";
import InputField from "./form/InputField";
import { useEffect, useRef, useState } from "react";
import TimeSlotSelectorButton from "./TimeSlotSelectorButton";
import Button from "./Button";
import moment from "moment";
import { useParams } from "react-router-dom";
import axios from "axios";
import Datepicker from "react-tailwindcss-datepicker";

function AppointmentForm() {
	const [service, setService] = useState();
	const [business, setBusiness] = useState();
	const { serviceId, businessId } = useParams();

	useEffect(() => {
		const fetchService = async () => {
			try {
				const response = await axios.get(`/services/${serviceId}`);
				setService(response.data.data);
			} catch (error) {
				console.error("Fetch error oioiservice: ", error);
			}
		};

		fetchService();
		const fetchBusiness = async () => {
			try {
				const response = await axios.get(`/business/${businessId}`);
				setBusiness(response.data);
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};

		fetchBusiness();
	}, [serviceId, businessId]);

	const [typedCharacters, setTypedCharacters] = useState(0);
	const typedCharactersElementRef = useRef(null);

	useEffect(() => {
		const textAreaElement = document.querySelector("#appointmentMessage");
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

	const [selectedButton, setSelectedButton] = useState(null);

	const handleButtonClick = (value) => {
		setSelectedButton(value);
		console.log(value);
	};

	const startTime = "9:00 AM"; // start time
	const endTime = "5:00 PM"; // end time
	const breakStartTime = "1:00 PM"; // break start time
	const breakEndTime = "3:00 PM"; // break end time

	const calculateSlots = (
		startTime,
		endTime,
		breakStartTime,
		breakEndTime,
		duration
	) => {
		const start = moment(startTime, "h:mm A");
		const end = moment(endTime, "h:mm A");
		const breakStart = moment(breakStartTime, "h:mm A");
		const breakEnd = moment(breakEndTime, "h:mm A");

		let slots = [];
		let current = start;

		while (current < end) {
			if (!(current >= breakStart && current < breakEnd)) {
				let slotEnd = moment(current).add(duration, "hours");
				slots.push(
					current.format("h:mm A") + " to " + slotEnd.format("h:mm A")
				);
			}
			current.add(duration, "hours");
		}

		return slots;
	};

	const durations = [0.25, 0.5, 0.75, 1, 2, 4]; // durations in hours
	const [selectedDuration, setSelectedDuration] = useState(durations[4]);

	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	});

	const handleValueChange = (newValue) => {
		console.log("newValue:", newValue);
		setValue(newValue);
	};

	return (
		<Layout>
			<div className="flex h-auto flex-col items-center justify-center py-12">
				<h1 className="flex justify-center py-16 font-bebas text-8xl font-semibold tracking-wide text-indigo-500">
					BOOK YOUR APPOINTMENT.
				</h1>
				<div className="group flex flex-col items-center justify-center gap-7 break-words rounded-2xl bg-[#FAF8ED] p-8 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] md:max-w-sm">
					<div className="flex flex-col space-y-4">
						<div className="flex flex-col justify-center text-center">
							<div className="font-poppins text-base font-semibold text-black">
								{service?.serviceName}
							</div>
							<div className="font-muktaVaani text-sm font-light text-black">
								by <strong>{business?.businessName}</strong>
							</div>
						</div>

						<div className="serviceDetails flex flex-wrap items-center justify-center space-x-4">
							<div className="font-muktaVaani text-xs font-light text-black">
								Duration: <strong>{service?.serviceDuration}</strong>
							</div>
							<div className="font-muktaVaani text-xs font-light text-black">
								Price: Rs. <strong>{service?.servicePrice}</strong>
							</div>
							<div className="font-muktaVaani text-xs font-light text-black">
								Days: <strong>{service?.serviceDays}</strong>
							</div>
							<div className="font-muktaVaani text-xs font-light text-black">
								Timings: <strong>{service?.serviceTiming}</strong>
							</div>
						</div>
					</div>
					<div className="serviceDescription break-words text-center font-muktaVaani text-sm font-normal text-black">
						{service?.serviceDescription}
					</div>
				</div>
				<div className="flex w-full items-center justify-center px-32 pt-12">
					<form
						action=""
						className="flex w-full flex-col items-center justify-center space-x-24">
						<div className="">
							<Datepicker value={value} onChange={handleValueChange} />
						</div>
						<div className="flex flex-col space-y-8">
							<div className="flex justify-center space-x-12">
								<div className="flex w-full flex-col space-y-8">
									<select
										value={selectedDuration}
										onChange={(e) =>
											setSelectedDuration(Number(e.target.value))
										}>
										{durations.map((duration, index) => (
											<option key={index} value={duration}>
												{duration} hour(s)
											</option>
										))}
									</select>
									<div className="flex flex-wrap justify-center gap-4">
										{calculateSlots(
											startTime,
											endTime,
											breakStartTime,
											breakEndTime,
											selectedDuration
										).map((slot, slotIndex) => (
											<TimeSlotSelectorButton
												key={slotIndex}
												isSelected={selectedButton === `selection${slotIndex}`}
												onClick={() =>
													handleButtonClick(`selection${slotIndex}`)
												}
												buttonName={slot}
											/>
										))}
									</div>
									<div className="px-24">
										<Button
											onClick={() => handleButtonClick(null)}
											buttonName="CLEAR SELECTION"
										/>
									</div>
								</div>
								<div className="flex w-full flex-col justify-center">
									<div>
										<InputField
											inputFieldName="nameForAppointment"
											inputFieldLabelName="Name"
											inputFieldId="nameForAppointment"
											inputFieldType="text"
											inputFieldPlaceholder="enter your name"
											inputFieldHtmlFor="nameForAppointment"
											isRequired={true}
										/>

										<InputField
											inputFieldId="appointmentMessage"
											inputFieldType="text"
											inputFieldPlaceholder="enter your message here"
											inputFieldHtmlFor="appointmentMessage"
											inputFieldLabelName="Message"
											isRequired={true}
											fieldType="textarea"
											cols={10}
											rows={5}
											maxLength={500}
										/>
										<div
											id="character-counter"
											className="text-right text-sm text-indigo-500 opacity-80">
											<span id="typed-characters">0</span>
											<span>/</span>
											<span id="maximum-characters">500</span>
										</div>
									</div>
								</div>
							</div>
							<div className="px-52">
								<Button buttonName="BOOK NOW" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
}

export default AppointmentForm;
