import Button from "./Button";
import InputField from "./InputField";
import Navbar from "./Navbar";

function BusinessRegistrationForm() {
	return (
		<div>
			<Navbar />
			<div className="flex justify-center items-center bg-white rounded-lg py-52">
				<div className="flex justify-center py-12">
					<div className="w-full">
						<div className="flex justify-center">
							<h3 className="pb-12 text-4xl font-extrabold text-dark-grey-900">
								Tell us about your business.
							</h3>
						</div>
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
							<div className="py-4 px-12">
								<Button buttonname="Sign Up" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BusinessRegistrationForm;
