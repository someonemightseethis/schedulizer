import { Modal, Ripple, initTE } from "tw-elements";

initTE({ Modal, Ripple });

function FeedbackModal() {
	return (
		<div>
			<div className="px-12">
				<button
					type="button"
					className="pb-2 pt-2.5 font-medium uppercase leading-normal ease-in-out flex justify-center items-center w-full px-6 md:px-4 sm:py-2 xs:py-2 rounded-md text-md bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200 font-jaldi"
					data-te-toggle="modal"
					data-te-target="#exampleModalCenteredScrollable"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					submit a feedback ?
				</button>
			</div>

			<div
				data-te-modal-init
				className="fixed left-0 top-0 z-50 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
				id="exampleModalCenteredScrollable"
				tabIndex="-1"
				aria-labelledby="exampleModalCenteredScrollableLabel"
				aria-modal="true"
				role="dialog"
			>
				<div
					data-te-modal-dialog-ref
					className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[600px]"
				>
					<div className="pointer-events-auto relative flex w-full flex-col rounded-md border-2 border-black bg-white bg-clip-padding text-current shadow-lg outline-none">
						<div className="flex flex-shrink-0 items-center justify-between rounded-t-md p-4 dark:border-opacity-50">
							<button
								type="button"
								className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
								data-te-modal-dismiss
								aria-label="Close"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>

						<div className="relative px-12">
							<label
								htmlFor="feedbackmodal"
								className="mb-4 px-1 text-sm text-start font-medium text-grey-900"
							>
								Enter your feedback below.
							</label>
							<textarea
								className="peer min-h-[auto] bg-transparent leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 flex items-center w-full px-3 py-2 mr-2 text-sm border-2 border-black mt-2 mb-4 placeholder:text-grey-700 text-black rounded-lg focus:border-indigo-500 focus:outline-none"
								id="exampleFormControlTextarea1"
								rows="3"
								placeholder="your feedback dude...."
							></textarea>
						</div>

						<div className="flex flex-shrink-0 flex-wrap items-center justify-center space-x-12 rounded-b-md border-opacity-100 py-2 dark:border-opacity-50">
							<button
								type="button"
								className="pb-2 my-2 pt-2.5 font-medium uppercase leading-normal ease-in-out flex justify-center items-center w-max px-6 md:px-4 sm:py-2 xs:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200"
								data-te-modal-dismiss
								data-te-ripple-init
								data-te-ripple-color="light"
							>
								Close
							</button>
							<button
								type="button"
								className="pb-2 my-2 pt-2.5 font-medium uppercase leading-normal ease-in-out flex justify-center items-center w-max px-6 md:px-4 sm:py-2 xs:py-2 rounded-md text-sm bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200"
								data-te-ripple-init
								data-te-ripple-color="light"
							>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeedbackModal;
