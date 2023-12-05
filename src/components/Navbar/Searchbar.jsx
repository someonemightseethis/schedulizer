function Searchbar() {
	return (
		<div className="flex w-full max-w-lg items-center xs:hidden sm:hidden lg:block lg:max-w-xs xl:block">
			<form method="get" action="#" className="flex items-center">
				<input
					id="search"
					type="text"
					placeholder="search"
					className="placeholder:text-grey-700 mb-2 mr-2 mt-2 flex w-full items-center rounded-lg border-2 border-black px-3 py-2 font-muktaVaani text-sm text-black focus:border-indigo-500 focus:outline-none"
				/>
				<button
					type="submit"
					id="searchsubmit"
					className="flex pl-3 transition duration-300 ease-in-out hover:scale-110">
					<svg fill="#6366F1" height="1.4rem" viewBox="0 0 20 20">
						<path
							fillRule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clipRule="evenodd"></path>
					</svg>
				</button>
			</form>
		</div>
	);
}

export default Searchbar;
