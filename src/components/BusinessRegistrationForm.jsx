import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "./Button";
import DropdownButton from "./Form/DropdownButton";
import InputField from "./Form/InputField";
import Layout from "./Layout";
import { Dialog, Transition } from "@headlessui/react";

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
	const [isModalOpen, setIsModalOpen] = useState(false);

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
				setIsModalOpen(true);
				// Delay navigation by 4 seconds
				setTimeout(() => {
					navigate("/schedulizer/dashboard");
				}, 4000);
			} else {
				setIsLoading(false);
			}
		} catch (error) {
			console.log("error data", error.response?.data);
			console.log("Form data", businessData);
			setIsLoading(false);
		}
	};

	const closeModalAndNavigate = () => {
		setIsModalOpen(false);
		navigate("/schedulizer/dashboard");
	};

	return (
		<Layout>
			<div className="flex min-h-screen flex-col justify-center bg-[#FAF8ED] pattern-texture-indigo-500/30 pattern-texture-scale-[1.5]">
				<div className="flex justify-center py-12">
					<div className="pt-12">
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
			<Transition appear show={isModalOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto bg-indigo-600 pattern-texture-[#FAF8ED]/60 pattern-texture-scale-[1.5]"
					onClose={closeModalAndNavigate}>
					<div className="min-h-screen text-center">
						<Dialog.Overlay className="fixed" />
						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true">
							&#8203;
						</span>
						<Dialog.Description
							as="div"
							className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-[#FAF8ED] p-12 text-center align-middle transition-all">
							<Dialog.Title
								as="h1"
								className="leading-2 font-bebas text-5xl font-semibold text-indigo-500">
								Business Registration Successful!
							</Dialog.Title>
							<div className="mt-2">
								<p className="font-poppins text-sm text-black">
									You will be redirected to your Dashboard shortly.
								</p>
							</div>
						</Dialog.Description>
					</div>
				</Dialog>
			</Transition>
		</Layout>
	);
}

export default BusinessRegistrationForm;
