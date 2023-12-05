import InputField from "../Form/InputField";
import Button from "../Button";
import DayPicker from "../Form/DayPicker";

function AppointmentsCRUD() {
	// const textAreaElement = document.querySelector("#appointmentdescription");
	// const characterCounterElement = document.querySelector("#character-counter");
	// const typedCharactersElement = document.querySelector("#typed-characters");
	// const maximumCharacters = 500;

	// textAreaElement.addEventListener("keydown", () => {
	// 	const typedCharacters = textAreaElement.value.length;
	// 	typedCharactersElement.textContent = typedCharacters;

	// 	if (typedCharacters >= maximumCharacters) {
	// 		characterCounterElement.classList.replace("opacity-80", "opacity-100");
	// 	} else if (typedCharacters > 0) {
	// 		characterCounterElement.classList.replace("opacity-100", "opacity-80");
	// 	}
	// });

	return (
		<div className="flex items-center justify-center py-4">
			<div className="px-12 py-28">
				<h2 className="mb-12 flex items-center justify-center font-bebas text-9xl font-semibold md:px-24 xl:lg:px-52">
					Add an Appointment
				</h2>
				<form method="POST" action="" className="">
					<div className="px-52">
						<div className="py-2">
							<InputField
								inputFieldId="appointmenttitle"
								inputFieldType="text"
								inputFieldPlaceholder="appointment title"
								inputFieldHtmlFor="appointmenttitle"
								inputFieldLabelName="Appointment Title"
								isRequired={true}
								fieldType="input"
							/>
							<div className="flex w-full items-center justify-between">
								<InputField
									inputFieldId="appointmentDuration"
									inputFieldType="number"
									inputFieldPlaceholder="appointment duration"
									inputFieldHtmlFor="appointmentDuration"
									inputFieldLabelName="Appointment Duration (in minutes)"
									isRequired={true}
									fieldType="input"
								/>

								<InputField
									inputFieldId="AppointmentPrice"
									inputFieldType="number"
									inputFieldPlaceholder="appointment price"
									inputFieldHtmlFor="AppointmentPrice"
									inputFieldLabelName="Appointment Price"
									isRequired={true}
									fieldType="input"
								/>
							</div>

							{/* <div className="grid grid-cols-2 space-x-4 text-[#002B5B]">
							<div className="flex items-baseline justify-center space-x-2">
								<label htmlFor="startdate" className="text-sm">
									Start Date
								</label>
								<input
									type="date"
									name="startdate"
									min=""
									max=""
									className="mb-3 mt-1 w-fit rounded-md border-2 border-[#292C6D] bg-[#F9F5EB] object-left px-2 py-1.5 font-mono text-sm text-[#002B5B] placeholder-gray-400 shadow-sm focus:border-[#EA5455] focus:outline-none focus:ring-1 focus:ring-[#EA5455]"
									value=""
								/>
							</div>
							<div className="flex items-baseline justify-center space-x-2">
								<label htmlFor="enddate" className="text-sm">
									End Date
								</label>
								<input
									type="date"
									name="enddate"
									min=""
									max=""
									className="mb-3 mt-1 w-fit rounded-md border-2 border-[#292C6D] bg-[#F9F5EB] object-right px-2 py-1.5 font-mono text-sm text-[#002B5B] placeholder-gray-400 shadow-sm focus:border-[#EA5455] focus:outline-none focus:ring-1 focus:ring-[#EA5455]"
									required
								/>
							</div>
						</div> */}

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
