import Button from "./Button";
import DropdownButton from "./DropdownButton";
import InputField from "./InputField";
import Navbar from "./Navbar/Navbar";

function BusinessRegistrationForm() {
	return (
		<div className="">
			<Navbar />
			<div className="flex justify-center items-center pt-48">
				<div className="flex justify-center py-12">
					<div className="xl:w-[700px] lg:w-[600px] md:w-full">
						<h3 className="pb-6 text-center text-4xl font-extrabold text-dark-grey-900">
							Let us know more <br />
							about your business.
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
										inputfieldid="businessname"
										inputfieldtype="text"
										inputfieldplaceholder="John & Sons"
										inputfieldhtmlfor="businessname"
										inputfieldlabelname="Registered Name"
									/>
								</div>

								<div>
									<InputField
										inputfieldid="businesscity"
										inputfieldtype="text"
										inputfieldplaceholder="Islamabad"
										inputfieldhtmlfor="businesscity"
										inputfieldlabelname="City"
									/>
								</div>

								<div>
									<InputField
										inputfieldid="businesscontactnumber"
										inputfieldtype="tel"
										inputfieldplaceholder="XXXX-XXXXXXX"
										inputfieldhtmlfor="businesscontactnumber"
										inputfieldlabelname="Contact Number"
									/>
								</div>

								<div>
									<InputField
										inputfieldid="businessemail"
										inputfieldtype="email"
										inputfieldplaceholder="johnsnow@example.com"
										inputfieldhtmlfor="businessemail"
										inputfieldlabelname="Work Email"
									/>
								</div>

								<div>
									<DropdownButton
										dropdownbuttonname="select range"
										dropdownlabelname="No. of Employees"
										dropdownlistLength={4}
										dropdownlabelhtmlfor="employeesno"
										dropdownliname1="1 - 5"
										dropdownliname2="5 - 10"
										dropdownliname3="10 - 15"
										dropdownliname4="15 - 20"
									/>
								</div>

								<div>
									<DropdownButton
										dropdownbuttonname="public, private"
										dropdownlabelname="Business Type"
										dropdownlistLength={2}
										dropdownlabelhtmlfor="businesstype"
										dropdownliname1="Public Business"
										dropdownliname2="Private Business"
									/>
								</div>

								<div>
									<InputField
										inputfieldid="businesscategory"
										inputfieldtype="text"
										inputfieldplaceholder="e.g. IT, Marketing, etc."
										inputfieldhtmlfor="businesscategory"
										inputfieldlabelname="Field of Work"
									/>
								</div>

								<div>
									<InputField
										inputfieldid="businessaddress"
										inputfieldtype="text"
										inputfieldplaceholder="Appt. 123, Street 123, Sector 123, Islamabad"
										inputfieldhtmlfor="businessaddress"
										inputfieldlabelname="Address"
									/>
								</div>

								<div>
									<InputField
										inputfieldid="businessaddresslink"
										inputfieldtype="url"
										inputfieldplaceholder="https://www.google.com/maps/..."
										inputfieldhtmlfor="businessaddresslink"
										inputfieldlabelname="Link to Google Maps"
									/>
								</div>
							</div>

							<div className="py-4 xl:px-36 md:px-32 xs:px-16">
								<Button buttonname="submit" buttonlink="/schedulizer/businessinfo" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BusinessRegistrationForm;
