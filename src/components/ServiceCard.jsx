import PropTypes from "prop-types";

function ServiceCard({ service }) {
	return (
		<div className="flex items-center justify-center">
			<div className="group relative w-full break-words rounded-xl bg-[#FAF8ED] shadow-xl md:max-w-sm">
				<div className="py-2">
					<div className="overflow-hidden pt-16 text-center">
						<div className="flex justify-center space-x-6">
							<div className="businessNameType">
								<h4 className="font-poppins text-lg font-bold text-[#18191E]">
									{service.serviceName}
								</h4>
								<p className="font-muktaVaani text-xs font-normal text-gray-600">
									{service.serviceDuration}
								</p>
							</div>
							<div className="businessRating flex flex-col items-center justify-center">
								<p className="font-poppins text-xl font-bold text-[#18191E]">
									{service.serviceTiming}
								</p>
								<p className="font-muktaVaani text-sm font-normal text-gray-600">
									{service.servicePrice}
								</p>
							</div>
						</div>
					</div>
					<div className="mx-6 py-6 text-center">
						<div className="flex flex-wrap justify-center">
							<div className="businessDescription w-full px-2">
								<p className="text-md mb-4 font-muktaVaani leading-relaxed text-[#18191E]">
									{service.serviceDescription} <br />
									{service.selectedDays} <br />
									{service.businessEmail}
								</p>
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
		servicePrice: PropTypes.string.isRequired,
		serviceTiming: PropTypes.string.isRequired,
		serviceDescription: PropTypes.string.isRequired,
		selectedDays: PropTypes.arrayOf(PropTypes.string).isRequired,
		businessEmail: PropTypes.string.isRequired,
		_id: PropTypes.string.isRequired,
	}).isRequired,
};

export default ServiceCard;
