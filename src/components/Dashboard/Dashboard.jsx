import ConnectedDashboardSidebar from "./DashboardSidebar";
import Navbar from "../navbar/Navbar";
import DashboardMain from "./DashboardMain";

function Dashboard() {
	return (
		<div className="flex h-screen flex-col bg-[#FAF8ED]">
			<Navbar />
			<div className="w-full md:sm:my-[58px] xl:lg:my-[66px]">
				<ConnectedDashboardSidebar />
				<DashboardMain />
			</div>
		</div>
	);
}

export default Dashboard;
