import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import InputField from "./Form/InputField";
import Layout from "./Layout";
import axios from "axios";
import { useState } from "react";

function SignIn() {
	const navigate = useNavigate();
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const validateField = (value, check, errorMessage, fieldName, matchValue) => {
		if (!check(value, matchValue)) {
			if (fieldName === "userEmail") {
				setEmailError(errorMessage);
			} else if (fieldName === "userPassword") {
				setPasswordError(errorMessage);
			}
			return false;
		}
		if (fieldName === "userEmail") {
			setEmailError("");
		} else if (fieldName === "userPassword") {
			setPasswordError("");
		}
		return true;
	};

	const handleSubmit = async (event) => {
		console.log("submitting");
		event.preventDefault();

		setEmailError("");
		setPasswordError("");

		// Here you can call your API to handle sign in
		try {
			const response = await axios.post("/user/signin", {
				userEmail,
				userPassword,
			});

			// Check if the form submission was successful
			if (response.data.success) {
				setIsLoading(false);
				// Use navigate from useNavigate hook to programmatically navigate
				const base64Url = response.data.token.split(".")[1];
				const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
				const jsonPayload = decodeURIComponent(
					atob(base64)
						.split("")
						.map(function (c) {
							return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
						})
						.join("")
				);

				const decodedToken = JSON.parse(jsonPayload);
				console.log("Decoded Token:", decodedToken);

				// Updated code to set localStorage and navigate
				const setLocalStorageAndNavigate = async () => {
					localStorage.setItem("firstName", decodedToken.firstName);
					await navigate("/schedulizer/services");
				};

				setLocalStorageAndNavigate();
			}
		} catch (error) {
			if (
				error.response &&
				error.response.data.error === "No user found with the given email"
			) {
				setEmailError("No such email exists. Try a different email.");
			} else if (
				error.response &&
				error.response.data.error === "Wrong Password"
			) {
				setPasswordError("Incorrect password. Try again.");
			}

			if (error.response) {
				console.log("error data", error.response.data);
			} else {
				console.log("error", error);
			}
		}
	};

	return (
		<Layout>
			<div className="flex min-h-screen flex-col justify-center bg-[#FAF8ED] pattern-texture-indigo-500/30 pattern-texture-scale-[1.5]">
				<div className="flex justify-center py-12">
					<div className="pt-12">
						<h3 className="text-dark-grey-900 pb-6 text-center font-bebas text-9xl font-extrabold">
							Sign In
						</h3>
						<form
							className="grid w-[400px] grid-cols-1 rounded-3xl"
							onSubmit={handleSubmit}>
							<InputField
								inputFieldId="userEmail"
								inputFieldType="email"
								inputFieldPlaceholder="mail@example.com"
								inputFieldHtmlFor="userEmail"
								inputFieldLabelName="Email"
								isRequired={true}
								fieldType="input"
								value={userEmail}
								onChange={(e) => {
									setUserEmail(e.target.value);
									setEmailError(""); // clear the error when the input field is being edited
								}}
								validateOnBlur={true}
								validate={(value) =>
									validateField(
										value,
										(value) => value.includes("@"),
										"Invalid email address",
										"userEmail"
									)
								}
								inputFieldError={emailError}
							/>

							<InputField
								inputFieldId="userPassword"
								inputFieldType="password"
								inputFieldPlaceholder="enter your password"
								inputFieldHtmlFor="userPassword"
								inputFieldLabelName="Password"
								isRequired={true}
								fieldType="input"
								value={userPassword}
								onChange={(e) => {
									setUserPassword(e.target.value);
									setPasswordError(""); // clear the error when the input field is being edited
								}}
								validateOnBlur={true}
								inputFieldError={passwordError}
							/>
							<div className="px-16 py-4 xl:px-12">
								<Button
									buttonName="Sign In"
									buttonType="submit"
									disabled={isLoading}
								/>
							</div>
							<div className="flex flex-col items-center justify-center py-4">
								<p className="text-md text-grey-900 font-muktaVaani leading-relaxed">
									Not registered yet?{" "}
									<Link
										to="/schedulizer/signup"
										className="font-poppins text-sm font-semibold text-indigo-500 hover:text-indigo-600">
										Create an Account
									</Link>
								</p>
								<p className="text-md text-grey-900 font-muktaVaani leading-relaxed">
									Forget Password?{" "}
									<a
										href=""
										className="font-poppins text-sm font-semibold text-indigo-500 hover:text-indigo-600">
										Reset now
									</a>
								</p>
							</div>
						</form>
						<div className="mb-3 flex items-center pt-6">
							<hr className="border-grey-500 h-0 grow border-b border-solid" />
							<p className="text-grey-600 mx-4">or</p>
							<hr className="border-grey-500 h-0 grow border-b border-solid" />
						</div>
						<div className="px-16 xl:px-12">
							<a className="text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-grey-300 mb-6 flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-black py-2 font-ptSansCaption text-sm font-medium transition duration-300 focus:ring-4">
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
		</Layout>
	);
}

export default SignIn;
