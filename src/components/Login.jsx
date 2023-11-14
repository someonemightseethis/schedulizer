import Button from "./Button";
import InputField from "./InputField";
import Navbar from "./Navbar";

function Login() {
	return (
		<div className="bg-[#F9F5F8]">
			<Navbar />
			<div className="flex justify-center items-center py-48">
				<div className="flex flex-col justify-center p-12">
					<h3 className="pb-6 text-4xl text-center font-extrabold text-dark-grey-900">
						Sign In
					</h3>
					<form className="w-[400px] grid grid-cols-1 rounded-3xl">
						<InputField
							inputfieldid="email"
							inputfieldtype="email"
							inputfieldplaceholder="mail@google.com"
							inputfieldhtmlfor="email"
							inputfieldlabelname="Email"
						/>
						<InputField
							inputfieldid="password"
							inputfieldtype="password"
							inputfieldplaceholder="enter your password"
							inputfieldhtmlfor="password"
							inputfieldlabelname="Password"
						/>
						<div className="py-4 xl:px-12 px-16">
							<Button buttonname="Sign In" />
						</div>
						<div className="py-4 flex flex-col justify-center items-center">
							<p className="text-sm leading-relaxed text-grey-900">
								Not registered yet?{" "}
								<a href="" className="font-bold text-grey-700">
									Create an Account
								</a>
							</p>
							<p className="text-sm leading-relaxed text-grey-900">
								Forget Password?{" "}
								<a href="" className="font-bold text-grey-700">
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
						<a className="flex items-center justify-center w-full py-2 mb-6 text-sm font-medium transition duration-300 rounded-lg text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300 border-2 border-black cursor-pointer">
							<img
								className="h-5 mr-2"
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
