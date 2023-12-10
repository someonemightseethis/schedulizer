import BackToTopButton from "./BacktoTopButton";
import BusinessCard from "./BusinessCard";
import Filters from "./Filters";
import Layout from "./Layout";

function Services() {
	return (
		<Layout>
			<Filters />
			<div className="flex flex-wrap items-center justify-center gap-x-28 gap-y-6 px-20 pt-36 pb-12">
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
