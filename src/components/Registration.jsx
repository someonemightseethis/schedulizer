import Button from "./Button";
import InputField from "./InputField";
import Navbar from "./Navbar";

function Registration() {
	return (
		<div>
			<Navbar />
			<div className="flex justify-center items-center py-36">
				<div className="flex justify-center py-12">
					<div className="w-[590px]">
						<h3 className="pb-6 text-center text-4xl font-extrabold text-dark-grey-900">
							Sign Up
						</h3>
						{/* <div className="mt-6">
							<h1 className="text-black">Select type of account</h1>

							<div className="mt-3 md:flex md:items-center md:-mx-2">
								<button className="flex justify-center w-full px-6 py-3 text-black rounded-md md:w-auto md:mx-2 focus:outline-none">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>

									<span className="mx-2">client</span>
								</button>

								<button className="flex justify-center w-full px-6 py-3 mt-4 text-black border border-blue-500 rounded-md md:mt-0 md:w-auto md:mx-2 focus:outline-none">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>

									<span className="mx-2">worker</span>
								</button>
							</div>
						</div> */}
						<form>
							<div className="grid grid-cols-1 gap-x-8 gap-y-4 mt-8 md:grid-cols-2">
								<div>
									<InputField
										id=""
										type="text"
										placeholder="John"
										htmlfor=""
										labelname="First Name"
									/>
								</div>

								<div>
									<InputField
										id=""
										type="text"
										placeholder="Snow"
										htmlfor=""
										labelname="Last name"
									/>
								</div>

								<div>
									<InputField
										id=""
										type="text"
										placeholder="XXXX-XXXXXXX"
										htmlfor=""
										labelname="Phone number"
									/>
								</div>

								<div>
									<InputField
										id=""
										type="email"
										placeholder="johnsnow@example.com"
										htmlfor=""
										labelname="Email address"
									/>
								</div>

								<div>
									<InputField
										id=""
										type="password"
										placeholder="Enter your password"
										htmlfor=""
										labelname="Password"
									/>
								</div>

								<div>
									<InputField
										id=""
										type="password"
										placeholder="Confirm password"
										htmlfor=""
										labelname="Confirm password"
									/>
								</div>
							</div>
							<div className="pb-2 px-24">
								<Button buttonname="Sign Up" />
							</div>
						</form>
						<p className="text-sm text-center leading-relaxed text-grey-900">
							Already have an account?{" "}
							<a href="javascript:void(0)" className="font-bold text-grey-700">
								Sign In
							</a>
						</p>
						<div className="flex items-center mb-3 pt-6">
							<hr className="h-0 border-b border-solid border-grey-500 grow" />
							<p className="mx-4 text-grey-600">or</p>
							<hr className="h-0 border-b border-solid border-grey-500 grow" />
						</div>
						<div className="px-24">
						<a className="flex items-center justify-center w-full py-2 mb-6 text-sm font-medium transition duration-300 rounded-lg text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300 border-2 border-black">
							<img
								className="h-5 mr-2"
								src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
								alt=""
							/>
							Continue with Google
						</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Registration;
