import CustomerSatisfaction from "./CustomerSatisfaction";
import DashboardAppointmentsToday from "./DashboardAppointmentsToday";
import DashboardAppointmentTracker from "./DashboardAppointmentTracker";
import BacktoTopButton from "../BacktoTopButton";
import AppointmentsCRUD from "./AppointmentsCRUD";

function DashboardMain() {
	return (
		<div className="bg-[#FAF8ED] py-12 pattern-texture-indigo-900/30 pattern-texture-scale-[1.5] md:ml-[226px] md:px-24 xl:lg:ml-[208px] xl:lg:px-20">
			<h2 className="mb-12 flex items-baseline justify-center font-bebas text-7xl font-semibold md:px-24 xl:lg:px-52">
				Good day,
				<p className="font-ptSansCaption text-4xl font-medium">
					&ensp; username
				</p>
			</h2>
			<div className="items-top flex justify-center pb-12 pt-6 xs:flex-col xs:space-y-12 sm:flex-col sm:space-y-12 md:flex-col md:space-x-12 md:space-y-16 xl:lg:flex-row xl:lg:space-x-24 xl:lg:space-y-0">
				<CustomerSatisfaction />
				<div className="items-top flex justify-evenly xs:flex-col xs:space-y-12 sm:flex-col sm:space-y-12 md:flex-col md:space-x-12 md:space-y-16 xl:lg:flex-row xl:lg:space-x-20 xl:lg:space-y-0">
					<DashboardAppointmentTracker />
					<DashboardAppointmentsToday />
				</div>
			</div>
			<div className="flex items-center justify-between xs:flex-col xs:gap-y-12 sm:flex-col sm:gap-y-12 md:flex-col md:gap-y-16 md:space-x-12 md:px-12 xl:lg:flex-row xl:lg:px-48 xl:lg:space-x-6">
				<div className="rounded-xl shadow-sm shadow-indigo-800 bg-[#FAF8ED] px-12 py-6">
					<div className="text-grey-darker mb-2">
						<span className="align-top text-3xl">RS</span>
						<span className="text-5xl">21,404</span>
					</div>
					<div className="text-grey text-sm uppercase tracking-wide">
						Revenue This Month
					</div>
				</div>
				<div className="rounded-xl shadow-sm shadow-indigo-800 bg-[#FAF8ED] px-12 py-6">
					<div className="text-grey-darker mb-2">
						<span className="align-top text-3xl">RS</span>
						<span className="text-5xl">21,404</span>
					</div>
					<div className="text-grey text-sm uppercase tracking-wide">
						Revenue This Month
					</div>
				</div>
				<div className="rounded-xl shadow-sm shadow-indigo-800 bg-[#FAF8ED] px-12 py-6">
					<div className="text-grey-darker mb-2">
						<span className="align-top text-3xl">RS</span>
						<span className="text-5xl">21,404</span>
					</div>
					<div className="text-grey text-sm uppercase tracking-wide">
						Revenue This Month
					</div>
				</div>
			</div>
			<AppointmentsCRUD />
			<BacktoTopButton />
		</div>
	);
}

export default DashboardMain;
