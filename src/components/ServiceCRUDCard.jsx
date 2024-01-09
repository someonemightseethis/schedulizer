import PropTypes from "prop-types";
import Button from "./Button";

function ServicesCRUDCard({ service, onDelete }) {
	const handleDelete = () => {
		onDelete(service._id);
	};

	return (
		<div className="flex items-center justify-center">
			<div className="group relative w-full break-words rounded-xl bg-[#FAF8ED] shadow-xl md:max-w-sm">
				<div className="p-6">
					<div className="overflow-hidden text-center">
						<div className="flex flex-col justify-center">
							<div className="">
								<h4 className="font-poppins text-lg font-bold text-[#18191E]">
									{service.serviceName}
								</h4>
							</div>
							<div className="text-md flex flex-col items-center justify-center py-4">
								<p className="font-muktaVaani text-sm font-normal text-gray-600">
									Service Duration: {service.serviceDuration} <br />
									Timings: {service.serviceTiming} <br />
									Price: {service.servicePrice} <br />
									Days: {service.serviceDays}
								</p>
							</div>
							<div className="flex flex-wrap justify-center">
								<div className="businessDescription w-full px-2">
									<p className="text-md mb-4 font-muktaVaani leading-relaxed text-[#18191E]">
										{service.serviceDescription}
									</p>
								</div>
								<div className="flex w-full justify-evenly px-2">
									<div className="appointmentButton pt-2">
										<Button buttonName="DELETE" onClick={handleDelete} />
									</div>
									<div className="appointmentButton pt-2">
										<Button buttonName="UPDATE" onClick={handleDelete} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

ServicesCRUDCard.propTypes = {
	service: PropTypes.shape({
		serviceName: PropTypes.string.isRequired,
		serviceDuration: PropTypes.string.isRequired,
		servicePrice: PropTypes.number.isRequired,
		serviceTiming: PropTypes.string.isRequired,
		serviceDescription: PropTypes.string.isRequired,
		serviceDays: PropTypes.string.isRequired,
		_id: PropTypes.string.isRequired,
	}).isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default ServicesCRUDCard;
