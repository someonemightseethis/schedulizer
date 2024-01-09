import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import InputField from "./form/InputField";
import Layout from "./Layout";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function SignUp() {
	const [userFirstName, setUserFirstName] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [userContactNumber, setUserContactNumber] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [userConfirmPassword, setUserConfirmPassword] = useState("");
	const [error, setError] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [emailError, setEmailError] = useState("");

	const navigate = useNavigate();

	const formatPassword = (value) => value.trim();

	useEffect(() => {
		if (userConfirmPassword) {
			validateField(
				userConfirmPassword,
				(value) => value === userPassword,
				"Passwords do not match",
				"userConfirmPassword"
			);
		}
	}, [userPassword, userConfirmPassword]);

	const validateEmail = (value) => {
		if (!value.trim()) {
			setEmailError("Email cannot be empty. Please fill this out.");
			return false;
		}

		const error = {
			atSymbolError: "Email should have exactly one '@' symbol.",
			domainError: "Email domain should end with '.com'.",
		};

		const emailParts = value.split("@");
		if (emailParts.length !== 2) {
			setEmailError(error.atSymbolError);
			return false; // Email should have only one '@'
		}

		const [username, domain] = emailParts;
		const isUsernameValid = username.trim() !== "" && !/\d/.test(username);
		const isDomainValid = domain.endsWith(".com");

		if (!isUsernameValid) {
			setEmailError(error.numberInDomainError);
			return false; // Username cannot be empty and should not contain numbers
		}

		if (!isDomainValid) {
			setEmailError(error.domainError);
			return false; // Domain should end with '.com'
		}

		// Clear the error if email is valid
		setEmailError("");

		return true;
	};

	const validatePassword = (value) => {
		if (!value.trim()) {
			setError((prevErrors) => ({
				...prevErrors,
				userPassword: "Password cannot be empty. Please fill this out.",
			}));
			return false;
		}

		const error = {
			lengthError: "Password should be 8 to 16 characters.",
			uppercaseError: "Password should include at least one capital letter.",
			numberError: "Password should include at least one number.",
		};

		const isValidLength = value.length >= 8 && value.length <= 16;
		const hasUppercase = /[A-Z]/.test(value);
		const hasNumber = /\d/.test(value);

		const isValidPassword = isValidLength && hasUppercase && hasNumber;

		if (!isValidPassword) {
			let errorMessage = "Invalid password. ";

			if (!isValidLength) errorMessage += error.lengthError;
			if (!hasUppercase) errorMessage += " " + error.uppercaseError;
			if (!hasNumber) errorMessage += " " + error.numberError;

			setError((prevErrors) => ({
				...prevErrors,
				userPassword: errorMessage,
			}));
		} else {
			setError((prevErrors) => {
				//eslint-disable-next-line no-unused-vars
				const { userPassword: _, ...rest } = prevErrors;
				return rest;
			});
		}

		return isValidPassword;
	};

	const isAlphabetic = (value) => /^[A-Za-z\s&]+$/.test(value);
	const isContactNumber = (value) => /^\d{11}$/.test(value);

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

		// Validate password confirmation
		const passwordMatch = userConfirmPassword === userPassword;
		if (!passwordMatch) {
			setError((prevErrors) => ({
				...prevErrors,
				userConfirmPassword: "Passwords do not match",
			}));

			setIsLoading(false);
			return;
		}

		// Clear the error if passwords match
		setError((prevErrors) => {
			//eslint-disable-next-line no-unused-vars
			const { userConfirmPassword: _, ...rest } = prevErrors;
			return rest;
		});

		const userData = {
			userFirstName,
			userLastName,
			userContactNumber,
			userEmail,
			userPassword,
		};

		try {
			const response = await axios.post("/user/signup", userData);
			console.log(response.data);

			// Check if the form submission was successful
			if (response.data.success) {
				setIsLoading(false);
				setIsModalOpen(true);
				// Delay navigation by 4 seconds
				setTimeout(() => {
					navigate("/schedulizer/signin");
				}, 4000);
			} else {
				setIsLoading(false);
			}
		} catch (error) {
			if (
				error.response &&
				error.response.data.error ===
					"User already exists. Please choose a different Email."
			) {
				setEmailError(
					"Email already exists for an existing user. Sign in or choose a different email."
				);
			} else {
				console.log("error data", error.response?.data);
				console.log("Form data", userData);
			}
			setIsLoading(false);
		}
	};

	const closeModalAndNavigate = () => {
		setIsModalOpen(false);
		navigate("/schedulizer/signin");
	};

	const displayError = (emailError, error) =>
		emailError ? emailError : error.userEmail;

	return (
		<Layout>
			<div className="flex min-h-screen flex-col justify-center">
				<div className="flex justify-center py-12">
					<div className="pt-12 md:w-full lg:w-[600px] xl:w-[700px]">
						<h3 className="text-dark-grey-900 pb-6 text-center font-bebas text-9xl font-extrabold">
							Sign Up
						</h3>
						<form onSubmit={handleSubmit}>
							<div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
								<div>
									<InputField
										inputFieldId="userFirstName"
										inputFieldType="text"
										inputFieldPlaceholder="John"
										inputFieldHtmlFor="userFirstName"
										inputFieldLabelName="First Name"
										isRequired={true}
										fieldType="input"
										value={userFirstName}
										onChange={(e) => setUserFirstName(e.target.value)}
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												isAlphabetic,
												"First name should only contain alphabets",
												"userFirstName",
												"First Name" // pass the label name here
											)
										}
										inputFieldError={error.userFirstName}
									/>
								</div>

								<div>
									<InputField
										inputFieldId="userLastName"
										inputFieldType="text"
										inputFieldPlaceholder="Snow"
										inputFieldHtmlFor="userLastName"
										inputFieldLabelName="Last Name"
										isRequired={true}
										fieldType="input"
										value={userLastName}
										onChange={(e) => setUserLastName(e.target.value)}
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												isAlphabetic,
												"Last name should only contain alphabets",
												"userLastName",
												"Last Name" // pass the label name here
											)
										}
										inputFieldError={error.userLastName}
									/>
								</div>

								<div>
									<InputField
										inputFieldId="userContactNumber"
										inputFieldType="text"
										inputFieldPlaceholder="XXXX-XXXXXXX"
										inputFieldHtmlFor="userContactNumber"
										inputFieldLabelName="Contact Number (mobile only)"
										isRequired={true}
										fieldType="input"
										value={userContactNumber}
										onChange={(e) => setUserContactNumber(e.target.value)}
										validateOnBlur={true}
										validate={(value) =>
											validateField(
												value,
												isContactNumber,
												"Contact number should only contain numbers and be 11 digits.",
												"userContactNumber",
												"Contact Number" // pass the label name here
											)
										}
										inputFieldName="userContactNumber"
										inputFieldAutoComplete={false}
										inputFieldError={error.userContactNumber}
									/>
								</div>

								<div>
									<InputField
										inputFieldId="userEmail"
										inputFieldType="email"
										inputFieldPlaceholder="johnsnow@example.com"
										inputFieldHtmlFor="userEmail"
										inputFieldLabelName="Email address"
										isRequired={true}
										fieldType="input"
										value={userEmail}
										onChange={(e) => {
											setUserEmail(e.target.value);
											setEmailError(""); // clear the error
										}}
										validateOnBlur={true}
										validate={(value) => validateEmail(value)}
										inputFieldError={displayError(emailError, error)}
									/>
								</div>

								<div>
									<InputField
										inputFieldId="userPassword"
										inputFieldType="password"
										inputFieldPlaceholder="Enter your password"
										inputFieldHtmlFor="userPassword"
										inputFieldLabelName="Password"
										isRequired={true}
										fieldType="input"
										value={userPassword}
										onChange={(e) =>
											setUserPassword(formatPassword(e.target.value))
										}
										validateOnBlur={true}
										validate={(value) => validatePassword(value)}
										inputFieldError={error.userPassword}
									/>
								</div>

								<div>
									<InputField
										inputFieldId="userConfirmPassword"
										inputFieldType="password"
										inputFieldPlaceholder="Confirm your password"
										inputFieldHtmlFor="userConfirmPassword"
										inputFieldLabelName="Confirm Password"
										isRequired={true}
										fieldType="input"
										value={userConfirmPassword}
										onChange={(e) => setUserConfirmPassword(e.target.value)}
										inputFieldError={error.userConfirmPassword}
									/>
								</div>
							</div>
							{/* {error && (
								<p className="mt-1 text-center text-sm text-red-500">{error}</p>
							)} */}
							<div className="py-4 xs:px-16 md:px-32 xl:px-36">
								<Button
									buttonName="Sign Up"
									buttonType="submit"
									disabled={isLoading || Object.keys(error).length > 0}
								/>
							</div>
						</form>
						<p className="text-md text-grey-900 text-center font-muktaVaani leading-relaxed">
							Already have an account?{" "}
							<Link
								to="/schedulizer/signin"
								className="font-poppins text-sm font-semibold text-indigo-500 hover:text-indigo-600">
								Sign In
							</Link>
						</p>
						<div className="mb-3 flex items-center pt-6">
							<hr className="border-grey-500 h-0 grow border-b border-solid" />
							<p className="text-grey-600 mx-4">or</p>
							<hr className="border-grey-500 h-0 grow border-b border-solid" />
						</div>
						<div className="xs:px-16 md:px-32 xl:px-36">
							<a className="text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-grey-300 mb-6 flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-black py-2 font-ptSansCaption text-sm font-medium transition duration-300 focus:ring-4 xs:px-4">
								<img
									className="mr-6 h-5"
									src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
									alt=""
								/>
								Continue with Google
							</a>
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
								Sign Up Successful!
							</Dialog.Title>
							<div className="mt-2">
								<p className="font-poppins text-sm text-black">
									You will be redirected to the Sign In page shortly.
								</p>
							</div>
						</Dialog.Description>
					</div>
				</Dialog>
			</Transition>
		</Layout>
	);
}

export default SignUp;
