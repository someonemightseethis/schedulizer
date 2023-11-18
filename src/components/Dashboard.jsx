import DashboardSidebar from "./DashboardSidebar";
import Navbar from "./Navbar";

function Dashboard() {
	return (
		<div className="flex h-screen">
			<Navbar />
			<DashboardSidebar />
		</div>
	);
}

export default Dashboard;
