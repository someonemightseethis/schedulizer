import BackToTopButton from "./BacktoTopButton";
import BusinessCard from "./BusinessCard";
import Filters from "./Filters";
import Navbar from "./Navbar/Navbar";

function Services() {
	return (
		<div className="bg-[#FAF8ED]">
			<Navbar />
			<div className="md:pt-[62px]">
				{/* Add padding top to create space for fixed navbar */}
				<Filters />
				<div className="flex flex-wrap justify-center items-center gap-x-28 px-20 gap-y-6 py-6 md:py-24 xs:py-36 lg:pt-24">
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

export default Services;
