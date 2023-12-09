import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import InputField from "./Form/InputField";
import Navbar from "./Navbar/Navbar";
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
				localStorage.setItem("firstName", decodedToken.firstName);
				navigate("/schedulizer/services");
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
		<div className="">
			<Navbar />
			<div className="flex bg-[#FAF8ED] h-screen justify-center items-center pt-32">
				<div className="flex flex-col justify-center p-12">
					<h3 className="pb-6 text-9xl font-bebas text-center font-extrabold text-dark-grey-900">
						Sign In
					</h3>
					<form
						className="w-[400px] grid grid-cols-1 rounded-3xl"
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
						<div className="py-4 xl:px-12 px-16">
							<Button
								buttonName="Sign In"
								buttonType="submit"
								disabled={isLoading}
							/>
						</div>
						<div className="py-4 flex flex-col justify-center items-center">
							<p className="text-md font-muktaVaani leading-relaxed text-grey-900">
								Not registered yet?{" "}
								<Link
									to="/schedulizer/signup"
									className="font-semibold font-poppins text-sm text-indigo-500 hover:text-indigo-600">
									Create an Account
								</Link>
							</p>
							<p className="text-md font-muktaVaani leading-relaxed text-grey-900">
								Forget Password?{" "}
								<a
									href=""
									className="font-semibold font-poppins text-sm text-indigo-500 hover:text-indigo-600">
									Reset now
								</a>
							</p>
						</div>
					</form>
					<div className="flex items-center mb-3 pt-6">
						<hr className="h-0 border-b border-solid border-grey-500 grow" />
						<p className="mx-4 text-grey-600">or</p>
						<hr className="h-0 border-b border-solid border-grey-500 grow" />
					</div>
					<div className="xl:px-12 px-16">
						<a className="flex items-center justify-center w-full py-2 mb-6 text-sm font-medium transition duration-300 rounded-lg text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300 border-2 border-black cursor-pointer font-ptSansCaption">
							<img
								className="h-5 mr-6"
								src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
								alt=""
							/>
							Continue with Google
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
