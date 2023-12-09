import BackToTopButton from "./BacktoTopButton";
import BusinessCard from "./BusinessCard";
import Filters from "./Filters";
import Navbar from "./Navbar/Navbar";

function Services() {
	return (
		<div className="bg-[#FAF8ED]">
			<Navbar />
			<div className="pattern-texture-indigo-500/30 pattern-texture-scale-[1.5] md:pt-[62px]">
				{/* Add padding top to create space for fixed navbar */}
				<Filters />
				<div className="flex flex-wrap items-center justify-center gap-x-28 gap-y-6 px-20 py-6 xs:py-36 md:py-24 lg:pt-24">
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
