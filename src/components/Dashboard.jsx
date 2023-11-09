import BackToTopButton from "./BacktoTopButton";
import BusinessCard from "./BusinessCard";
import Filters from "./Filters";
import Navbar from "./Navbar";

function Dashboard() {
	return (
		<div className="">
			<Navbar />
			<div className="md:pt-[62px]">
				{/* Add padding top to create space for fixed navbar */}
				<Filters />
				<div className="grid grid-cols-3 py-24">
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