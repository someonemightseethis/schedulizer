import PropTypes from "prop-types";
import Button from "./Button";
import { animate } from "motion";
import { useEffect } from "react";

function ServiceCard({ service, businessName, businessId }) {
	useEffect(() => {
		animate(
			".serviceDescription",
			{ scale: [0.9, 1], opacity: [0, 1] },
			{ duration: 1.5 }
		);
		animate(".serviceDetails", { opacity: [-1, 1] }, { duration: 1.5 });
	});

	return (
		<div>
			{/* <div className="flex items-center justify-center">
				<div className="group relative w-full break-words rounded-xl bg-[#FAF8ED] shadow-xl md:max-w-sm">
					<div className="p-6">
						<div className="overflow-hidden text-center">
							<div className="flex flex-col justify-center">
								<div className="">
									<h4 className="font-poppins text-lg font-bold text-[#18191E]">
										{service.serviceName} <br />
										<span className="font-muktaVaani text-lg font-light">
											by
										</span>
										<br /> {businessName}
									</h4>
								</div>
								<div className="flex flex-col items-center justify-center py-4">
									<p className="font-muktaVaani text-xs font-normal text-gray-600">
										Service Duration: {service.serviceDuration}
									</p>
									<p className="font-muktaVaani text-xs font-normal text-gray-600">
										Timings: {service.serviceTiming}
									</p>
									<p className="font-muktaVaani text-xs font-normal text-gray-600">
										Price: {service.servicePrice}
									</p>
									<p className="font-muktaVaani text-xs font-normal text-gray-600">
										Days: {service.serviceDays}
									</p>
								</div>
								<div className="flex flex-wrap justify-center">
									<div className="businessDescription w-full px-2">
										<p className="text-md mb-4 font-muktaVaani leading-relaxed text-[#18191E]">
											{service.serviceDescription}
										</p>
									</div>
									<div className="appointmentButton pt-2">
										<Button
											buttonName="BOOK APPOINTMENT"
											buttonLink="/schedulizer/businessinfo"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			{/* <div className="group inline-flex w-full flex-col items-center justify-center space-y-6 break-words rounded-2xl bg-[#FAF8ED] p-8 shadow-xl md:max-w-sm">
				<div className="flex flex-col justify-center text-center">
					<div className="font-poppins text-base font-semibold text-black">
						{service.serviceName}
					</div>
					<div className="font-muktaVaani text-xs font-light text-black">
						by {businessName}
					</div>
				</div>
				<div className="flex items-center justify-center space-x-4">
					<div className="font-muktaVaani text-xs font-light text-black">
						Duration: {service.serviceDuration}
					</div>
					<div className="font-muktaVaani text-xs font-light text-black">
						Price: Rs. {service.servicePrice}
					</div>
					<div className="font-muktaVaani text-xs font-light text-black">
						Days: {service.serviceDays}
					</div>
					<div className="font-muktaVaani text-xs font-light text-black">
						Timings: {service.serviceTiming}
					</div>
				</div>
				<div className="break-words text-center font-muktaVaani text-sm font-normal text-black">
					{service.serviceDescription.substring(0, 250)}
				</div>
				<div className="appointmentButton pt-2">
					<Button
						buttonName="BOOK APPOINTMENT"
						buttonLink="/schedulizer/businessinfo"
					/>
				</div>
			</div> */}

			<div className="group inline-flex flex-col items-center justify-center gap-5 break-words rounded-2xl bg-[#FAF8ED] border-indigo-200 border-2 p-8 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] md:max-w-sm">
				<div className="flex flex-col items-center justify-center gap-7">
					<div className="flex flex-col space-y-4">
						<div className="flex flex-col justify-center text-center">
							<div className="font-poppins text-base font-semibold text-black">
								{service.serviceName}
							</div>
							<div className="font-muktaVaani text-sm font-light text-black">
								by <strong>{businessName}</strong>
							</div>
						</div>

						<div className="serviceDetails flex flex-wrap items-center justify-center space-x-4">
							<div className="font-muktaVaani text-xs font-light text-black">
								Duration: <strong>{service.serviceDuration[0]}</strong>
							</div>
							<div className="font-muktaVaani text-xs font-light text-black">
								Price: Rs. <strong>{service.servicePrice}</strong>
							</div>
							<div className="font-muktaVaani text-xs font-light text-black">
								Timings: <strong>{service.serviceTiming}</strong>
							</div>
							<div className="font-muktaVaani text-xs font-light text-black">
								Days: <strong>{service.serviceDays}</strong>
							</div>
						</div>
					</div>

					<div className="serviceDescription break-words text-center font-muktaVaani text-sm font-normal text-black">
						{service.serviceDescription.substring(0, 250)}
					</div>
					<div className="appointmentButton pt-2">
						<Button
							buttonName="BOOK APPOINTMENT"
							buttonLink={`/schedulizer/appointmentform/${businessId}/${service._id}`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

ServiceCard.propTypes = {
	service: PropTypes.shape({
		serviceName: PropTypes.string.isRequired,
		serviceDuration: PropTypes.string.isRequired,
		servicePrice: PropTypes.number.isRequired,
		serviceTiming: PropTypes.string.isRequired,
		serviceDescription: PropTypes.string.isRequired,
		serviceDays: PropTypes.string.isRequired,
		_id: PropTypes.string.isRequired,
	}).isRequired,
	businessName: PropTypes.string.isRequired,
	businessId: PropTypes.string.isRequired,
};

export default ServiceCard;
