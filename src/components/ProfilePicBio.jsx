import { useState, useEffect, useRef, Fragment } from "react";
import InputField from "./form/InputField";
import Layout from "./Layout";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";

function ProfilePicBio() {
	const [typedCharacters, setTypedCharacters] = useState(0);
	const typedCharactersElementRef = useRef(null);
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSkip = () => {
		setIsModalOpen(true);
		setTimeout(() => {
			navigate("/schedulizer/dashboard");
		}, 4000);
	};

	useEffect(() => {
		const textAreaElement = document.querySelector("#businessBio");
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

	const closeModalAndNavigate = () => {
		setIsModalOpen(false);
		navigate("/schedulizer/dashboard");
	};

	return (
		<Layout>
			<div className="flex min-h-screen flex-col justify-center bg-[#FAF8ED] pattern-texture-indigo-600/10 pattern-texture-scale-[1.5]">
				<div className="flex justify-center py-32">
					<div className="pt-12">
						<h3 className="text-dark-grey-900 pb-6 text-center font-bebas text-9xl font-extrabold">
							Give your business
							<br /> a face and a voice
						</h3>
						<div className="w-full items-center justify-center px-12">
							<form onSubmit="">
								<div className="mt-8">
									<div className="flex w-full items-center justify-center pb-6">
										<label
											htmlFor="dropzone-file"
											className="dark:hover:bg-bray-800 flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-black hover:border-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
											<div className="flex flex-col items-center justify-center space-y-2 pb-6 pt-5">
												<svg
													className="mb-2 h-8 w-8"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 20 16">
													<path
														stroke="black"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
													/>
												</svg>
												<p className="text-md mb-2 font-muktaVaani text-black">
													<span className="font-poppins font-medium">
														Click to upload
													</span>{" "}
													or drag and drop
												</p>
											</div>
											<input
												id="dropzone-file"
												type="file"
												className="hidden"
											/>
										</label>
									</div>

									{/* <InputField
										inputFieldType="file"
										inputFieldId="businessProfilePicture"
										inputFieldHtmlFor="businessProfilePicture"
										inputFieldLabelName="Business Profile Picture"
										isRequired={false}
									/> */}
									<InputField
										inputFieldId="businessBio"
										inputFieldType="text"
										inputFieldPlaceholder="business bio"
										inputFieldHtmlFor="businessBio"
										inputFieldLabelName="Business Bio"
										isRequired={true}
										fieldType="textarea"
										cols={10}
										rows={5}
										maxLength={500}
										// value={appointmentDescription}
										// onChange={(e) => setAppointmentDescription(e.target.value)}
										validateOnBlur={false}
									/>
									<div
										id="character-counter"
										className="text-right text-sm text-indigo-500 opacity-80">
										<span id="typed-characters">0</span>
										<span>/</span>
										<span id="maximum-characters">500</span>
									</div>
								</div>
								<div className="grid grid-cols-2 items-center justify-center gap-x-12 py-4 xs:px-16 md:px-32 xl:px-36">
									<button
										type="button"
										className="flex w-full items-center justify-center rounded-md border-2 border-indigo-500 px-6 font-jaldi text-sm text-indigo-500 transition-colors duration-200 hover:bg-indigo-500 hover:text-[#FAF8ED] xs:py-2 sm:py-2 md:px-4"
										onClick={handleSkip}>
										SKIP
									</button>
									<Button buttonName="SUBMIT" buttonType="submit" />
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

export default ProfilePicBio;
