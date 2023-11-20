function AppointmentsCRUD() {
	return (
		<div className="flex items-center justify-center px-24 py-4">
			<div className="py-28 px-12">
				<h3 className="text-xl pb-2 text-[#EA5455] font-mono">Add Task</h3>
				<form method="POST" action="" className="">
					<div className="text-[#E4DCCF]">
						<div className="">
							<div className="py-2">
								<input
									type="text"
									name="title"
									placeholder="enter task title"
									id="title"
									className="mb-3 mt-1 block w-full px-2 py-1.5 border-2 border-[#292C6D] rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#EA5455] focus:ring-1 focus:ring-[#EA5455] text-[#002B5B] font-mono bg-[#F9F5EB]"
									required
								/>

								<div className="grid grid-cols-2 text-[#002B5B] space-x-4">
									<div className="flex items-baseline justify-center space-x-2">
										<label htmlFor="startdate" className="text-sm">
											Start Date
										</label>
										<input
											type="date"
											name="startdate"
											min=""
											max=""
											className="mb-3 mt-1 w-fit px-2 py-1.5 border-2 border-[#292C6D] rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#EA5455] focus:ring-1 focus:ring-[#EA5455] text-[#002B5B] font-mono bg-[#F9F5EB] object-left"
											value=""
										/>
									</div>
									<div className="flex items-baseline justify-center space-x-2">
										<label htmlFor="enddate" className="text-sm">
											End Date
										</label>
										<input
											type="date"
											name="enddate"
											min=""
											max=""
											className="mb-3 mt-1 w-fit px-2 py-1.5 border-2 border-[#292C6D] rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#EA5455] focus:ring-1 focus:ring-[#EA5455] text-[#002B5B] font-mono bg-[#F9F5EB] object-right"
											required
										/>
									</div>
								</div>

								<textarea
									name="description"
									id="description"
									cols="10"
									rows="5"
									placeholder="enter task description"
									className="mb-3 mt-1 block w-full px-2 py-1.5 border-[#292C6D] border-2 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#EA5455] focus:ring-1 focus:ring-[#EA5455] text-[#002B5B] font-mono bg-[#F9F5EB]"
									maxLength="300"
									required
								></textarea>
								<div
									id="character-counter"
									className="text-sm text-[#EA5455] opacity-80 text-right"
								>
									<span id="typed-characters">0</span>
									<span>/</span>
									<span id="maximum-characters">300</span>
								</div>
							</div>
						</div>
						<div className="text-center py-2">
							<button
								type="submit"
								name="submit"
								className="w-full px-6 py-1.5 rounded-md bg-[#002B5B] text-[#E4DCCF] hover:bg-[#EA5455] text-md hover:bg-opacity-95"
							>
								Add Task
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AppointmentsCRUD;
