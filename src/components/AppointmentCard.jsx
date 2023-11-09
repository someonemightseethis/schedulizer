import Button from "./Button";

function AppointmentCard() {
	return (
		<div className="flex items-center justify-center">
			<div className="p-8 rounded-lg transition duration-300 ease-in-out hover:drop-shadow-xl border-2 border-black">
				<div className="text-center">
					<h3 className="text-center text-2xl font-bold">Appointment Name</h3>
				</div>
				<p className="text-center py-6">
					We gotta burn the rain forest, dump toxic waste, pollute the air, and
					rip up the OZONE! Cause maybe if we screw up this planet enough, they
					wont want it anymore! Theyre using our own satellites against us. And
					the clock is ticking. Yeah, but your scientists were so preoccupied
					with whether or not they could, they didnt stop to think if they
					should.
				</p>
				<ul className="py-6 flex justify-center text-center text-md space-x-4">
					<li className="flex flex-col">
						<span className="font-bold">Duration</span> 25 mins
					</li>
					<li className="py-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#6366F1"
							stroke="#6366F1"
							className="w-4 h-4 current-fill"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
							/>
						</svg>
					</li>
					<li className="flex flex-col">
						<span className="font-bold">Timings</span> 12am - 1pm
					</li>
                    <li className="py-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#6366F1"
							stroke="#6366F1"
							className="w-4 h-4 current-fill"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
							/>
						</svg>
					</li>
					<li className="flex flex-col">
						<span className="font-bold">Days</span> mon - thu
					</li>
					<li className="py-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#6366F1"
							stroke="#6366F1"
							className="w-4 h-4 current-fill"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
							/>
						</svg>
					</li>
					<li className="flex flex-col">
						<span className="font-bold">Price</span> $45
					</li>
				</ul>
				<div className="py-4 px-20">
					<Button buttonname="book appointment" />
				</div>
			</div>
		</div>
	);
}

export default AppointmentCard;
