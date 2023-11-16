import { Link } from "react-router-dom";
import Button from "./Button";
import NavbarLinks from "./NavbarLinks";
import Searchbar from "./Searchbar";

function Navbar() {
	return (
		<div className="fixed px-6 left-0 w-full bg-white z-10 border-b-2 border-black opacity-[0.98]">
			<nav className="px-4 py-2 flex justify-between items-center space-x-2 lg:space-x-4">
				<div className="flex-shrink-0 flex items-center">
					<img src="./images/logo.png" alt="logo" className="w-12 h-12 mr-4" />
					<Link to="/fyp-schedulizer/">
						<span className="text-black text-3xl font-bold">Schedulizer</span>
					</Link>
				</div>
				<Searchbar />
				<NavbarLinks />
				<div className="lg:block xl:block xs:hidden">
					<Button
						buttonname="add your business"
						buttonlink="/fyp-schedulizer/businessregistration"
					/>
				</div>

				<div className="flex justify-between space-x-16">
					<div className="flex items-center space-x-8">
						<a className="flex items-center" href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="1.25em"
								viewBox="0 0 448 512"
							>
								<path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
							</svg>
							<span className="flex absolute -mt-5 ml-4">
								<span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-indigo-600 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
							</span>
						</a>
						<a className="flex items-center" href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="1.25em"
								viewBox="0 0 512 512"
							>
								<path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
							</svg>
							<span className="flex absolute -mt-5 ml-[23px]">
								<span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-indigo-600 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
							</span>
						</a>
					</div>
					<Link
						to="/fyp-schedulizer/login"
						className="xl:flex lg:flex md:flex items-center group sm:hidden
						xs:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="1.25em"
							viewBox="0 0 512 512"
							fill="#6366F1"
						>
							<path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
						</svg>
						<p className="px-4 text-sm text-black group-hover:underline group-hover:underline-offset-4">
							username
						</p>
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
