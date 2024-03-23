import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function TimeSlotSelectorButton(props) {
	const navigate = useNavigate();
	const buttonType = props.buttonType || "button";

	const handleClick = async () => {
		if (props.onClick) {
			try {
				await props.onClick();
				if (props.buttonLink) {
					navigate(props.buttonLink);
				}
			} catch (error) {
				console.error(error); // Log the error to the console
			}
		} else if (props.buttonLink) {
			navigate(props.buttonLink);
		}
	};

	const buttonClass = props.isSelected ? "bg-indigo-500 text-white" : "";

	return (
		<div className="flex justify-center text-center">
			<button
				type={buttonType}
				disabled={props.disabled}
				className={`flex w-full items-center justify-center rounded-2xl bg-[#FAF8ED] px-6 font-ptSansCaption text-xs text-indigo-500 border-2 border-indigo-500 transition-colors duration-200 hover:bg-indigo-500 hover:text-[#FAF8ED] xs:py-4 sm:py-4 md:px-4 ${buttonClass} ${
					props.disabled ? "opacity-50 cursor-not-allowed" : ""
				}`}
				onClick={handleClick}>
				{props.buttonName}
			</button>
		</div>
	);
}

TimeSlotSelectorButton.propTypes = {
	buttonName: PropTypes.string.isRequired,
	buttonLink: PropTypes.string,
	buttonType: PropTypes.oneOf(["button", "submit", "reset"]),
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	isSelected: PropTypes.bool,
};

export default TimeSlotSelectorButton;
