import useState from "react";
import useNavigate from "react-router-dom";
import axios from "axios";
import Button from "./Button";
import DropdownButton from "./Form/DropdownButton";
import InputField from "./Form/InputField";
import Navbar from "./Navbar/Navbar";

function BusinessRegistrationForm() {
	const navigate = useNavigate();
	const [businessName, setBusinessName] = useState("");
	const [businessContactNumber, setBusinessContactNumber] = useState("");
	const [businessEmail, setBusinessEmail] = useState("");
	const [businessCity, setBusinessCity] = useState("");
	const [businessType, setBusinessType] = useState("");
	const [numberOfEmployees, setNumberOfEmployees] = useState("");
	const [businessCategory, setBusinessCategory] = useState("");
	const [businessAddress, setBusinessAddress] = useState("");
	const [businessAddressLink, setBusinessAddressLink] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (event) => {
		setIsLoading(true);
		event.preventDefault();

		const businessData = {
			businessName,
			businessContactNumber,
			businessEmail,
			businessCity,
			businessType,
			numberOfEmployees,
			businessCategory,
			businessAddress,
			businessAddressLink,
		};

		try {
			const response = await axios.post("/business/registered", businessData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			console.log(response.data);

			// Check if the form submission was successful
			if (response.data.success) {
				setIsLoading(false);
				// Use navigate from useNavigate hook to programmatically navigate
				navigate("/schedulizer/dashboard");
			} else {
				setIsLoading(false);
			}
		} catch (error) {
			console.log("error data", error.response?.data);
			console.log("Form data", businessData);
			setIsLoading(false);
		}
	};

	return (
		<div className="m-0">
			<Navbar />
			<div className="flex h-screen items-center justify-center bg-[#FAF8ED] pt-24 pattern-texture-indigo-500/50 pattern-texture-scale-[1.5]">
				<div className="flex flex-col justify-center py-12">
					<h3 className="text-dark-grey-900 px-4 pb-6 font-bebas text-6xl font-medium">
						Let us <br />
						<p className="text-9xl font-extrabold">
							know more about your business.
						</p>
					</h3>
					<div className="w-full items-center justify-center px-72">
						<form onSubmit={handleSubmit}>
							<div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
								<div>
									<InputField
										inputFieldId="businessName"
										inputFieldType="text"
										inputFieldPlaceholder="John & Sons"
										inputFieldHtmlFor="businessName"
										inputFieldLabelName="Registered Business Name"
										isRequired={true}
										fieldType="input"
										value={businessName}
										onChange={(e) => setBusinessName(e.target.value)}
									/>
								</div>

								<div>
									<InputField
										inputFieldId="businessContactNumber"
										inputFieldType="text"
										inputFieldPlaceholder="XXXX-XXXXXXX"
										inputFieldHtmlFor="businessContactNumber"
										inputFieldLabelName="Contact Number"
										isRequired={true}
										fieldType="input"
										value={businessContactNumber}
										onChange={(e) => setBusinessContactNumber(e.target.value)}
									/>
								</div>

								<div>
									<InputField
										inputFieldId="businessEmail"
										inputFieldType="email"
										inputFieldPlaceholder="johnsnow@example.com"
										inputFieldHtmlFor="businessEmail"
										inputFieldLabelName="Work Email"
										isRequired={true}
										fieldType="input"
										value={businessEmail}
										onChange={(e) => setBusinessEmail(e.target.value)}
									/>
								</div>

								<div>
									<InputField
										inputFieldId="businessCity"
										inputFieldType="text"
										inputFieldPlaceholder="Islamabad"
										inputFieldHtmlFor="businessCity"
										inputFieldLabelName="City"
										isRequired={true}
										fieldType="input"
										value={businessCity}
										onChange={(e) => setBusinessCity(e.target.value)}
									/>
								</div>

								<div className="grid grid-cols-2 gap-x-6">
									<div className="flex-grow">
										<DropdownButton
											dropdownbuttonname="public, private"
											dropdownlabelname="Business Type"
											dropdownlistLength={2}
											dropdownlabelhtmlfor="businesstype"
											dropdownliname1="Public Business"
											dropdownliname2="Private Business"
											onOptionSelect={setBusinessType}
										/>
									</div>
									<div className="flex-shrink">
										<DropdownButton
											dropdownbuttonname="select range"
											dropdownlabelname="No. of Employees"
											dropdownlistLength={4}
											dropdownlabelhtmlfor="employeesno"
											dropdownliname1="1 - 5"
											dropdownliname2="5 - 10"
											dropdownliname3="10 - 15"
											dropdownliname4="15 - 20"
											onOptionSelect={setNumberOfEmployees}
										/>
									</div>
								</div>
								<div>
									<InputField
										inputFieldId="businessCategory"
										inputFieldType="text"
										inputFieldPlaceholder="e.g. IT, Marketing, etc."
										inputFieldHtmlFor="businessCategory"
										inputFieldLabelName="Field of Work"
										isRequired={true}
										fieldType="input"
										value={businessCategory}
										onChange={(e) => setBusinessCategory(e.target.value)}
									/>
								</div>

								<div>
									<InputField
										inputFieldId="businessAddress"
										inputFieldType="text"
										inputFieldPlaceholder="e.g. 1234 Main St"
										inputFieldHtmlFor="businessAddress"
										inputFieldLabelName="Business Address"
										isRequired={true}
										fieldType="input"
										value={businessAddress}
										onChange={(e) => setBusinessAddress(e.target.value)}
									/>
								</div>

								<div>
									<InputField
										inputFieldId="businessAddressLink"
										inputFieldType="text"
										inputFieldPlaceholder="e.g. https://maps.google.com/?q=1234+Main+St"
										inputFieldHtmlFor="businessAddressLink"
										inputFieldLabelName="Google Maps Link to Business Address"
										isRequired={true}
										fieldType="input"
										value={businessAddressLink}
										onChange={(e) => setBusinessAddressLink(e.target.value)}
									/>
								</div>
							</div>

							<div className="py-4 xs:px-16 md:px-32 xl:px-36">
								<Button
									buttonName="SUBMIT"
									buttonType="submit"
									disabled={isLoading}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BusinessRegistrationForm;
