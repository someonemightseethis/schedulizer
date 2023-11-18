import DashboardSidebar from "./DashboardSidebar";
import Navbar from "../Navbar/Navbar";
import DashboardMain from "./DashboardMain";

function Dashboard() {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<div className="my-[66px] w-full">
				<DashboardSidebar />
				<DashboardMain />
			</div>
		</div>
	);
}

export default Dashboard;
