import Button from "../Button";

function DashboardStatistics() {
	return (
		<div>
			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2 ">
					<div className="p-4 border-2 border-black  rounded-lg">
						<p className="font-medium font-cairoPlay text-2xl items-baseline inline-flex text-gray-800 leading-none">
							Good day, <p className="font-semibold text-xl">&ensp; username</p>
						</p>
						<div className="mt-5">
							<Button buttonname="manage appointments" buttonlink="/schedulizer/dashboard" />
						</div>
					</div>
				</div>
				<div className="p-4 border-2 border-black  rounded-lg text-gray-800 font-cairoPlay">
					<div className="font-bold text-2xl leading-none">20</div>
					<div className="mt-2">Tasks finished this week</div>
				</div>
				<div className="p-4 border-2 border-black  rounded-lg text-gray-800 font-cairoPlay">
					<div className="font-bold text-2xl leading-none">5.5</div>
					<div className="mt-2">Tracked hours this week</div>
				</div>
				<div className="border-2 border-black col-span-2 rounded-lg font-cairoPlay">
					<div className="p-4 rounded-lg text-gray-800">
						<div className="font-bold text-xl leading-none">
							Your daily appointments
						</div>
						<div className="mt-2">5 of 8 completed</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardStatistics;
