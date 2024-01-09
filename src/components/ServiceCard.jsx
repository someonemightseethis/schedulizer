import PropTypes from "prop-types";
import Button from "./Button";

function ServiceCard({ service, businessName }) {
	return (
		<div className="flex items-center justify-center">
			<div className="group relative w-full break-words rounded-xl bg-[#FAF8ED] shadow-xl md:max-w-sm">
				<div className="p-6">
					<div className="overflow-hidden text-center">
						<div className="flex flex-col justify-center">
							<div className="">
								<h4 className="font-poppins text-lg font-bold text-[#18191E]">
									{service.serviceName} <br />
									<span className="font-muktaVaani text-lg font-light">by</span>
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
};

export default ServiceCard;
