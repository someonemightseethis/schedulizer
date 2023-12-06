import { Link } from "react-router-dom";
import Button from "./Button";
import InputField from "./Form/InputField";
import Navbar from "./Navbar/Navbar";

function Login() {
	return (
		<div className="">
			<Navbar />
			<div className="flex bg-[#FAF8ED] h-screen justify-center items-center pt-32">
				<div className="flex flex-col justify-center p-12">
					<h3 className="pb-6 text-9xl font-bebas text-center font-extrabold text-dark-grey-900">
						Sign In
					</h3>
					<form className="w-[400px] grid grid-cols-1 rounded-3xl">
						<InputField
							inputFieldId="userEmail"
							inputFieldType="email"
							inputFieldPlaceholder="mail@example.com"
							inputFieldHtmlFor="userEmail"
							inputFieldLabelName="Email"
							isRequired={true}
							fieldType="input"
						/>
						<InputField
							inputFieldId="userPassword"
							inputFieldType="password"
							inputFieldPlaceholder="enter your password"
							inputFieldHtmlFor="userPassword"
							inputFieldLabelName="Password"
							isRequired={true}
							fieldType="input"
						/>
						<div className="py-4 xl:px-12 px-16">
							<Button
								buttonName="SIGN IN"
								buttonLink="/schedulizer/services"
								buttonType="submit"
							/>
						</div>
						<div className="py-4 flex flex-col justify-center items-center">
							<p className="text-md font-muktaVaani leading-relaxed text-grey-900">
								Not registered yet?{" "}
								<Link
									to="/schedulizer/registration"
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

export default Login;
