import Button from "../Button";

function DashboardStatistics() {
	return (
		<div>
			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-2">
					<div className="p-4 border-2 border-black  rounded-lg">
						<div className="font-semibold text-2xl text-gray-800 leading-none">
							Good day, username
						</div>
						<div className="mt-5">
							<Button buttonname="manage appointments" buttonlink="/schedulizer/dashboard" />
						</div>
					</div>
				</div>
				<div className="p-4 border-2 border-black  rounded-lg text-gray-800">
					<div className="font-bold text-2xl leading-none">20</div>
					<div className="mt-2">Tasks finished this week</div>
				</div>
				<div className="p-4 border-2 border-black  rounded-lg text-gray-800">
					<div className="font-bold text-2xl leading-none">5.5</div>
					<div className="mt-2">Tracked hours this week</div>
				</div>
				<div className="border-2 border-black col-span-2 rounded-lg">
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
