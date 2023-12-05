import Button from "./Button";

function AppointmentCard() {
	return (
		<div className="flex items-center justify-center bg-[#FAF8ED]">
			<div className="rounded-lg border-2 border-black p-8 transition duration-300 ease-in-out hover:drop-shadow-xl">
				<div className="text-center">
					<h3 className="text-center font-poppins text-2xl font-bold">
						Appointment Name
					</h3>
				</div>
				<p className="py-6 text-center font-muktaVaani text-lg">
					We gotta burn the rain forest, dump toxic waste, pollute the air, and
					rip up the OZONE! Cause maybe if we screw up this planet enough, they
					wont want it anymore! Theyre using our own satellites against us. And
					the clock is ticking. Yeah, but your scientists were so preoccupied
					with whether or not they could, they didnt stop to think if they
					should.
				</p>
				<ul className="text-md flex justify-center space-x-4 py-6 text-center">
					<li className="flex flex-col">
						<span className="font-ptSansCaption text-lg font-semibold">
							Duration
						</span>{" "}
						25 mins
					</li>
					<li className="py-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#6366F1"
							stroke="#6366F1"
							className="current-fill h-4 w-4"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
							/>
						</svg>
					</li>
					<li className="flex flex-col">
						<span className="font-ptSansCaption text-lg font-semibold">
							Timings
						</span>{" "}
						12am - 1pm
					</li>
					<li className="py-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#6366F1"
							stroke="#6366F1"
							className="current-fill h-4 w-4"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
							/>
						</svg>
					</li>
					<li className="flex flex-col">
						<span className="font-ptSansCaption text-lg font-semibold">
							Days
						</span>{" "}
						mon - thu
					</li>
					<li className="py-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#6366F1"
							stroke="#6366F1"
							className="current-fill h-4 w-4"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
							/>
						</svg>
					</li>
					<li className="flex flex-col">
						<span className="font-ptSansCaption text-lg font-semibold">
							Price
						</span>{" "}
						$45
					</li>
				</ul>
				<div className="px-20 py-4">
					<Button
						buttonName="BOOK APPOINTMENT"
						buttonLink="/schedulizer/services"
					/>
				</div>
			</div>
		</div>
	);
}

export default AppointmentCard;
