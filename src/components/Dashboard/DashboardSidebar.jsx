import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";

function DashboardSidebar({ logout }) {
	const navigate = useNavigate();

	const handleLogout = () => {
		// Additional logic if needed before logout, or dispatch additional actions
		logout();
		navigate("/schedulizer/");
	};

	return (
		<div className="fixed h-full w-max flex-col overflow-x-hidden overflow-y-scroll bg-[#FAF8ED] px-2 shadow-lg xs:hidden sm:hidden md:flex lg:flex xl:flex">
			<ul className="flex h-full flex-col justify-between py-2">
				<div className="top-0">
					<div className="my-2 flex items-center justify-start border-b-2 border-black py-2 sm:justify-center sm:px-0 xl:justify-start xl:px-3">
						<div className="block">
							<div className="font-poppins text-lg font-semibold text-black">
								Business Name
							</div>
							<div className="text-end font-muktaVaani text-xs font-light text-black">
								category
							</div>
						</div>
						<div className="block flex-grow sm:hidden xl:block" />
					</div>
					<li>
						<a
							href="#"
							className="relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 font-ptSansCaption text-gray-600 hover:font-medium hover:text-gray-800 focus:outline-none">
							<span className="ml-2 inline-flex items-center justify-center">
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="#6366F1"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
								</svg>
							</span>
							<span className="ml-2 truncate text-sm tracking-wide">
								Dashboard
							</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 font-ptSansCaption text-gray-600 hover:border-indigo-500 hover:bg-gray-50 hover:font-medium hover:text-gray-800 focus:outline-none">
							<span className="ml-2 inline-flex items-center justify-center">
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="#6366F1"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
								</svg>
							</span>
							<span className="ml-2 truncate text-sm tracking-wide">
								My Appointments
							</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 font-ptSansCaption text-gray-600 hover:border-indigo-500 hover:bg-gray-50 hover:font-medium hover:text-gray-800 focus:outline-none">
							<span className="ml-2 inline-flex items-center justify-center">
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="#6366F1"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
								</svg>
							</span>
							<span className="ml-2 truncate text-sm tracking-wide">
								Clients
							</span>
							<span className="ml-auto rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium tracking-wide text-green-500">
								15
							</span>
						</a>
					</li>
				</div>
				<div className="bottom-0 pb-20">
					{/* <div className="flex-shrink-0 overflow-hidden">
						<div className="mx-2 my-2 flex h-full items-center rounded-xl bg-indigo-100 p-2 px-2 py-2 sm:justify-center xl:justify-start">
							<img src="./images/logo.png" className="h-10 w-10" />
							<div className="ml-2 block font-semibold">username</div>
							<div className="block flex-grow sm:hidden xl:block" />
						</div>
					</div> */}
					<li>
						<a
							href="#"
							className="relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 font-ptSansCaption text-gray-600 hover:border-indigo-500 hover:bg-gray-50 hover:font-medium hover:text-gray-800 focus:outline-none">
							<span className="ml-2 inline-flex items-center justify-center">
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="#6366F1"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
								</svg>
							</span>
							<span className="ml-2 truncate text-sm tracking-wide">
								Settings
							</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							onClick={handleLogout} // Call handleLogout when the logout button is clicked
							className="relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 font-ptSansCaption text-gray-600 hover:border-indigo-500 hover:bg-gray-50 hover:font-medium hover:text-gray-800 focus:outline-none">
							<span className="ml-2 inline-flex items-center justify-center">
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="#6366F1"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
								</svg>
							</span>
							<span className="ml-2 truncate text-sm tracking-wide">
								Logout
							</span>
						</a>
					</li>
				</div>
			</ul>
		</div>
	);
}

DashboardSidebar.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.user !== null, // Update this line
});

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(logoutAction()),
});

const ConnectedDashboardSidebar = connect(
	mapStateToProps,
	mapDispatchToProps
)(DashboardSidebar);

export default ConnectedDashboardSidebar;
