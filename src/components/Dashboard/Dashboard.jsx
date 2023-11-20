import DashboardSidebar from "./DashboardSidebar";
import Navbar from "../Navbar/Navbar";
import DashboardMain from "./DashboardMain";

function Dashboard() {
	return (
		<div className="flex flex-col h-screen bg-[#FAF8ED]">
			<Navbar />
			<div className="xl:lg:my-[66px] md:sm:my-[58px] w-full">
				<DashboardSidebar />
				<DashboardMain />
			</div>
		</div>
	);
}

export default Dashboard;
