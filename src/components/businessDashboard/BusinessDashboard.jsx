// import CustomerSatisfaction from "./CustomerSatisfaction";
// import DashboardAppointmentsToday from "./DashboardAppointmentsToday";
// import DashboardAppointmentTracker from "./DashboardAppointmentTracker";

import { useSelector } from "react-redux";
import BacktoTopButton from "../BacktoTopButton";
import ServicesCRUD from "./ServicesCRUD";
import Layout from "../Layout";
import ServiceAddForm from "./ServiceAddForm";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BusinessDashboard() {
	const selectedBusiness = useSelector((state) => state.business.businessData);
	const businessName = selectedBusiness?.businessName;

	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		if (!selectedBusiness) {
			setIsModalOpen(true);
			setTimeout(() => {
				navigate("/schedulizer/signin");
			}, 4000); // 4000 milliseconds = 4 seconds
		}
	}, [selectedBusiness, navigate]);

	const closeModalAndNavigate = () => {
		setIsModalOpen(false);
	};

	return (
		<Layout>
			<div className="py-20 md:px-24 xl:lg:px-20">
				<h2 className="mb-20 flex items-baseline justify-center font-poppins text-4xl font-medium text-indigo-500 md:px-24 xl:lg:px-52">
					Good day,
					<p className="font-bebas text-6xl font-semibold">
						&ensp; {businessName}
					</p>
				</h2>
				{/* <div className="items-top flex justify-center pb-12 pt-6 xs:flex-col xs:space-y-12 sm:flex-col sm:space-y-12 md:flex-col md:space-x-12 md:space-y-16 xl:lg:flex-row xl:lg:space-x-24 xl:lg:space-y-0">
					<CustomerSatisfaction />
					<div className="items-top flex justify-evenly xs:flex-col xs:space-y-12 sm:flex-col sm:space-y-12 md:flex-col md:space-x-12 md:space-y-16 xl:lg:flex-row xl:lg:space-x-20 xl:lg:space-y-0">
						<DashboardAppointmentTracker />
						<DashboardAppointmentsToday />
					</div>
				</div>
				<div className="flex items-center justify-between xs:flex-col xs:gap-y-12 sm:flex-col sm:gap-y-12 md:flex-col md:gap-y-16 md:space-x-12 md:px-12 xl:lg:flex-row xl:lg:px-48 xl:lg:space-x-6">
					<div className="rounded-xl bg-[#FAF8ED] px-12 py-6 shadow-sm shadow-indigo-800">
						<div className="text-grey-darker mb-2">
							<span className="align-top text-3xl">RS</span>
							<span className="text-5xl">21,404</span>
						</div>
						<div className="text-grey text-sm uppercase tracking-wide">
							Revenue This Month
						</div>
					</div>
					<div className="rounded-xl bg-[#FAF8ED] px-12 py-6 shadow-sm shadow-indigo-800">
						<div className="text-grey-darker mb-2">
							<span className="align-top text-3xl">RS</span>
							<span className="text-5xl">21,404</span>
						</div>
						<div className="text-grey text-sm uppercase tracking-wide">
							Revenue This Month
						</div>
					</div>
					<div className="rounded-xl bg-[#FAF8ED] px-12 py-6 shadow-sm shadow-indigo-800">
						<div className="text-grey-darker mb-2">
							<span className="align-top text-3xl">RS</span>
							<span className="text-5xl">21,404</span>
						</div>
						<div className="text-grey text-sm uppercase tracking-wide">
							Revenue This Month
						</div>
					</div>
				</div> */}
				<ServiceAddForm />
				<ServicesCRUD />
				<BacktoTopButton />
			</div>
			<Transition appear show={isModalOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto bg-indigo-600 pattern-texture-[#FAF8ED]/60 pattern-texture-scale-[1.5]"
					onClose={closeModalAndNavigate}>
					<div className="min-h-screen text-center">
						<Dialog.Overlay className="fixed" />
						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true">
							&#8203;
						</span>
						<Dialog.Description
							as="div"
							className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-[#FAF8ED] p-12 text-center align-middle transition-all">
							<Dialog.Title
								as="h1"
								className="leading-2 font-bebas text-5xl font-semibold text-indigo-500">
								Dashboard Access Denied
							</Dialog.Title>
							<div className="mt-2">
								<p className="font-poppins text-sm text-black">
									You&rsquo;re not signed in as a business owner. Please sign in
									as a business owner to access the dashboard.
								</p>
							</div>
						</Dialog.Description>
					</div>
				</Dialog>
			</Transition>
		</Layout>
	);
}

export default BusinessDashboard;
