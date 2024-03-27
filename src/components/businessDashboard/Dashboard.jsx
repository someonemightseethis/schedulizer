// import ConnectedDashboardSidebar from "./DashboardSidebar";
import Navbar from "../navbar/Navbar";
import BusinessDashboard from "./BusinessDashboard";

function Dashboard() {
	return (
		<div className="flex h-screen flex-col bg-[#FAF8ED]">
			<Navbar />
			<div className="w-full md:sm:my-[58px] xl:lg:my-[66px]">
				<BusinessDashboard />
			</div>
		</div>
	);
}

export default Dashboard;
