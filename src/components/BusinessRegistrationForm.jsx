import { useState, useRef, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "./Button";
import Dropdown from "./form/Dropdown";
import InputField from "./form/InputField";
import Layout from "./Layout";
import { useSelector, useDispatch } from "react-redux";
import { selectUserEmail } from "../redux/slices/userSlice";
import {
	registerBusinessRequest,
	registerBusinessSuccess,
	registerBusinessFailure,
} from "../redux/slices/businessSlice";
import { Dialog, Transition } from "@headlessui/react";

function BusinessRegistrationForm() {
	const dispatch = useDispatch();
	const userEmail = useSelector(selectUserEmail);

	const navigate = useNavigate();
	const [businessName, setBusinessName] = useState("");
	const [businessContactNumber, setBusinessContactNumber] = useState("");
	const [businessEmail, setBusinessEmail] = useState("");
	const [businessCity, setBusinessCity] = useState("");
	const [businessCategory, setBusinessCategory] = useState("");
	const [businessAddress, setBusinessAddress] = useState("");
	const [businessAddressLink, setBusinessAddressLink] = useState("");
	const [businessProfilePicture, setBusinessProfilePicture] = useState(null);
	const [businessDescription, setBusinessDescription] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [error, setError] = useState({});
	const [isModalOpen, setIsModalOpen] = useState(false);

	const workCategories = [
		"IT / Tech",
		"Cosmetic",
		"Fitness",
		"Consulting",
		"Finance",
		"Education",
		"Government",
		"Medical",
		"Music",
		"Art",
		"Clothing",
		"Auto",
		"Psychology",
		"Business",
	];

	const businessCities = [
		"Islamabad",
		"Karachi",
		"Lahore",
		"Rawalpindi",
		"Peshawar",
		"Multan",
	];

	const handleCitySelect = (value) => {
		setBusinessCity(value);
	};

	const handleBusinessCategorySelect = (value) => {
		setBusinessCategory(value);
	};

	const handleFileChange = (event) => {
		const businessProfilePicture = event.target.files[0];
		// Now you can handle the businessProfilePicture. For example, you can set it in your component's state.
		setBusinessProfilePicture(businessProfilePicture);
	};

	const [typedCharacters, setTypedCharacters] = useState(0);
	const typedCharactersElementRef = useRef(null);

	useEffect(() => {
		const textAreaElement = document.querySelector("#businessDescription");
		typedCharactersElementRef.current =
			document.querySelector("#typed-characters");

		const updateCharacterCount = () => {
			setTypedCharacters(textAreaElement.value.length);
		};

		textAreaElement.addEventListener("input", updateCharacterCount);

		return () => {
			textAreaElement.removeEventListener("input", updateCharacterCount);
		};
	}, []);

	useEffect(() => {
		if (typedCharactersElementRef.current) {
			typedCharactersElementRef.current.textContent = typedCharacters;
		}
	}, [typedCharacters]);

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
	const isBusinessBio = (value) => (value.length = 100);

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

	const closeModalAndNavigate = () => {
		setIsModalOpen(false);
		navigate("/schedulizer/dashboard");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		const businessData = {
			businessName,
			businessContactNumber,
			businessEmail,
			userEmail,
			businessCity,
			businessCategory,
			businessAddress,
			businessAddressLink,
			businessDescription,
		};

		// Create a new FormData instance
		const formData = new FormData();

		// Append the business data and the businessProfilePicture to the FormData instance
		Object.keys(businessData).forEach((key) =>
			formData.append(key, businessData[key])
		);
		formData.append("businessProfilePicture", businessProfilePicture);

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

				setIsLoading(false);

				// Open the modal
				setIsModalOpen(true);

				// Close the modal and navigate after 4 seconds
				setTimeout(closeModalAndNavigate, 4000);
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
			<div className="flex min-h-screen flex-col justify-center py-12">
				<div className="flex justify-center">
					<div className="flex flex-col items-center justify-center">
						<h1 className="font-bebas text-8xl font-semibold tracking-wide text-indigo-500">
							<span className="font-poppins text-4xl font-normal">
								Let us know
							</span>{" "}
							<br /> more about your business.
						</h1>
						<form onSubmit={handleSubmit}>
							<div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-4 md:w-full md:grid-cols-2 lg:w-[600px] xl:w-[900px]">
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

								<div className="grid grid-cols-2 gap-x-6">
									<div>
										<Dropdown
											dropdownbuttonname="select category"
											dropdownlabelname="Category"
											dropdownlabelhtmlfor="businessCategory"
											dropdownOptions={workCategories}
											onOptionSelect={handleBusinessCategorySelect}
											dropdownError={error.businessCategory}
											value={businessCategory}
											onChange={(e) => setBusinessCategory(e.target.value)}
										/>
									</div>

									<div>
										<Dropdown
											dropdownbuttonname="select city"
											dropdownlabelname="City"
											dropdownlabelhtmlfor="businessCity"
											dropdownOptions={businessCities}
											onOptionSelect={handleCitySelect}
											dropdownError={error.businessCity}
											value={businessCity}
											onChange={(e) => setBusinessCity(e.target.value)}
										/>
									</div>
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
										inputFieldId="businessDescription"
										inputFieldType="text"
										inputFieldPlaceholder="tell us a little about your business"
										inputFieldHtmlFor="businessDescription"
										inputFieldLabelName="Business Bio"
										isRequired={true}
										fieldType="textarea"
										cols={10}
										rows={5}
										maxLength={500}
										value={businessDescription}
										onChange={(e) => setBusinessDescription(e.target.value)}
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												isBusinessBio,
												"Service description should be 100 characters.",
												"businessDescription",
												"Business Description"
											)
										}
										inputFieldError={error.serviceDescription}
									/>
									<div
										id="character-counter"
										className="text-right text-sm text-indigo-500 opacity-80">
										<span id="typed-characters">0</span>
										<span>/</span>
										<span id="maximum-characters">500</span>
									</div>
								</div>

								<div>
									<InputField
										inputFieldId="fileUpload"
										inputFieldType="file"
										inputFieldHtmlFor="fileUpload"
										inputFieldLabelName="Add Profile Picture"
										fieldType="file"
										acceptedFileTypes="image/*" // Accepts all image types
										onFileChange={handleFileChange} // handleFileChange is a function you define to handle the file input change
									/>
								</div>
							</div>

							<div className="py-8 xs:px-16 md:px-32 xl:px-36">
								<Button
									buttonName="SUBMIT"
									buttonType="submit"
									disabled={
										isLoading ||
										!businessName ||
										!businessContactNumber ||
										!businessEmail ||
										!businessCity ||
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
