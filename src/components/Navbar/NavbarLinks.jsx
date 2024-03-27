import { Link, useLocation } from "react-router-dom";

function NavbarLinks() {
	const location = useLocation();

	const isRouteActive = (path) => {
		return location.pathname === path;
	};

	const links = [
		{ path: "/schedulizer/", name: "home" },
		{ path: "/schedulizer/businesses", name: "businesses" },
		{ path: "/schedulizer/services", name: "services" },
	];

	return (
		<ul className="font-ptSansCaption xs:hidden sm:hidden md:hidden lg:mx-auto lg:hidden lg:w-auto lg:items-center lg:space-x-12 xl:flex">
			{links.map((link) => (
				<li key={link.path}>
					<Link
						className={`text-xs hover:underline hover:duration-300 hover:ease-in-out duration-500 ease-in-out hover:font-medium ${
							isRouteActive(link.path)
								? "text-indigo-500 font-medium underline-offset-4 underline hover:underline-offset-2"
								: "underline-offset-2 hover:underline-offset-4"
						}`}
						to={link.path}>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default NavbarLinks;
