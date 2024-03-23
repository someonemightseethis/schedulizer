import { Link, useLocation } from "react-router-dom";
import useUserBusinesses from "../../hooks/useBusinessRegistered";

function NavbarLinks() {
	const location = useLocation();
	const { isBusinessRegistered, isLoading } = useUserBusinesses();

	const isRouteActive = (path) => {
		return location.pathname === path;
	};

	return (
		<ul className="p-0 font-ptSansCaption xs:hidden sm:hidden md:hidden lg:mx-auto lg:hidden lg:w-auto lg:items-center lg:space-x-12 xl:flex">
			<li>
				<Link
					className={`text-xs hover:underline hover:underline-offset-4 hover:font-medium ${
						isRouteActive("/schedulizer/") ? "text-indigo-500 font-medium" : ""
					}`}
					to="/schedulizer/">
					home
				</Link>
			</li>
			{/* <li className="pt-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#6366F1"
						stroke="#6366F1"
						className="current-fill h-4 w-4"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
						/>
					</svg>
				</li> */}
			<li>
				<Link
					className={`text-xs hover:underline hover:underline-offset-4 hover:font-medium ${
						isRouteActive("/schedulizer/businesses")
							? "text-indigo-500 font-medium"
							: ""
					}`}
					to="/schedulizer/businesses">
					businesses
				</Link>
			</li>
			{/* <li className="pt-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#6366F1"
						stroke="#6366F1"
						className="current-fill h-4 w-4"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
						/>
					</svg>
				</li> */}
			<li>
				<Link
					className={`text-xs hover:underline hover:underline-offset-4 hover:font-medium ${
						isRouteActive("/schedulizer/services")
							? "text-indigo-500 font-medium"
							: ""
					}`}
					to="/schedulizer/services">
					services
				</Link>
			</li>
			{isBusinessRegistered && !isLoading && (
				<>
					{/* <li className="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#6366F1"
							stroke="#6366F1"
							className="current-fill h-4 w-4"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
							/>
						</svg>
					</li> */}
					<li>
						<Link
							className={`text-xs hover:underline hover:underline-offset-4 hover:font-medium ${
								isRouteActive("/schedulizer/dashboard")
									? "text-indigo-500 font-medium"
									: ""
							}`}
							to="/schedulizer/dashboard">
							dashboard
						</Link>
					</li>
				</>
			)}
		</ul>
	);
}

export default NavbarLinks;
