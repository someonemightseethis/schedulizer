import CustomerSatisfaction from "./CustomerSatisfaction";
import DashboardAppointmentsToday from "./DashboardAppointmentsToday";
import DashboardStatistics from "./DashboardStatistics";
import BacktoTopButton from "../BacktoTopButton";

function DashboardMain() {
	return (
		<div className="py-12">
			<h2 className="text-8xl flex w-full justify-center font-semibold mb-12 font-bebas sm:pt-12 xs:pt-12">Statistics</h2>
			<div className="px-36 pb-12 grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 md:gap-y-12 sm:gap-y-12 xs:gap-y-12 justify-center items-center border-b-2 border-black">
				<CustomerSatisfaction />
				<div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xl:gap-x-12  lg:gap-x-12 md:gap-x-12 sm:gap-y-12 xs:gap-y-12">
					<DashboardStatistics />
					<DashboardAppointmentsToday />
				</div>
			</div>
			<BacktoTopButton />
		</div>
	);
}

export default DashboardMain;
