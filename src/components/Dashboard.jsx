import BackToTopButton from "./BacktoTopButton";
import BusinessCard from "./BusinessCard";
import Filters from "./Filters";
import Navbar from "./Navbar";

function Dashboard() {
	return (
		<div className="bg-[#F9F5F8]">
			<Navbar />
			<div className="md:pt-[62px]">
				{/* Add padding top to create space for fixed navbar */}
				<Filters />
				<div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-24 xs:pt-36 space-y-4">
					<BusinessCard />
					<BusinessCard />
					<BusinessCard />
					<BusinessCard />
					<BusinessCard />
					<BusinessCard />
					<BusinessCard />
					<BusinessCard />
					<BusinessCard />
					<BusinessCard />
					<BusinessCard />
					<BusinessCard />
				</div>
			</div>
			<BackToTopButton />
		</div>
	);
}

export default Dashboard;
