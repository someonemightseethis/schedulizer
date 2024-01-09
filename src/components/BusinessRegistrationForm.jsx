import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "./Button";
import DropdownButton from "./form/DropdownButton";
import InputField from "./form/InputField";
import Layout from "./Layout";
import { useSelector, useDispatch } from "react-redux";
import { selectUserEmail } from "../redux/slices/userSlice";
import {
	registerBusinessRequest,
	registerBusinessSuccess,
	registerBusinessFailure,
} from "../redux/slices/businessRegistrationSlice";

function BusinessRegistrationForm() {
	const dispatch = useDispatch();
	const userEmail = useSelector(selectUserEmail);

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
	const [emailError, setEmailError] = useState("");
	const [error, setError] = useState({});

	const validateEmail = (value) => {
		if (!value.trim()) {
			setEmailError("Email cannot be empty. Please fill this out.");
			return false;
		}

		const error = {
			atSymbolError: "Email should have exactly one '@' symbol.",
			domainError: "Email domain should end with '.com'.",
			numberInDomainError: "Numbers are not allowed in the domain name.",
		};

		const emailParts = value.split("@");
		if (emailParts.length !== 2) {
			setEmailError(error.atSymbolError);
			return false; // Email should have only one '@'
		}

		const [username, domain] = emailParts;
		const isUsernameValid = username.trim() !== "";
		const isDomainValid = domain.endsWith(".com") && !/\d/.test(domain);

		if (!isUsernameValid) {
			setEmailError("Username cannot be empty.");
			return false; // Username cannot be empty
		}

		if (!isDomainValid) {
			setEmailError(
				domain.endsWith(".com") ? error.numberInDomainError : error.domainError
			);
			return false; // Domain should end with '.com' and should not contain numbers
		}

		// Clear the error if email is valid
		setEmailError("");

		return true;
	};

	const isAlphabetic = (value) => /^[A-Za-z\s&]+$/.test(value);
	const isContactNumber = (value) => /^\d{11}$/.test(value);
	const isText = (value) => /^.*$/.test(value);
	const isTextOrUrl = (value) => {
		const urlPattern = new RegExp(
			"^(https?:\\/\\/)?" + // protocol
				"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
				"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
				"(\\:\\d+)?" + // port
				"(\\/[-a-z\\d%_.~+]*)*" + // path
				"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
				"(\\#[-a-z\\d_]*)?$",
			"i"
		); // fragment locator
		return isText(value) || urlPattern.test(value);
	};

	const validateField = (
		value,
		validateFunc,
		errorMessage,
		fieldName,
		labelName
	) => {
		if (!value.trim()) {
			setError((prevErrors) => ({
				...prevErrors,
				[fieldName]: `${labelName} cannot be empty. Please fill this out.`,
			}));
		} else if (!validateFunc(value)) {
			setError((prevErrors) => ({
				...prevErrors,
				[fieldName]: errorMessage,
			}));
		} else {
			setError((prevErrors) => {
				//eslint-disable-next-line no-unused-vars
				const { [fieldName]: _, ...rest } = prevErrors;
				return rest;
			});
		}
	};

	const handleSubmit = async (event) => {
		setIsLoading(true);
		event.preventDefault();
		setEmailError("");

		const businessData = {
			businessName,
			businessContactNumber,
			businessEmail,
			userEmail,
			businessCity,
			businessType,
			numberOfEmployees,
			businessCategory,
			businessAddress,
			businessAddressLink,
		};

		console.log(businessData);

		try {
			// Dispatch the register business request action
			dispatch(registerBusinessRequest(businessData));

			const response = await axios.post("/business/registered", businessData, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			console.log(response.data);

			// Check if the form submission was successful
			if (response.data.success) {
				// Dispatch the register business success action
				dispatch(registerBusinessSuccess(response.data));
				const businessId = response.data._id;
				setIsLoading(false);
				await navigate(`/schedulizer/profilepicbio/${businessId}`);
			} else {
				// Dispatch the register business failure action with an appropriate error message
				dispatch(
					registerBusinessFailure({ error: "Business registration failed" })
				);

				setIsLoading(false);
			}
		} catch (error) {
			if (
				error.response &&
				error.response.data.error ===
					"Email already exists. Please choose a different Email."
			) {
				setEmailError("Email already exists. Please choose a different Email.");
			} else {
				console.log("error data", error.response?.data);
				console.log("Form data", businessData);
			}
			setIsLoading(false); // Always set isLoading to false when an error occurs
		}
	};

	const displayError = (emailError, error) =>
		emailError ? emailError : error.businessEmail;

	return (
		<Layout>
			<div className="flex min-h-screen flex-col justify-center">
				<div className="flex justify-center py-12">
					<div className="pt-16 md:w-full lg:w-[600px] xl:w-[900px]">
						<h3 className="text-dark-grey-900 pb-6 text-center font-bebas text-9xl font-extrabold">
							<span className="font-normal">Let us</span> &nbsp; know more about
							your business.
						</h3>
						<form onSubmit={handleSubmit}>
							<div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
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
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												isAlphabetic,
												"Business name should only contain alphabets",
												"businessName",
												"Business Name" // pass the label name here
											)
										}
										inputFieldError={error.businessName}
									/>
								</div>

								<div>
									<InputField
										inputFieldId="businessContactNumber"
										inputFieldType="text"
										inputFieldPlaceholder="03310000000 (or) 0510000000"
										inputFieldHtmlFor="businessContactNumber"
										inputFieldLabelName="Contact Number"
										isRequired={true}
										fieldType="input"
										value={businessContactNumber}
										onChange={(e) => setBusinessContactNumber(e.target.value)}
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												isContactNumber,
												"Contact number should only contain numbers and be 11-15 digits.",
												"businessContactNumber",
												"Contact Number" // pass the label name here
											)
										}
										inputFieldName="businessContactNumber"
										inputFieldAutoComplete={false}
										inputFieldError={error.businessContactNumber}
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
										onChange={(e) => {
											setBusinessEmail(e.target.value);
											setEmailError(""); // Clear the error message when the input value changes
										}}
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												validateEmail,
												"Invalid email address. Please enter a valid email with the format: example@example.com",
												"businessEmail",
												"Email address"
											)
										}
										inputFieldError={displayError(emailError, error)}
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
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												isAlphabetic,
												"City name should only contain alphabets",
												"businessCity",
												"City" // pass the label name here
											)
										}
										inputFieldError={error.businessCity}
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
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												isAlphabetic,
												"Field name should only contain alphabets",
												"businessCategory",
												"Field of Work" // pass the label name here
											)
										}
										inputFieldError={error.businessCategory}
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
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												isText,
												"Business address cannot be empty",
												"businessAddress",
												"Business Address"
											)
										}
										inputFieldError={error.businessAddress}
									/>
								</div>

								<div>
									<InputField
										inputFieldId="businessAddressLink"
										inputFieldType="text"
										inputFieldPlaceholder="e.g. https://maps.google.com/?q=1234+Main+St"
										inputFieldHtmlFor="businessAddressLink"
										inputFieldLabelName="Google Maps Link"
										isRequired={true}
										fieldType="input"
										value={businessAddressLink}
										onChange={(e) => setBusinessAddressLink(e.target.value)}
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												isTextOrUrl,
												"Enter a valid url.",
												"businessAddressLink",
												"Google Maps Link"
											)
										}
										inputFieldError={error.businessAddressLink}
									/>
								</div>
							</div>

							<div className="py-4 xs:px-16 md:px-32 xl:px-36">
								<Button
									buttonName="SUBMIT"
									buttonType="submit"
									disabled={
										isLoading ||
										!businessName ||
										!businessContactNumber ||
										!businessEmail ||
										!businessCity ||
										!businessType ||
										!numberOfEmployees ||
										!businessCategory ||
										!businessAddress ||
										!businessAddressLink
									}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default BusinessRegistrationForm;
