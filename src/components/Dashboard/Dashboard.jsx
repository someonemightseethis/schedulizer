import DashboardSidebar from "./DashboardSidebar";
import Navbar from "../Navbar";
import CustomerSatisfaction from "./CustomerSatisfaction";

function Dashboard() {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<div className="grid grid-cols-2 my-[66px]">
				<DashboardSidebar />
				<CustomerSatisfaction />
			</div>
		</div>
	);
}

export default Dashboard;
