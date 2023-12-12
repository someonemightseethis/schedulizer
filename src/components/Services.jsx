import BackToTopButton from "./BacktoTopButton";
import BusinessCard from "./BusinessCard";
import Filters from "./Filters";
import Layout from "./Layout";

function Services() {
	return (
		<Layout>
			<Filters />
			<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 px-20 pb-12 pt-36">
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
			<BackToTopButton />
		</Layout>
	);
}

export default Services;
