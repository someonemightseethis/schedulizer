import CustomerSatisfaction from "./CustomerSatisfaction";
import DashboardAppointmentsToday from "./DashboardAppointmentsToday";
import DashboardStatistics from "./DashboardStatistics";

function DashboardMain() {
	return (
		<div className="py-12 grid grid-cols-1 w-full">
			<h2 className="text-8xl flex justify-center font-semibold mb-12">Statistics</h2>
			<div className="px-36 pb-12 grid grid-cols-2 justify-center items-center border-b-2 border-black">
				<CustomerSatisfaction />
				<div className="grid grid-cols-2 gap-x-12">
					<DashboardStatistics />
					<DashboardAppointmentsToday />
				</div>
			</div>
		</div>
	);
}

export default DashboardMain;
