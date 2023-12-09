import InputField from "../Form/InputField";
import Button from "../Button";
import DayPicker from "../Form/DayPicker";
import { useState, useEffect, useRef } from "react";
import DbConnect from "../../../backend/config/db";

function AppointmentsCRUD() {
	const [typedCharacters, setTypedCharacters] = useState(0);
	const typedCharactersElementRef = useRef(null);

	useEffect(() => {
		const textAreaElement = document.querySelector("#appointmentdescription");
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

	useEffect(() => {
		const url = "mongodb://localhost:27017/Schedulizer";
		DbConnect(url);
	}, []);

	return (
		<div className="flex items-center justify-center py-4">
			<div className="py-28">
				<h2 className="mb-12 flex items-center justify-center font-bebas text-9xl font-semibold md:px-24 xl:lg:px-52">
					Add an Appointment
				</h2>
				<form method="POST" action="" className="">
					<div className="px-52">
						<div className="space-y-4 py-2">
							<div className="grid w-full grid-cols-2 gap-4">
								<InputField
									inputFieldId="appointmenttitle"
									inputFieldType="text"
									inputFieldPlaceholder="appointment title"
									inputFieldHtmlFor="appointmenttitle"
									inputFieldLabelName="Appointment Title"
									isRequired={true}
									fieldType="input"
								/>

								<InputField
									inputFieldId="appointmentDuration"
									inputFieldType="text"
									inputFieldPlaceholder="appointment duration"
									inputFieldHtmlFor="appointmentDuration"
									inputFieldLabelName="Appointment Duration (in minutes)"
									isRequired={true}
									fieldType="input"
								/>
							</div>

							<div className="grid w-full grid-cols-3 gap-4">
								<InputField
									inputFieldId="AppointmentPrice"
									inputFieldType="text"
									inputFieldPlaceholder="appointment price"
									inputFieldHtmlFor="AppointmentPrice"
									inputFieldLabelName="Appointment Price"
									isRequired={true}
									fieldType="input"
								/>

								<InputField
									inputFieldId="AppointmentStartTime"
									inputFieldType="time"
									inputFieldPlaceholder="xx am/pm"
									inputFieldHtmlFor="AppointmentStartTime"
									inputFieldLabelName="Appointment Start Time"
									isRequired={true}
									fieldType="input"
								/>

								<InputField
									inputFieldId="AppointmentEndTime"
									inputFieldType="time"
									inputFieldPlaceholder="xx am/pm"
									inputFieldHtmlFor="AppointmentEndTime"
									inputFieldLabelName="Appointment End Time"
									isRequired={true}
									fieldType="input"
								/>
							</div>

							<DayPicker />
							<InputField
								inputFieldId="appointmentdescription"
								inputFieldType="text"
								inputFieldPlaceholder="appointment description"
								inputFieldHtmlFor="appointmentdescription"
								inputFieldLabelName="Appointment Description"
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
						<div className="py-4 xs:px-16 md:px-32 xl:px-36">
							<Button
								buttonName="ADD APPOINTMENT"
								buttonLink="/schedulizer/businessinfo"
								buttonType="submit"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AppointmentsCRUD;
