import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Button(props) {
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

	return (
		<div className="flex justify-center text-center">
			<button
				type={buttonType}
				disabled={props.disabled}
				className={`flex w-full items-center justify-center rounded-md bg-indigo-500 px-6 font-jaldi text-sm text-white transition-colors duration-200 hover:bg-indigo-600 xs:py-2 sm:py-2 md:px-4 ${
					props.disabled ? "opacity-50 cursor-not-allowed" : ""
				}`}
				onClick={handleClick}>
				{props.buttonName}
			</button>
		</div>
	);
}

Button.propTypes = {
	buttonName: PropTypes.string.isRequired,
	buttonLink: PropTypes.string,
	buttonType: PropTypes.oneOf(["button", "submit", "reset"]),
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Button;
