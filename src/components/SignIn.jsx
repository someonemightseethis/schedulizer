import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import InputField from "./form/InputField";
import Layout from "./Layout";
import axios from "axios";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { signInRequest, signInSuccess } from "../redux/actions/authActions";
import PropTypes from "prop-types";
import { setUser } from "../redux/slices/userSlice.js";
import { jwtDecode } from "jwt-decode";

function SignIn({ signInRequest, signInSuccess }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [passwordError, setPasswordError] = useState("");

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
		const isUsernameValid = username.trim() !== "";
		const isDomainValid = domain.endsWith(".com");

		if (!isUsernameValid) {
			setEmailError("Username cannot be empty.");
			return false; // Username cannot be empty
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
		let error = "";
		if (!value.trim()) {
			error = "Password cannot be empty. Please fill this out.";
		} else if (value.length < 8 || value.length > 16) {
			error = "Invalid password. It should be between 8 and 16 characters.";
		}
		setPasswordError(error);
		return error;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		setEmailError("");

		setIsLoading(true);

		signInRequest();

		try {
			const response = await axios.post("/user/signin", {
				userEmail,
				userPassword,
			});

			if (response.data.success) {
				const decodedToken = jwtDecode(response.data.token);
				console.log("Decoded Token:", decodedToken);

				// Set user information in localStorage
				localStorage.setItem("firstName", decodedToken.firstName);
				localStorage.setItem("email", decodedToken.userEmail);
				localStorage.setItem("id", decodedToken.id);
				localStorage.setItem("token", response.data.token);

				// Dispatch setUserEmail, setUserFirstName, setUserId, signInSuccess
				dispatch(
					setUser({
						email: decodedToken.userEmail,
						firstName: decodedToken.firstName,
						id: decodedToken.id,
					})
				);
				signInSuccess({
					// use the signInSuccess prop here
					firstName: decodedToken.firstName,
					email: decodedToken.userEmail,
					id: decodedToken.id,
				});
				await navigate("/schedulizer/");
			}
		} catch (error) {
			console.error("Failed to sign in:", error);
			if (error.response) {
				console.error("Response data:", error.response.data);
				console.error("Response status:", error.response.status);
				console.error("Response headers:", error.response.headers);
				setErrorMessage(error.response.data.error);
			}
		} finally {
			setIsLoading(false);
		}
	};

	console.log(signInSuccess);
	const loginwithgoogle = () => {
		window.open("http://localhost:8000/user/auth/google/callback", "_self");
	};

	return (
		<Layout>
			<div className="flex min-h-screen flex-col justify-center">
				<div className="flex justify-center py-12">
					<div className="pt-12">
						<h3 className="text-dark-grey-900 pb-6 text-center font-bebas text-9xl font-extrabold text-indigo-600">
							Sign In.
						</h3>
						<form
							className="grid w-[400px] grid-cols-1 rounded-3xl"
							onSubmit={handleSubmit}>
							<InputField
								inputFieldId="userEmail"
								inputFieldType="email"
								inputFieldPlaceholder="example@example.com"
								inputFieldHtmlFor="userEmail"
								inputFieldLabelName="Email"
								isRequired={true}
								fieldType="input"
								value={userEmail}
								onChange={(e) => {
									setUserEmail(e.target.value);
									setEmailError("");
								}}
								validateOnBlur={true}
								validate={(value) => validateEmail(value)}
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
									setPasswordError(""); // Clear the password error when the user types
								}}
								validateOnBlur={true}
								validate={(value) => validatePassword(value)}
								inputFieldError={passwordError}
							/>

							<div className="px-20 py-4 xl:px-16">
								{errorMessage && (
									<p className="mb-2 text-center font-poppins text-xs text-red-500">
										{errorMessage}
									</p>
								)}
								<Button
									buttonName="Sign In"
									buttonType="submit"
									disabled={isLoading}
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<p className="text-grey-900 font-muktaVaani text-sm font-light leading-relaxed">
									Not registered yet?{" "}
									<Link
										to="/schedulizer/signup"
										className="font-muktaVaani text-sm font-medium text-indigo-500 hover:text-indigo-600">
										Create an Account
									</Link>
								</p>
								<p className="text-grey-900 font-muktaVaani text-sm font-light leading-relaxed">
									Forget Password?{" "}
									<a
										href=""
										className="font-muktaVaani text-sm font-medium text-indigo-500 hover:text-indigo-600">
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

						<div className="px-20 xl:px-16">
							<a
								className="text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-grey-300 mb-6 flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-black bg-[#FAF8ED] py-2 font-ptSansCaption text-xs font-medium transition duration-300 hover:border-indigo-500 focus:ring-4"
								onClick={loginwithgoogle}>
								<img
									className="mr-6 h-[1.2rem]"
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

SignIn.propTypes = {
	signInRequest: PropTypes.func.isRequired,
	signInSuccess: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
	signInRequest: () => {
		console.log("Inside mapDispatchToProps, dispatching signInRequest");
		dispatch(signInRequest());
	},
	signInSuccess: (user) => {
		console.log(
			"Inside mapDispatchToProps, dispatching signInSuccess with:",
			user
		);
		dispatch(signInSuccess(user));
	},
});

const ConnectedSignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn);
export default ConnectedSignIn;
