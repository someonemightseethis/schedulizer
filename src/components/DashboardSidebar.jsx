function DashboardSidebar() {
	return (
		<div className="fixed flex flex-col z-10 my-[66px] w-56 bg-white h-full border-r-2 border-black">
			<div className="overflow-y-auto overflow-x-hidden flex-grow">
				<ul className="flex flex-col justify-between py-4 space-y-2 h-full">
					<div className="top-0">
						<li>
							<a
								href="#"
								className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
							>
								<span className="inline-flex justify-center items-center ml-4">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="#6366F1"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										></path>
									</svg>
								</span>
								<span className="ml-2 text-sm tracking-wide truncate">
									Dashboard
								</span>
							</a>
						</li>
						<li className="pt-4">
							<div className="flex flex-row items-center h-8 border-y-2 border-black">
								<div className="text-sm font-light tracking-wide text-indigo-500 px-2">
									Appointments
								</div>
							</div>
						</li>
						<li>
							<a
								href="#"
								className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
							>
								<span className="inline-flex justify-center items-center ml-4">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="#6366F1"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
										></path>
									</svg>
								</span>
								<span className="ml-2 text-sm tracking-wide truncate">
									My Appointments
								</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
							>
								<span className="inline-flex justify-center items-center ml-4">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="#6366F1"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
										></path>
									</svg>
								</span>
								<span className="ml-2 text-sm tracking-wide truncate">
									Clients
								</span>
								<span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
									15
								</span>
							</a>
						</li>
					</div>
					<div className="bottom-0 pb-16">
						<li className="pt-4">
							<div className="flex flex-row items-center h-8 border-y-2 border-black">
								<div className="text-sm font-light tracking-wide text-indigo-500 px-2">
									Settings
								</div>
							</div>
						</li>
						<li>
							<a
								href="#"
								className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
							>
								<span className="inline-flex justify-center items-center ml-4">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="#6366F1"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										></path>
									</svg>
								</span>
								<span className="ml-2 text-sm tracking-wide truncate">
									Profile
								</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
							>
								<span className="inline-flex justify-center items-center ml-4">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="#6366F1"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										></path>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										></path>
									</svg>
								</span>
								<span className="ml-2 text-sm tracking-wide truncate">
									Settings
								</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
							>
								<span className="inline-flex justify-center items-center ml-4">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="#6366F1"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
										></path>
									</svg>
								</span>
								<span className="ml-2 text-sm tracking-wide truncate">
									Logout
								</span>
							</a>
						</li>
					</div>
				</ul>
			</div>
		</div>
	);
}

export default DashboardSidebar;
