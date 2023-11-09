import Button from "./Button";

function AppointmentCard2() {
	return (
		<div className="">
			<div className="rounded-lg py-6 px-12 shadow duration-150 border-2 border-black hover:shadow-md">
				<div>
					<div className="my-6 flex items-center justify-between">
						<p className="font-bold text-black text-2xl">Appointment Name</p>
						<p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
							$120
						</p>
					</div>
					<p className="py-4">
						We gotta burn the rain forest, dump toxic waste, pollute the air,
						and rip up the OZONE! Cause maybe if we screw up this planet enough,
						they wont want it anymore! Theyre using our own satellites against
						us. And the clock is ticking. Yeah, but your scientists were so
						preoccupied with whether or not they could, they didnt stop to think
						if they should.
					</p>
					<div className="px-12">
						<div className="my-4 flex items-center justify-between px-4">
							<p className="text-md font-semibold text-black">Timings</p>
							<p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
								23
							</p>
						</div>
						<div className="my-4 flex items-center justify-between px-4">
							<p className="text-md font-semibold text-black">Days</p>
							<p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
								7
							</p>
						</div>
						<div className="my-4 flex items-center justify-between px-4">
							<p className="text-md font-semibold text-black">Duration</p>
							<p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
								1
							</p>
						</div>
					</div>
					<div className="py-4 px-20">
						<Button buttonname="book appointment" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AppointmentCard2;
