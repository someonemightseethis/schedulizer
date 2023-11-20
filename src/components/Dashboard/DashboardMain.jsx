import CustomerSatisfaction from "./CustomerSatisfaction";
import DashboardAppointmentsToday from "./DashboardAppointmentsToday";
import DashboardStatistics from "./DashboardStatistics";
import BacktoTopButton from "../BacktoTopButton";
// import AppointmentsCRUD from "./AppointmentsCRUD";

function DashboardMain() {
	return (
		<div className="py-12 bg-[#FAF8ED] xl:lg:ml-[208px] md:ml-[226px]">
			<div className="xl:lg:px-24 md:px-24 pb-12 flex xl:lg:flex-row xl:lg:space-x-36 md:space-x-12 md:flex-col sm:flex-col xs:flex-col md:gap-y-16 sm:gap-y-12 xs:gap-y-12 justify-center items-center">
				<CustomerSatisfaction />
				<div className="flex xl:lg:flex-row md:flex-row sm:flex-col xs:flex-col xl:gap-x-12 lg:gap-x-12 md:gap-x-12 sm:gap-y-12 xs:gap-y-12">
					<DashboardStatistics />
					<DashboardAppointmentsToday />
				</div>
			</div>
			<div className="flex-grow container mx-auto sm:px-4 pb-8">
					<div className="flex items-center px-6 lg:hidden">
						<div className="flex-grow flex-no-shrink py-6">
							<div className="text-grey-darker mb-2">
								<span className="text-3xl align-top">CA$</span>
								<span className="text-5xl">21,404</span>
								<span className="text-3xl align-top">.74</span>
							</div>
							<div className="text-green-light text-sm">
								&uarr; CA$12,955.35 (154.16%)
							</div>
						</div>
						<div className="flex-shrink w-32 inline-block relative">
							<select className="block appearance-none w-full bg-white border border-grey-light px-4 py-2 pr-8 rounded">
								<option>BTC</option>
								<option>ETH</option>
								<option>LTC</option>
							</select>
							<div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey">
								<svg
									className="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
						</div>
					</div>
					<div className="hidden space-x-12 lg:flex px-20 pb-8">
						<div className="w-1/3 text-center">
							<div className="border-2 border-black rounded-lg py-4">
								<div className="text-grey-darker mb-2">
									<span className="text-3xl align-top">CA$</span>
									<span className="text-5xl">21,404</span>
									<span className="text-3xl align-top">.74</span>
								</div>
								<div className="text-sm uppercase text-grey tracking-wide">
									Bitcoin Price
								</div>
							</div>
						</div>
						<div className="w-1/3 text-center">
							<div className="border-2 border-black rounded-lg py-4">
								<div className="text-grey-darker mb-2">
									<span className="text-3xl align-top">
										<span className="text-green align-top">+</span>CA$
									</span>
									<span className="text-5xl">12,998</span>
									<span className="text-3xl align-top">.48</span>
								</div>
								<div className="text-sm uppercase text-grey tracking-wide">
									Since last month (CAD)
								</div>
							</div>
						</div>
						<div className="w-1/3 text-center">
							<div className="border-2 border-black rounded-lg py-4">
								<div className="text-grey-darker mb-2">
									<span className="text-3xl align-top">
										<span className="text-green align-top">+</span>
									</span>
									<span className="text-5xl">154.47</span>
									<span className="text-3xl align-top">%</span>
								</div>
								<div className="text-sm uppercase text-grey tracking-wide">
									Since last month (%)
								</div>
							</div>
						</div>
					</div>
			</div>
			{/* <AppointmentsCRUD /> */}
			<BacktoTopButton />
		</div>
	);
}

export default DashboardMain;
