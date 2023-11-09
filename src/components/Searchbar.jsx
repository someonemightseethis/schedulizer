function Searchbar() {
	return (
		<div className="max-w-lg w-full h-[35px] flex items-center lg:max-w-xs border-2 border-black rounded-md">
			<form method="get" action="#" className="relative z-50 h-7">
				<label htmlFor="search" className="sr-only">
					Search
				</label>
				<button
					type="submit"
					id="searchsubmit"
					className="absolute inset-y-0 -left-1 pl-3 flex items-center hover:scale-110 transition duration-300 ease-in-out"
				>
					<svg
						className="h-5 w-5 text-black"
						fill="#6366F1"
						viewBox="0 0 20 20"
					>
						<path
							fillRule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clipRule="evenodd"
						></path>
					</svg>
				</button>
				<input
					type="text"
					name="s"
					id="s"
					className="block w-[310px] pl-8 py-[2px] border border-transparent rounded-md leading-2 text-black placeholder-gray-400 focus:outline-none text-sm sm:text-sm transition duration-150 ease-in-out"
					placeholder="Search"
				/>
				
			</form>
		</div>
	);
}

export default Searchbar;
